import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "./section-heading";

const FEATURES = [
  {
    title: "Seguimiento del progreso",
    description: "Gráficas y registros para ver cómo evolucionas cada semana.",
  },
  {
    title: "Rutinas bajo demanda",
    description: "Entrena donde quieras con vídeos y explicaciones al detalle.",
  },
  {
    title: "Comunidad y retos",
    description: "Desafíos y contenido fresco para no perder la chispa.",
  },
  {
    title: "Avisos y hábitos",
    description: "Recordatorios y pautas que te mantienen alineado con tu plan.",
  },
];

export function AppFitnessSection() {
  return (
    <section id="app" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[color-mix(in_srgb,var(--brand)_22%,transparent)] blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-10 h-[380px] w-[380px] rounded-full bg-[color-mix(in_srgb,var(--brand)_18%,transparent)] blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24">
        <SectionHeading
          align="center"
          title={
            <>
              <span className="font-bold text-brand">App fitness:</span>
              <span className="font-semibold text-brand-text">
                {" "}
                tu progreso en tus manos
              </span>
            </>
          }
          subtitle="Todo tu plan en el bolsillo: entrenos, hábitos y seguimiento en un solo lugar."
        />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(260px,360px)_1fr]">
          <div className="relative mx-auto flex w-full max-w-[324px] justify-center">
            <div
              className="pointer-events-none absolute inset-0 -z-10 scale-[1.35] bg-[radial-gradient(ellipse_at_center,rgba(176,83,76,0.35)_0%,transparent_65%)]"
              aria-hidden
            />
            <div className="relative aspect-[324/348] w-full">
              <Image
                src="/assets/landing/moviles-mockup.png"
                alt="App fitness Abraham Toro"
                fill
                sizes="324px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-black/[0.05] bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)] md:p-10">
            <div className="grid gap-8 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left"
                >
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      src="/assets/landing/icono-feature.png"
                      alt=""
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-brand-text">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-brand-text-muted">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-stretch justify-end gap-4 sm:flex-row sm:justify-end">
              <Link
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-[52px] items-center gap-4 rounded-xl bg-black px-5 py-3 text-white"
              >
                <Image
                  src="/assets/landing/apple-mask.png"
                  alt=""
                  width={40}
                  height={46}
                  className="h-10 w-10 object-contain"
                />
                <span className="flex flex-col text-left leading-tight">
                  <span className="text-xs opacity-90">Descarga en</span>
                  <span className="text-base font-semibold">App Store</span>
                </span>
              </Link>
              <Link
                href="https://play.google.com"
                target="_blank"
                rel="noopener"
                className="inline-flex min-h-[52px] items-center gap-4 rounded-xl bg-black px-5 py-3 text-white"
              >
                <Image
                  src="/assets/landing/google-play.png"
                  alt=""
                  width={54}
                  height={42}
                  className="h-9 w-auto"
                />
                <span className="flex flex-col text-left leading-tight">
                  <span className="text-xs opacity-90">Consíguelo en</span>
                  <span className="text-base font-semibold">Google Play</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
