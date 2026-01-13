"use client"

import heroSectionImg from "@/public/image/hero-section-img.png";
import getStartedImg from "@/public/image/get-started-img.png";
import { ButtonBG } from "./ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HeroSection() {
  const router = useRouter();
  return (
    <>
      <Image
        src={heroSectionImg}
        alt="hero-section-img"
        className="absolute top-0 right-0 pe-20 z-1 hidden md:block"
        draggable={false}
      />
      <div className="flex items-center justify-between md:px-20 px-10 bg-black text-white md:py-20 py-10 pt-30! md:pt-40! z-10">
        <div className="md:w-[50%] space-y-5">
          <h1 className="text-4xl font-bold font-poppins">
            Building Digital Solutions That Actually Work.
          </h1>
          <p className="text-white">
            At Antartes, we design and develop scalable digital products — from
            school portals and management systems to custom web platforms and
            apps. Every solution is built to solve real problems, streamline
            operations, and grow with your organization.
          </p>

          {/* To reuse the button with the image, copy the div below */}
          <div className="w-fit">
            <ButtonBG onClick={() => router.push("/get-started")}>
              Get Started
            </ButtonBG>
            <Image
              src={getStartedImg}
              alt="get-started-img"
              className="relative left-[calc(100%-60px)]"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
