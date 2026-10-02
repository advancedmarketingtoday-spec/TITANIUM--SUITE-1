# Private development preview preparation

This work continues on `codex/corona-platform-foundation` from baseline commit `3bd01a92e6451ea53944eb70ed7c61a21a8469be`. Mark authorized a private development preview, not a production deployment or any content publication.

## Current status and missing access

No hosted Supabase project, Vercel project/team, CLI authentication, or runtime credentials were available when preparation began. No remote migration or deployment has been performed. A local PostgreSQL development database has both migrations and one labeled DRAFT sample; this is not a hosted Supabase project and does not provide Auth/PostgREST.

The remaining inputs are the nonsecret identity of a **dedicated development Supabase project** and **separate Vercel preview project/team**, secure account access for applying migrations and deploying, and a dedicated read-only previewer account. Mark must identify the development project; its name alone does not establish that it is separate from production. Credentials belong in secure environment settings and Vercel Preview environment variables, never Git or chat. Proxy-held cloud credentials must not be copied as placeholders into a Vercel runtime.

## Development Supabase configuration

1. Confirm the selected project is development-only and its exact reference/URL. Do not connect to production or use a production project's database credentials.
2. Apply migrations in order to that project only:
   - `202610010001_community_foundation.sql`
   - `202610010002_development_preview.sql`
3. Set the administrative development marker only after confirming the target, using its nonsecret ref:

   ```sql
   insert into public.community_preview_environment(project_class, project_ref)
   values ('development', 'CONFIRMED_DEVELOPMENT_PROJECT_REF');
   ```

4. Run `supabase/development/seed.sql`. It refuses a database without the development marker. The seed is repeatable and never overwrites an existing record.
5. Create a dedicated authenticated preview account through Supabase Auth administration. Assign only `previewer` in `community_members`. Do not use an editor, reviewer, service-role key or a production account for page rendering.

   ```sql
   insert into public.community_members(user_id, role)
   values ('PREVIEW_USER_UUID', 'previewer');
   ```

6. Keep the exposed API schema list limited to public; `private_fitness` must not be exposed. Its schema privileges remain denied to anonymous/authenticated users. No fitness data or feature is created.

The seed is `DEVELOPMENT TEST — 2026 State of the City`, source `https://community.coronaca.gov/coronaca_main/260156257`, state DRAFT, verification VERIFIED based on the unchanged October 1 editorial draft. It retains the verification timestamp (normalized from a date-only source check), source and registration URLs, unknown end time, null approval/publication, and `No image used; no usage rights asserted.` No source facts are invented or claimed freshly verified. This is not live content.

## Application preview variables

Configure these **only for Vercel Preview**, or an ignored local configuration:

| Name | Purpose |
| --- | --- |
| `COMMUNITY_ENVIRONMENT` | `development` |
| `COMMUNITY_PREVIEW` | `database` for hosted database-backed preview |
| `COMMUNITY_DEV_SUPABASE_PROJECT_REF` | Confirmed development project's exact ref |
| `SUPABASE_URL` | Exact `https://REF.supabase.co` matching that ref |
| `SUPABASE_ANON_KEY` | Development anon/publishable key, set securely |
| `COMMUNITY_PREVIEW_EMAIL` | Dedicated previewer account |
| `COMMUNITY_PREVIEW_PASSWORD` | Account password, set securely, server-only |

The server signs in as that account per request, verifies the account has **only the previewer role**, then selects labeled DRAFT/VERIFIED test records. A missing/mismatched project, missing credentials, rejected login, or privileged staff account produces an unavailable state with no data fallback. No service-role key, password, token, or session is passed to the browser. Public mode excludes all development records at both database and application boundaries, even after test-only publication.

## Vercel preview controls

Use a dedicated project with application root `apps/community`, Node 24, install `npm ci` and build `npm run build`. The checked-in `vercel.json` disables automatic Git deployments. The branch's build config explicitly rejects `VERCEL_ENV=production`. Hosted preview requests allow only `*.vercel.app` hosts; existing Corona Shoutouts and other custom domains are rejected by the app.

**Enable Vercel Authentication/deployment protection and verify it before deploying.** Noindex is not access control. Do not create a production deployment, invoke `--prod`, attach custom domains, change existing projects/domains, or connect Letterman. Deploy only to the Preview target after confirming the project/team and protection settings. After deployment, verify that unauthenticated access is challenged before sharing the preview with Mark, and run browser QA using authorized preview access. No protection bypass secrets may be committed or printed.

All routes retain noindex metadata and headers. Robots disallows indexing. No sitemap or production canonical URL exists. No search-engine submission is authorized.

## Verification

From `apps/community`:

```sh
npm run db:test:start
npm test
npm run db:preview:local
npm run db:preview:local
npm run lint
npm run typecheck
npm run test:e2e
```

`db:preview:local` targets only the fixed local `corona_phase1_preview` database. It cannot target a hosted URL. The policy suite uses a separate disposable `corona_phase1_test` database and never resets a hosted database.

`npm run check:development` is a non-publishing hosted Auth/PostgREST check for the confirmed development configuration. It requires securely configured previewer credentials, checks anonymous/restricted-reader boundaries and private-schema exclusion, and performs only an unchanged-description write attempt expected to be denied. No verify/approve/publish operation is authorized by this command. Remote reviewer workflow tests require separate test accounts and development-only test records; the complete transition suite is already exercised locally against PostgreSQL.

Browser tests build and run the app locally on port 3010, checking desktop/mobile, calendar/list, details, search, all date shortcuts, category/school/sport filters, empty states, noindex, missing fitness routes and absent sitemap/canonicals. These local tests cannot establish remote deployment protection or hosted database integration. The final URL and hosted test results must be reported only after real deployment and verification.

Stop after the preview is available. Do not start other modules or publish any article.
