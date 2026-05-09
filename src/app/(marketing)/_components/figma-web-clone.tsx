"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const MarketingMobileLanding = dynamic(
  () =>
    import("./marketing-mobile-landing").then((m) => ({
      default: m.MarketingMobileLanding,
    })),
  { loading: () => <LandingShell /> },
);

const FigmaDesktopClone = dynamic(
  () =>
    import("./figma-desktop-clone").then((m) => ({
      default: m.FigmaDesktopClone,
    })),
  { loading: () => <LandingShell /> },
);

/** Placeholder muy ligero: evita cargar árboles pesados antes de conocer breakpoint. */
function LandingShell() {
  return (
    <div
      className="min-h-svh bg-white"
      aria-hidden
      // Breve marca en el medio para CLS mínimo; sin imágenes.
    />
  );
}

export function FigmaWebClone() {
  const [ready, setReady] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", apply);
    queueMicrotask(() => {
      setIsDesktop(mq.matches);
      setReady(true);
    });
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (!ready) {
    return <LandingShell />;
  }

  return isDesktop ? (
    <FigmaDesktopClone />
  ) : (
    <MarketingMobileLanding />
  );
}
