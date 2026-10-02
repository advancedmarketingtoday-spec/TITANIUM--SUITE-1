-- Phase 1: community data only. No production content or credentials seeded.
begin;
create schema if not exists private_fitness;
revoke all on schema private_fitness from public, anon, authenticated;
-- No fitness tables or integrations are implemented in Phase 1.
create type public.community_content_state as enum ('RESEARCH','VERIFICATION_NEEDED','VERIFIED','DRAFT','READY_FOR_REVIEW','APPROVED','PUBLISHED','ARCHIVED');
create type public.community_verification as enum ('VERIFICATION_NEEDED','VERIFIED');
create table public.community_members (
 user_id uuid primary key references auth.users(id) on delete cascade,
 role text not null check (role in ('editor','reviewer'))
);
create table public.community_events (
 id uuid primary key default gen_random_uuid(),
 slug text unique not null check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
 title text not null check (length(trim(title)) > 0), description text not null default '',
 starts_at timestamptz not null, ends_at timestamptz check (ends_at >= starts_at),
 venue text, address text, organizer text,
 category text not null check (category in ('City of Corona','Community','High School Sports','Youth Sports','Family','Recreation','Food','Business','Schools','Arts','Seasonal events')),
 school text, sport text,
 source_url text not null check (source_url ~ '^https://[^/@[:space:]]+([/?#].*)?$'),
 registration_url text check (registration_url ~ '^https://[^/@[:space:]]+([/?#].*)?$'),
 image_url text check (image_url ~ '^https://[^/@[:space:]]+([/?#].*)?$'), image_rights text,
 verification_status public.community_verification not null default 'VERIFICATION_NEEDED',
 verified_at timestamptz,
 state public.community_content_state not null default 'DRAFT',
 created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
 approved_at timestamptz, approved_by uuid references auth.users(id),
 published_at timestamptz, published_by uuid references auth.users(id),
 check (image_url is null or length(trim(image_rights)) > 0 and image_rights is not null),
 check (verification_status <> 'VERIFIED' or verified_at is not null),
 check (state not in ('APPROVED','PUBLISHED') or (verification_status='VERIFIED' and verified_at is not null and approved_at is not null and approved_by is not null)),
 check (state <> 'PUBLISHED' or (published_at is not null and published_by is not null))
);
create index community_events_date_idx on public.community_events(starts_at) where state='PUBLISHED';
create table public.community_audit (
 id bigint generated always as identity primary key,
 event_id uuid not null references public.community_events(id), actor_id uuid references auth.users(id),
 action text not null, from_state public.community_content_state, to_state public.community_content_state,
 occurred_at timestamptz not null default now()
);
alter table public.community_members enable row level security;
alter table public.community_events enable row level security;
alter table public.community_audit enable row level security;
create function public.community_role() returns text language sql stable security definer set search_path='' as $$
 select role from public.community_members where user_id = auth.uid()
$$;
revoke all on function public.community_role() from public;
grant execute on function public.community_role() to anon, authenticated;
create policy members_self on public.community_members for select to authenticated using (user_id=auth.uid());
create policy events_public on public.community_events for select to anon, authenticated using (
 state='PUBLISHED' and verification_status='VERIFIED' and verified_at is not null and approved_at is not null and published_at is not null
);
create policy events_staff_read on public.community_events for select to authenticated using (public.community_role() in ('editor','reviewer'));
create policy events_staff_insert on public.community_events for insert to authenticated with check (public.community_role() in ('editor','reviewer') and state='DRAFT');
create policy events_staff_edit on public.community_events for update to authenticated using (public.community_role() in ('editor','reviewer') and state not in ('APPROVED','PUBLISHED','ARCHIVED')) with check (public.community_role() in ('editor','reviewer'));
create policy audit_staff_read on public.community_audit for select to authenticated using (public.community_role() in ('editor','reviewer'));
-- Never grant lifecycle/verification/approval columns to client writes. Transitions use checked RPCs.
revoke all on public.community_members, public.community_events, public.community_audit from anon, authenticated;
grant select on public.community_members, public.community_audit to authenticated;
grant select on public.community_events to anon, authenticated;
grant insert (slug,title,description,starts_at,ends_at,venue,address,organizer,category,school,sport,source_url,registration_url,image_url,image_rights) on public.community_events to authenticated;
grant update (slug,title,description,starts_at,ends_at,venue,address,organizer,category,school,sport,source_url,registration_url,image_url,image_rights) on public.community_events to authenticated;
create function public.community_event_changed() returns trigger language plpgsql security definer set search_path='' as $$
begin
 new.updated_at=case when tg_op='UPDATE' then greatest(clock_timestamp(),old.updated_at+interval '1 microsecond') else clock_timestamp() end;
 if tg_op='UPDATE' and (to_jsonb(new)-array['state','updated_at','verification_status','verified_at','approved_at','approved_by','published_at','published_by']) is distinct from (to_jsonb(old)-array['state','updated_at','verification_status','verified_at','approved_at','approved_by','published_at','published_by']) then
  new.state='DRAFT'; new.verification_status='VERIFICATION_NEEDED'; new.verified_at=null;
  new.approved_at=null; new.approved_by=null; new.published_at=null; new.published_by=null;
 end if;
 return new;
