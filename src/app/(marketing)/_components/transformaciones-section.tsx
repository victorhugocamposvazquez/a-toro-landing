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

        <div className="mt-12 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          {/* 1 — Antes / después (mujer) */}
          <div className="flex w-full max-w-[260px] flex-col lg:w-[22%] lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/assets/landing/chica-antes-despues.png"
                alt=""
                fill
                sizes="(max-width: 1023px) 260px, 22vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex justify-around text-[18px] font-medium tracking-[0.2px] md:text-[20px]">
              <span className="text-brand-text-muted">Antes</span>
              <span className="text-brand">Después</span>
            </div>
          </div>

          {/* 2 — Antes / después (hombre) */}
          <div className="flex w-full max-w-[260px] flex-col lg:w-[22%] lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
              <Image
                src="/assets/landing/chico-antes-despues.png"
                alt=""
                fill
                sizes="(max-width: 1023px) 260px, 22vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex justify-around text-[18px] font-medium tracking-[0.2px] md:text-[20px]">
              <span className="text-brand-text-muted">Antes</span>
              <span className="text-brand">Después</span>
            </div>
          </div>

          {/* 3 — Testimonio (card) + CTA debajo */}
          <div className="flex w-full max-w-[320px] flex-col items-center lg:w-[24%] lg:max-w-none">
            <div className="w-full rounded-[24px] bg-white p-[28px] shadow-[0_6px_28px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.07]">
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
              <p className="mt-3 text-[19px] font-semibold tracking-[0.21px] text-[#1b1b1b] md:text-[21px]">
                Natalia López
              </p>
            </div>
            <CtaButton
              href="/#app"
              className="mt-5 rounded-full px-8 py-3.5 text-[16px] font-semibold shadow-sm md:text-[17px]"
            >
              ¡ Comienza la tuya gratis !
            </CtaButton>
          </div>

          {/* 4 — Foto Abraham */}
          <div className="flex w-full max-w-[280px] flex-col lg:w-[24%] lg:max-w-none">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
              <Image
                src="/assets/landing/app-mockup.png"
                alt=""
                fill
                sizes="(max-width: 1023px) 280px, 24vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}