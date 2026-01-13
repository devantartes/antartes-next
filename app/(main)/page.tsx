import CasesSection from "@/components/CaseStudiesSection";
import ClientGeographySection from "@/components/ClientGeographySection";
import FaqsSection from "@/components/FaqsSection";
import GetStartedSection from "@/components/GetStartedSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonySection from "@/components/TestimonySection";
import ellipseGlow from "@/public/image/ellipse-glow.png";
import Image from "next/image";

export default function Home() {
  return (
    <main id="home">
      <div className="absolute -top-20 w-full z-0">
        <div className="flex w-full justify-center">
          <Image src={ellipseGlow} alt="header-ellipse" draggable={false} />
        </div>
      </div>
      <HeroSection />
      <ServicesSection />
      <CasesSection />
      <ClientGeographySection />
      <TestimonySection />
      <FaqsSection />
      <GetStartedSection />
    </main>
  );
}
