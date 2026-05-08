import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "/#servicios", label: "Entrenamientos online" },
  { href: "/#transformaciones", label: "Transformaciones" },
  { href: "/#retos", label: "Retos" },
  { href: "/#app", label: "APP" },
  { href: "/#asesoria", label: "Tu asesoría" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] flex items-center justify-between px-6 md:px-24 py-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/assets/landing/logotipo-at.svg"
            alt="Abraham Toro"
            width={97}
            height={63}
            priority
            className="h-12 w-auto md:h-[63px]"
          />
          <span className="hidden md:flex flex-col leading-none">
            <span className="text-[20px] font-bold tracking-[0.2em] text-brand-text uppercase">
              Abraham
            </span>
            <span className="text-[20px] font-bold tracking-[0.2em] text-brand-text uppercase mt-1">
              Toro
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-[16px] text-brand-text">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-brand transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="hidden md:inline-flex text-sm text-brand-text hover:text-brand transition-colors"
          >
            Acceder
          </Link>
          <Link
            href="/#asesoria"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-white font-medium hover:bg-brand/90 transition-colors"
          >
            ¡ Transfórmate !
          </Link>
        </div>
      </div>
    </header>
  );
}
