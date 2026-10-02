type Environment = Record<string, string | undefined>;
export function previewConfiguration(env: Environment): {
  allowed: boolean;
  preview: boolean;
  mode: "fixtures" | "database" | "public";
} {
  const mode =
    env.COMMUNITY_PREVIEW === "database"
      ? "database"
      : env.COMMUNITY_PREVIEW === "true"
        ? "fixtures"
        : "public";
  const preview = mode !== "public";
  // This branch has no authorized production deployment, regardless of data mode.
  if (env.VERCEL_ENV === "production") return { allowed: false, preview, mode };
  if (
    env.VERCEL_ENV &&
    (env.VERCEL_ENV !== "preview" ||
      env.COMMUNITY_ENVIRONMENT !== "development")
  )
    return { allowed: false, preview, mode };
  if (mode === "database" || env.SUPABASE_URL) {
    const ref = env.COMMUNITY_DEV_SUPABASE_PROJECT_REF;
    if (
      env.COMMUNITY_ENVIRONMENT !== "development" ||
      !ref ||
      !/^[a-z0-9]{20}$/.test(ref)
    )
      return { allowed: false, preview, mode };
    // Ref must identify Mark's confirmed development project; never infer it from a name.
    if (env.SUPABASE_URL !== `https://${ref}.supabase.co`)
      return { allowed: false, preview, mode };
  }
  const key = env.SUPABASE_ANON_KEY;
  if (key?.startsWith("sb_secret_")) return { allowed: false, preview, mode };
  if (key?.split(".").length === 3) {
    try {
      const payload = JSON.parse(
        Buffer.from(key.split(".")[1], "base64url").toString(),
      );
      if (payload.role !== "anon") return { allowed: false, preview, mode };
    } catch {
      return { allowed: false, preview, mode };
    }
  }
  return { allowed: true, preview, mode };
}

export function previewHostAllowed(
  host: string | null,
  vercelEnv: string | undefined,
): boolean {
  if (vercelEnv === "production") return false;
  if (vercelEnv !== "preview") return true;
  return !!host && /^[a-z0-9-]+\.vercel\.app$/i.test(host.split(":")[0]);
}
