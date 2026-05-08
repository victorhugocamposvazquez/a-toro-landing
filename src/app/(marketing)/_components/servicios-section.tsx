import Image from "next/image";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

const SERVICIOS = [
  {
    title: "Plan de entrenamiento",
    badge: "1 semana gratis",
    description:
      "Empieza desde cero con una rutina pensada para ti y fácil de seguir en casa o en el gym.",
    href: "/#app",
  },
  {
    title: "Plan de nutrición",
    badge: "Guía incluida",
    description:
      "Aprende a organizar tus comidas con pautas claras para potenciar tu objetivo físico.",
    href: "/#app",
  },
  {
    title: "Retos express",
    badge: "2 semanas",
    description:
      "Metas cortas y exigentes para romper el estancamiento sin perder la motivación.",
    href: "/#retos",
  },
];

export function ServiciosSection() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        background:
          "linear-gradient(180deg, #fff5f4 0%, #fdf8f8 35%, #ffffff 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_80%_100%_at_50%_0%,rgba(176,83,76,0.12),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24">
        <SectionHeading
          align="center"
          title="Servicios online personalizados"
          subtitle={
            <>
              Programas adaptados a tu nivel, tu tiempo y tus objetivos —
              entrenamiento y nutrición sin humo.
            </>
          }
        />

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {SERVICIOS.map((service) => (
            <article
              key={service.title}
              className="flex flex-col gap-4 rounded-[1.75rem] border border-black/[0.04] bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-8"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 ring-2 ring-brand/15">
                  <Image
                    src="/assets/landing/iconos-servicios.png"
                    alt=""
                    width={48}
                    height={44}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-text md:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-brand">
                    {service.badge}
                  </p>
                </div>
              </div>

              <p className="flex-1 text-center text-sm leading-relaxed text-brand-text-muted md:text-[15px]">
                {service.description}
              </p>

              <CtaButton href={service.href} className="mt-2 w-full rounded-full">
                <span className="font-semibold">Más información</span>
              </CtaButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
