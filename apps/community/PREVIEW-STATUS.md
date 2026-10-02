# Phase 1 preview status

**Hosted preview URL: unavailable — project identity and credentials are missing.**

This preparation continues from `3bd01a92e6451ea53944eb70ed7c61a21a8469be`, on `codex/corona-platform-foundation`. The latest local Git commit is reported separately with delivery; no push, merge, hosted deployment or production change was performed.

| Item | Verified status |
| --- | --- |
| Supabase development project | Not identified or connected. No hosted Auth/PostgREST verification claimed. |
| Migrations | Both applied successfully to isolated local PostgreSQL; not applied remotely. |
| Local development data | One labeled `DEVELOPMENT TEST — 2026 State of the City` record, DRAFT, source verified in the existing October 1 editorial draft, no approval/publication, unknown end time and no image. |
| Seed repeatability | Loaded twice without duplicate or overwritten data. Refuses a database lacking an explicit development marker. |
| RLS/workflow/app tests | 50 passed; zero skipped. Includes DRAFT/VERIFIED publication rejection, separate approval/publication, unauthenticated rejection, previewer read-only boundaries, exclusion of test records from public reads even after test-only publication, and private-schema denial. |
| Browser tests | Six passed on desktop/mobile against a locally production-built server. List/calendar, details, search, all date shortcuts, category/school/sport filters, empty states, noindex, absent sitemap/canonicals/fitness routes checked. |
| Lint / TypeScript / build | Passed. Build ran as part of the successful browser suite. |
| Production build guard | `VERCEL_ENV=production npm run build` failed intentionally before application build. This is expected denial, not a broken development build. |
| Hosted development API check | Not run against a project; prerequisite guard rejected absent development configuration without connecting. |
| Vercel | Configuration prepared; no project linked or deployed, no domains attached. Automatic Git deployments disabled. Production builds refused. |
| Private access | Vercel deployment protection must be configured and verified after access becomes available; no remote privacy claim is made. |
| Indexing | Noindex metadata/headers and robots exclusion retained; no sitemap or production canonical. |
| Screenshots | Refreshed local desktop/mobile list, calendar and detail screenshots in `docs/screenshots`. These are not hosted-preview screenshots. |

## Errors, warnings and required inputs

- The hosted development project URL/ref, Vercel project/team identity, and secure access are unavailable. Neither local CLI credentials nor existing injected bindings were found. Their absence blocks hosted migration and preview deployment.
- An initial browser run encountered an occupied local port 3000. Tests now use isolated port 3010 and passed; the unrelated process was left untouched.
- Browser output contains harmless FORCE_COLOR/NO_COLOR notices and an npm update notice.
- Development connection/project variable requirements and Vercel/Supabase API-token requirements were saved to the environment draft. This added `api.vercel.com` and `api.supabase.com` as network destinations, not a live deployment or credential value.
- Automatic configuration review rejected the password requirement with `Check the requirements and allowed_domains`. No password binding was saved. The exact development hostname is still needed; configure the dedicated previewer password securely for that destination and separately in Vercel Preview runtime settings.

To resume, supply only the nonsecret development Supabase reference/URL and separate Vercel project/team identifiers in chat. Supply credentials securely in environment settings. The Vercel preview is already authorized; no repeat deployment approval is needed within this scope. Its private deployment protection must be verified before sharing a real URL.

No Corona Shoutouts or Letterman content was changed or published. No production database was contacted. Existing drafts remain unchanged. Other modules remain unstarted.
