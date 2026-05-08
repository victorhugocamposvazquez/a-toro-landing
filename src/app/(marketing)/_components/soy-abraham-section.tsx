import Image from "next/image";
import Link from "next/link";

export function SoyAbrahamSection() {
  return (
    <section
      id="contenido"
      className="relative py-16 md:py-24"
      style={{
        background:
          "linear-gradient(0deg, #c9a9a9 0%, #e9e9e9 52%, #ffffff 98%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[28px] md:text-[40px] font-semibold text-brand-text">
            Soy <span className="text-brand">Abraham Toro</span>, y este es mi contenido
          </h2>
          <p className="mt-3 text-[16px] md:text-[24px] text-brand-text-muted">
            Disfruta con mi contenido en redes sociales y sígueme para más
            contenido de life style.
          </p>
        </div>

        <div className="mt-12 relative">
          <div className="relative w-full aspect-[1226/704] rounded-[20px] overflow-hidden border-[7px] border-white/60 shadow-xl">
            <Image
              src="/assets/landing/soy-abraham-collage.png"
              alt="Contenido de Abraham Toro en redes"
              fill
              sizes="(min-width: 1024px) 1226px, 100vw"
              className="object-cover"
            />
          </div>

          <Link
            href="https://instagram.com/abrahamtoro"
            target="_blank"
            rel="noopener"
            className="absolute left-1/2 -translate-x-1/2 top-[42%] -translate-y-1/2 inline-flex flex-col items-center justify-center bg-brand-dark text-white px-7 py-4 rounded-[10px] border-[10px] border-white/10 drop-shadow-2xl hover:bg-brand-dark/90 transition-colors"
          >
            <span className="text-[12px] md:text-[13px] font-bold tracking-wide">
              Sígueme en Instagram
            </span>
            <span className="text-[22px] md:text-[28px] font-bold">
              <span className="font-normal">A por</span> 1 Millón! 🚀
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
