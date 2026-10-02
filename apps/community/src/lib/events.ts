export const CONTENT_STATES = [
  "RESEARCH",
  "VERIFICATION_NEEDED",
  "VERIFIED",
  "DRAFT",
  "READY_FOR_REVIEW",
  "APPROVED",
  "PUBLISHED",
  "ARCHIVED",
] as const;
export type ContentState = (typeof CONTENT_STATES)[number];
export const CATEGORIES = [
  "City of Corona",
  "Community",
  "High School Sports",
  "Youth Sports",
  "Family",
  "Recreation",
  "Food",
  "Business",
  "Schools",
  "Arts",
  "Seasonal events",
] as const;
export const SCHOOLS = [
  "Corona High School",
  "Santiago High School",
  "Centennial High School",
  "Norco High School",
];
export const SPORTS = [
  "Football",
  "Baseball",
  "Softball",
  "Basketball",
  "Soccer",
  "Swimming",
  "Water polo",
  "Volleyball",
  "Track and field",
  "Cross country",
  "Wrestling",
  "Tennis",
  "Golf",
];
export type EventRecord = {
  id: string;
  slug: string;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string | null;
  venue: string | null;
  address: string | null;
  organizer: string | null;
  category: string;
  school: string | null;
  sport: string | null;
  sourceUrl: string;
  registrationUrl: string | null;
  verificationStatus: "VERIFIED" | "VERIFICATION_NEEDED";
  verifiedAt: string | null;
  state: ContentState;
  updatedAt: string;
  imageUrl: string | null;
  imageRights: string | null;
  approvedAt: string | null;
  publishedAt: string | null;
};
const transitions: Record<ContentState, readonly ContentState[]> = {
  RESEARCH: ["VERIFICATION_NEEDED", "VERIFIED", "DRAFT", "ARCHIVED"],
  VERIFICATION_NEEDED: ["RESEARCH", "VERIFIED", "DRAFT", "ARCHIVED"],
  VERIFIED: ["DRAFT", "ARCHIVED"],
  DRAFT: ["READY_FOR_REVIEW", "VERIFICATION_NEEDED", "ARCHIVED"],
  READY_FOR_REVIEW: ["DRAFT", "APPROVED", "VERIFICATION_NEEDED", "ARCHIVED"],
  APPROVED: ["DRAFT", "PUBLISHED", "ARCHIVED"],
  PUBLISHED: ["ARCHIVED"],
  ARCHIVED: ["DRAFT"],
};
export function canTransition(
  from: ContentState,
  to: ContentState,
  role: "editor" | "reviewer",
  verified: boolean,
) {
  return (
    transitions[from].includes(to) &&
    (to !== "VERIFIED" || verified) &&
    (!["APPROVED", "PUBLISHED"].includes(to) ||
      (role === "reviewer" && verified))
  );
}
export function isPublicEvent(event: EventRecord) {
  return (
    event.state === "PUBLISHED" &&
    event.verificationStatus === "VERIFIED" &&
    !!event.verifiedAt &&
    !!event.approvedAt &&
    !!event.publishedAt
  );
}
export function safeUrl(value: unknown): string | null {
  if (typeof value !== "string") return null;
  try {
    const u = new URL(value);
    return u.protocol === "https:" && !u.username && !u.password
      ? u.href
      : null;
  } catch {
    return null;
  }
}
export function localDate(date: Date | string) {
  const p = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(date));
  return `${p.find((x) => x.type === "year")!.value}-${p.find((x) => x.type === "month")!.value}-${p.find((x) => x.type === "day")!.value}`;
}
export type Period = "all" | "today" | "weekend" | "week" | "month";
export type Filters = {
  search: string;
  category: string;
  school: string;
  sport: string;
  period: Period;
};
export function periodBounds(
  period: Period,
  now: Date,
): [string, string] | null {
  const day = localDate(now),
    d = new Date(day + "T12:00:00Z"),
    dow = d.getUTCDay();
  const offset = (n: number) => {
    const copy = new Date(d);
    copy.setUTCDate(copy.getUTCDate() + n);
    return copy.toISOString().slice(0, 10);
  };
  if (period === "today") return [day, day];
  if (period === "weekend") {
    const saturday = dow === 0 ? -1 : 6 - dow;
    return [offset(saturday), offset(saturday + 1)];
  }
  if (period === "week") {
    const monday = dow === 0 ? -6 : 1 - dow;
    return [offset(monday), offset(monday + 6)];
  }
  if (period === "month")
    return [
      day.slice(0, 7) + "-01",
      new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0))
        .toISOString()
        .slice(0, 10),
    ];
  return null;
}
export function filterEvents(
  events: EventRecord[],
  filters: Filters,
  now: Date,
) {
  const bounds = periodBounds(filters.period, now),
    query = filters.search.trim().toLowerCase();
  return events
    .filter((e) => {
      const start = localDate(e.startsAt),
        end = localDate(e.endsAt || e.startsAt);
      return (
        (!query ||
          `${e.title} ${e.description} ${e.venue || ""} ${e.organizer || ""}`
            .toLowerCase()
            .includes(query)) &&
        (!filters.category || e.category === filters.category) &&
        (!filters.school || e.school === filters.school) &&
        (!filters.sport || e.sport === filters.sport) &&
        (!bounds || (start <= bounds[1] && end >= bounds[0]))
      );
    })
    .sort((a, b) => a.startsAt.localeCompare(b.startsAt));
}
export function formatTime(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date(value));
}
export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}
