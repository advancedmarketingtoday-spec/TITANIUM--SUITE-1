# Phase 1 delivery report

## Delivered

The separate `apps/community` application provides the shared navigation/design/type foundation and Events Calendar MVP. It includes calendar/list views, Today, This Weekend, This Week (Monday–Sunday), This Month, search, category/school/sport filters, event details, explicit empty states and missing-data labels. Calendar months can be navigated independently; time/date filtering uses America/Los_Angeles, including DST and month-boundary tests.

One existing source-backed State of the City draft is available only in visibly marked development preview mode. Public mode returns no draft content. No invented event, score, business listing, image or end time was used to populate the UI. Test-only alterations are isolated to automated test inputs and a disposable database.

The shared database foundation enforces all eight states, explicit reviewer approval and a separate publication action. PostgreSQL privileges prevent client bypasses; RLS prevents anonymous/unrelated users reading drafts, and protects audit/membership records. Verification and approval are invalidated after editable content changes. Supabase architecture keeps future private fitness data in a separate unexposed schema. No fitness features were built.

## Files and database changes

All new application files live under `apps/community`; see README.md for the directory map. One migration defines three community tables, two enums, indexes, audit/update triggers, role lookup, verification RPC and checked transition RPC. No changes were made to any pre-existing Markdown draft or tracked document. No remote database was changed. The migration was applied and tested only in isolated local PostgreSQL 17.

## Checks

- Lint: passed.
- TypeScript: passed.
- Unit/PostgreSQL integration tests: 32 passed, zero skipped.
- Browser tests: 4 passed across desktop and mobile, against the production-built server.
- Production build: passed.
- Public-mode HTTP smoke: event list returns 200 with empty-state text; the preview draft route returns 404; robots and X-Robots-Tag exclude indexing.
- Local test database startup was repeated successfully. Frozen dependency installation was exercised with `npm ci`.
- Desktop/mobile screenshots for list, calendar and details are retained in `docs/screenshots`.

The tests cover unapproved publication rejection, separate approval/publication, verification prerequisites, editor/reviewer boundaries, membership revocation, direct-write bypass attempts, audit protection, draft/archived visibility, stale/null optimistic locks, rights/date constraints, private-schema denial, Pacific date boundaries, search/filter combinations and invalid/missing input.

## Limitations and items needing approval

- Supabase migrations/RLS are prepared and PostgreSQL-tested, but no remote Supabase project, Auth session, or PostgREST connection has been configured or exercised. A separately approved development project and secure bindings are needed for that end-to-end check.
- The authenticated review action is implemented through secured database RPCs and an explicit CLI. The web review page explains the workflow; a browser sign-in/admin editor/dashboard remains future administration work.
- Canonical production destinations are deliberately unset. Metadata and public-only Event structured data are prepared; indexing and production publication remain disabled. No live website behavior was claimed or modified.
- Sample verification reflects the existing October 1 source check; organizer details must be reverified before approval/release. The normalized verification timestamp has date-only source precision.
- No approved public data has been seeded. Consequently public mode is intentionally empty until separately authorized content enters the explicit workflow.
- Vercel preview settings are documented, but deployment requires separate explicit approval. No project or domain was linked.

## Stop point

Phase 1 implementation stops here. Business Directory, Sports Hub, Fitness Tracker and wearable integrations were not implemented. Work remains on `codex/corona-platform-foundation`. No merge, push, deployment, Letterman operation, or live-site publication was performed.
