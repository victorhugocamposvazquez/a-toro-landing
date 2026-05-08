import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "./section-heading";

const FEATURE_COPY = {
  title: "Seguimiento del progreso",
  description:
    "Sigue tu proceso de cambio semanal a semana y previsualiza los resultados obtenidos.",
};

const FEATURES = Array.from({ length: 4 }, (_, i) => ({ ...FEATURE_COPY, id: i }));

export function AppFitnessSection() {
  return (
    <section id="app" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24">
        <SectionHeading
          align="center"
          title={
            <>
              <span className="font-bold text-brand">App fitness:</span>
              <span className="font-semibold text-brand-text">
                {" "}
                tu progreso, en tus manos
              </span>
            </>
          }
          subtitle="Accede a la herramienta que te acompañará en cada entrenamiento"
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[324px_minmax(0,1fr)] lg:gap-6">
          <div className="relative mx-auto w-full max-w-[324px]">
            <Image
              src="/assets/landing/moviles-mockup.png"
              alt=""
              width={324}
              height={348}
              sizes="324px"
              className="h-auto w-full"
            />
          </div>

          <div className="rounded-[30px] bg-white p-6 shadow-[9px_6px_8.5px_rgba(0,0,0,0.15)] md:p-[30px]">
            <div className="hidden lg:flex lg:items-start lg:justify-center">
              {FEATURES.map((feature, index) => (
                <div key={feature.id} className="flex items-stretch">
                  <div className="flex max-w-[200px] flex-col items-center gap-3 px-2 text-center">
                    <div className="relative h-12 w-12 shrink-0">
                      <Image
                        src="/assets/landing/icono-feature.png"
                        alt=""
                        fill
                        className="object-contain"
                        sizes="48px"
                      />
                    </div>
                    <p className="text-[16px] font-semibold tracking-[0.16px] text-black">
                      {feature.title}
                    </p>
                    <p className="min-h-[51px] text-[12px] leading-normal tracking-[0.12px] text-black">
                      {feature.description}
                    </p>
                  </div>
                  {index < FEATURES.length - 1 ? (
                    <div
                      className="flex w-6 shrink-0 items-center justify-center self-stretch"
                      aria-hidden
                    >
                      <Image
                        src="/assets/landing/divider.svg"
                        alt=""
                        width={2}
                        height={135}
                        className="max-h-[135px] w-auto opacity-90"
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:hidden">
              {FEATURES.map((feature) => (
                <div key={feature.id} className="flex flex-col items-center gap-3 text-center">
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      src="/assets/landing/icono-feature.png"
                      alt=""
                      fill
                      className="object-contain"
                      sizes="48px"
                    />
                  </div>
                  <p className="text-[16px] font-semibold tracking-[0.16px] text-black">
                    {feature.title}
                  </p>
                  <p className="text-[12px] leading-normal tracking-[0.12px] text-black">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Link
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[89px] w-full max-w-[310px] items-center gap-5 rounded-[10px] bg-black px-4 text-white sm:w-[310px]"
              >
                <Image
                  src="/assets/landing/apple-mask.png"
                  alt=""
                  width={52}
                  height={58}
                  className="shrink-0 object-contain"
                />
                <span className="flex flex-col gap-1 text-left">
                  <span className="text-[14px] font-normal tracking-[0.14px]">
                    Compatible con dispositivos
                  </span>
                  <span className="text-[18px] font-bold tracking-[0.18px]">
                    Apple
                  </span>
                </span>
              </Link>
              <Link
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[89px] min-w-[280px] items-center gap-5 rounded-[10px] bg-black px-4 text-white"
              >
                <Image
                  src="/assets/landing/google-play.png"
                  alt=""
                  width={62}
                  height={49}
                  className="h-[49px] w-[62px] shrink-0 object-cover"
                />
                <span className="flex flex-col gap-1 text-left whitespace-nowrap">
                  <span className="text-[14px] font-normal tracking-[0.14px]">
                    Compatible con dispositivos
                  </span>
                  <span className="text-[18px] font-bold tracking-[0.18px]">
                    Google Play
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
