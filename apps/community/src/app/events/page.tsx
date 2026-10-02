import type { Metadata } from "next";
import { getEvents } from "../../lib/repository";
import { EventsExplorer } from "../../components/events-explorer";
export const metadata: Metadata = {
  title: "Events in Corona",
  description:
    "Explore Corona events by date, category, school, and sport. Source and verification details accompany each event.",
};
export const dynamic = "force-dynamic";
export default async function EventsPage() {
  const result = await getEvents();
  return (
    <>
      <section className="hero">
        <p className="eyebrow">THE CORONA COMMUNITY CALENDAR</p>
        <h1>
          A little closer to
          <br />
          <em>what’s happening.</em>
        </h1>
        <p>
          Find your next community moment, from city gatherings
          <br className="desktop-break" /> to local activities. Every event
          keeps its source.
        </p>
        <div className="hero-note">
          <span className="dot" /> Corona, California <span>↗</span>{" "}
          America/Los_Angeles
        </div>
      </section>
      <section className="events-section">
        {result.preview && (
          <div className="notice">
            <strong>Development preview</strong> · Source-backed editorial
            draft, never published. Verification reflects the source check on
            October 1, 2026; confirm current details with the organizer.
          </div>
        )}
        {result.unavailable && (
          <div className="notice" role="alert">
            Events are temporarily unavailable. Please try again later.
          </div>
        )}
        <EventsExplorer
          events={result.events}
          preview={result.preview}
          now={new Date().toISOString()}
        />
      </section>
    </>
  );
}
