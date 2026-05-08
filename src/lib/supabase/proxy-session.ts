import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

import type { Database } from "@/lib/supabase/types";

const ADMIN_PREFIX = "/admin";
const CLIENT_PREFIX = "/app";
const AUTH_PREFIX = "/auth";

/**
 * Refreshes the Supabase auth session on every request and gates routes by role.
 *
 * Called from the root `proxy.ts` (Next.js 16). Do not name this file `middleware.ts`:
 * Next.js/Turbopack reserves that filename for the framework boundary.
 *
 * Rules:
 *  - /admin/*  → requires authenticated user with role = "admin"
 *  - /app/*    → requires any authenticated user (clients + admins)
 *  - /auth/*   → if already authenticated, redirect away
 *  - everything else (marketing) → public
 */
export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // IMPORTANT: getUser() refreshes the session and revalidates the JWT.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname.startsWith(ADMIN_PREFIX);
  const isClientRoute = pathname.startsWith(CLIENT_PREFIX);
  const isAuthRoute = pathname.startsWith(AUTH_PREFIX);

  if (!user && (isAdminRoute || isClientRoute)) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  if (user && isAuthRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/app";
    return NextResponse.redirect(url);
  }

  if (user && isAdminRoute) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (profile?.role !== "admin") {
      const url = request.nextUrl.clone();
      url.pathname = "/app";
      return NextResponse.redirect(url);
    }
  }

  return response;
}
