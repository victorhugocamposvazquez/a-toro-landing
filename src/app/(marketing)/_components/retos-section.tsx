import Image from "next/image";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

const RETOS = [
  {
    title: "Abdominales en casa con Almohadas",
    badge: "Reto de 7 días de abdominales",
    description: "Fortalece tus abdominales en casa con una almohada siguiendo mi reto de 7 días.",
    image: "/assets/landing/reto-abdominales.png",
    href: "/retos/abdominales",
  },
  {
    title: "Reto Rompepiernas",
    badge: "Reto de 2 semanas para tener estas piernas",
    description: "Consigue unas piernas fuertes y estilizadas en el reto rompepiernas del gimnasio de 20 días.",
    image: "/assets/landing/reto-rompepiernas.png",
    href: "/retos/rompepiernas",
  },
  {
    title: "Reto Culo grande",
    badge: "Reto de 10 días para conseguir un culo grande.",
    description: "Sigue mi reto de glúteos para fortalecer el culo en tan solo 10 días.",
    image: "/assets/landing/reto-culo.png",
    href: "/retos/culo-grande",
  },
  {
    title: "Reto biceps de popelle",
    badge: "Reto de 4 semanas para conseguir los mejores biceps",
    description: "Si quieres tener bíceps grandes, sígueme en este reto y conviértete en popelle.",
    image: "/assets/landing/reto-biceps.png",
    href: "/retos/biceps",
  },
];

export function RetosSection() {
  return (
    <section id="retos" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-24">
        <SectionHeading
          title="Retos disponibles para cambiar tu físico"
          subtitle="Usa mis retos para conseguir objetivos concretos, para personas que necesiten metas concretas."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {RETOS.map((reto) => (
            <article
              key={reto.title}
              className="bg-white rounded-[30px] p-6 md:p-7 flex gap-5 items-center shadow-[0_2px_8.5px_rgba(0,0,0,0.25)]"
            >
              <div className="relative w-32 md:w-[198px] aspect-[198/153] shrink-0 rounded-2xl overflow-hidden">
                <Image
                  src={reto.image}
                  alt={reto.title}
                  fill
                  sizes="(min-width: 768px) 198px, 128px"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-3 flex-1 min-w-0">
                <div>
                  <h3 className="text-[15px] md:text-[16px] font-semibold text-black">
                    {reto.title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] font-medium text-brand">
                    {reto.badge}
                  </p>
                </div>
                <p className="text-[12px] text-black">
                  {reto.description}
                </p>
                <CtaButton href={reto.href} size="sm" className="self-start">
                  <span className="font-bold">Empieza ahora gratis</span>
                  <span className="ml-2">→</span>
                </CtaButton>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton href="/retos" variant="dark" size="sm">
            <span className="font-bold">Ver todos mis retos 💪</span>
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
