# Corona Shoutouts community application — Phase 1

Separate Next.js 16 / React 19 / TypeScript application. The existing repository documentation, editorial drafts and Letterman site remain independent. Work only on `codex/corona-platform-foundation`. No deployment, merge or publishing is authorized by these instructions.

## Local development

Use Node 24 (see `.nvmrc`). From `apps/community`:

```sh
npm ci
COMMUNITY_PREVIEW=true npm run dev
```

The preview uses one source-backed editorial record from the existing State of the City draft. It is visibly DRAFT and never inserted into a database. The October 1 source-verification date comes from that untouched draft; the normalized midnight timestamp represents date precision, not an observed time. The end time and image rights are unknown, so no end time or image is invented. Organizer/source links retain their provenance. Reverify the organizer before any separately approved release.

Without `COMMUNITY_PREVIEW=true`, the application displays only explicitly published records from Supabase, or an honest empty state when no connection is configured. The optional `SUPABASE_URL` and `SUPABASE_ANON_KEY` are read on the server. Store values only in environment settings or an ignored `.env.local`; never add service-role credentials. `.env.example` contains no secrets. All routes currently carry noindex headers/metadata and robots exclusion; this is a development foundation, not an indexable production deployment.

## Architecture and files

```text
apps/community/
  src/app/                 App Router layout, homepage redirect, robots, not-found
    events/page.tsx        Server-side event loading and preview boundary
    events/[slug]/page.tsx  Details, source links, metadata, gated Event JSON-LD
    review/page.tsx         Review workflow documentation (read-only)
    globals.css            Shared responsive design system
  src/components/          Interactive list/calendar and filtering
  src/lib/                 Record types, state graph, Pacific date filters,
                           input validation, sourced fixture, Supabase reader
  supabase/config.toml     Proposed isolated local Supabase configuration
  supabase/migrations/     PostgreSQL schema, privileges, triggers, RLS and RPCs
  scripts/                 Disposable test DB startup and explicit staff review CLI
  tests/                   Unit tests and actual PostgreSQL policy tests
  e2e/                     Desktop/mobile production-server browser tests
  docs/screenshots/        Retained list, calendar and detail screenshots
  PHASE-1-REPORT.md         Results, limitations and approval boundaries
```

## Database and approval controls

Migration `202610010001_community_foundation.sql` creates:

- `community_events`: source, dates, category/school/sport, verification state/timestamp, content state, rights, approval/publication actors and timestamps, and update timestamps.
- `community_members`: editor/reviewer assignments, provisioned only through trusted project administration.
- `community_audit`: append-only client-visible staff audit records, written by database triggers.
- Content and verification enums; every requested content state is represented.
- `private_fitness`: a separate, inaccessible schema reserved for future work. No fitness tables or integrations are implemented. It is excluded from exposed API schemas.

RLS hides nonpublished events from visitors and unrelated users. Assigned staff can read drafts. Column-level grants forbid direct lifecycle, verification, approval, membership and audit writes. Staff edit only unapproved records; any actual content edit returns a record to DRAFT and invalidates verification and approval. Source verification is a deliberate staff RPC, not an inference made by the UI.

The transition graph requires DRAFT → READY_FOR_REVIEW → APPROVED → PUBLISHED. Approving and publishing each require an assigned reviewer, verified source information and separate explicit RPC calls. An approved record does not publish automatically. Invalid transitions, absent/stale optimistic timestamp tokens, and unauthorized actors are rejected. Row locks prevent concurrent approval against changed content; preserve full timestamp precision returned by PostgreSQL/Supabase when sending `expected_updated_at`.

A project administrator must apply this migration to a separately approved development Supabase project and assign authenticated staff IDs in `community_members`. Do not run it against production. No project has been linked or modified. The local PostgreSQL harness supplies a minimal `auth.users`/`auth.uid()` contract and exercises real PostgreSQL privileges/RLS; it does not simulate the Supabase HTTP/Auth stack.

## Explicit staff actions

The CLI uses a user's authenticated access token, not a service-role key. Supply `SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `COMMUNITY_REVIEW_ACCESS_TOKEN` securely in the process environment. Never paste credentials into commands, commits or chat.

```sh
npm run review -- --help
npm run review -- --event EVENT_UUID --action verify
npm run review -- --event EVENT_UUID --action submit
npm run review -- --event EVENT_UUID --action approve --confirm-approve
```

The separate publication command additionally requires `--action publish --confirm-publish`; do not execute it without explicit authorization. There is no combined approve-and-publish action and no scheduled publication. Withdraw and archive actions are available. The CLI validates authentication, reads the current version, and delegates authorization and state checks to database RPCs. The database behavior is integration-tested; the CLI's remote Supabase path awaits a separately configured development project. A browser staff sign-in/review dashboard is not included in this MVP.

## Validation and repeatability

Docker and a Chromium browser are needed for integration/browser checks:

```sh
npm run db:test:start
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
```

The test DB launcher uses a checksum-pinned PostgreSQL 17 image and a marked container bound only to loopback port 55432. Its fixed password is an intentionally disposable local test setting, not an application credential. The tests refuse any database except `corona_phase1_test`; they reset that test database's schemas. Do not put real data there. Starting the marked container is repeatable. Tests never use application database variables.

Playwright uses `/usr/bin/chromium` in this cloud environment. Set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` if Chromium is elsewhere. Browser tests build and start the application themselves on local port 3000; leave that port free. They assert search, category/school/sport filters, date buttons, empty states, calendar navigation, details, missing end time, source links, no preview JSON-LD, 404 behavior, noindex headers and no horizontal overflow at 1440px/390px widths.

## Preview deployment preparation

For a future separately authorized Vercel preview, select root directory `apps/community`, framework Next.js, install `npm ci`, build `npm run build`, and Node 24. Require platform access protection and keep existing production domains and Letterman disconnected. Keep `COMMUNITY_PREVIEW` unset/false for public data mode. No Vercel project, deployment or domain configuration was created. Authorization is still required before deploying or changing indexing/publication behavior.
