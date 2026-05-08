import Image from "next/image";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

export function TransformacionesSection() {
  return (
    <section id="transformaciones" className="bg-[#ebebeb] py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24">
        <SectionHeading
          align="left"
          title="Increíbles transformaciones"
          subtitle="Estos son algunos de los clientes que han logrado resultados con mis programas a través de la app."
          className="max-w-[800px]"
        />

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8">
          <div className="flex flex-1 flex-wrap justify-center gap-6 lg:justify-start">
            <div className="w-full max-w-[311px]">
              <div className="relative aspect-[311/271] overflow-hidden rounded-[20px]">
                <Image
                  src="/assets/landing/chica-antes-despues.png"
                  alt=""
                  fill
                  sizes="311px"
                  className="object-cover"
                />
              </div>
              <div className="mt-2 flex justify-around text-[18px] font-medium tracking-[0.2px] md:text-[20px]">
                <span className="text-brand-text-muted">Antes</span>
                <span className="text-brand">Después</span>
              </div>
            </div>
            <div className="w-full max-w-[289px]">
              <div className="relative aspect-[289/271] overflow-hidden rounded-[20px]">
                <Image
                  src="/assets/landing/chico-antes-despues.png"
                  alt=""
                  fill
                  sizes="289px"
                  className="object-cover"
                />
              </div>
              <div className="mt-2 flex justify-around text-[18px] font-medium tracking-[0.2px] md:text-[20px]">
                <span className="text-brand-text-muted">Antes</span>
                <span className="text-brand">Después</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row lg:flex-nowrap lg:items-start">
            <div className="w-full max-w-[309px] rounded-[23px] bg-[#f5f3f2] p-[30px] shadow-[0_2px_17px_rgba(0,0,0,0.16)]">
              <Image
                src="/assets/landing/estrellas.svg"
                alt=""
                width={152}
                height={23}
                className="h-[23px] w-[152px]"
              />
              <p className="mt-6 text-[16px] leading-normal tracking-[0.17px] text-[#8b8b8b] md:text-[17px]">
                “Abraham me ayudó a cambiar mi vida, a conseguir el cambio que siempre había deseado, y aprender a llevar una vida saludable y sostenida.”
              </p>
              <p className="mt-2 text-[19px] font-semibold tracking-[0.21px] text-[#1b1b1b] md:text-[21px]">
                Natalia López
              </p>
            </div>

            <div className="relative mx-auto aspect-[270/378] w-full max-w-[270px] shrink-0 overflow-hidden rounded-[20px] border-[8px] border-white/70 shadow-lg sm:mx-0">
              <Image
                src="/assets/landing/app-mockup.png"
                alt=""
                fill
                sizes="270px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:justify-start lg:pl-[12%] xl:pl-[22%]">
          <CtaButton
            href="/#app"
            className="rounded-[40px] border-[11px] border-[#efefef] px-8 py-3 text-[18px] font-semibold shadow-md backdrop-blur-[42px]"
          >
            ¡ Comienza la tuya gratis !
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
