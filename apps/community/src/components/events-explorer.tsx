"use client";
import { useState } from "react";
import Link from "next/link";
import {
  CATEGORIES,
  SCHOOLS,
  SPORTS,
  filterEvents,
  formatDate,
  formatTime,
  localDate,
  type EventRecord,
  type Filters,
  type Period,
} from "../lib/events";
const periods: [Period, string][] = [
  ["all", "All dates"],
  ["today", "Today"],
  ["weekend", "This Weekend"],
  ["week", "This Week"],
  ["month", "This Month"],
];
export function EventsExplorer({
  events,
  preview,
  now,
}: {
  events: EventRecord[];
  preview: boolean;
  now: string;
}) {
  const [filters, setFilters] = useState<Filters>({
      search: "",
      category: "",
      school: "",
      sport: "",
      period: "all",
    }),
    [view, setView] = useState("list"),
    [month, setMonth] = useState(localDate(now).slice(0, 7));
  const update = (key: keyof Filters, value: string) =>
    setFilters((f) => ({ ...f, [key]: value }));
  const filtered = filterEvents(events, filters, new Date(now));
  const monthDate = new Date(month + "-01T12:00:00Z"),
    count = new Date(
      Date.UTC(monthDate.getUTCFullYear(), monthDate.getUTCMonth() + 1, 0),
    ).getUTCDate();
  const shiftMonth = (n: number) => {
    const d = new Date(monthDate);
    d.setUTCMonth(d.getUTCMonth() + n);
    setMonth(d.toISOString().slice(0, 7));
  };
  const shown =
    view === "calendar"
      ? filtered.filter(
          (e) =>
            localDate(e.startsAt).slice(0, 7) <= month &&
            localDate(e.endsAt || e.startsAt).slice(0, 7) >= month,
        )
      : filtered;
  return (
    <>
      <div className="section-heading">
        <div>
          <p className="eyebrow">MAKE PLANS, STAY CONNECTED</p>
          <h2>Explore events</h2>
        </div>
        <div className="view-switch" aria-label="Event view">
          <button
            aria-pressed={view === "list"}
            onClick={() => setView("list")}
          >
            ☰ List
          </button>
          <button
            aria-pressed={view === "calendar"}
            onClick={() => setView("calendar")}
          >
            ▦ Calendar
          </button>
        </div>
      </div>
      <div className="filters">
        <label className="search-label">
          Search events
          <input
            type="search"
            placeholder="Search events, places, organizers…"
            value={filters.search}
            onChange={(e) => update("search", e.target.value)}
          />
        </label>
        <label>
          Category
          <select
            aria-label="Category"
            value={filters.category}
            onChange={(e) => update("category", e.target.value)}
          >
            <option value="">All categories</option>
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label>
          School
          <select
            aria-label="School"
            value={filters.school}
            onChange={(e) => update("school", e.target.value)}
          >
            <option value="">All schools</option>
            {SCHOOLS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          Sport
          <select
            aria-label="Sport"
            value={filters.sport}
            onChange={(e) => update("sport", e.target.value)}
          >
            <option value="">All sports</option>
            {SPORTS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="periods" aria-label="Date filters">
        {periods.map(([id, label]) => (
          <button
            key={id}
            aria-pressed={filters.period === id}
            onClick={() => update("period", id)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="results-meta" aria-live="polite">
        <span>
          {shown.length} {shown.length === 1 ? "event" : "events"}
          {preview ? " · Editorial preview" : ""}
        </span>
        <button
          onClick={() => {
            setFilters({
              search: "",
              category: "",
              school: "",
              sport: "",
              period: "all",
            });
            setMonth(localDate(now).slice(0, 7));
          }}
        >
          Reset filters
        </button>
      </div>
      {view === "calendar" && (
        <div className="calendar">
          <div className="calendar-toolbar">
            <button aria-label="Previous month" onClick={() => shiftMonth(-1)}>
              ←
            </button>
            <h3>
              {new Intl.DateTimeFormat("en-US", {
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              }).format(monthDate)}
            </h3>
            <button aria-label="Next month" onClick={() => shiftMonth(1)}>
              →
            </button>
          </div>
          <div className="calendar-grid">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div className="weekday" key={d}>
                {d}
              </div>
            ))}
            {Array.from({ length: monthDate.getUTCDay() }, (_, i) => (
              <div key={"blank" + i} className="day blank" />
            ))}
            {Array.from({ length: count }, (_, i) => {
              const date = month + "-" + String(i + 1).padStart(2, "0");
              return (
                <div
                  className={"day " + (localDate(now) === date ? "today" : "")}
                  key={date}
                >
                  <span>{i + 1}</span>
                  {shown
                    .filter(
                      (e) =>
                        localDate(e.startsAt) <= date &&
                        localDate(e.endsAt || e.startsAt) >= date,
                    )
                    .map((e) => (
                      <Link key={e.id} href={"/events/" + e.slug}>
                        {e.title}
                      </Link>
                    ))}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {view === "list" &&
        shown.map((e) => (
          <article className="event-card" key={e.id}>
            <div className="date-tile">
              <span>
                {new Intl.DateTimeFormat("en-US", {
                  month: "short",
                  timeZone: "America/Los_Angeles",
                }).format(new Date(e.startsAt))}
              </span>
              <strong>{localDate(e.startsAt).slice(-2)}</strong>
              <span>
                {new Intl.DateTimeFormat("en-US", {
                  weekday: "short",
                  timeZone: "America/Los_Angeles",
                }).format(new Date(e.startsAt))}
              </span>
            </div>
            <div className="event-copy">
              <div className="tags">
                <span>{e.category}</span>
                <span className="status">{e.state.replaceAll("_", " ")}</span>
              </div>
              <h3>
                <Link href={"/events/" + e.slug}>{e.title}</Link>
              </h3>
              <p>{e.description}</p>
              <div className="event-info">
                <span>
                  ◷ {formatDate(e.startsAt)} · {formatTime(e.startsAt)}
                </span>
                <span>⌖ {e.venue || "Venue to be confirmed"}</span>
              </div>
              <p className="verification">
                {e.verificationStatus === "VERIFIED"
                  ? "Source checked"
                  : "Verification needed"}
                {e.verifiedAt ? " · " + formatDate(e.verifiedAt) : ""}
              </p>
            </div>
            <Link
              href={"/events/" + e.slug}
              className="detail-link"
              aria-label={"View details for " + e.title}
            >
              View event <span>↗</span>
            </Link>
          </article>
        ))}
      {shown.length === 0 && (
        <div className="empty">
          <span>◎</span>
          <h3>No events to show yet</h3>
          <p>
            {events.length
              ? "Try another date range or clear your filters."
              : "Approved, explicitly published events will appear here when available."}
          </p>
          <button
            onClick={() =>
              setFilters({
                search: "",
                category: "",
                school: "",
                sport: "",
                period: "all",
              })
            }
          >
            Clear filters
          </button>
        </div>
      )}
      <aside className="source-note">
        <strong>Good plans start with good information.</strong>
        <p>
          Check the organizer’s official source for changes, registration, and
          arrival details. Missing information stays marked as unknown.
        </p>
      </aside>
    </>
  );
}
