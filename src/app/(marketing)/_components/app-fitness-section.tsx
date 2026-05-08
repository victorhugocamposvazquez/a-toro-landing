import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "./section-heading";

const FEATURES = [
  {
    title: "Seguimiento del progreso",
    description: "Sigue tu proceso de cambio semana a semana y previsualiza los resultados obtenidos.",
  },
  {
    title: "Rutinas personalizadas",
    description: "Planes adaptados a tu nivel, tu equipamiento y tu disponibilidad real.",
  },
  {
    title: "Vídeos al detalle",
    description: "Ejercicios explicados paso a paso para que ejecutes con la técnica perfecta.",
  },
  {
    title: "Nutrición sin humo",
    description: "Pautas claras y sostenibles para complementar tu entrenamiento.",
  },
];

export function AppFitnessSection() {
  return (
    <section
      id="app"
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 130% 75% at 50% 100%, rgba(224, 168, 168, 0.45) 0%, rgba(252, 248, 248, 0.9) 42%, #ffffff 72%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-24">
        <SectionHeading
          title={
            <>
              <span className="font-bold text-brand">App fitness:</span>
              <span className="font-semibold text-brand-text"> tu progreso, en tus manos</span>
            </>
          }
          subtitle="Accede a la herramienta que te acompañará en cada entrenamiento"
        />

        <div className="mt-12 grid lg:grid-cols-[324px_1fr] gap-10 items-center">
          {/* Phones mockup */}
          <div className="relative w-full max-w-[324px] mx-auto aspect-[324/348]">
            <Image
              src="/assets/landing/moviles-mockup.png"
              alt="App fitness en móvil"
              fill
              sizes="(min-width: 1024px) 324px, 100vw"
              className="object-contain"
            />
          </div>

          {/* Features card */}
          <div className="bg-white rounded-[30px] p-8 md:p-10 shadow-[9px_6px_8.5px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-center lg:gap-0">
              {FEATURES.map((feature, index) => (
                <div key={feature.title} className="flex flex-1 min-w-0 items-stretch gap-0">
                  <div className="flex flex-col items-center text-center px-2 lg:px-5 w-full">
                    <div className="relative w-12 h-12 mb-3">
                      <Image
                        src="/assets/landing/icono-feature.png"
                        alt=""
                        fill
                        sizes="48px"
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-[16px] font-semibold text-black">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[12px] text-black">
                      {feature.description}
                    </p>
                  </div>
                  {index < FEATURES.length - 1 ? (
                    <div
                      className="hidden lg:flex shrink-0 w-px items-center justify-center px-1 self-stretch"
                      aria-hidden
                    >
                      <Image
                        src="/assets/landing/divider.svg"
                        alt=""
                        width={2}
                        height={135}
                        className="h-[120px] w-auto opacity-80"
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-5 bg-black rounded-[10px] px-4 py-[17px] text-white w-full sm:w-[310px] min-h-[89px]"
              >
                <Image
                  src="/assets/landing/apple-mask.png"
                  alt=""
                  width={48}
                  height={55}
                  className="h-12 w-12 shrink-0 object-contain"
                />
                <span className="flex flex-col leading-tight gap-1">
                  <span className="text-[14px] font-normal">Compatible con dispositivos</span>
                  <span className="text-[18px] font-bold">Apple</span>
                </span>
              </Link>

              <Link
                href="https://play.google.com"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-5 bg-black rounded-[10px] px-4 py-[17px] text-white w-full sm:w-[299px] min-h-[89px]"
              >
                <Image
                  src="/assets/landing/google-play.png"
                  alt="Google Play"
                  width={62}
                  height={49}
                  className="h-12 w-auto shrink-0"
                />
                <span className="flex flex-col leading-tight gap-1">
                  <span className="text-[14px] font-normal">Compatible con dispositivos</span>
                  <span className="text-[18px] font-bold">Google Play</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
