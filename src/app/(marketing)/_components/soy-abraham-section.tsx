import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SoyAbrahamSection() {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-[280px] w-[280px] rounded-full bg-[color-mix(in_srgb,var(--brand)_16%,transparent)] blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-4 h-[300px] w-[300px] rounded-full bg-[color-mix(in_srgb,var(--brand)_14%,transparent)] blur-[95px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[28px] font-bold text-brand-text md:text-[40px]">
            Soy <span className="text-brand">Abraham Toro</span>, y este es mi
            contenido
          </h2>
          <p className="mt-4 text-base text-brand-text-muted md:text-xl">
            Entrenamiento real, hábitos sostenibles y el día a día del AT Team en
            redes.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="relative aspect-[1226/704] w-full overflow-hidden rounded-[1.25rem] border-[6px] border-white shadow-2xl">
            <Image
              src="/assets/landing/soy-abraham-collage.png"
              alt="Contenido en redes de Abraham Toro"
              fill
              sizes="(min-width: 1024px) 1226px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/35" aria-hidden />

            <Link
              href="https://instagram.com/abrahamtoro"
              target="_blank"
              rel="noopener"
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 rounded-xl border border-white/20 bg-brand-dark/90 px-10 py-5 text-white shadow-2xl backdrop-blur-md transition hover:bg-brand-dark"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                ¡SÍGUEME EN INSTAGRAM!
              </span>
              <span className="flex items-center gap-2 text-lg font-bold md:text-xl">
                @abrahamtoro
                <ArrowRight className="h-5 w-5" aria-hidden />
              </span>
            </Link>
          </div>
        </div>

        {/* Ancla contenido redes (retrocompatibilidad enlaces antiguos) */}
        <div id="contenido" className="sr-only" aria-hidden />
      </div>
    </section>
  );
}
