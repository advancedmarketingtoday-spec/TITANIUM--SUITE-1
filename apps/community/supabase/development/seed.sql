-- Explicit development-only load. No publication, approval, image or guessed end time.
begin;
do $$ begin
 if not exists(select 1 from public.community_preview_environment where project_class='development') then
  raise exception 'Refusing sample data without a confirmed development project marker';
 end if;
end $$;
-- Idempotent insert: preserve any existing record instead of overwriting edits.
insert into public.community_events (
 slug,title,description,starts_at,ends_at,venue,address,organizer,category,
 source_url,registration_url,verification_status,verified_at,state,image_rights,
 is_development,development_label
) values (
 'development-state-of-the-city-2026',
 'DEVELOPMENT TEST — 2026 State of the City',
 'Development/test copy of the researched editorial draft, not live Corona Shoutouts content. Pre-show begins at 6 p.m., the address at 6:30 p.m., and the social reception at 7 p.m. Confirm current organizer details before attending.',
 '2026-10-08T18:00:00-07:00',null,'Historic Civic Center Theater',
 '815 W. 6th St., Corona, CA 92882','City of Corona','City of Corona',
 'https://community.coronaca.gov/coronaca_main/260156257','https://www.stateofthecity.coronaca.gov/',
 'VERIFIED','2026-10-01T00:00:00-07:00','DRAFT',
 'No image used; no usage rights asserted.',true,
 'DEVELOPMENT/TEST ONLY — source checked October 1, 2026; timestamp normalized from a date-only editorial check.'
) on conflict (slug) do nothing;
commit;
