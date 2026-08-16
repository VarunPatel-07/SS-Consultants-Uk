import { HeroSection } from "@/components/sections/hero-section";
import { NavbarSection } from "@/components/sections/navbar-section";
import { ServiceStrip } from "@/components/sections/service-strip";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarSection />
      <HeroSection />
      <ServiceStrip />
    </main>
  );
}
