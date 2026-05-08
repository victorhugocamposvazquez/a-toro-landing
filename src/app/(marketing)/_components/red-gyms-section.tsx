import Image from "next/image";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

const GYMS = [
  {
    name: "Fitness Park",
    logo: "/assets/landing/gym-fitness-park.png",
    text: "Entrenos completos funcionales de las maquinas de Fitness park a nivel nacional.",
  },
  {
    name: "Basic-Fit",
    logo: "/assets/landing/gym-basic-fit.png",
    text: "Entrenos completos funcionales de las maquinas de Basic-Fit a nivel nacional.",
  },
  {
    name: "Gofit",
    logo: "/assets/landing/gym-gofit.png",
    text: "Entrenos completos funcionales de las maquinas de gofit  a nivel nacional.",
  },
  {
    name: "Metropolitan",
    logo: "/assets/landing/gym-metropolitan.svg",
    text: "Entrenos completos funcionales de las maquinas de Metropolitan  a nivel nacional.",
  },
];

export function RedGymsSection() {
  return (
    <section id="gimnasios" className="bg-[#ebebeb] py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24">
        <SectionHeading
          align="center"
          title="Entrenos en los mejores Gimnasios de España"
          subtitle="Descubre mis rutinas en los gimnasios que visito podrás ver los entrenos creados por Abraham Toro."
        />

        <div className="mx-auto mt-14 flex flex-col flex-wrap justify-center gap-[30px] md:flex-row">
          {GYMS.map((gym) => (
            <article
              key={gym.name}
              className="relative isolate flex min-h-[243px] w-full max-w-[250px] flex-col gap-3 self-center rounded-[30px] p-[30px] shadow-[0_2px_8.5px_rgba(0,0,0,0.25)] mx-auto"
            >
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[30px]" aria-hidden>
                <div className="absolute inset-0 rounded-[30px] bg-white" />
                <Image
                  src="/assets/landing/bg-card-gym.png"
                  alt=""
                  fill
                  sizes="250px"
                  className="object-cover object-[center_115%]"
                />
              </div>
              <div className="relative z-10 flex flex-1 flex-col items-center gap-3 text-center">
                <div className="flex h-14 items-center">
                  <Image
                    src={gym.logo}
                    alt=""
                    width={168}
                    height={48}
                    className="h-12 w-auto max-w-[168px] object-contain"
                  />
                </div>
                <h3 className="text-[16px] font-semibold tracking-[0.16px] text-[#383737]">
                  Entrenando en {gym.name}
                </h3>
                <p className="min-h-[51px] flex-1 text-center text-[12px] leading-normal tracking-[0.12px] text-[#606060]">
                  {gym.text}
                </p>
                <CtaButton href="/#app" className="w-full">
                  <span className="font-bold">Entrenos</span>
                  <span className="ml-1">→</span>
                </CtaButton>
              </div>
            </article>
          ))}
        </div>

        <div
          id="asesoria"
          className="mx-auto mt-10 max-w-[1090px] scroll-mt-28 rounded-[30px] bg-brand-dark p-8 text-center shadow-[0_2px_8.5px_rgba(0,0,0,0.25)] md:px-[30px] md:py-5"
        >
          <h3 className="text-[17px] font-semibold tracking-[0.17px] text-white">
            ¿ Quieres colaborar con Abraham Toro?
          </h3>
          <p className="mx-auto mt-2 max-w-3xl text-[12px] leading-normal tracking-[0.12px] text-[#cdcdcd]">
            ¿Tienes un ginmasio y te interesaría aparecer aquí y tus clientes
            tengan visibilidad con mis entrenos y rutinas con toda tu maquinaria?
          </p>
          <CtaButton href="mailto:info@abrahamtoro.com" size="sm" className="mt-5 px-10 py-2">
            <span className="font-bold">Hablamos </span>
            <span className="ml-0.5">→</span>
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
