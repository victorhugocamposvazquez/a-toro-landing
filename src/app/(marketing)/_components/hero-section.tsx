import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa]">
      {/* Halos rosa / terracota */}
      <div
        className="pointer-events-none absolute -right-24 top-8 h-[min(90vw,520px)] w-[min(90vw,520px)] rounded-full bg-[color-mix(in_srgb,var(--brand)_18%,transparent)] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[10%] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[color-mix(in_srgb,var(--brand)_12%,transparent)] blur-[90px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1440px] px-6 pt-10 pb-20 md:px-16 md:pt-14 md:pb-28 lg:px-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_minmax(320px,480px)] lg:gap-16">
          <div className="max-w-[640px]">
            <h1 className="text-[2.25rem] font-bold leading-[1.1] tracking-tight text-brand-text md:text-[3.25rem] lg:text-[3.75rem]">
              Consigue tu objetivo
            </h1>
            <p className="mt-2 text-[1.75rem] font-semibold leading-tight text-brand-text md:text-[2.35rem] lg:text-[2.85rem]">
              Transforma tu cuerpo y tu vida
            </p>
            <p className="mt-5 max-w-[540px] text-base leading-relaxed text-brand-text-muted md:text-lg">
              Consigue lo que siempre has deseado, de forma clara y transparente.
              Entrenamiento y nutrición adaptados a tu vida real.
            </p>

            <div className="mt-8 max-w-[580px] rounded-3xl border border-white/70 bg-white/55 p-6 shadow-[0_8px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl md:p-8">
              <p className="text-lg font-semibold text-brand-text md:text-xl">
                Planes personalizados y seguimiento real
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-text-muted md:text-base">
                Elige tu camino: app, retos y asesoría con la misma exigencia y
                claridad que en el gimnasio.
              </p>

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
                <Link
                  href="/#servicios"
                  className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-brand/92"
                >
                  ¡Empieza ahora mismo!
                </Link>
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/landing/estrellas.svg"
                    alt=""
                    width={120}
                    height={18}
                    className="h-4 w-auto md:h-[18px]"
                  />
                  <p className="text-sm font-medium text-[#273766] md:text-base">
                    4.9/5 <span className="text-brand-text-muted">(1000+ reseñas)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Foto + vídeo flotante */}
          <div className="relative mx-auto w-full max-w-[440px] pb-28 lg:mx-0 lg:max-w-none lg:justify-self-end lg:pb-0">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100%,420px)] w-[min(100%,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color-mix(in_srgb,var(--brand)_20%,transparent)] blur-[80px]"
              aria-hidden
            />
            <div className="relative">
              <Image
                src="/assets/landing/abraham-portada.png"
                alt="Abraham Toro"
                width={561}
                height={574}
                priority
                className="relative z-[1] w-full rounded-3xl object-cover shadow-2xl"
              />
              <Link
                href="/#app"
                aria-label="Ver vídeo de presentación"
                className="absolute -bottom-4 -right-2 z-[2] w-[min(100%,320px)] overflow-hidden rounded-[2rem] border-[5px] border-white shadow-xl sm:-right-4 md:bottom-6 md:w-[360px]"
              >
                <span className="relative block aspect-[401/290] w-full">
                  <Image
                    src="/assets/landing/video-portatil.png"
                    alt=""
                    fill
                    sizes="360px"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <Image
                      src="/assets/landing/icono-play.svg"
                      alt=""
                      width={100}
                      height={76}
                      className="h-16 w-auto drop-shadow-md md:h-[76px]"
                    />
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
