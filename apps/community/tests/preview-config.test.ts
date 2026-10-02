import { describe, it, expect } from "vitest";
import {
  previewConfiguration,
  previewHostAllowed,
} from "../src/lib/preview-config";
const ref = "abcdefghijklmnopqrst";
const development = {
  COMMUNITY_PREVIEW: "database",
  COMMUNITY_ENVIRONMENT: "development",
  COMMUNITY_DEV_SUPABASE_PROJECT_REF: ref,
  SUPABASE_URL: `https://${ref}.supabase.co`,
  SUPABASE_ANON_KEY: "test-only-key",
};
describe("development preview connection boundaries", () => {
  it("allows only an explicitly identified development project", () => {
    expect(previewConfiguration(development).allowed).toBe(true);
    expect(
      previewConfiguration({ ...development, COMMUNITY_ENVIRONMENT: undefined })
        .allowed,
    ).toBe(false);
    expect(
      previewConfiguration({
        ...development,
        COMMUNITY_DEV_SUPABASE_PROJECT_REF: undefined,
      }).allowed,
    ).toBe(false);
  });
  it("rejects another project, custom URL or non-HTTPS endpoint", () => {
    for (const url of [
      "https://different-project.supabase.co",
      `http://${ref}.supabase.co`,
      `https://${ref}.supabase.co/`,
    ])
      expect(
        previewConfiguration({ ...development, SUPABASE_URL: url }).allowed,
      ).toBe(false);
  });
  it("does not connect to an unidentified database in public mode either", () =>
    expect(
      previewConfiguration({ SUPABASE_URL: "https://unknown.supabase.co" })
        .allowed,
    ).toBe(false));
  it("rejects production deployments and requires development labeling on Vercel Preview", () => {
    expect(
      previewConfiguration({ ...development, VERCEL_ENV: "production" })
        .allowed,
    ).toBe(false);
    expect(
      previewConfiguration({ ...development, VERCEL_ENV: "preview" }).allowed,
    ).toBe(true);
    expect(
      previewConfiguration({ VERCEL_ENV: "preview", COMMUNITY_PREVIEW: "true" })
        .allowed,
    ).toBe(false);
  });
  it("rejects service-role and secret keys", () => {
    const key =
      "header." +
      Buffer.from(JSON.stringify({ role: "service_role" })).toString(
        "base64url",
      ) +
      ".signature";
    for (const candidate of [key, "sb_secret_test-only-key"])
      expect(
        previewConfiguration({ ...development, SUPABASE_ANON_KEY: candidate })
          .allowed,
      ).toBe(false);
  });
  it("allows local sourced fixtures without any database or secrets", () =>
    expect(previewConfiguration({ COMMUNITY_PREVIEW: "true" })).toMatchObject({
      allowed: true,
      mode: "fixtures",
    }));
  it("rejects production domains and custom domains for Vercel preview requests", () => {
    for (const host of [
      "coronashoutouts.com",
      "www.coronashoutouts.com",
      "example.com",
      "preview.vercel.app.evil.test",
      null,
    ])
      expect(previewHostAllowed(host, "preview")).toBe(false);
    expect(previewHostAllowed("corona-dev-ab123.vercel.app", "preview")).toBe(
      true,
    );
    expect(
      previewHostAllowed("corona-dev-ab123.vercel.app", "production"),
    ).toBe(false);
  });
});
