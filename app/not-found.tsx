"use client";

import ellipseGlow from "@/public/image/ellipse-glow.png";
import { useRouter } from "next/navigation";
import { ButtonBG } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Home03Icon } from "@hugeicons/core-free-icons";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black text-white">
      <div className="absolute top-0 w-full">
        <div className="flex w-full justify-center">
          <Image src={ellipseGlow} alt="header-ellipse" draggable={false} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-3">
        <h1 className="text-9xl font-bold animate-bounce font-raleway">404</h1>
        <h3 className="text-3xl font-bold capitalize">
          Seems you are on the wrong path
        </h3>
        <p className="text-white/75 text-[14px]">
          The page you are looking for does not exist or has been removed.
        </p>
        <ButtonBG className="mt-2" onClick={() => router.replace("/")}>
          <HugeiconsIcon icon={Home03Icon} />
          Go to home page
        </ButtonBG>
      </div>
    </div>
  );
}
