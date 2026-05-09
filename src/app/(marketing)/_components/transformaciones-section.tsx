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

          <div className="relative mx-auto mt-14 flex max-w-xl flex-col gap-10 lg:-mt-2 lg:flex-row lg:items-center lg:justify-end lg:gap-0 xl:max-w-none">
            {/* z-[2]: la foto dibuja encima donde se solapa con la valoración */}
            <div className="relative z-[2] order-2 w-full max-w-[290px] self-center lg:order-2 lg:-ml-[4.75rem] lg:mr-8 lg:w-[338px] lg:max-w-[338px] lg:shrink-0 lg:self-center xl:-ml-[5.5rem]">
              <div className="relative aspect-[294/478] overflow-hidden rounded-[22px] border-[10px] border-white/80 shadow-[0_18px_45px_rgba(0,0,0,0.18)] lg:shadow-[0_22px_50px_rgba(0,0,0,0.2)]">
                <Image
                  src="/assets/landing/app-mockup.png"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 290px, 338px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* z-[1]: valoración ligeramente bajo la foto en el área que se cruza */}
            <div className="relative z-[1] order-1 flex w-full max-w-[309px] flex-col gap-5 self-center lg:order-1 lg:max-w-[320px] lg:translate-x-6 lg:self-center xl:translate-x-11">
              <div className="rounded-[23px] bg-[#f5f3f2] p-[30px] shadow-[0_2px_17px_rgba(0,0,0,0.16)]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
