import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#transformaciones", label: "Transformaciones" },
  { href: "/#app", label: "App" },
  { href: "/#gimnasios", label: "Gyms" },
  { href: "/#retos", label: "Retos" },
  { href: "/#sobre-mi", label: "Sobre mí" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3.5 md:px-16 lg:px-24">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/assets/landing/logotipo-at.svg"
            alt="Abraham Toro"
            width={97}
            height={63}
            priority
            className="h-11 w-auto md:h-[58px]"
          />
          <span className="hidden flex-col leading-none md:flex">
            <span className="text-[18px] font-bold tracking-[0.18em] text-brand-text uppercase">
              Abraham
            </span>
            <span className="mt-0.5 text-[18px] font-bold tracking-[0.18em] text-brand-text uppercase">
              Toro
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[15px] font-medium text-brand-text lg:flex xl:gap-9">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="hidden text-sm text-brand-text-muted transition-colors hover:text-brand md:inline"
          >
            Acceder
          </Link>
          <Link
            href="/#servicios"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-brand/92"
          >
            ¡Empieza ya!
          </Link>
        </div>
      </div>
    </header>
  );
}
