import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] bg-[#fafafa]">
      <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-16 lg:px-24">
        <div className="flex flex-col items-center gap-10">
          <Image
            src="/assets/landing/social-media-icons.svg"
            alt="Redes sociales"
            width={276}
            height={72}
            className="h-auto w-auto max-w-[240px]"
          />

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-brand-text-muted">
            <Link href="/sobre" className="transition hover:text-brand">
              Sobre Abraham Toro
            </Link>
            <Link href="/legal/terminos" className="transition hover:text-brand">
              Términos y condiciones
            </Link>
            <Link href="/legal/privacidad" className="transition hover:text-brand">
              Política de privacidad
            </Link>
            <Link href="/faq" className="transition hover:text-brand">
              Preguntas frecuentes
            </Link>
          </nav>

          <p className="text-center text-sm text-brand-text-muted">
            ¿ Eres una <span className="font-semibold text-brand-text">empresa</span>,{" "}
            <span className="font-semibold text-brand-text">marca</span> u{" "}
            <span className="font-semibold text-brand-text">organización</span>?
            Escríbenos a{" "}
            <a
              href="mailto:info@abrahamtoro.com"
              className="font-medium text-brand underline-offset-4 hover:underline"
            >
              info@abrahamtoro.com
            </a>
          </p>

          <p className="text-center text-xs text-brand-text-muted/90">
            © {year} Abraham Toro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
