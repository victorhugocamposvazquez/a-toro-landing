import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
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

      <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-8 md:px-16 md:pb-28 md:pt-10 lg:px-24 xl:pl-[97px] xl:pr-[80px]">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_min(561px,44vw)] lg:gap-8">
          <div className="max-w-[min(100%,780px)]">
            <h1 className="text-[40px] font-semibold leading-normal tracking-[0.6px] text-[#383737] md:text-[52px] lg:text-[60px]">
              Consigue tu objetivo
            </h1>
            <h2 className="mt-1 text-[32px] font-medium leading-normal tracking-[0.5px] text-[#383737] md:text-[44px] lg:text-[50px]">
              Transforma tu cuerpo y tu vida
            </h2>
            <div className="mt-5 text-[18px] font-normal leading-normal tracking-[0.24px] text-[#383737] md:text-[22px] lg:text-[24px]">
              <p>Consigue lo que siempre has deseado, de forma clara y transparente,</p>
              <p>sin perder el tiempo, entrenamientos y nutrición para tu forma de vida.</p>
            </div>

            <div className="mt-8 max-w-[670px] rounded-[20px] bg-[#f5f3f2] p-6 shadow-[0_2px_17px_rgba(0,0,0,0.16)] md:p-[30px]">
              <p className="text-[18px] font-semibold leading-normal tracking-[0.21px] text-[#1b1b1b] md:text-[21px]">
                Únete a la mejor APP de entrenos dirigidos.{" "}
              </p>
              <div className="mt-2 text-[16px] font-normal tracking-[0.19px] text-[#383737] md:text-[19px]">
                <p>Descubre las bases reales de entrenamientos dirigidos, explicaciones</p>
                <p>al detalle y la nutrición sin humo ni falsas promesas.</p>
              </div>
              <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-[25px]">
                <Link
                  href="/#app"
                  className="inline-flex items-center justify-center rounded-[40px] bg-brand px-10 py-5 text-[20px] font-normal tracking-[0.22px] text-white hover:bg-brand/90 md:text-[22px]"
                >
                  ¡ Pruébala totalmente gratis !{" "}
                </Link>
                <div className="flex w-[203px] flex-col gap-[7px]">
                  <Image
                    src="/assets/landing/estrellas.svg"
                    alt=""
                    width={152}
                    height={23}
                    className="h-[23px] w-[152px]"
                  />
                  <p className="text-[17px] font-normal tracking-[0.19px] text-[#273766] md:text-[19px]">
                    + 200 personas la usan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[561px] pb-40 sm:pb-48 lg:mx-0 lg:mt-[60px] lg:pb-8">
            <Image
              src="/assets/landing/abraham-portada.png"
              alt="Abraham Toro"
              width={561}
              height={574}
              priority
              sizes="(min-width: 1024px) 561px, 100vw"
              className="relative z-[1] h-auto w-full"
            />
            <Link
              href="/#app"
              aria-label="Ver vídeo de presentación"
              className="absolute bottom-0 left-1/2 z-[2] w-[calc(100%-2rem)] max-w-[401px] -translate-x-1/2 overflow-hidden rounded-[40px] border-[6px] border-white shadow-xl sm:left-auto sm:right-[2%] sm:translate-x-0 md:rounded-[50px] lg:-bottom-6 lg:right-[-32px] lg:w-[401px]"
            >
              <span className="relative block aspect-[401/290] w-full lg:h-[290px]">
                <Image
                  src="/assets/landing/video-portatil.png"
                  alt=""
                  fill
                  sizes="401px"
                  className="object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/assets/landing/icono-play.svg"
                    alt=""
                    width={125}
                    height={95}
                    className="h-[76px] w-auto md:h-[95px]"
                  />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
