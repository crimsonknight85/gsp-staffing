-- =============================================================
-- GSP Platform — Phase 2B Database Schema
-- Run this in Supabase SQL Editor (Dashboard → SQL → New Query)
-- =============================================================

-- ── Extensions ──────────────────────────────────────────────
create extension if not exists "uuid-ossp";

-- ── Enums ───────────────────────────────────────────────────
do $$ begin
  create type org_type as enum ('gsp', 'client');
exception when duplicate_object then null; end $$;

do $$ begin
  create type membership_role as enum ('admin', 'hr', 'client', 'applicant', 'contractor', 'finance');
exception when duplicate_object then null; end $$;

do $$ begin
  create type membership_status as enum ('active', 'invited', 'suspended', 'removed');
exception when duplicate_object then null; end $$;

do $$ begin
  create type audit_action as enum (
    'access_granted', 'access_revoked', 'role_changed',
    'membership_created', 'membership_removed',
    'invitation_sent', 'invitation_accepted',
    'data_export', 'signed_url_access',
    'record_created', 'record_updated', 'record_deleted'
  );
exception when duplicate_object then null; end $$;

-- ── Organizations ──────────────────────────────────────────
create table if not exists public.organizations (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique not null,
  type org_type not null default 'client',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ── User Profiles ──────────────────────────────────────────
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ── Organization Memberships ───────────────────────────────
create table if not exists public.organization_memberships (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  organization_id uuid not null references public.organizations(id) on delete cascade,
  role membership_role not null,
  status membership_status not null default 'invited',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, organization_id)
);

-- ── Clients (linked to client organizations) ────────────────
create table if not exists public.clients (
  id uuid primary key default uuid_generate_v4(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  contact_email text,
  contact_phone text,
  industry text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ── Audit Events (append-only) ─────────────────────────────
create table if not exists public.audit_events (
  id uuid primary key default uuid_generate_v4(),
  actor_id uuid references public.profiles(id),
  organization_id uuid references public.organizations(id),
  action audit_action not null,
  resource_type text not null,
  resource_id text,
  metadata jsonb default '{}',
  created_at timestamptz not null default now()
);

-- ── Indexes ────────────────────────────────────────────────
create index if not exists idx_memberships_user on public.organization_memberships(user_id);
create index if not exists idx_memberships_org on public.organization_memberships(organization_id);
create index if not exists idx_memberships_status on public.organization_memberships(status);
create index if not exists idx_audit_actor on public.audit_events(actor_id);
create index if not exists idx_audit_org on public.audit_events(organization_id);
create index if not exists idx_audit_created on public.audit_events(created_at desc);
create index if not exists idx_profiles_email on public.profiles(email);

-- =============================================================
-- Row Level Security
-- =============================================================

-- Enable RLS on all tables
alter table public.organizations enable row level security;
alter table public.profiles enable row level security;
alter table public.organization_memberships enable row level security;
alter table public.clients enable row level security;
alter table public.audit_events enable row level security;

-- ── Helper function: is current user an admin? ─────────────
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from organization_memberships
    where user_id = auth.uid()
    and role = 'admin'
    and status = 'active'
  );
$$;

-- ── Helper function: is current user in a specific org? ────
create or replace function public.is_org_member(org_uuid uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from organization_memberships
    where user_id = auth.uid()
    and organization_id = org_uuid
    and status = 'active'
  );
$$;

-- ── Helper function: get user's role in a specific org ─────
create or replace function public.get_user_role(org_uuid uuid)
returns membership_role
language sql
security definer
set search_path = public
as $$
  select role from organization_memberships
    where user_id = auth.uid()
    and organization_id = org_uuid
    and status = 'active'
  limit 1;
$$;

-- ── Profiles policies ──────────────────────────────────────
drop policy if exists "Profiles: read own or admin" on public.profiles;
create policy "Profiles: read own or admin"
  on public.profiles for select
  using (auth.uid() = id or public.is_admin());

drop policy if exists "Profiles: update own" on public.profiles;
create policy "Profiles: update own"
  on public.profiles for update
  using (auth.uid() = id);

-- ── Organizations policies ─────────────────────────────────
drop policy if exists "Orgs: read member or admin" on public.organizations;
create policy "Orgs: read member or admin"
  on public.organizations for select
  using (public.is_org_member(id) or public.is_admin());

-- ── Memberships policies ───────────────────────────────────
drop policy if exists "Memberships: read own, org, or admin" on public.organization_memberships;
create policy "Memberships: read own, org, or admin"
  on public.organization_memberships for select
  using (
    user_id = auth.uid()
    or public.is_org_member(organization_id)
    or public.is_admin()
  );

-- Only admins can create/update/delete memberships
drop policy if exists "Memberships: admin insert" on public.organization_memberships;
create policy "Memberships: admin insert"
  on public.organization_memberships for insert
  with check (public.is_admin());

drop policy if exists "Memberships: admin update" on public.organization_memberships;
create policy "Memberships: admin update"
  on public.organization_memberships for update
  using (public.is_admin());

drop policy if exists "Memberships: admin delete" on public.organization_memberships;
create policy "Memberships: admin delete"
  on public.organization_memberships for delete
  using (public.is_admin());

-- ── Clients policies ───────────────────────────────────────
drop policy if exists "Clients: read org member or admin" on public.clients;
create policy "Clients: read org member or admin"
  on public.clients for select
  using (
    public.is_org_member(organization_id)
    or public.is_admin()
  );

drop policy if exists "Clients: admin all" on public.clients;
create policy "Clients: admin all"
  on public.clients for all
  using (public.is_admin())
  with check (public.is_admin());

-- ── Audit events policies ──────────────────────────────────
drop policy if exists "Audit: read org member or admin" on public.audit_events;
create policy "Audit: read org member or admin"
  on public.audit_events for select
  using (
    public.is_org_member(organization_id)
    or public.is_admin()
  );

drop policy if exists "Audit: admin insert" on public.audit_events;
create policy "Audit: admin insert"
  on public.audit_events for insert
  with check (public.is_admin());

-- =============================================================
-- Triggers: auto-create profile on signup
-- =============================================================

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.email),
    new.raw_user_meta_data->>'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- =============================================================
-- Updated_at triggers
-- =============================================================

create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

do $$ begin
drop trigger if exists set_updated_at_organizations on public.organizations;
create trigger set_updated_at_organizations
  before update on public.organizations
  for each row execute function public.handle_updated_at();
end $$;

do $$ begin
drop trigger if exists set_updated_at_profiles on public.profiles;
create trigger set_updated_at_profiles
  before update on public.profiles
  for each row execute function public.handle_updated_at();
end $$;

do $$ begin
drop trigger if exists set_updated_at_memberships on public.organization_memberships;
create trigger set_updated_at_memberships
  before update on public.organization_memberships
  for each row execute function public.handle_updated_at();
end $$;

do $$ begin
drop trigger if exists set_updated_at_clients on public.clients;
create trigger set_updated_at_clients
  before update on public.clients
  for each row execute function public.handle_updated_at();
end $$;

-- =============================================================
-- Seed: Create GSP organization
-- =============================================================

insert into public.organizations (name, slug, type)
values ('Global Staffing Partners', 'gsp', 'gsp')
on conflict (slug) do nothing;
