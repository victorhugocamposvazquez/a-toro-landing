"use client";

/* eslint-disable @next/next/no-img-element */

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState, type ReactNode } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import {
  FEATURE_ICON_SPRITE_H,
  FEATURE_ICON_SPRITE_W,
  LANDING_ASSET_BASE,
  landingAppFeatures,
  landingChallenges,
  landingFeatureIconOffsetsMobile,
  landingGyms,
  landingServices,
  type LandingChallenge,
  type LandingGym,
  type LandingAppFeature,
  type LandingService,
} from "./landing-content";

const A = LANDING_ASSET_BASE;

const nav = [
  { href: "/#servicios", label: "Entrenamientos online" },
  { href: "/#transformaciones", label: "Transformaciones" },
  { href: "/#retos", label: "Retos" },
  { href: "/#app", label: "APP" },
  { href: "/#asesoria", label: "Tu asesoría" },
] as const;

export function MarketingMobileLanding({ className }: { className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={cn("bg-white text-[#383737]", className)}>
      <MobileHeader
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavigate={() => setMenuOpen(false)}
      />

      <HeroMobile onNavigate={() => setMenuOpen(false)} />

      <section
        id="servicios"
        className="scroll-mt-[4.5rem] bg-gradient-to-b from-[#f6f1f5] to-white px-5 pb-14 pt-12"
      >
        <div className="mx-auto max-w-lg">
          <SectionHeading
            title="Servicios online personalizados"
            subtitle={
              <>
                <p>Descubre todas las ventajas de mis programas online</p>
                <p>adaptados a todo tipo de objetivos.</p>
              </>
            }
          />
          <div className="mt-10 flex flex-col gap-5">
            {landingServices.map((service, index) => (
              <MobileServiceCard
                key={service.title}
                service={service}
                index={index}
                onNavigate={() => setMenuOpen(false)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="transformaciones"
        className="scroll-mt-[4.5rem] bg-[#ebebeb] px-5 py-14 pb-20"
      >
        <div className="mx-auto max-w-lg">
          <SectionHeading
            title="Increíbles transformaciones"
            subtitle="Estos son algunos de los clientes que han logrado resultados con mis programas a través de la app."
          />
          <div className="mt-10 space-y-12">
            <BeforeAfterBlock
              src={`${A}/chica-antes-despues.png`}
              imgClass="h-full w-[121%] max-w-none -translate-x-[13%]"
            />
            <BeforeAfterBlock
              src={`${A}/chico-antes-despues.png`}
              imgClass="h-[100%] w-[129%] max-w-none -translate-x-[19%]"
            />
          </div>
          <div className="relative mt-10 rounded-[23px] bg-[#f5f3f2] p-6 shadow-[0_2px_17px_rgba(0,0,0,0.16)]">
            <img alt="" loading="lazy" decoding="async" src={`${A}/estrellas.svg`} className="h-[23px] w-[152px]" />
            <p className="mt-6 text-[17px] leading-relaxed tracking-[0.17px] text-[#8b8b8b]">
              “Abraham me ayudó a cambiar mi vida, a conseguir el cambio que siempre había deseado, y aprender a
              llevar una vida saludable y sostenida.”
            </p>
            <p className="mt-4 text-[21px] font-semibold leading-normal tracking-[0.21px] text-[#1b1b1b]">
              Natalia López
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="rounded-full bg-[#efefef] p-[11px]">
              <Link
                href="/#app"
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "box-border inline-flex min-h-[3.375rem] items-center justify-center rounded-full bg-brand px-8 py-[1.125rem]",
                  "text-center text-[17px] font-semibold leading-[1.4] tracking-normal text-white antialiased shadow-md",
                  "decoration-transparent",
                )}
              >
                ¡ Comienza la tuya gratis !
              </Link>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="relative w-[min(100%,270px)] shrink-0 rounded-[20px] border-[11px] border-white/70 shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                src={`${A}/app-mockup.png`}
                className="block w-full rounded-[12px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="app" className="scroll-mt-[4.5rem] bg-white px-5 py-14 pb-16">
        <div className="relative mx-auto max-w-lg text-center">
          <h2 className="text-[1.65rem] font-semibold leading-snug tracking-[0.02em]">
            <span className="font-bold text-brand">App fitness:</span>
            <span> tu progreso, en tus manos</span>
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
            Accede a la herramienta que te acompañará en cada entrenamiento
          </p>
          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-[340px]">
              <img
                alt=""
                loading="lazy"
                decoding="async"
                src={`${A}/moviles-mockup.png`}
                className="mx-auto h-auto w-[177%] max-w-none -translate-x-[10%]"
              />
            </div>
          </div>
          <div className="mt-6 rounded-[30px] border border-border bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.08)]">
            <div className="flex flex-col gap-8">
              {landingAppFeatures.map((feature, index) => (
                <MobileFeature key={feature.title} feature={feature} index={index} />
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-3">
              <StoreButton type="apple" />
              <StoreButton type="google" />
            </div>
          </div>
        </div>
      </section>

      <section id="gimnasios" className="scroll-mt-[4.5rem] bg-[#ebebeb] px-5 py-14">
        <div className="mx-auto max-w-lg">
          <SectionHeading
            className="items-center text-center"
            titleClassName="text-balance"
            title="Entrenos en los mejores Gimnasios de España"
            subtitle="Descubre mis rutinas en los gimnasios que visito podrás ver los entrenos creados por Abraham Toro."
          />
          <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 ps-5 pe-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {landingGyms.map((gym) => (
              <MobileGymCard key={gym.title} gym={gym} />
            ))}
          </div>
          <div
            id="asesoria"
            className="scroll-mt-[4.5rem] mt-12 flex flex-col items-center gap-5 rounded-[30px] bg-[#161616] px-5 py-7 text-center shadow-[0_2px_8.5px_rgba(0,0,0,0.25)]"
          >
            <p className="text-[17px] font-semibold tracking-[0.17px] text-white">
              ¿ Quieres colaborar con Abraham Toro?
            </p>
            <p className="max-w-prose text-[13px] leading-relaxed tracking-[0.12px] text-[#cdcdcd]">
              ¿Tienes un ginmasio y te interesaría aparecer aquí y tus clientes tengan visibilidad con mis entrenos y
              rutinas con toda tu maquinaria?
            </p>
            <Link
              href="mailto:info@abrahamtoro.com"
              className="inline-flex items-center justify-center rounded-[10px] bg-brand px-8 py-3 text-[16px] tracking-[0.16px] text-white"
            >
              <span className="font-bold">Hablamos </span>
              <span>-&gt;</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="retos" className="scroll-mt-[4.5rem] bg-white px-5 py-14">
        <div className="mx-auto max-w-lg">
          <SectionHeading
            className="items-center text-center"
            titleClassName="text-balance"
            title="Retos disponibles para cambiar tu físico"
            subtitle="Usa mis retos para conseguir objetivos concretos, para personas que necesiten metas concretas."
          />
          <div className="mt-10 flex flex-col gap-5">
            {landingChallenges.map((challenge) => (
              <MobileChallengeCard key={challenge.title} challenge={challenge} />
            ))}
          </div>
          <Link
            href="/retos"
            className="mt-10 flex w-full items-center justify-center rounded-[10px] bg-[#161616] px-6 py-3.5 text-[14px] font-bold tracking-[0.14px] text-white"
          >
            Ver todos mis retos 💪
          </Link>
        </div>
      </section>

      <section
        id="contenido"
        className="scroll-mt-[4.5rem] px-5 py-16"
        style={{
          backgroundImage:
            "linear-gradient(-0.4deg, #c9a9a9 0.77%, #e9e9e9 52%, #ffffff 98.46%)",
        }}
      >
        <div className="mx-auto max-w-lg">
          <div className="text-center">
            <h2 className="text-[1.65rem] font-semibold tracking-[0.4px]">
              <span>Soy </span>
              <span className="text-brand">Abraham Toro</span>
              <span>, y este es mi contenido</span>
            </h2>
            <p className="mt-3 text-[1.05rem] leading-relaxed tracking-[0.02em] text-[#717171]">
              Disfruta con mi contenido en redes sociales y sígueme para más cotenido de life Style
            </p>
          </div>
          <div className="relative mt-8 overflow-hidden rounded-[20px] border-[7px] border-white/60 shadow-xl">
            <img
              alt=""
              loading="lazy"
              decoding="async"
              src={`${A}/soy-abraham-collage.png`}
              className="aspect-[4/5] w-full object-cover sm:aspect-video"
            />
            <Link
              href="https://instagram.com/abrahamtoro"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-1/2 top-1/2 flex max-w-[min(90%,320px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-[10px] border-[11px] border-white/10 bg-[#161616] px-5 py-4 text-center font-bold text-white shadow-[-3px_-1px_16.5px_white]"
            >
              <span className="text-[13px] tracking-[0.13px]">Sígueme en Instagram</span>
              <span className="mt-1 text-[1.35rem] tracking-[0.02em]">
                <span className="font-normal">A por</span> 1 Millón! 🚀
              </span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-white px-5 pb-10 pt-8">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-8">
          <img
            alt=""
            loading="lazy"
            decoding="async"
            src={`${A}/social-media-icons.svg`}
            className="h-[72px] w-[276px]"
          />
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[14px] tracking-[0.14px]">
            <Link href="/#contenido" className="text-foreground">
              Sobre Abraham Toro
            </Link>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">Preguntas frecuentes</span>
            <span className="text-muted-foreground">·</span>
            <Link href="/legal/privacidad" className="text-foreground">
              Privacidad
            </Link>
          </div>
          <p className="text-center text-[14px] leading-relaxed tracking-[0.14px]">
            <span className="font-bold text-brand">Coloboraciones:</span>{" "}
            <span className="text-foreground">
              ¿ Eres una <span className="font-semibold">empresa</span>, <span className="font-semibold">marca</span> o{" "}
              <span className="font-semibold">entrenador</span> ?
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

function MobileHeader({
  menuOpen,
  setMenuOpen,
  onNavigate,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  onNavigate: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-white/90 backdrop-blur-md supports-backdrop-filter:bg-white/75">
      <div className="mx-auto flex h-[4.25rem] max-w-lg items-center justify-between px-4 sm:px-5">
        <Link href="/" className="flex items-center gap-2.5" onClick={onNavigate}>
          <div className="relative h-[52px] w-20 shrink-0">
            <img
              alt="AT"
              decoding="async"
              src={`${A}/logotipo-at.svg`}
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <img
              alt="Abraham"
              loading="lazy"
              decoding="async"
              src={`${A}/texto-abraham.svg`}
              className="h-[13px] w-[110px]"
            />
            <img
              alt="Toro"
              loading="lazy"
              decoding="async"
              src={`${A}/texto-toro.svg`}
              className="h-[13px] w-[62px]"
            />
          </div>
        </Link>

        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-white text-foreground shadow-sm"
            aria-label="Abrir menú"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="flex h-full w-[min(100%,20rem)] flex-col gap-0 p-0">
            <SheetHeader className="border-b border-border/60 p-5 text-left">
              <SheetTitle className="text-lg">Menú</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col p-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3.5 text-[17px] text-foreground active:bg-muted"
                  onClick={onNavigate}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto border-t border-border/60 p-4">
              <Link
                href="/#asesoria"
                className="flex w-full items-center justify-center rounded-full bg-brand py-3.5 text-[17px] font-medium text-white shadow-sm"
                onClick={onNavigate}
              >
                ¡ Transfórmate !
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function HeroMobile({ onNavigate }: { onNavigate: () => void }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt=""
          fetchPriority="high"
          decoding="async"
          src={`${A}/bg-hero.png`}
          className="h-full w-full scale-110 object-cover object-[center_22%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative px-5 pb-8 pt-6">
        <div className="mx-auto max-w-lg">
          <h1 className="text-[2.1rem] font-semibold leading-tight tracking-[0.02em] text-white drop-shadow-md sm:text-[2.35rem]">
            Consigue tu objetivo
          </h1>
          <p className="mt-1 text-[1.65rem] font-medium leading-tight tracking-[0.02em] text-white/95 drop-shadow-md sm:text-[1.85rem]">
            Transforma tu cuerpo y tu vida
          </p>
          <p className="mt-5 max-w-prose text-[1.05rem] leading-relaxed tracking-[0.02em] text-white/92 drop-shadow">
            Consigue lo que siempre has deseado, de forma clara y transparente, sin perder el tiempo, entrenamientos y
            nutrición para tu forma de vida.
          </p>

          <div className="relative flex justify-center">
            <div className="relative w-[min(100%,420px)]">
              <img
                alt="Abraham Toro"
                fetchPriority="high"
                decoding="async"
                src={`${A}/abraham-portada.png`}
                className="relative z-10 mx-auto h-auto w-full max-w-[340px] object-contain drop-shadow-2xl"
              />
              <Link
                href="/#app"
                onClick={onNavigate}
                className="absolute bottom-2 right-0 z-20 w-[min(62%,240px)] sm:bottom-4 sm:right-2"
                aria-label="Ver vídeo de presentación"
              >
                <div className="relative overflow-hidden rounded-[28px] border-[5px] border-white shadow-xl">
                  <img
                    alt=""
                    loading="lazy"
                    decoding="async"
                    src={`${A}/video-portatil.png`}
                    className="block w-full object-cover"
                  />
                </div>
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  src={`${A}/icono-play.svg`}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-[4.5rem] -translate-x-1/2 -translate-y-1/2 drop-shadow-lg sm:h-[4.25rem] sm:w-[5.25rem]"
                />
              </Link>
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-6 overflow-hidden rounded-[22px] bg-[#f5f3f2] p-6 shadow-[0_2px_17px_rgba(0,0,0,0.16)] ring-1 ring-black/5">
            <div>
              <p className="text-[1.15rem] font-semibold leading-snug tracking-[0.02em] text-[#1b1b1b]">
                Únete a la mejor APP de entrenos dirigidos.{" "}
              </p>
              <p className="mt-2 text-[1.02rem] leading-relaxed tracking-[0.02em] text-[#383737]">
                Descubre las bases reales de entrenamientos dirigidos, explicaciones al detalle y la nutrición sin humo
                ni falsas promesas.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/#app"
                onClick={onNavigate}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-brand px-6 py-4 text-center text-[1.05rem] font-medium tracking-[0.02em] text-white shadow-sm"
              >
                ¡ Pruébala totalmente gratis !{" "}
              </Link>
              <div className="flex flex-col items-center gap-2 sm:items-end">
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  src={`${A}/estrellas.svg`}
                  className="h-[23px] w-[152px]"
                />
                <p className="text-[1rem] tracking-[0.02em] text-[#273766]">+ 200 personas la usan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  title,
  subtitle,
  className,
  titleClassName,
}: {
  title: string;
  subtitle: ReactNode;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2 leading-normal", className)}>
      <h2 className={cn("text-[1.65rem] font-semibold tracking-[0.4px] sm:text-[1.85rem]", titleClassName)}>
        {title}
      </h2>
      <div className="text-lg leading-relaxed tracking-[0.02em] text-muted-foreground">{subtitle}</div>
    </div>
  );
}

function MobileServiceCard({
  service,
  index,
  onNavigate,
}: {
  service: LandingService;
  index: number;
  onNavigate: () => void;
}) {
  return (
    <article className="flex flex-col gap-4 rounded-[28px] bg-white p-6 shadow-[0_2px_8.5px_rgba(0,0,0,0.2)] ring-1 ring-black/5">
      <div className="flex items-start gap-3">
        <div className="relative mt-1 h-[60px] shrink-0 overflow-hidden">
          <MobileServiceIcon icon={service.icon} />
        </div>
        <div className="min-w-0 flex-1 font-semibold leading-snug">
          <h3 className="text-[19px] tracking-[0.19px] text-black">{service.title}</h3>
          <p className="text-[18px] tracking-[0.18px] text-brand">{service.badge}</p>
        </div>
      </div>
      <div className="text-[15px] leading-relaxed tracking-[0.14px] text-black">{service.body}</div>
      <Link
        href={index === 2 ? "/#retos" : "/#app"}
        onClick={onNavigate}
        className="mt-1 inline-flex w-full items-center justify-center rounded-[12px] bg-brand px-6 py-3.5 text-[16px] font-bold tracking-[0.16px] text-white"
      >
        {service.button}
        <span className="ms-2 font-normal">-&gt;</span>
      </Link>
    </article>
  );
}

function MobileServiceIcon({ icon }: { icon: LandingService["icon"] }) {
  const position = {
    calendar: "left-[-12px] top-[-46px]",
    apple: "left-[-88px] top-[-44px]",
    dumbbell: "left-[-167px] top-[-44px]",
  }[icon];

  return (
    <span className="relative block h-[60px] w-[78px] overflow-hidden">
      <img
        alt=""
        loading="lazy"
        decoding="async"
        src={`${A}/iconos-servicios.png`}
        className={`absolute h-[156px] w-[246px] max-w-none ${position}`}
      />
    </span>
  );
}

function BeforeAfterBlock({ src, imgClass }: { src: string; imgClass: string }) {
  return (
    <div>
      <div className="overflow-hidden rounded-[20px] shadow-md ring-1 ring-black/10">
        <div className="aspect-[311/271] w-full overflow-hidden bg-neutral-200">
          <img alt="" loading="lazy" decoding="async" src={src} className={cn("object-cover", imgClass)} />
        </div>
      </div>
      <div className="mt-3 flex justify-between px-4 text-[17px] font-medium tracking-[0.02em]">
        <span className="text-muted-foreground">Antes</span>
        <span className="text-brand">Después</span>
      </div>
    </div>
  );
}

function MobileFeature({ feature, index }: { feature: LandingAppFeature; index: number }) {
  const o = landingFeatureIconOffsetsMobile[index]!;

  return (
    <div className="flex flex-row items-start gap-4 text-left">
      <span className="relative mt-1 block size-[72px] shrink-0 overflow-hidden">
        <img
          alt=""
          loading="lazy"
          decoding="async"
          src={`${A}/icono-feature.png`}
          width={FEATURE_ICON_SPRITE_W}
          height={FEATURE_ICON_SPRITE_H}
          className="pointer-events-none absolute h-[160px] w-[240px] max-w-none select-none"
          style={{ left: `${o.leftPx}px`, top: `${o.topPx}px` }}
        />
      </span>
      <div className="min-w-0 flex-1 pt-1">
        <p className="text-[16px] font-semibold leading-snug tracking-[0.16px] text-black">{feature.title}</p>
        <p className="mt-2 text-[14px] leading-relaxed tracking-[0.12px] text-black/80">{feature.body}</p>
      </div>
    </div>
  );
}

function StoreButton({ type }: { type: "apple" | "google" }) {
  const isApple = type === "apple";
  return (
    <Link
      href={isApple ? "https://apps.apple.com" : "https://play.google.com"}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-h-[4.75rem] w-full shrink-0 items-center justify-center gap-4 rounded-[10px] bg-black px-4 py-3.5 text-white shadow-sm",
      )}
    >
      <img
        alt=""
        loading="lazy"
        decoding="async"
        src={isApple ? `${A}/apple-mask.png` : `${A}/google-play.png`}
        className={isApple ? "h-[52px] w-[48px] object-contain" : "h-[46px] w-[58px] object-cover"}
      />
      <span className="flex flex-col items-start gap-0.5 text-left leading-tight">
        <span className="text-[12px] tracking-[0.14px] text-white/85">Compatible con dispositivos</span>
        <span className="text-[16px] font-bold tracking-[0.18px]">{isApple ? "Apple" : "Google Play"}</span>
      </span>
    </Link>
  );
}

function MobileGymCard({ gym }: { gym: LandingGym }) {
  return (
    <article className="relative flex w-[min(85vw,280px)] shrink-0 snap-center flex-col items-center gap-3 overflow-hidden rounded-[28px] p-6 shadow-[0_2px_8.5px_rgba(0,0,0,0.22)] ring-1 ring-black/5">
      <div className="absolute inset-0 rounded-[28px] bg-white" />
      <img
        alt=""
        loading="lazy"
        decoding="async"
        src={`${A}/bg-card-gym.png`}
        className="absolute left-[-2%] top-[28%] h-[72%] w-[104%] max-w-none"
      />
      <div className="relative flex flex-col items-center gap-3">
        <img alt="" loading="lazy" decoding="async" src={gym.logo} className={gym.logoClass} />
        <p className="text-center text-[15px] font-semibold tracking-[0.16px]">{gym.title}</p>
        <p className="min-h-[3rem] text-center text-[12px] leading-relaxed tracking-[0.12px] text-[#606060]">
          {gym.body}
        </p>
        <Link
          href="/#app"
          className="inline-flex items-center justify-center rounded-[10px] bg-brand px-8 py-3 text-[15px] tracking-[0.16px] text-white"
        >
          <span className="font-bold">Entrenos</span>
          <span className="ms-1">-&gt;</span>
        </Link>
      </div>
    </article>
  );
}

function MobileChallengeCard({ challenge }: { challenge: LandingChallenge }) {
  return (
    <article className="flex flex-col gap-4 overflow-hidden rounded-[28px] bg-white p-5 shadow-[0_2px_8.5px_rgba(0,0,0,0.2)] ring-1 ring-black/5 sm:flex-row sm:items-stretch">
      <img
        alt=""
        loading="lazy"
        decoding="async"
        src={challenge.image}
        className="aspect-[198/153] w-full shrink-0 rounded-2xl object-cover sm:h-[140px] sm:w-[160px]"
      />
      <div className="flex flex-1 flex-col gap-3">
        <div>
          <p className="text-[16px] font-semibold leading-snug tracking-[0.16px] text-black">{challenge.title}</p>
          <div className="mt-2 text-[14px] font-medium leading-snug tracking-[0.14px] text-brand">{challenge.badge}</div>
        </div>
        <div className="text-[13px] leading-relaxed tracking-[0.12px] text-black">{challenge.body}</div>
        <Link
          href={challenge.href}
          className="mt-auto inline-flex w-fit items-center justify-center rounded-[10px] bg-brand px-8 py-2.5 text-[14px] tracking-[0.14px] text-white"
        >
          <span className="font-bold">Empieza ahora gratis</span>
          <span className="ms-2">-&gt;</span>
        </Link>
      </div>
    </article>
  );
}
