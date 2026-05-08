import type { NextRequest } from "next/server";

import { updateSession } from "./lib/supabase/proxy-session";

/**
 * Next.js 16 request proxy (antes "middleware").
 * Usar `export default function proxy`: algunos compiladores sólo reconocen
 * este formato al analizar exports estáticamente (Vercel / Turbopack).
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/proxy
 */
export default function proxy(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff|woff2|ttf)$).*)",
  ],
};
