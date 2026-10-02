import Link from "next/link";
export default function NotFound() {
  return (
    <section className="detail-page">
      <p className="eyebrow">EVENT NOT AVAILABLE</p>
      <h1>We couldn’t find that event.</h1>
      <p>It may be unpublished, archived, or no longer available.</p>
      <Link className="primary-button" href="/events">
        Back to events
      </Link>
    </section>
  );
}