end $$;
create trigger community_events_changed before insert or update on public.community_events for each row execute function public.community_event_changed();
create function public.community_event_audit() returns trigger language plpgsql security definer set search_path='' as $$
begin
 insert into public.community_audit(event_id,actor_id,action,from_state,to_state) values (new.id,auth.uid(),case when tg_op='INSERT' then 'CREATE' when old.state is distinct from new.state then 'TRANSITION' when old.verification_status is distinct from new.verification_status then 'VERIFY' else 'EDIT' end,case when tg_op='UPDATE' then old.state else null end,new.state);
 return new;
end $$;
create trigger community_events_audit after insert or update on public.community_events for each row execute function public.community_event_audit();
create function public.verify_community_event(event_id uuid, expected_updated_at timestamptz) returns public.community_events language plpgsql security definer set search_path='' as $$
declare e public.community_events;
begin
 if auth.uid() is null or public.community_role() not in ('editor','reviewer') or public.community_role() is null then raise exception 'Staff access required'; end if;
 select * into e from public.community_events where id=event_id for update;
 if not found then raise exception 'Event not found'; end if;
 if e.updated_at is distinct from expected_updated_at then raise exception 'Event changed; reload before verifying'; end if;
 if e.state in ('APPROVED','PUBLISHED','ARCHIVED') then raise exception 'Return event to draft before verification'; end if;
 update public.community_events set verification_status='VERIFIED',verified_at=clock_timestamp() where id=event_id returning * into e;
 return e;
end $$;
create function public.transition_community_event(event_id uuid, target public.community_content_state, expected_updated_at timestamptz) returns public.community_events language plpgsql security definer set search_path='' as $$
declare e public.community_events; allowed boolean; staff_role text;
begin
 staff_role=public.community_role();
 if auth.uid() is null or staff_role is null or staff_role not in ('editor','reviewer') then raise exception 'Staff access required'; end if;
 select * into e from public.community_events where id=event_id for update;
 if not found then raise exception 'Event not found'; end if;
 if e.updated_at is distinct from expected_updated_at then raise exception 'Event changed; reload before transition'; end if;
 allowed=case e.state
 when 'RESEARCH' then target in ('VERIFICATION_NEEDED','VERIFIED','DRAFT','ARCHIVED')
 when 'VERIFICATION_NEEDED' then target in ('RESEARCH','VERIFIED','DRAFT','ARCHIVED')
 when 'VERIFIED' then target in ('DRAFT','ARCHIVED')
 when 'DRAFT' then target in ('READY_FOR_REVIEW','VERIFICATION_NEEDED','ARCHIVED')
 when 'READY_FOR_REVIEW' then target in ('DRAFT','APPROVED','VERIFICATION_NEEDED','ARCHIVED')
 when 'APPROVED' then target in ('DRAFT','PUBLISHED','ARCHIVED')
 when 'PUBLISHED' then target='ARCHIVED'
 when 'ARCHIVED' then target='DRAFT' else false end;
 if not allowed then raise exception 'Invalid content transition: % -> %',e.state,target; end if;
 if target in ('VERIFIED','APPROVED','PUBLISHED') and (e.verification_status<>'VERIFIED' or e.verified_at is null) then raise exception 'Source verification required'; end if;
 if target in ('APPROVED','PUBLISHED') and staff_role <> 'reviewer' then raise exception 'Reviewer action required'; end if;
 if target='PUBLISHED' and (e.approved_at is null or e.approved_by is null) then raise exception 'Explicit approval required'; end if;
 update public.community_events set state=target,
 approved_at=case when target='APPROVED' then clock_timestamp() when target in ('DRAFT','VERIFICATION_NEEDED') then null else approved_at end,
 approved_by=case when target='APPROVED' then auth.uid() when target in ('DRAFT','VERIFICATION_NEEDED') then null else approved_by end,
 published_at=case when target='PUBLISHED' then clock_timestamp() when target='DRAFT' then null else published_at end,
 published_by=case when target='PUBLISHED' then auth.uid() when target='DRAFT' then null else published_by end,
 verification_status=case when target='VERIFICATION_NEEDED' then 'VERIFICATION_NEEDED'::public.community_verification else verification_status end,
 verified_at=case when target='VERIFICATION_NEEDED' then null else verified_at end
 where id=event_id returning * into e;
 return e;
end $$;
revoke all on function public.community_event_changed(),public.community_event_audit(),public.verify_community_event(uuid,timestamptz),public.transition_community_event(uuid,public.community_content_state,timestamptz) from public;
grant execute on function public.verify_community_event(uuid,timestamptz),public.transition_community_event(uuid,public.community_content_state,timestamptz) to authenticated;
commit;
