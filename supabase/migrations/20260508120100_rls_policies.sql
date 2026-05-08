-- ──────────────────────────────────────────────────────────────────────────
--  Row Level Security policies
--
--  Roles in our app:
--    - "admin"  (profiles.role = 'admin')   → full access
--    - "client" (profiles.role = 'client')  → only their own data
--    - anon                                  → public reads where applicable
--                                              + insert into leads
-- ──────────────────────────────────────────────────────────────────────────

alter table public.profiles          enable row level security;
alter table public.leads             enable row level security;
alter table public.training_plans    enable row level security;
alter table public.subscriptions     enable row level security;
alter table public.routines          enable row level security;
alter table public.routine_exercises enable row level security;
alter table public.diets             enable row level security;
alter table public.diet_meals        enable row level security;
alter table public.appointments      enable row level security;
alter table public.posts             enable row level security;

-- ─── PROFILES ─────────────────────────────────────────────────────────────
create policy profiles_self_select on public.profiles
  for select using (auth.uid() = id or public.is_admin());

create policy profiles_self_update on public.profiles
  for update using (auth.uid() = id or public.is_admin())
  with check (auth.uid() = id or public.is_admin());

-- Inserts go through the trigger; no direct insert policy needed.

create policy profiles_admin_delete on public.profiles
  for delete using (public.is_admin());

-- ─── LEADS ────────────────────────────────────────────────────────────────
-- Public website can submit a lead (anon role).
create policy leads_anon_insert on public.leads
  for insert
  to anon
  with check (true);

-- Authenticated users can also insert (e.g. logged-in form).
create policy leads_authenticated_insert on public.leads
  for insert
  to authenticated
  with check (true);

create policy leads_admin_all on public.leads
  for all using (public.is_admin())
  with check (public.is_admin());

-- ─── TRAINING PLANS ──────────────────────────────────────────────────────
create policy plans_public_read on public.training_plans
  for select using (is_active = true or public.is_admin());

create policy plans_admin_write on public.training_plans
  for all using (public.is_admin())
  with check (public.is_admin());

-- ─── SUBSCRIPTIONS ───────────────────────────────────────────────────────
create policy subs_owner_read on public.subscriptions
  for select using (auth.uid() = client_id or public.is_admin());

create policy subs_admin_write on public.subscriptions
  for all using (public.is_admin())
  with check (public.is_admin());

-- ─── ROUTINES & EXERCISES ────────────────────────────────────────────────
create policy routines_owner_read on public.routines
  for select using (auth.uid() = client_id or public.is_admin());

create policy routines_admin_write on public.routines
  for all using (public.is_admin())
  with check (public.is_admin());

create policy routine_exercises_owner_read on public.routine_exercises
  for select using (
    public.is_admin()
    or exists (
      select 1 from public.routines r
      where r.id = routine_exercises.routine_id
        and r.client_id = auth.uid()
    )
  );

create policy routine_exercises_admin_write on public.routine_exercises
  for all using (public.is_admin())
  with check (public.is_admin());

-- ─── DIETS & MEALS ───────────────────────────────────────────────────────
create policy diets_owner_read on public.diets
  for select using (auth.uid() = client_id or public.is_admin());

create policy diets_admin_write on public.diets
  for all using (public.is_admin())
  with check (public.is_admin());

create policy diet_meals_owner_read on public.diet_meals
  for select using (
    public.is_admin()
    or exists (
      select 1 from public.diets d
      where d.id = diet_meals.diet_id
        and d.client_id = auth.uid()
    )
  );

create policy diet_meals_admin_write on public.diet_meals
  for all using (public.is_admin())
  with check (public.is_admin());

-- ─── APPOINTMENTS ────────────────────────────────────────────────────────
create policy appointments_owner_read on public.appointments
  for select using (auth.uid() = client_id or public.is_admin());

create policy appointments_admin_write on public.appointments
  for all using (public.is_admin())
  with check (public.is_admin());

-- ─── POSTS (blog) ────────────────────────────────────────────────────────
create policy posts_public_read on public.posts
  for select using (published_at is not null or public.is_admin());

create policy posts_admin_write on public.posts
  for all using (public.is_admin())
  with check (public.is_admin());
