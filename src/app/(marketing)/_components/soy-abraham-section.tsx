import Image from "next/image";
import Link from "next/link";

export function SoyAbrahamSection() {
  return (
    <section
      id="contenido"
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        backgroundImage:
          "linear-gradient(-0.3856deg, #c9a9a9 0.77%, #e9e9e9 52.18%, #ffffff 98.46%)",
      }}
    >
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24">
        <div className="text-center">
          <h2 className="text-[28px] font-semibold tracking-[0.28px] text-[#383737] md:text-[40px] md:tracking-[0.4px]">
            <span>Soy </span>
            <span className="text-brand">Abraham Toro</span>
            <span>, y este es mi contenido</span>
          </h2>
          <p className="mt-4 text-[18px] font-normal tracking-[0.24px] text-[#717171] md:text-[24px]">{`Disfruta con mi contenido en redes sociales y  sígueme para más cotenido de life Style`}</p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[20px] border-[7px] border-white/60 shadow-xl aspect-[1226/704] min-h-[400px]">
          <Image
            src="/assets/landing/soy-abraham-collage.png"
            alt="Contenido en redes sociales Abraham Toro"
            fill
            sizes="(min-width: 1024px) 1226px, 100vw"
            className="object-cover"
          />

          <Link
            href="https://instagram.com/abrahamtoro"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-1/2 top-[42%] z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-[10px] border-[11px] border-white/10 bg-[#161616] px-[30px] py-4 font-bold text-white shadow-[-3px_-1px_17px_rgba(255,255,255,0.85)]"
          >
            <span className="text-[13px] tracking-[0.13px]">{`Sígueme en  Instagram`}</span>
            <span className="mt-1 text-[28px] tracking-[0.28px]">
              <span className="font-normal">A por</span>
              {" 1 Millón! 🚀"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
