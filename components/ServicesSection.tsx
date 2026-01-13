import {
  MobileProgramming01Icon,
  WebDesign01Icon,
  WebDesign02Icon,
} from "@hugeicons/core-free-icons";
import { type IconSvgElement } from "@hugeicons/react";
import ServiceCard from "./ServiceCard";

const services: {
  title: string;
  description: string;
  icon: IconSvgElement;
  link: string;
}[] = [
  {
    title: "Mobile App Development",
    description:
      "Developing reliable mobile applications built for performance and growth.",
    icon: MobileProgramming01Icon,
    link: "/services/mobile-development",
  },
  {
    title: "Web Development",
    description:
      "Building fast, secure, and scalable web solutions tailored to real business needs.",
    icon: WebDesign02Icon,
    link: "/services/web-development",
  },
  {
    title: "UI/UX design",
    description:
      "Designing intuitive, user-focused interfaces that look clean and work effortlessly.",
    icon: WebDesign01Icon,
    link: "/services/ui-ux",
  },
];
export default function ServicesSection({ hideText }: { hideText?: boolean }) {
  return (
    <div className="md:py-20 md:px-20 py-10 px-10" id="services-section">
      {!hideText && (
        <>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
            Our Services
          </h2>
          <p className="text-black/60">
            Our services are designed to help businesses and institutions build,
            manage, and scale their digital presence with clarity and purpose.
            Every solution is tailored to real needs, not assumptions.
          </p>
        </>
      )}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </div>
  );
}
