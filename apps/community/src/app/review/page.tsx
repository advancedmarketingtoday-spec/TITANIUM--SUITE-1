import { CONTENT_STATES } from "../../lib/events";
export default function ReviewPage() {
  return (
    <section className="detail-page">
      <p className="eyebrow">SHARED CONTENT FOUNDATION</p>
      <h1>
        Research first.
        <br />
        <em>Review before release.</em>
      </h1>
      <p className="detail-description">
        Every record carries its source and verification history. Approval and
        publication are separate, explicit reviewer actions.
      </p>
      <ol className="workflow">
        {CONTENT_STATES.map((state, i) => (
          <li key={state}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <strong>{state.replaceAll("_", " ")}</strong>
          </li>
        ))}
      </ol>
      <div className="notice">
        These are supported states, not an automatic publication sequence. The
        database rejects invalid transitions and unapproved publication.
      </div>
      <h2>Reviewer access</h2>
      <p>
        Approval and publication use authenticated database operations
        restricted to assigned reviewers. No approval action or public admin
        endpoint is exposed by this Phase 1 read-only interface.
      </p>
      <p>
        Editor and reviewer account provisioning, sign-in, and an authenticated
        review dashboard are the next administration step. This page documents
        the implemented database controls.
      </p>
    </section>
  );
}
