-- Optional seed data for local development.
-- Run after `supabase db reset` (which applies migrations + seed).

insert into public.training_plans (title, slug, description, duration_weeks, level, price_cents, currency, is_active)
values
  ('Plan inicio fitness', 'plan-inicio', 'Programa de 8 semanas para empezar de cero.', 8,  'beginner',     4900, 'EUR', true),
  ('Plan transformación', 'plan-transformacion', 'Programa de 12 semanas para una transformación seria.', 12, 'intermediate', 9900, 'EUR', true),
  ('Plan avanzado',       'plan-avanzado',      'Programa avanzado de 16 semanas.', 16, 'advanced',     14900, 'EUR', true)
on conflict (slug) do nothing;
