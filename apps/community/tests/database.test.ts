import { beforeAll, afterAll, beforeEach, describe, it, expect } from "vitest";
import { Client, types } from "pg";
// Preserve PostgreSQL microsecond precision when round-tripping optimistic locks.
types.setTypeParser(1184, (value) => value);
import { readFileSync } from "node:fs";
// Only a disposable local test database. Never reads application credentials.
const connectionString =
  "postgresql://postgres:local-test-only@127.0.0.1:55432/corona_phase1_test";
const admin = new Client({ connectionString }),
  actor = new Client({ connectionString });
const editor = "00000000-0000-0000-0000-000000000001",
  reviewer = "00000000-0000-0000-0000-000000000002",
  outsider = "00000000-0000-0000-0000-000000000003";
let id: string;
async function identity(user: string | null, role = "authenticated") {
  await actor.query("reset role");
  await actor.query(`set role ${role}`);
  await actor.query("select set_config('request.jwt.claim.sub',$1,false)", [
    user || "",
  ]);
}
async function current() {
  return (await admin.query("select * from community_events where id=$1", [id]))
    .rows[0];
}
async function transition(target: string) {
  const e = await current();
  return actor.query("select * from transition_community_event($1,$2,$3)", [
    id,
    target,
    e.updated_at,
  ]);
}
async function verify() {
  const e = await current();
  return actor.query("select * from verify_community_event($1,$2)", [
    id,
    e.updated_at,
  ]);
}
async function approve() {
  await identity(editor);
  await verify();
  await transition("READY_FOR_REVIEW");
  await identity(reviewer);
  await transition("APPROVED");
}
beforeAll(async () => {
  await admin.connect();
  await actor.connect();
  if (
    (await admin.query("select current_database() as name")).rows[0].name !==
    "corona_phase1_test"
  )
    throw new Error("Refusing to reset a non-test database");
  await admin.query(`drop schema if exists public cascade;create schema public;grant usage on schema public to public;drop schema if exists auth cascade;drop schema if exists private_fitness cascade;
 do $$ begin if not exists(select from pg_roles where rolname='anon') then create role anon nologin; end if; if not exists(select from pg_roles where rolname='authenticated') then create role authenticated nologin; end if; end $$;
 create schema auth;create table auth.users(id uuid primary key);create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;grant usage on schema auth to anon,authenticated;grant execute on function auth.uid() to anon,authenticated;`);
  await admin.query(
    readFileSync(
      "supabase/migrations/202610010001_community_foundation.sql",
      "utf8",
    ),
  );
  await admin.query("insert into auth.users(id) values ($1),($2),($3)", [
    editor,
    reviewer,
    outsider,
  ]);
  await admin.query(
    "insert into community_members values ($1,'editor'),($2,'reviewer')",
    [editor, reviewer],
  );
});
afterAll(async () => {
  await actor.end();
  await admin.end();
});
beforeEach(async () => {
  await admin.query(
    "truncate community_events,community_audit restart identity cascade",
  );
  await identity(editor);
  // Sourced fixture retains its original draft status; altered inputs below are test-only.
  const result = await actor.query(
    `insert into community_events(slug,title,starts_at,category,source_url) values ('state-of-the-city-2026','2026 State of the City','2026-10-08T18:00:00-07:00','City of Corona','https://community.coronaca.gov/coronaca_main/260156257') returning id`,
  );
  id = result.rows[0].id;
});
describe("PostgreSQL migration and RLS", () => {
  it("hides drafts from anonymous and unrelated authenticated users", async () => {
    await identity(null, "anon");
    expect((await actor.query("select * from community_events")).rowCount).toBe(
      0,
    );
    await identity(outsider);
    expect((await actor.query("select * from community_events")).rowCount).toBe(
      0,
    );
    await expect(transition("READY_FOR_REVIEW")).rejects.toThrow(
      "Staff access required",
    );
  });
  it("rejects draft publication even for a reviewer", async () => {
    await identity(reviewer);
    await expect(transition("PUBLISHED")).rejects.toThrow(
      "Invalid content transition",
    );
    expect((await current()).state).toBe("DRAFT");
  });
  it("rejects direct lifecycle updates and pre-published inserts", async () => {
    await expect(
      actor.query("update community_events set state='PUBLISHED' where id=$1", [
        id,
      ]),
    ).rejects.toThrow("permission denied");
    await expect(
      actor.query(
        "insert into community_events(slug,title,starts_at,category,source_url,state) values ('bypass','Bypass',now(),'Community','https://example.org','PUBLISHED')",
      ),
    ).rejects.toThrow("permission denied");
  });
  it("rejects null optimistic locks", async () => {
    await expect(
      actor.query("select verify_community_event($1,null)", [id]),
    ).rejects.toThrow("Event changed");
    await expect(
      actor.query(
        "select transition_community_event($1,'READY_FOR_REVIEW',null)",
        [id],
      ),
    ).rejects.toThrow("Event changed");
  });
  it("rejects approval without verification", async () => {
    await transition("READY_FOR_REVIEW");
    await identity(reviewer);
    await expect(transition("APPROVED")).rejects.toThrow(
      "Source verification required",
    );
  });
  it("prevents editors approving or publishing", async () => {
    await verify();
    await transition("READY_FOR_REVIEW");
    await expect(transition("APPROVED")).rejects.toThrow(
      "Reviewer action required",
    );
    await identity(reviewer);
    await transition("APPROVED");
    await identity(editor);
    await expect(transition("PUBLISHED")).rejects.toThrow(
      "Reviewer action required",
    );
  });
  it("requires separate approval and publication calls; records actors and audit", async () => {
    await approve();
    await identity(null, "anon");
    expect((await actor.query("select * from community_events")).rowCount).toBe(
      0,
    );
    await identity(reviewer);
    await transition("PUBLISHED");
    const e = await current();
    expect(e.approved_by).toBe(reviewer);
    expect(e.published_by).toBe(reviewer);
    await identity(null, "anon");
    expect((await actor.query("select * from community_events")).rowCount).toBe(
      1,
    );
    await expect(actor.query("select * from community_audit")).rejects.toThrow(
      "permission denied",
    );
    expect(
      (
        await admin.query("select * from community_audit where event_id=$1", [
          id,
        ])
      ).rowCount,
    ).toBe(5);
  });
  it("cannot spoof approval, verification, membership, or audit", async () => {
    for (const sql of [
      "update community_events set approved_at=now()",
      "update community_events set verification_status='VERIFIED',verified_at=now()",
      "update community_members set role='reviewer'",
      "delete from community_audit",
    ])
      await expect(actor.query(sql)).rejects.toThrow("permission denied");
  });
  it("invalidates verification after a content edit", async () => {
    await verify();
    await transition("READY_FOR_REVIEW");
    await actor.query(
      "update community_events set description='Test edit' where id=$1",
      [id],
    );
    expect(await current()).toMatchObject({
      state: "DRAFT",
      verification_status: "VERIFICATION_NEEDED",
      verified_at: null,
      approved_at: null,
    });
  });
  it("blocks edits to approved records until explicit withdrawal", async () => {
    await approve();
    expect(
      (
        await actor.query(
          "update community_events set title='Test edit' where id=$1",
          [id],
        )
      ).rowCount,
    ).toBe(0);
    await transition("DRAFT");
    expect((await current()).approved_at).toBeNull();
    await actor.query(
      "update community_events set description='Test edit' where id=$1",
      [id],
    );
    expect((await current()).verified_at).toBeNull();
  });
  it("rejects stale approval after a concurrent change", async () => {
    await verify();
    await transition("READY_FOR_REVIEW");
    const old = await current();
    await actor.query(
      "update community_events set description='Test concurrent edit' where id=$1",
      [id],
    );
    await identity(reviewer);
    await expect(
      actor.query("select transition_community_event($1,'APPROVED',$2)", [
        id,
        old.updated_at,
      ]),
    ).rejects.toThrow("Event changed");
  });
  it("hides archived published records and prevents republication bypass", async () => {
    await approve();
    await transition("PUBLISHED");
    await transition("ARCHIVED");
    await identity(null, "anon");
    expect((await actor.query("select * from community_events")).rowCount).toBe(
      0,
    );
    await identity(reviewer);
    await expect(transition("PUBLISHED")).rejects.toThrow(
      "Invalid content transition",
    );
  });
  it("denies private fitness schema access to public and authenticated roles", async () => {
    for (const role of ["anon", "authenticated"]) {
      await identity(null, role);
      expect(
        (
          await actor.query(
            "select has_schema_privilege(current_user,'private_fitness','USAGE') as allowed",
          )
        ).rows[0].allowed,
      ).toBe(false);
    }
  });
  it("requires image rights and valid date ordering", async () => {
    await expect(
      actor.query(
        "update community_events set image_url='https://example.org/image.jpg' where id=$1",
        [id],
      ),
    ).rejects.toThrow("check constraint");
    await expect(
      actor.query(
        "update community_events set ends_at='2020-01-01' where id=$1",
        [id],
      ),
    ).rejects.toThrow("check constraint");
  });
  it("checks membership on every action, including revoked reviewer access", async () => {
    await approve();
    await admin.query("delete from community_members where user_id=$1", [
      reviewer,
    ]);
    await expect(transition("PUBLISHED")).rejects.toThrow(
      "Staff access required",
    );
    await admin.query("insert into community_members values ($1,'reviewer')", [
      reviewer,
    ]);
  });
});
