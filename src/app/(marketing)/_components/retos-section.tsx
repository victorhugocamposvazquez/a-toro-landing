import Image from "next/image";
import Link from "next/link";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

const RETOS = [
  {
    title: "Reto PURE Core",
    description: "Core fuerte en 14 días con progresiones claras y sin equipo caro.",
    image: "/assets/landing/reto-abdominales.png",
    href: "/retos/abdominales",
  },
  {
    title: "Reto Rompepiernas",
    description: "Piernas más potentes combinando sala y trabajo de estabilidad.",
    image: "/assets/landing/reto-rompepiernas.png",
    href: "/retos/rompepiernas",
  },
  {
    title: "Reto Glúteo PRO",
    description: "Volumen y firmeza en bloques cortos para marcar antes y después.",
    image: "/assets/landing/reto-culo.png",
    href: "/retos/culo-grande",
  },
  {
    title: "Reto Brazos AT",
    description: "Brazos definidos priorizando técnica, volumen y recuperación.",
    image: "/assets/landing/reto-biceps.png",
    href: "/retos/biceps",
  },
];

export function RetosSection() {
  return (
    <section
      id="retos"
      className="relative overflow-hidden bg-[#f7f7f7] py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-[radial-gradient(ellipse_90%_100%_at_70%_100%,rgba(176,83,76,0.08),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24">
        <SectionHeading
          align="center"
          title="Retos disponibles para cambiar tu físico"
          subtitle="Metas concretas cuando necesitas foco máximo durante unas semanas."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {RETOS.map((reto) => (
            <article
              key={reto.title}
              className="flex gap-5 overflow-hidden rounded-[1.75rem] border border-black/[0.05] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] md:gap-6 md:p-6"
            >
              <div className="relative aspect-[198/153] w-[38%] min-w-[132px] max-w-[200px] shrink-0 overflow-hidden rounded-2xl md:w-[210px]">
                <Image
                  src={reto.image}
                  alt={reto.title}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 py-1">
                <div>
                  <h3 className="text-[16px] font-bold leading-snug text-brand-text md:text-lg">
                    {reto.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">
                    {reto.description}
                  </p>
                </div>
                <Link
                  href={reto.href}
                  className="text-sm font-bold text-brand hover:underline"
                >
                  Ver más información →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton href="/retos" variant="dark" className="rounded-full px-8 py-3">
            <span className="font-semibold">Ver todos los retos</span>
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
