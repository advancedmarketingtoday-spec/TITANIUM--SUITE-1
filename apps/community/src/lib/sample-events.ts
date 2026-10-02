import type { EventRecord } from "./events";
// Source-backed editorial record, never a publication seed. No inferred end time or image.
// Provenance: existing untouched draft corona-state-of-the-city-2026.md (verified 2026-10-01).
export const sampleEvents: EventRecord[] = [
  {
    id: "local-state-of-city-2026",
    slug: "state-of-the-city-2026",
    title: "2026 State of the City",
    description:
      "The City of Corona’s ‘Grand by Design’ State of the City. Pre-show begins at 6 p.m., the address at 6:30 p.m., and the social reception at 7 p.m. Recheck the organizer’s details and RSVP availability before attending.",
    startsAt: "2026-10-08T18:00:00-07:00",
    endsAt: null,
    venue: "Historic Civic Center Theater",
    address: "815 W. 6th St., Corona, CA 92882",
    organizer: "City of Corona",
    category: "City of Corona",
    school: null,
    sport: null,
    sourceUrl: "https://community.coronaca.gov/coronaca_main/260156257",
    registrationUrl: "https://www.stateofthecity.coronaca.gov/",
    verificationStatus: "VERIFIED",
    verifiedAt: "2026-10-01T00:00:00-07:00",
    state: "DRAFT",
    updatedAt: "2026-10-01T00:00:00-07:00",
    imageUrl: null,
    imageRights: null,
    approvedAt: null,
    publishedAt: null,
  },
];
