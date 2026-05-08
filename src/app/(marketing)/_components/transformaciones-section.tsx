import Image from "next/image";
import Link from "next/link";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

export function TransformacionesSection() {
  return (
    <section
      id="transformaciones"
      className="bg-gradient-to-b from-white via-[#f7f7f7] to-[#f0f0f0] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24">
        <SectionHeading
          align="center"
          title="Increíbles transformaciones"
          subtitle="Historias reales de personas que han confiado en un plan claro, exigente y sostenible."
        />

        <div className="mt-14 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-8">
          <div className="flex flex-1 flex-wrap justify-center gap-6 lg:justify-end">
            <div className="w-full max-w-[200px] space-y-2">
              <div className="relative aspect-[311/271] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/landing/chica-antes-despues.png"
                  alt="Transformación"
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-brand-text-muted">Antes</span>
                <span className="text-brand">Después</span>
              </div>
            </div>
            <div className="w-full max-w-[200px] space-y-2">
              <div className="relative aspect-[289/271] overflow-hidden rounded-2xl">
                <Image
                  src="/assets/landing/chico-antes-despues.png"
                  alt="Transformación"
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-brand-text-muted">Antes</span>
                <span className="text-brand">Después</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 sm:flex-row lg:items-start">
            <div className="w-full max-w-[320px] rounded-2xl border border-black/[0.06] bg-white p-6 shadow-lg sm:max-w-[300px]">
              <Image
                src="/assets/landing/estrellas.svg"
                alt=""
                width={120}
                height={18}
                className="h-4 w-auto"
              />
              <p className="mt-4 text-sm leading-relaxed text-brand-text-muted md:text-[15px]">
                “Abraham me ayudó a cambiar mi vida: resultados visibles y hábitos
                que realmente puedo mantener.”
              </p>
              <p className="mt-3 font-semibold text-brand-text">Natalia López</p>
              <Link
                href="/#app"
                className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
              >
                Leer más
              </Link>
            </div>

            <div className="relative aspect-[270/378] w-full max-w-[240px] overflow-hidden rounded-2xl border-[6px] border-white shadow-xl">
              <Image
                src="/assets/landing/app-mockup.png"
                alt="App Abraham Toro"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton
            href="/#app"
            className="rounded-full px-10 py-3.5 text-base font-semibold shadow-md"
          >
            Ver más resultados
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
