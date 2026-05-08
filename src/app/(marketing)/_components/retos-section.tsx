import Image from "next/image";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

const RETOS = [
  {
    title: `Abdominales en casa  con Almohadas`,
    subtitle: "Reto de 7 días de abdominales",
    description:
      "Fortalece tus abdominales en casa con una almohada siguiendo mi reto de 7 días.",
    image: "/assets/landing/reto-abdominales.png",
    href: "/retos/abdominales",
  },
  {
    title: "Reto Rompepiernas ",
    subtitle: "Reto de 2 semanas para tener estas piernas",
    description: (
      <>
        <span className="block">Consigue unas piernas fuertes y estilizadas en el</span>
        <span className="block">reto rompepiernas del gymnasio de 20 días </span>
      </>
    ),
    image: "/assets/landing/reto-rompepiernas.png",
    href: "/retos/rompepiernas",
  },
  {
    title: "Reto Culo grande",
    subtitle: (
      <>
        <span className="block">Reto de 10 días para conseguir un culo</span>
        <span className="block">grande.</span>
      </>
    ),
    description:
      "Sigue mi reto de glúteos para fortalecer el culo en tan solo 10 días.",
    image: "/assets/landing/reto-culo.png",
    href: "/retos/culo-grande",
  },
  {
    title: "Reto biceps de popelle ",
    subtitle: (
      <>
        <span className="block">Reto de 4 semanas para conseguir los mejores</span>
        <span className="block">biceps</span>
      </>
    ),
    description:
      "Si quieres tener biceps grandes, sigueme en este reto y conviértete en popelle.",
    image: "/assets/landing/reto-biceps.png",
    href: "/retos/biceps",
  },
];

export function RetosSection() {
  return (
    <section id="retos" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24">
        <SectionHeading
          align="center"
          title="Retos disponibles para cambiar tu físico"
          subtitle="Usa mis retos para conseguir objetivos concretos, para personas que necesiten metas concretas."
        />

        <div className="mx-auto mt-14 grid max-w-[1234px] gap-5 md:gap-5">
          <div className="grid gap-5 lg:grid-cols-2">
            {RETOS.slice(0, 2).map((reto) => (
              <article
                key={reto.title}
                className="flex h-auto min-h-[224px] gap-[23px] rounded-[30px] bg-white p-[30px] shadow-[0_2px_8.5px_rgba(0,0,0,0.25)] lg:items-center"
              >
                <div className="relative h-[153px] w-[198px] shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={reto.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="198px"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-[11px]">
                  <div className="space-y-1">
                    <h3 className="text-[16px] font-semibold tracking-[0.16px] text-black">
                      {reto.title}
                    </h3>
                    <div className="text-[14px] font-medium tracking-[0.14px] text-brand">
                      {reto.subtitle}
                    </div>
                  </div>
                  <p className="text-[12px] leading-normal tracking-[0.12px] text-black">
                    {reto.description}
                  </p>
                  <CtaButton href={reto.href} size="sm" className="self-start py-[11px] text-[14px]">
                    <span className="font-bold">Empieza ahora gratis</span>
                    <span className="ml-1">{`  ->`}</span>
                  </CtaButton>
                </div>
              </article>
            ))}
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {RETOS.slice(2).map((reto) => (
              <article
                key={reto.title}
                className="flex min-h-[224px] gap-[23px] rounded-[30px] bg-white p-[30px] shadow-[0_2px_8.5px_rgba(0,0,0,0.25)] lg:items-center"
              >
                <div className="relative h-[153px] w-[198px] shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={reto.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="198px"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-[11px]">
                  <div className="space-y-1">
                    <h3 className="text-[16px] font-semibold tracking-[0.16px] text-black">
                      {reto.title}
                    </h3>
                    <div className="text-[14px] font-medium tracking-[0.14px] text-brand">
                      {reto.subtitle}
                    </div>
                  </div>
                  <p className="text-[12px] leading-normal tracking-[0.12px] text-black">
                    {reto.description}
                  </p>
                  <CtaButton href={reto.href} size="sm" className="self-start py-[11px] text-[14px]">
                    <span className="font-bold">Empieza ahora gratis</span>
                    <span className="ml-1">{`  ->`}</span>
                  </CtaButton>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton href="/retos" variant="dark" className="rounded-[10px] px-10 py-[11px]">
            <span className="text-[14px] font-bold tracking-[0.14px]">{`Ver todos mis retos  💪`}</span>
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
