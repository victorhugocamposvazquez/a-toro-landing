import Image from "next/image";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";

export function TransformacionesSection() {
  return (
    <section id="transformaciones" className="bg-[#ebebeb] py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 lg:px-24 xl:max-w-[1520px] xl:px-12 2xl:px-16">
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

          <div className="relative mx-auto mt-14 grid w-full max-w-xl grid-cols-1 gap-10 lg:mx-0 lg:-mt-2 lg:max-w-none lg:grid-cols-[minmax(0,328px)_minmax(288px,1fr)] lg:items-stretch lg:justify-items-stretch lg:gap-0 xl:max-w-[1100px] 2xl:max-w-none">
            <div className="relative z-[10] flex w-full max-w-[309px] flex-col gap-4 justify-self-center lg:col-start-1 lg:max-w-[328px] lg:justify-self-start">
              <div className="rounded-[24px] bg-white p-[30px] shadow-[0_6px_28px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.07]">
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
              <div className="flex justify-center sm:justify-start lg:justify-center">
                <div className="rounded-full bg-[#efefef] p-[11px]">
                  <CtaButton
                    href="/#app"
                    className="rounded-full px-10 py-4 text-[18px] font-semibold shadow-md"
                  >
                    ¡ Comienza la tuya gratis !
                  </CtaButton>
                </div>
              </div>
            </div>

            <div className="relative z-[20] mx-auto aspect-[294/478] w-full max-w-[290px] overflow-hidden rounded-[22px] border-[10px] border-white/85 shadow-[0_20px_52px_rgba(0,0,0,0.2)] lg:col-start-2 lg:z-[20] lg:mx-0 lg:-ml-14 lg:aspect-auto lg:h-full lg:max-w-none lg:min-h-0 lg:border-[10px] lg:shadow-[0_24px_56px_rgba(0,0,0,0.22)]">
              <Image
                src="/assets/landing/app-mockup.png"
                alt=""
                fill
                sizes="(max-width: 1023px) 290px, 40vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
