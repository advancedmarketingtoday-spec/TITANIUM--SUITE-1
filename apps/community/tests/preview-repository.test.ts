import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
const { createClientMock } = vi.hoisted(() => ({ createClientMock: vi.fn() }));
vi.mock("server-only", () => ({}));
vi.mock("@supabase/supabase-js", () => ({ createClient: createClientMock }));
import { getEvents } from "../src/lib/repository";
const row = {
  id: "dev-event",
  slug: "development-state-of-the-city-2026",
  title: "DEVELOPMENT TEST — 2026 State of the City",
  description: "Development sample",
  starts_at: "2026-10-08T18:00:00-07:00",
  source_url: "https://community.coronaca.gov/coronaca_main/260156257",
  state: "DRAFT",
  verification_status: "VERIFIED",
  verified_at: "2026-10-01T00:00:00-07:00",
  updated_at: "2026-10-01T00:00:00-07:00",
  is_development: true,
};
function client(
  role = "previewer",
  rows: Record<string, unknown>[] = [row],
  loginError = false,
) {
  const builder = {
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    in: vi.fn().mockReturnThis(),
    order: vi.fn().mockResolvedValue({ data: rows, error: null }),
    single: vi.fn().mockResolvedValue({ data: { role }, error: null }),
  };
  const mock = {
    auth: {
      signInWithPassword: vi
        .fn()
        .mockResolvedValue({
          data: { user: loginError ? null : { id: "preview-user" } },
          error: loginError ? new Error("Rejected") : null,
        }),
    },
    from: vi.fn().mockReturnValue(builder),
  };
  createClientMock.mockReturnValue(mock);
  return { mock, builder };
}
beforeEach(() => {
  vi.clearAllMocks();
  for (const [name, value] of Object.entries({
    COMMUNITY_PREVIEW: "database",
    COMMUNITY_ENVIRONMENT: "development",
    COMMUNITY_DEV_SUPABASE_PROJECT_REF: "abcdefghijklmnopqrst",
    SUPABASE_URL: "https://abcdefghijklmnopqrst.supabase.co",
    SUPABASE_ANON_KEY: "test-only-key",
    COMMUNITY_PREVIEW_EMAIL: "viewer@example.test",
    COMMUNITY_PREVIEW_PASSWORD: "test-only-password",
  }))
    vi.stubEnv(name, value);
  vi.stubEnv("VERCEL_ENV", undefined);
});
afterEach(() => vi.unstubAllEnvs());
describe("database-backed server preview", () => {
  it("authenticates a restricted reader and queries only development drafts/verified records", async () => {
    const { mock, builder } = client();
    expect(await getEvents()).toMatchObject({
      preview: true,
      unavailable: false,
      events: [{ developmentTest: true, state: "DRAFT" }],
    });
    expect(mock.from.mock.calls.map((c) => c[0])).toEqual([
      "community_members",
      "community_events",
    ]);
    expect(builder.eq).toHaveBeenCalledWith("is_development", true);
    expect(builder.in).toHaveBeenCalledWith("state", ["DRAFT", "VERIFIED"]);
  });
  it("rejects reviewer/editor credentials instead of rendering privileged content", async () => {
    for (const role of ["reviewer", "editor"]) {
      client(role);
      expect(await getEvents()).toEqual({
        events: [],
        preview: true,
        unavailable: true,
      });
    }
  });
  it("fails closed when credentials or authentication are missing", async () => {
    vi.stubEnv("COMMUNITY_PREVIEW_PASSWORD", undefined);
    client();
    expect((await getEvents()).unavailable).toBe(true);
    vi.stubEnv("COMMUNITY_PREVIEW_PASSWORD", "test-only-password");
    client("previewer", [row], true);
    expect((await getEvents()).events).toEqual([]);
  });
  it("drops non-development and already-published records defensively", async () => {
    client("previewer", [
      row,
      { ...row, id: "other", is_development: false },
      { ...row, id: "published", state: "PUBLISHED" },
    ]);
    expect((await getEvents()).events.map((e) => e.id)).toEqual(["dev-event"]);
  });
  it("rejects mismatched projects before constructing any client", async () => {
    vi.stubEnv("SUPABASE_URL", "https://another.supabase.co");
    expect((await getEvents()).unavailable).toBe(true);
    expect(createClientMock).not.toHaveBeenCalled();
  });
});
