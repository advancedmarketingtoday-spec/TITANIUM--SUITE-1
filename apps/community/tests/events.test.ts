import { describe, it, expect, vi } from "vitest";
vi.mock("server-only", () => ({}));
import {
  CONTENT_STATES,
  canTransition,
  filterEvents,
  localDate,
  periodBounds,
  isPublicEvent,
  safeUrl,
} from "../src/lib/events";
import { parseRecord } from "../src/lib/repository";
import { sampleEvents } from "../src/lib/sample-events";
const base = {
  search: "",
  category: "",
  school: "",
  sport: "",
  period: "all" as const,
};
describe("approval workflow", () => {
  it.each(CONTENT_STATES.filter((s) => s !== "APPROVED"))(
    "rejects %s -> PUBLISHED",
    (state) => {
      expect(canTransition(state, "PUBLISHED", "reviewer", true)).toBe(false);
    },
  );
  it("requires a verified record and reviewer for approval and publication", () => {
    expect(canTransition("READY_FOR_REVIEW", "APPROVED", "editor", true)).toBe(
      false,
    );
    expect(
      canTransition("READY_FOR_REVIEW", "APPROVED", "reviewer", false),
    ).toBe(false);
    expect(
      canTransition("READY_FOR_REVIEW", "APPROVED", "reviewer", true),
    ).toBe(true);
    expect(canTransition("APPROVED", "PUBLISHED", "editor", true)).toBe(false);
    expect(canTransition("APPROVED", "PUBLISHED", "reviewer", false)).toBe(
      false,
    );
    expect(canTransition("APPROVED", "PUBLISHED", "reviewer", true)).toBe(true);
  });
  it("never exposes a draft or a published record without approval evidence", () => {
    expect(isPublicEvent(sampleEvents[0])).toBe(false);
    expect(isPublicEvent({ ...sampleEvents[0], state: "PUBLISHED" })).toBe(
      false,
    );
    expect(
      isPublicEvent({
        ...sampleEvents[0],
        state: "PUBLISHED",
        approvedAt: "2026-10-01",
        publishedAt: "2026-10-02",
      }),
    ).toBe(true);
  });
});
describe("Pacific date filtering", () => {
  it("uses the local day near UTC midnight", () =>
    expect(localDate("2026-10-09T01:00:00Z")).toBe("2026-10-08"));
  it("uses Monday-Sunday weeks and the current weekend on Sunday", () => {
    expect(periodBounds("week", new Date("2026-10-11T18:00:00Z"))).toEqual([
      "2026-10-05",
      "2026-10-11",
    ]);
    expect(periodBounds("weekend", new Date("2026-10-11T18:00:00Z"))).toEqual([
      "2026-10-10",
      "2026-10-11",
    ]);
  });
  it("handles month rollover and DST weekends", () => {
    expect(periodBounds("weekend", new Date("2026-10-30T18:00:00Z"))).toEqual([
      "2026-10-31",
      "2026-11-01",
    ]);
    expect(periodBounds("month", new Date("2026-02-15T18:00:00Z"))).toEqual([
      "2026-02-01",
      "2026-02-28",
    ]);
  });
  it("searches case-insensitively and combines filters", () => {
    expect(
      filterEvents(
        sampleEvents,
        { ...base, search: "  GRAND  ", category: "City of Corona" },
        new Date(),
      ),
    ).toHaveLength(1);
    expect(
      filterEvents(
        sampleEvents,
        { ...base, school: "Corona High School" },
        new Date(),
      ),
    ).toHaveLength(0);
    expect(
      filterEvents(sampleEvents, { ...base, sport: "Football" }, new Date()),
    ).toHaveLength(0);
    expect(
      filterEvents(sampleEvents, { ...base, category: "Family" }, new Date()),
    ).toHaveLength(0);
  });
  it("filters all four requested date ranges", () => {
    const now = new Date("2026-10-08T19:00:00Z");
    for (const period of ["today", "week", "month"] as const)
      expect(filterEvents(sampleEvents, { ...base, period }, now)).toHaveLength(
        1,
      );
    expect(
      filterEvents(sampleEvents, { ...base, period: "weekend" }, now),
    ).toHaveLength(0);
  });
  it("includes an overlapping multi-day event (synthetic unit input only)", () => {
    expect(
      filterEvents(
        [{ ...sampleEvents[0], endsAt: "2026-10-10T20:00:00-07:00" }],
        { ...base, period: "weekend" },
        new Date("2026-10-09T19:00:00Z"),
      ),
    ).toHaveLength(1);
  });
});
describe("bad or missing data", () => {
  const row = {
    id: "a",
    slug: "event",
    title: "Event",
    starts_at: "2026-10-08T18:00:00-07:00",
    source_url: "https://example.org/source",
    state: "DRAFT",
    verification_status: "VERIFICATION_NEEDED",
    updated_at: "2026-10-01T00:00:00Z",
  };
  it("rejects missing required data and invalid dates", () => {
    for (const invalid of [
      { ...row, title: null },
      { ...row, starts_at: "bad" },
      { ...row, source_url: "javascript:alert(1)" },
      { ...row, ends_at: "2026-01-01" },
      { ...row, updated_at: "bad" },
      { ...row, state: "OTHER" },
    ])
      expect(parseRecord(invalid)).toBeNull();
  });
  it("provides honest missing-data fallbacks and safe links", () => {
    expect(parseRecord(row)).toMatchObject({
      venue: null,
      endsAt: null,
      description: "Details have not been supplied.",
      imageUrl: null,
    });
    expect(safeUrl("javascript:alert(1)")).toBeNull();
    expect(safeUrl("https://user:pass@example.org")).toBeNull();
  });
});
