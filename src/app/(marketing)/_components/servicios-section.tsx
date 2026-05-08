import Image from "next/image";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

const SERVICIOS = [
  {
    title: "Plan de entreamiento",
    badge: "1 semana gratis",
    description: (
      <>
        <span className="block">Empieza desde 0 con una rutina construida</span>
        <span className="block">para ti y fácil de seguir.</span>
      </>
    ),
    cta: "Empieza ahora gratis",
    href: "/#app",
  },
  {
    title: "Guía nutricional",
    badge: "1 semana gratis",
    description:
      "Aprende a come, cuando y porqué sin, con los mejores planes para conseguir tu objetivo.",
    cta: "Empieza ahora gratis",
    href: "/#app",
  },
  {
    title: "Reto de 2 semanas",
    badge: "Gratis",
    description:
      "Únete a nuestro reto semanal de 2 semanas totalmente gratis desde nuestra app.",
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
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24">
        <SectionHeading
          align="left"
          className="max-w-[900px]"
          title="Servicios online personalizados"
          subtitle={
            <>
              <span className="block">Descubre todas las ventajas de mis programas online</span>
              <span className="block">adaptados a todo tipo de objetivos.</span>
            </>
          }
        />

        <div className="mx-auto mt-14 grid max-w-[1260px] gap-7 md:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map((service) => (
            <article
              key={service.title}
              className="flex min-h-[243px] flex-col gap-3 rounded-[30px] bg-white p-[30px] shadow-[0_2px_8.5px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center gap-3">
                <div className="relative flex h-[60px] w-[74px] shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/landing/iconos-servicios.png"
                    alt=""
                    width={78}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[19px] font-semibold tracking-[0.19px] text-black">
                    {service.title}
                  </h3>
                  <p className="text-[18px] font-semibold tracking-[0.18px] text-brand">
                    {service.badge}
                  </p>
                </div>
              </div>
              <div className="flex-1 text-[14px] leading-normal tracking-[0.14px] text-black">
                {service.description}
              </div>
              <CtaButton href={service.href} className="mt-auto w-full">
                <span className="font-bold">{service.cta}</span>
                <span className="ml-1">→</span>
              </CtaButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
