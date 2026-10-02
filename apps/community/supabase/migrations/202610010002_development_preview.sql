-- Development preview foundation; no project or content is automatically marked development.
begin;
alter table public.community_members drop constraint community_members_role_check;
alter table public.community_members add constraint community_members_role_check check (role in ('editor','reviewer','previewer'));
alter table public.community_events add column is_development boolean not null default false;
alter table public.community_events add column development_label text;
alter table public.community_events add constraint development_label_required check (not is_development or (development_label is not null and length(trim(development_label)) > 0));
-- No write privileges on development markers are given to clients.
drop policy events_public on public.community_events;
create policy events_public on public.community_events for select to anon, authenticated using (
 not is_development and state='PUBLISHED' and verification_status='VERIFIED' and verified_at is not null and approved_at is not null and published_at is not null
);
create policy events_preview_read on public.community_events for select to authenticated using (
 public.community_role()='previewer' and is_development and state in ('DRAFT','VERIFIED')
);
-- Administrative marker: set explicitly only after confirming a dedicated dev project.
create table public.community_preview_environment (
 id boolean primary key default true check (id),
 project_class text not null check (project_class='development'),
 project_ref text not null,
 configured_at timestamptz not null default now()
);
alter table public.community_preview_environment enable row level security;
revoke all on public.community_preview_environment from public,anon,authenticated;
commit;
