"use client";

import { useRef, useState } from "react";
import CaseStudyCard from "./CaseStudyCard";
import storyImg1 from "@/public/image/story1-img.png";
import storyImg2 from "@/public/image/story2-img.png";
import storyImg3 from "@/public/image/story3-img.png";
import { ArrowLeft, ArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { StaticImageData } from "next/image";

const caseStudies: {
  image: StaticImageData;
  title: string;
  description: string;
  link: string;
}[] = [
  {
    title: "School Management System",
    description:
      "A secure and easy-to-use platform that helps schools manage student records, results, and academic operations from one centralized system.",
    image: storyImg1,
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "A secure and easy-to-use platform that helps e-commerce businesses manage their online stores, inventory, and customer orders from one centralized system.",
    image: storyImg2,
    link: "#",
  },
  {
    title: "Healthcare Management System",
    description:
      "A secure and easy-to-use platform that helps healthcare providers manage patient records, appointments, and billing from one centralized system.",
    image: storyImg3,
    link: "#",
  },
  {
    title: "FinTech Platform",
    description:
      "A secure and easy-to-use platform that helps financial institutions manage their customer data, transactions, and compliance from one centralized system.",
    image: storyImg1,
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "A secure and easy-to-use platform that helps e-commerce businesses manage their online stores, inventory, and customer orders from one centralized system.",
    image: storyImg1,
    link: "#",
  },
];
export default function CasesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="md:py-20 py-10" id="cases-section">
      <div className="md:px-20 px-10 mb-12 flex justify-between items-end">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
          Cases Studies
        </h1>
      </div>

      {/* Horizontal Scroll Container Wrapper */}
      <div className="relative group px-10 md:px-20">
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-8 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {caseStudies.map((caseStudy, i) => (
            <div key={i} className="snap-center">
              <CaseStudyCard caseStudy={caseStudy} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Left and Right */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 pointer-events-none w-full flex justify-between px-3">
          <button
            onClick={() => scroll("left")}
            className="p-3 md:p-4 rounded-full bg-white/90 backdrop-blur-md shadow-xl pointer-events-auto hover:bg-primary hover:text-black transition-all duration-300 -translate-x-1/2 md:translate-x-0"
            aria-label="Scroll left"
          >
            <HugeiconsIcon icon={ArrowLeft} size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-3 md:p-4 rounded-full bg-white/90 backdrop-blur-md  shadow-xl pointer-events-auto hover:bg-primary hover:text-black transition-all duration-300 translate-x-1/2 md:translate-x-0"
            aria-label="Scroll right"
          >
            <HugeiconsIcon icon={ArrowRight} size={24} />
          </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
