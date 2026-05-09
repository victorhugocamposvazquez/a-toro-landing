import type { ReactNode } from "react";

export const LANDING_ASSET_BASE = "/assets/landing";

export type LandingService = {
  icon: "dumbbell" | "apple" | "calendar";
  title: string;
  badge: string;
  body: ReactNode;
  button: string;
};

export type LandingGym = {
  logo: string;
  logoClass: string;
  title: string;
  body: string;
};

export type LandingChallenge = {
  image: string;
  title: string;
  badge: ReactNode;
  body: ReactNode;
  href: string;
};

export type LandingAppFeature = {
  title: string;
  body: string;
};

/**
 * Sprite 2×2 en `/assets/landing/icono-feature.png` (240×160).
 * Índices 0–3: TL campana · TR check · BL portapapeles · BR barras.
 * Offsets centran cada icono en su cuadrante según el tamaño del recorte (evita recortes).
 */
export const landingFeatureIconOffsetsDesktop: readonly { leftPx: number; topPx: number }[] = [
  { leftPx: -22, topPx: -2 },
  { leftPx: -142, topPx: -2 },
  { leftPx: -22, topPx: -82 },
  { leftPx: -142, topPx: -82 },
] as const;

export const FEATURE_ICON_SPRITE_W = 240;
export const FEATURE_ICON_SPRITE_H = 160;
export const landingAppFeatures: LandingAppFeature[] = [
  {
    title: "Avisos y constancia",
    body: "Recordatorios que te mantienen al día con entrenos y hábitos alineados a tu plan.",
  },
  {
    title: "Metas marcadas cumplidas",
    body: "Marca cada sesión y comprueba día a día el avance hacia tu objetivo.",
  },
  {
    title: "Planes ordenados día a día",
    body: "Rutinas y guías claras para saber en cada momento qué toca entrenar.",
  },
  {
    title: "Seguimiento del progreso",
    body: "Visualiza cómo cambias semana a semana y anticipa tus resultados.",
  },
];

export const landingServices: LandingService[] = [
  {
    icon: "dumbbell",
    title: "Plan de entrenamiento",
    badge: "1 semana gratis",
    body: (
      <>
        <p>Empieza desde 0 con una rutina construida</p>
        <p>para ti y fácil de seguir.</p>
      </>
    ),
    button: "Empieza ahora gratis",
  },
  {
    icon: "apple",
    title: "Guía nutricional",
    badge: "1 semana gratis",
    body:
      "Aprende a come, cuando y porqué sin, con los mejores planes para conseguir tu objetivo.",
    button: "Empieza ahora gratis",
  },
  {
    icon: "calendar",
    title: "Reto de 2 semanas",
    badge: "Gratis",
    body: "Únete a nuestro reto semanal de 2 semanas totalmente gratis desde nuestra app.",
    button: "Participa ahora gratis",
  },
];

export const landingGyms: LandingGym[] = [
  {
    logo: `${LANDING_ASSET_BASE}/gym-fitness-park.png`,
    logoClass: "h-[46px] w-[168px] object-contain",
    title: "Entrenando en Fitness Park",
    body:
      "Entrenos completos funcionales de las maquinas de Fitness park a nivel nacional.",
  },
  {
    logo: `${LANDING_ASSET_BASE}/gym-basic-fit.png`,
    logoClass: "h-[44px] w-[152px] object-contain",
    title: "Entrenando en Basic-Fit",
    body:
      "Entrenos completos funcionales de las maquinas de Basic-Fit a nivel nacional.",
  },
  {
    logo: `${LANDING_ASSET_BASE}/gym-gofit.png`,
    logoClass: "h-[48px] w-[137px] object-contain",
    title: "Entrenando en Gofit",
    body:
      "Entrenos completos funcionales de las maquinas de gofit  a nivel nacional.",
  },
  {
    logo: `${LANDING_ASSET_BASE}/gym-metropolitan.svg`,
    logoClass: "h-[64px] w-[78px] object-contain",
    title: "Entrenando en Metropolitan",
    body:
      "Entrenos completos funcionales de las maquinas de Metropolitan  a nivel nacional.",
  },
];

export const landingChallenges: LandingChallenge[] = [
  {
    image: `${LANDING_ASSET_BASE}/reto-abdominales.png`,
    title: "Abdominales en casa  con Almohadas",
    badge: "Reto de 7 días de abdominales",
    body:
      "Fortalece tus abdominales en casa con una almohada siguiendo mi reto de 7 días.",
    href: "/retos/abdominales",
  },
  {
    image: `${LANDING_ASSET_BASE}/reto-rompepiernas.png`,
    title: "Reto Rompepiernas ",
    badge: "Reto de 2 semanas para tener estas piernas",
    body: (
      <>
        <p>Consigue unas piernas fuertes y estilizadas en el</p>
        <p>reto rompepiernas del gymnasio de 20 días </p>
      </>
    ),
    href: "/retos/rompepiernas",
  },
  {
    image: `${LANDING_ASSET_BASE}/reto-culo.png`,
    title: "Reto Culo grande",
    badge: (
      <>
        <p>Reto de 10 días para conseguir un culo</p>
        <p>grande.</p>
      </>
    ),
    body: "Sigue mi reto de glúteos para fortalecer el culo en tan solo 10 días.",
    href: "/retos/culo-grande",
  },
  {
    image: `${LANDING_ASSET_BASE}/reto-biceps.png`,
    title: "Reto biceps de popelle ",
    badge: (
      <>
        <p>Reto de 4 semanas para conseguir los mejores</p>
        <p>biceps</p>
      </>
    ),
    body: "Si quieres tener biceps grandes, sigueme en este reto y conviértete en popelle.",
    href: "/retos/biceps",
  },
];
