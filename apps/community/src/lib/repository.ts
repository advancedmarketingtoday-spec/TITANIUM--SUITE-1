import "server-only";
import { createClient } from "@supabase/supabase-js";
import {
  CONTENT_STATES,
  isPublicEvent,
  safeUrl,
  type EventRecord,
} from "./events";
import { sampleEvents } from "./sample-events";
import { previewConfiguration } from "./preview-config";
export function parseRecord(row: Record<string, unknown>): EventRecord | null {
  const text = (key: string) =>
    typeof row[key] === "string" && row[key] ? (row[key] as string) : null;
  const source = safeUrl(row.source_url),
    start = text("starts_at"),
    state = text("state");
  if (
    !text("id") ||
    !text("slug") ||
    !text("title") ||
    !source ||
    !start ||
    Number.isNaN(Date.parse(start)) ||
    !CONTENT_STATES.includes(state as EventRecord["state"])
  )
    return null;
  const end = text("ends_at");
  if (
    end &&
    (Number.isNaN(Date.parse(end)) || Date.parse(end) < Date.parse(start))
  )
    return null;
  const verified = text("verified_at"),
    approved = text("approved_at"),
    published = text("published_at"),
    updated = text("updated_at");
  if (
    !updated ||
    Number.isNaN(Date.parse(updated)) ||
    [verified, approved, published].some(
      (d) => d && Number.isNaN(Date.parse(d)),
    )
  )
    return null;
  if (
    !["VERIFIED", "VERIFICATION_NEEDED"].includes(
      String(row.verification_status),
    )
  )
    return null;
  return {
    id: text("id")!,
    slug: text("slug")!,
    title: text("title")!,
    description: text("description") || "Details have not been supplied.",
    startsAt: start,
    endsAt: end,
    venue: text("venue"),
    address: text("address"),
    organizer: text("organizer"),
    category: text("category") || "Community",
    school: text("school"),
    sport: text("sport"),
    sourceUrl: source,
    registrationUrl: safeUrl(row.registration_url),
    verificationStatus:
      row.verification_status as EventRecord["verificationStatus"],
    verifiedAt: verified,
    state: state as EventRecord["state"],
    updatedAt: updated,
    imageUrl: safeUrl(row.image_url),
    imageRights: text("image_rights"),
    approvedAt: approved,
    publishedAt: published,
    developmentTest: row.is_development === true,
  };
}
export async function getEvents(): Promise<{
  events: EventRecord[];
  preview: boolean;
  unavailable: boolean;
}> {
  const configuration = previewConfiguration(process.env);
  if (!configuration.allowed)
    return { events: [], preview: configuration.preview, unavailable: true };
  if (configuration.mode === "fixtures")
    return { events: sampleEvents, preview: true, unavailable: false };
  const url = process.env.SUPABASE_URL,
    key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key)
    return {
      events: [],
      preview: configuration.preview,
      unavailable: configuration.preview,
    };
  try {
    const client = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    if (configuration.mode === "database") {
      const email = process.env.COMMUNITY_PREVIEW_EMAIL,
        password = process.env.COMMUNITY_PREVIEW_PASSWORD;
      if (!email || !password)
        return { events: [], preview: true, unavailable: true };
      const { data: session, error: loginError } =
        await client.auth.signInWithPassword({ email, password });
      if (loginError || !session.user)
        return { events: [], preview: true, unavailable: true };
      const { data: member, error: roleError } = await client
        .from("community_members")
        .select("role")
        .eq("user_id", session.user.id)
        .single();
      if (roleError || member?.role !== "previewer")
        return { events: [], preview: true, unavailable: true };
      const { data, error } = await client
        .from("community_events")
        .select("*")
        .eq("is_development", true)
        .in("state", ["DRAFT", "VERIFIED"])
        .order("starts_at");
      if (error) return { events: [], preview: true, unavailable: true };
      const events = (data || [])
        .map(parseRecord)
        .filter(
          (e): e is EventRecord =>
            !!e &&
            e.developmentTest === true &&
            ["DRAFT", "VERIFIED"].includes(e.state),
        );
      return { events, preview: true, unavailable: false };
    }
    const { data, error } = await client
      .from("community_events")
      .select("*")
      .eq("state", "PUBLISHED")
      .eq("is_development", false)
      .order("starts_at");
    if (error) return { events: [], preview: false, unavailable: true };
    const events = (data || [])
      .map(parseRecord)
      .filter((e): e is EventRecord => !!e && isPublicEvent(e));
    return { events, preview: false, unavailable: false };
  } catch {
    return { events: [], preview: configuration.preview, unavailable: true };
  }
}
