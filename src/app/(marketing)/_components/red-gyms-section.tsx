import Image from "next/image";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

const GYMS = [
  {
    name: "Fitness Park",
    logo: "/assets/landing/gym-fitness-park.png",
    line: "Cadenas líder en equipamiento funcional.",
  },
  {
    name: "Basic-Fit",
    logo: "/assets/landing/gym-basic-fit.png",
    line: "Rutinas adaptadas al circuito Basic-Fit.",
  },
  {
    name: "GO fit",
    logo: "/assets/landing/gym-gofit.png",
    line: "Entrenos con la filosofía GO fit.",
  },
  {
    name: "Metropolitan",
    logo: "/assets/landing/gym-metropolitan.svg",
    line: "Planes para sacar partido al club Metropolitan.",
  },
];

export function RedGymsSection() {
  return (
    <section id="gimnasios" className="bg-[#f2f2f2] py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24">
        <SectionHeading
          align="center"
          title="Entrena en los mejores gimnasios de España"
          subtitle="Mis rutinas y maquinarias favoritas — para que lleves tu entreno allá donde fichas."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GYMS.map((gym) => (
            <article
              key={gym.name}
              className="relative isolate flex min-h-[220px] flex-col items-center gap-4 overflow-hidden rounded-[1.75rem] border border-black/[0.05] bg-white p-7 text-center shadow-md"
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 top-1/3 z-0 opacity-90">
                <Image
                  src="/assets/landing/bg-card-gym.png"
                  alt=""
                  fill
                  sizes="280px"
                  className="object-cover object-bottom"
                />
              </div>

              <div className="relative z-10 flex flex-1 flex-col items-center gap-3 pt-2">
                <div className="flex h-14 items-center justify-center">
                  <Image
                    src={gym.logo}
                    alt={gym.name}
                    width={160}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <h3 className="text-[15px] font-bold text-brand-text">
                  {gym.name}
                </h3>
                <p className="flex-1 text-xs leading-relaxed text-brand-text-muted">
                  {gym.line}
                </p>
                <CtaButton
                  href="/#app"
                  className="mt-2 w-full rounded-full px-4 py-2.5 text-sm"
                >
                  <span className="font-semibold">Ver más</span>
                </CtaButton>
              </div>
            </article>
          ))}
        </div>

        <div
          id="asesoria"
          className="mt-12 scroll-mt-28 rounded-[1.75rem] bg-brand-dark px-6 py-10 text-center md:px-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
            Colaboraciones
          </p>
          <h3 className="mt-4 text-xl font-bold text-white md:text-2xl">
            LA MARCA AT EN TU CENTRO
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/70">
            ¿Lideras un gimnasio? Hagamos visible tu sala con contenido AT y rutinas premium.
          </p>
          <CtaButton href="/#asesoria" className="mt-7 rounded-full px-8 py-3">
            <span className="font-semibold">Colaborar</span>
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
