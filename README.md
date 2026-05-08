# Atoro — Abraham Toro

Marca personal y backoffice para **Abraham Toro**, entrenador personal de fitness.

Monorepo único en Next.js que contiene:

- **Landing pública** (`/`) — diseño pendiente de implementar desde el Figma.
- **Área privada de cliente** (`/app`) — rutinas, dietas, calendario, perfil.
- **Backoffice de admin** (`/admin`) — leads, clientes, planes, rutinas, dietas, blog, calendario.
- **Auth** con Supabase (email + contraseña, con roles `admin` / `client`).
- **Pagos** con Stripe (suscripciones / pago único).

## Stack

| Capa            | Tecnología                                       |
| --------------- | ------------------------------------------------ |
| Framework       | Next.js 16 (App Router) + React 19 + TypeScript  |
| Estilos         | Tailwind CSS v4 + shadcn/ui (estilo `base-nova`) |
| Backend / DB    | Supabase (Postgres + Auth + Storage)             |
| Pagos           | Stripe (Checkout + Webhooks)                     |
| Validación      | Zod + react-hook-form                            |
| Hosting         | Vercel                                           |

## Estructura

```text
src/
├── app/
│   ├── (marketing)/        ← landing pública (clon del Figma)
│   ├── (auth)/             ← /auth/login, /auth/register, /auth/check-email
│   ├── (client)/app/       ← área privada del cliente
│   ├── (admin)/admin/      ← backoffice
│   ├── api/stripe/webhook/ ← webhook de Stripe
│   ├── auth/callback/      ← intercambio de código OAuth/email
│   ├── auth/logout/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                 ← shadcn/ui
│   └── placeholder-page.tsx
├── lib/
│   ├── env.ts              ← validación de variables (Zod)
│   ├── supabase/           ← clientes browser/server/admin + middleware
│   └── stripe/             ← cliente Stripe + server action de checkout
└── middleware.ts           ← refresh de sesión + gating por rol

supabase/
├── config.toml
├── migrations/             ← esquema + políticas RLS
└── seed.sql                ← seed local
```

## Setup local

### 1. Variables de entorno

```bash
cp .env.example .env.local
```

Rellena al menos:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Stripe es opcional para el primer arranque (la web compila sin él):

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

### 2. Supabase

Crea un proyecto en [supabase.com](https://supabase.com) y aplica las
migraciones que están en `supabase/migrations/`.

Tienes dos formas:

**A) Con Supabase CLI (recomendado)**

```bash
npm i -g supabase
supabase login
supabase link --project-ref <tu-ref>
supabase db push
```

**B) Manual**: copia y pega el contenido de cada archivo `.sql` de
`supabase/migrations/` en el SQL Editor del Dashboard, en orden.

Tras aplicar, regenera los tipos TypeScript estrictos:

```bash
npx supabase gen types typescript --project-id <ref> \
  > src/lib/supabase/types.ts
```

### 3. Promover tu usuario a admin

Después de registrarte por primera vez en `/auth/register`, marca tu fila como
admin (sólo se hace una vez):

```sql
update public.profiles
set role = 'admin'
where id = (select id from auth.users where email = 'tu@email.com');
```

### 4. Stripe (opcional)

```bash
brew install stripe/stripe-cli/stripe
stripe login
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

Copia el `whsec_…` que imprime y ponlo en `STRIPE_WEBHOOK_SECRET`.

### 5. Arrancar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando             | Qué hace                                |
| ------------------- | --------------------------------------- |
| `npm run dev`       | Servidor de desarrollo                  |
| `npm run build`     | Build de producción                     |
| `npm run start`     | Sirve el build                          |
| `npm run lint`      | ESLint                                  |
| `npm run typecheck` | `tsc --noEmit`                          |

## Despliegue (Vercel)

1. Importa el repo en [vercel.com/new](https://vercel.com/new).
2. Añade en Project Settings → Environment Variables las mismas claves del
   `.env.example` (`NEXT_PUBLIC_*` y secretos).
3. En Supabase → Authentication → URL Configuration, añade tu dominio de
   producción a *Site URL* y *Redirect URLs* (`https://tudominio/auth/callback`).
4. En Stripe → Webhooks, añade un endpoint:
   `https://tudominio/api/stripe/webhook` (eventos: `checkout.session.completed`,
   `customer.subscription.updated`, `customer.subscription.deleted`).

## Pendiente

- [ ] Clonar la landing del Figma (Abraham Toro · Marca personal entrenador fitness).
- [ ] Conectar formulario de contacto con `leads` (insert anónimo).
- [ ] CRUDs reales del backoffice (clientes, planes, rutinas, dietas, blog, calendario).
- [ ] Área de cliente: vista de rutina, dieta y calendario.
- [ ] Productos en Stripe + selector de plan en la landing.
- [ ] SEO (sitemap, robots, OG, JSON-LD), analytics, banner de cookies.
- [ ] Página legal: privacidad, aviso legal, cookies.
