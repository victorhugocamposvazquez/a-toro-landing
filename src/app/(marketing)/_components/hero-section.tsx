import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/landing/bg-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-24 pt-12 pb-24 md:pb-40">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
          {/* Left column: copy + claim */}
          <div className="max-w-[820px]">
            <h1 className="text-[40px] md:text-[60px] leading-[1.05] font-semibold text-brand-text tracking-tight">
              Consigue tu objetivo
            </h1>
            <h2 className="mt-2 text-[32px] md:text-[50px] leading-[1.05] font-medium text-brand-text tracking-tight">
              Transforma tu cuerpo y tu vida
            </h2>
            <p className="mt-6 text-[18px] md:text-[22px] text-brand-text max-w-[780px]">
              Consigue lo que siempre has deseado, de forma clara y transparente,
              sin perder el tiempo, entrenamientos y nutrición para tu forma de vida.
            </p>

            {/* Claim card */}
            <div className="mt-10 rounded-[20px] bg-[#f5f3f2] shadow-[0_2px_17px_rgba(0,0,0,0.16)] p-6 md:p-8 max-w-[670px]">
              <p className="text-[18px] md:text-[21px] font-semibold text-[#1b1b1b]">
                Únete a la mejor APP de entrenos dirigidos.
              </p>
              <p className="mt-2 text-[16px] md:text-[19px] text-brand-text">
                Descubre las bases reales de entrenamientos dirigidos, explicaciones
                al detalle y la nutrición sin humo ni falsas promesas.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5">
                <Link
                  href="/#app"
                  className="inline-flex items-center justify-center rounded-[40px] bg-brand px-10 py-5 text-white text-[18px] md:text-[22px] hover:bg-brand/90 transition-colors"
                >
                  ¡ Pruébala totalmente gratis !
                </Link>

                <div className="flex flex-col gap-1">
                  <Image
                    src="/assets/landing/estrellas.svg"
                    alt="5 estrellas"
                    width={152}
                    height={23}
                    className="h-5 w-auto"
                  />
                  <p className="text-[16px] md:text-[19px] text-[#273766]">
                    + 200 personas la usan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: photo of Abraham */}
          <div className="relative hidden lg:block w-[500px] xl:w-[561px] shrink-0">
            <Image
              src="/assets/landing/abraham-portada.png"
              alt="Abraham Toro"
              width={561}
              height={574}
              priority
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Video preview */}
        <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <Link
            href="/#app"
            aria-label="Ver vídeo de presentación"
            className="relative block w-full max-w-[401px] aspect-[401/290] rounded-[40px] md:rounded-[50px] overflow-hidden border-[6px] border-white shadow-xl"
          >
            <Image
              src="/assets/landing/video-portatil.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 401px, 100vw"
              className="object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/assets/landing/icono-play.svg"
                alt="Reproducir"
                width={125}
                height={95}
                className="h-20 w-auto md:h-[95px]"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
