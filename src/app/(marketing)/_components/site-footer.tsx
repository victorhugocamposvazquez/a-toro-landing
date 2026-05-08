import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-6 py-12 md:px-16 lg:px-24">
        <div className="mb-10 flex justify-center">
          <Image
            src="/assets/landing/social-media-icons.svg"
            alt=""
            width={276}
            height={72}
            className="h-auto w-auto max-h-[72px]"
          />
        </div>

        <div className="flex w-full flex-col gap-10 md:flex-row md:justify-between md:gap-8">
          <nav className="flex flex-wrap justify-center gap-3 md:justify-start md:gap-[10px]">
            <Link
              href="/sobre"
              className="text-[14px] tracking-[0.14px] text-black hover:text-brand"
            >
              Sobre Abraham Toro
            </Link>
            <Dot />
            <Link
              href="/faq"
              className="text-[14px] tracking-[0.14px] text-black hover:text-brand"
            >
              Preguntas frecuentes
            </Link>
            <Dot />
            <Link
              href="/legal/privacidad"
              className="text-[14px] tracking-[0.14px] text-black hover:text-brand"
            >
              Privacidad
            </Link>
          </nav>

          <p className="max-w-xl text-center text-[14px] tracking-[0.14px] text-black md:text-right">
            <span className="font-bold text-brand">Coloboraciones:</span>{" "}
            <span>¿ Eres una </span>
            <span className="font-semibold">empresa</span>
            <span>, </span>
            <span className="font-semibold">marca</span>
            <span> o </span>
            <span className="font-semibold">entrenador</span>
            <span> ?</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function Dot() {
  return (
    <span className="hidden md:inline-flex h-[4px] w-[4px] shrink-0 self-center rounded-full bg-black md:mx-1" />
  );
}
