import { AppFitnessSection } from "./_components/app-fitness-section";
import { HeroSection } from "./_components/hero-section";
import { RedGymsSection } from "./_components/red-gyms-section";
import { RetosSection } from "./_components/retos-section";
import { ServiciosSection } from "./_components/servicios-section";
import { SoyAbrahamSection } from "./_components/soy-abraham-section";
import { TransformacionesSection } from "./_components/transformaciones-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiciosSection />
      <TransformacionesSection />
      <AppFitnessSection />
      <RedGymsSection />
      <RetosSection />
      <SoyAbrahamSection />
    </>
  );
}
