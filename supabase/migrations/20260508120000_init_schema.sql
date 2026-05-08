-- ──────────────────────────────────────────────────────────────────────────
--  Atoro — initial schema
--
--  Convention:
--    * All tables use UUID primary keys (gen_random_uuid()).
--    * created_at / updated_at on every "domain" table.
--    * Authorization is enforced via RLS:
--        - admins can do anything
--        - clients can read/write only their own data
--        - the marketing landing inserts into `leads` anonymously
-- ──────────────────────────────────────────────────────────────────────────

create extension if not exists "pgcrypto";

-- ─── ENUMS ────────────────────────────────────────────────────────────────
create type public.user_role as enum ('admin', 'client');
create type public.lead_status as enum ('new', 'contacted', 'won', 'lost');
create type public.experience_level as enum ('beginner', 'intermediate', 'advanced');
create type public.subscription_status as enum (
  'trialing', 'active', 'past_due', 'canceled',
  'incomplete', 'incomplete_expired', 'unpaid', 'paused'
);
create type public.appointment_status as enum (
  'scheduled', 'completed', 'cancelled', 'no_show'
);
create type public.meal_type as enum ('breakfast', 'lunch', 'dinner', 'snack');

-- ─── PROFILES (1 row per auth.users row) ──────────────────────────────────
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role public.user_role not null default 'client',
  full_name text,
  phone text,
  avatar_url text,
  birthdate date,
  goals text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is 'Application-level profile, extends auth.users.';

-- Auto-create a profile when a new auth user is inserted.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.email)
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Helper: is the current user an admin?
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    (select role = 'admin' from public.profiles where id = auth.uid()),
    false
  );
$$;

-- ─── LEADS (public form submissions) ──────────────────────────────────────
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text,
  source text,
  status public.lead_status not null default 'new',
  created_at timestamptz not null default now()
);

create index leads_created_at_idx on public.leads (created_at desc);

-- ─── TRAINING PLANS (public catalog) ──────────────────────────────────────
create table public.training_plans (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text,
  duration_weeks integer,
  level public.experience_level,
  price_cents integer,
  currency text not null default 'EUR',
  stripe_price_id text,
  is_active boolean not null default true,
  cover_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ─── SUBSCRIPTIONS (Stripe ↔ client) ──────────────────────────────────────
create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.profiles(id) on delete cascade,
  plan_id uuid references public.training_plans(id) on delete set null,
  stripe_subscription_id text not null unique,
  status public.subscription_status not null default 'incomplete',
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index subscriptions_client_idx on public.subscriptions (client_id);

-- ─── ROUTINES + EXERCISES ─────────────────────────────────────────────────
create table public.routines (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  week_number integer,
  notes text,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index routines_client_idx on public.routines (client_id);

create table public.routine_exercises (
  id uuid primary key default gen_random_uuid(),
  routine_id uuid not null references public.routines(id) on delete cascade,
  name text not null,
  sets integer,
  reps text,
  rest_seconds integer,
  tempo text,
  video_url text,
  order_index integer not null default 0
);

create index routine_exercises_routine_idx on public.routine_exercises (routine_id);

-- ─── DIETS + MEALS ────────────────────────────────────────────────────────
create table public.diets (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.profiles(id) on delete cascade,
  title text not null,
  kcal_target integer,
  notes text,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index diets_client_idx on public.diets (client_id);

create table public.diet_meals (
  id uuid primary key default gen_random_uuid(),
  diet_id uuid not null references public.diets(id) on delete cascade,
  meal_type public.meal_type not null,
  description text not null,
  kcal integer,
  order_index integer not null default 0
);

create index diet_meals_diet_idx on public.diet_meals (diet_id);

-- ─── APPOINTMENTS ─────────────────────────────────────────────────────────
create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.profiles(id) on delete cascade,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  location text,
  status public.appointment_status not null default 'scheduled',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (ends_at > starts_at)
);

create index appointments_client_idx on public.appointments (client_id);
create index appointments_starts_at_idx on public.appointments (starts_at);

-- ─── BLOG POSTS ───────────────────────────────────────────────────────────
create table public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  content_md text not null,
  cover_url text,
  author_id uuid references public.profiles(id) on delete set null,
  published_at timestamptz,
  tags text[],
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index posts_published_idx on public.posts (published_at desc);

-- ─── updated_at triggers (generic) ────────────────────────────────────────
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

do $$
declare
  t text;
begin
  for t in
    select unnest(array[
      'profiles','training_plans','subscriptions',
      'routines','diets','appointments','posts'
    ])
  loop
    execute format(
      'create trigger %I_touch before update on public.%I
         for each row execute function public.touch_updated_at();',
      t, t
    );
  end loop;
end $$;
