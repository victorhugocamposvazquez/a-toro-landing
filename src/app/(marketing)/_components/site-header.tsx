import Image from "next/image";
import Link from "next/link";

/** Etiquetas literales según archivo Figma (WEB 6099:6). Anchors corrigen rutas funcionales. */
const NAV = [
  { href: "/#servicios", label: "Entranamientos online" },
  { href: "/#transformaciones", label: "Trasformaciones" },
  { href: "/#retos", label: "Retos" },
  { href: "/#app", label: "APP" },
  { href: "/#asesoria", label: "Tu asesoría" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-[8px]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-[17px] md:px-16 lg:px-24 xl:px-[96px]">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/assets/landing/logotipo-at.svg"
            alt="Abraham Toro"
            width={97}
            height={63}
            priority
            className="h-[52px] w-auto md:h-[63px]"
          />
          <span className="hidden flex-row items-center gap-[13px] md:flex">
            <Image
              src="/assets/landing/texto-abraham.svg"
              alt="Abraham"
              width={125}
              height={15}
              className="h-[15px] w-auto max-w-[125px]"
            />
            <Image
              src="/assets/landing/texto-toro.svg"
              alt="Toro"
              width={70}
              height={15}
              className="h-[15px] w-auto max-w-[70px]"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-[22px] text-[18px] font-normal tracking-[0.2px] text-[#2c2b2d] lg:flex xl:text-[20px]">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/auth/login"
            className="hidden text-[#2c2b2d] hover:text-brand md:inline"
          >
            Acceder
          </Link>
          <Link
            href="/#asesoria"
            className="inline-flex items-center justify-center rounded-[40px] bg-brand px-5 py-2.5 text-[18px] font-medium tracking-[0.2px] text-white hover:bg-brand/90 xl:text-[20px]"
          >
            ¡ Transfórmate !
          </Link>
        </div>
      </div>
    </header>
  );
}
