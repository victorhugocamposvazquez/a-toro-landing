import Image from "next/image";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

const GYMS = [
  {
    name: "Fitness Park",
    logo: "/assets/landing/gym-fitness-park.png",
    description: "Entrenos completos funcionales en las máquinas de Fitness Park a nivel nacional.",
  },
  {
    name: "Basic-Fit",
    logo: "/assets/landing/gym-basic-fit.png",
    description: "Entrenos completos funcionales en las máquinas de Basic-Fit a nivel nacional.",
  },
  {
    name: "Gofit",
    logo: "/assets/landing/gym-gofit.png",
    description: "Entrenos completos funcionales en las máquinas de Gofit a nivel nacional.",
  },
  {
    name: "Metropolitan",
    logo: "/assets/landing/gym-metropolitan.svg",
    description: "Entrenos completos funcionales en las máquinas de Metropolitan a nivel nacional.",
  },
];

export function RedGymsSection() {
  return (
    <section id="gimnasios" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-24">
        <SectionHeading
          title="Entrenos en los mejores Gimnasios de España"
          subtitle="Descubre mis rutinas en los gimnasios que visito; podrás ver los entrenos creados por Abraham Toro."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GYMS.map((gym) => (
            <article
              key={gym.name}
              className="bg-white rounded-[30px] p-7 flex flex-col items-center gap-3 text-center shadow-[0_2px_8.5px_rgba(0,0,0,0.18)]"
            >
              <div className="relative h-16 flex items-center justify-center">
                <Image
                  src={gym.logo}
                  alt={gym.name}
                  width={170}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="text-[16px] font-semibold text-brand-text">
                Entrenando en {gym.name}
              </h3>
              <p className="text-[12px] text-[#606060] flex-1">
                {gym.description}
              </p>
              <CtaButton href="/#gimnasios" className="w-full">
                <span className="font-bold">Entrenos</span>
                <span className="ml-2">→</span>
              </CtaButton>
            </article>
          ))}
        </div>

        {/* Colabora */}
        <div className="mt-10 bg-brand-dark rounded-[30px] p-7 md:p-10 flex flex-col items-center text-center gap-5 shadow-[0_2px_8.5px_rgba(0,0,0,0.25)]">
          <div>
            <h3 className="text-[16px] md:text-[17px] font-semibold text-white">
              ¿ Quieres colaborar con Abraham Toro?
            </h3>
            <p className="mt-2 text-[12px] md:text-sm text-[#cdcdcd] max-w-3xl mx-auto">
              ¿Tienes un gimnasio y te interesaría aparecer aquí y que tus
              clientes tengan visibilidad con mis entrenos y rutinas con toda tu
              maquinaria?
            </p>
          </div>
          <CtaButton href="/#asesoria" size="sm">
            <span className="font-bold">Hablamos</span>
            <span className="ml-2">→</span>
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
