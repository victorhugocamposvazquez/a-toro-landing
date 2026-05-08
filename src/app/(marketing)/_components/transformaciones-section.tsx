import Image from "next/image";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

export function TransformacionesSection() {
  return (
    <section
      id="transformaciones"
      className="bg-[#ebebeb] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-24">
        <SectionHeading
          align="left"
          title="Increíbles transformaciones"
          subtitle="Estos son algunos de los clientes que han logrado resultados con mis programas a través de la app."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr_auto] items-start">
          {/* Transformación 1 */}
          <div className="space-y-3">
            <div className="relative aspect-[311/271] rounded-[20px] overflow-hidden">
              <Image
                src="/assets/landing/chica-antes-despues.png"
                alt="Transformación cliente"
                fill
                sizes="(min-width: 1024px) 311px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex justify-around text-[18px] md:text-[20px] font-medium">
              <span className="text-brand-text-muted">Antes</span>
              <span className="text-brand">Después</span>
            </div>
          </div>

          {/* Transformación 2 */}
          <div className="space-y-3">
            <div className="relative aspect-[289/271] rounded-[20px] overflow-hidden">
              <Image
                src="/assets/landing/chico-antes-despues.png"
                alt="Transformación cliente"
                fill
                sizes="(min-width: 1024px) 289px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex justify-around text-[18px] md:text-[20px] font-medium">
              <span className="text-brand-text-muted">Antes</span>
              <span className="text-brand">Después</span>
            </div>
          </div>

          {/* Testimonial + app preview */}
          <div className="grid grid-cols-1 sm:grid-cols-[auto_auto] gap-6 items-start">
            <div className="bg-[#f5f3f2] rounded-[23px] p-7 shadow-[0_2px_17px_rgba(0,0,0,0.16)] w-full sm:w-[309px]">
              <Image
                src="/assets/landing/estrellas.svg"
                alt="5 estrellas"
                width={152}
                height={23}
                className="h-5 w-auto"
              />
              <p className="mt-6 text-[15px] md:text-[17px] text-[#8b8b8b]">
                “Abraham me ayudó a cambiar mi vida, a conseguir el cambio que
                siempre había deseado, y aprender a llevar una vida saludable y
                sostenida.”
              </p>
              <p className="mt-3 text-[19px] md:text-[21px] font-semibold text-[#1b1b1b]">
                Natalia López
              </p>
            </div>

            <div className="relative w-full sm:w-[270px] aspect-[270/378] rounded-[20px] overflow-hidden border-[8px] border-white/70 shadow-lg">
              <Image
                src="/assets/landing/app-mockup.png"
                alt="App de Abraham Toro"
                fill
                sizes="(min-width: 1024px) 270px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:justify-start lg:ml-[332px]">
          <CtaButton
            href="/#app"
            className="rounded-[40px] px-8 py-3.5 text-[18px] font-semibold border-[11px] border-[#efefef] shadow-[0_4px_20px_rgba(0,0,0,0.12)] backdrop-blur-[42px]"
          >
            ¡ Comienza la tuya gratis !
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
