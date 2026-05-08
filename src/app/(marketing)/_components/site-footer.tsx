import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-[1440px] px-6 md:px-24 py-8">
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/landing/social-media-icons.svg"
            alt="Redes sociales"
            width={276}
            height={72}
            className="h-16 w-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-text">
          <nav className="flex items-center gap-3 flex-wrap justify-center">
            <Link href="/sobre" className="hover:text-brand transition-colors">
              Sobre Abraham Toro
            </Link>
            <span className="w-1 h-1 rounded-full bg-brand-text/50" />
            <Link href="/faq" className="hover:text-brand transition-colors">
              Preguntas frecuentes
            </Link>
            <span className="w-1 h-1 rounded-full bg-brand-text/50" />
            <Link href="/legal/privacidad" className="hover:text-brand transition-colors">
              Privacidad
            </Link>
          </nav>

          <p className="text-center md:text-right">
            <span className="font-bold text-brand">Colaboraciones: </span>
            <span>
              ¿ Eres una <span className="font-semibold">empresa</span>,{" "}
              <span className="font-semibold">marca</span> o{" "}
              <span className="font-semibold">entrenador</span> ?
            </span>
          </p>
        </div>

        <p className="mt-8 text-xs text-brand-text-muted text-center">
          © {new Date().getFullYear()} Abraham Toro. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
