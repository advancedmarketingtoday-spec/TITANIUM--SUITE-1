import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEvents } from "../../../lib/repository";
import {
  formatDate,
  formatTime,
  isPublicEvent,
  safeUrl,
} from "../../../lib/events";
export const dynamic = "force-dynamic";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { events } = await getEvents();
  const event = events.find((e) => e.slug === slug);
  return {
    title: event?.title || "Event not found",
    description: event?.description,
    openGraph: event
      ? { title: event.title, description: event.description, type: "website" }
      : undefined,
  };
}
export default async function EventDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { events, preview } = await getEvents();
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();
  const schema =
    !preview && isPublicEvent(event)
      ? {
          "@context": "https://schema.org",
          "@type": "Event",
          name: event.title,
          description: event.description,
          startDate: event.startsAt,
          ...(event.endsAt ? { endDate: event.endsAt } : {}),
          ...(event.venue
            ? {
                location: {
                  "@type": "Place",
                  name: event.venue,
                  ...(event.address ? { address: event.address } : {}),
                },
              }
            : {}),
          url: event.sourceUrl,
        }
      : null;
  return (
    <section className="detail-page">
      <Link href="/events" className="back-link">
        ← All events
      </Link>
      {preview && (
        <div className="notice">
          <strong>Editorial development preview</strong> · This draft has not
          been approved or published.
        </div>
      )}
      <p className="eyebrow">{event.category}</p>
      <h1>{event.title}</h1>
      <p className="detail-description">{event.description}</p>
      <div className="tags">
        <span>{event.state.replaceAll("_", " ")}</span>
        <span>
          {event.verificationStatus === "VERIFIED"
            ? "Source checked"
            : "Verification needed"}
        </span>
      </div>
      <dl>
        <dt>When</dt>
        <dd>
          {formatDate(event.startsAt)} · {formatTime(event.startsAt)}
          <br />
          {event.endsAt
            ? "Ends " +
              formatDate(event.endsAt) +
              " · " +
              formatTime(event.endsAt)
            : "End time not confirmed"}
        </dd>
        <dt>Where</dt>
        <dd>
          {event.venue || "Venue not confirmed"}
          <br />
          {event.address || "Address not confirmed"}
        </dd>
        <dt>Organizer</dt>
        <dd>{event.organizer || "Not confirmed"}</dd>
        <dt>Source verification</dt>
        <dd>
          {event.verifiedAt ? formatDate(event.verifiedAt) : "Not yet verified"}{" "}
          · Check current organizer information
        </dd>
        <dt>Last updated</dt>
        <dd>{formatDate(event.updatedAt)}</dd>
        <dt>Image rights</dt>
        <dd>{event.imageRights || "No image used; no rights asserted"}</dd>
      </dl>
      <div className="actions">
        {safeUrl(event.sourceUrl) && (
          <a
            className="primary-button"
            href={event.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Official event source ↗
          </a>
        )}
        {event.registrationUrl && (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Organizer / RSVP information ↗
          </a>
        )}
      </div>
      <aside className="source-note">
        <strong>Before you go</strong>
        <p>
          Confirm timing, capacity, and registration with the organizer. Source
          verification does not guarantee that event details have not changed.
        </p>
      </aside>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\u003c"),
          }}
        />
      )}
    </section>
  );
}
