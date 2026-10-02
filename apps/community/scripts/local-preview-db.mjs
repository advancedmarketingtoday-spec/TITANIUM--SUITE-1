import { Client } from "pg";
import { readFileSync } from "node:fs";
// Intentionally fixed local-only target. This command cannot target a hosted database.
const base = "postgresql://postgres@127.0.0.1:55432/";
const name = "corona_phase1_preview";
const owner = new Client({ connectionString: base + "postgres" });
await owner.connect();
const exists = (
  await owner.query("select 1 from pg_database where datname=$1", [name])
).rowCount;
if (!exists) await owner.query("create database corona_phase1_preview");
await owner.end();
const db = new Client({ connectionString: base + name });
await db.connect();
try {
  if (!exists) {
    await db.query(`do $$ begin if not exists(select from pg_roles where rolname='anon') then create role anon nologin; end if; if not exists(select from pg_roles where rolname='authenticated') then create role authenticated nologin; end if; end $$;
   create schema auth;create table auth.users(id uuid primary key);create function auth.uid() returns uuid language sql stable as $$ select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
   grant usage on schema auth to anon,authenticated;grant execute on function auth.uid() to anon,authenticated;`);
    for (const file of [
      "202610010001_community_foundation.sql",
      "202610010002_development_preview.sql",
    ])
      await db.query(readFileSync("supabase/migrations/" + file, "utf8"));
    await db.query(
      "insert into community_preview_environment(project_class,project_ref) values ('development','local-corona-phase1-preview')",
    );
  }
  const marker = (
    await db.query("select project_ref from community_preview_environment")
  ).rows[0];
  if (marker?.project_ref !== "local-corona-phase1-preview")
    throw new Error("Refusing an unknown local database.");
  await db.query(readFileSync("supabase/development/seed.sql", "utf8"));
  await db.query(
    "insert into auth.users(id) values ('00000000-0000-0000-0000-000000000004') on conflict do nothing;insert into community_members(user_id,role) values ('00000000-0000-0000-0000-000000000004','previewer') on conflict do nothing",
  );
  const rows = (
    await db.query("select title,state,is_development from community_events")
  ).rows;
  console.log("Local PostgreSQL development records:", rows);
  console.log(
    "This local database does not provide hosted Supabase Auth or PostgREST.",
  );
} finally {
  await db.end();
}
