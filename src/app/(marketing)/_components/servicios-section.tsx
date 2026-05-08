import Image from "next/image";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

const SERVICIOS = [
  {
    title: "Plan de entrenamiento",
    badge: "1 semana gratis",
    description: "Empieza desde 0 con una rutina construida para ti y fácil de seguir.",
    cta: "Empieza ahora gratis",
    href: "/#app",
  },
  {
    title: "Guía nutricional",
    badge: "1 semana gratis",
    description: "Aprende a comer, cuándo y porqué, con los mejores planes para conseguir tu objetivo.",
    cta: "Empieza ahora gratis",
    href: "/#app",
  },
  {
    title: "Reto de 2 semanas",
    badge: "Gratis",
    description: "Únete a nuestro reto semanal de 2 semanas totalmente gratis desde nuestra app.",
    cta: "Participa ahora gratis",
    href: "/#retos",
  },
];

export function ServiciosSection() {
  return (
    <section
      id="servicios"
      className="relative bg-gradient-to-b from-[#f6f1f5] to-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-24">
        <SectionHeading
          align="left"
          title="Servicios online personalizados"
          subtitle={
            <>
              Descubre todas las ventajas de mis programas online
              <br className="hidden md:block" /> adaptados a todo tipo de objetivos.
            </>
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICIOS.map((service) => (
            <article
              key={service.title}
              className="bg-white rounded-[30px] p-7 md:p-8 flex flex-col gap-3 shadow-[0_2px_8.5px_rgba(0,0,0,0.18)]"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 shrink-0 rounded-2xl bg-brand-warm flex items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/landing/iconos-servicios.png"
                    alt=""
                    width={64}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-[19px] font-semibold text-black leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-[18px] font-semibold text-brand">
                    {service.badge}
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-[14px] text-black flex-1">
                {service.description}
              </p>

              <CtaButton href={service.href} className="w-full mt-2">
                <span className="font-bold">{service.cta}</span>
                <span className="ml-2">→</span>
              </CtaButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
