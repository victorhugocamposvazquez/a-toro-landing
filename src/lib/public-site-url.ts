/**
 * URL absoluta del sitio para metadata, redirects y enlaces de servidor.
 * Evita 500 en producción cuando `NEXT_PUBLIC_SITE_URL` es sólo el host
 * (p. ej. `a-toro-landing.vercel.app` sin `https://`), porque `new URL()` exige protocolo.
 */
export function getPublicSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    if (/^https?:\/\//i.test(explicit)) {
      return explicit;
    }
    return `https://${explicit}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  try {
    return new URL(getPublicSiteUrl());
  } catch {
    return new URL("http://localhost:3000");
  }
}
