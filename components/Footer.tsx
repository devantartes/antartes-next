"use client";

import {
  Facebook02Icon,
  InstagramIcon,
  Linkedin02Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import logo from "@/public/image/logo.svg";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/");
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    router.push("/#" + id);
  };

  return (
    <footer
      className={`w-full pt-10   bg-black text-primary flex flex-col items-center justify-end pb-10 main-footer  ${
        pathname !== "/get-started"
          ? "md:h-[570px] md:-mt-55 md:pt-0"
          : "md:pt-20"
      }`}
    >
      <div className="flex items-center justify-center w-[90%] pb-10">
        <div className="flex w-full justify-between md:flex-row flex-col gap-y-10 md:gap-y-0">
          <div>
            <div className="flex items-center gap-x-3">
              <Image src={logo} alt="Antartes Logo" draggable={false} />
              <h2 className="text-[24px] font-bold text-white">Antartes</h2>
            </div>
            <p className="text-primary font-normal text-[15px] mt-5">
              We build custom software solutions that <br /> bring your ideas to
              life
            </p>

            <div className="flex space-x-4 mt-10">
              <Link href="#" target="_blank">
                <HugeiconsIcon icon={Linkedin02Icon} />
              </Link>
              <Link href="#" target="_blank">
                <HugeiconsIcon icon={Facebook02Icon} />
              </Link>
              <Link href="#" target="_blank">
                <HugeiconsIcon icon={NewTwitterIcon} />
              </Link>
              <Link href="#" target="_blank">
                <HugeiconsIcon icon={InstagramIcon} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-[20px] font-bold text-white">Home</h3>
            <ul className="flex flex-col mt-5 text-[14px] space-y-2">
              <li>
                <Link
                  href="/#services-section"
                  onClick={(e) => scrollToSection(e, "services-section")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#cases-section"
                  onClick={(e) => scrollToSection(e, "cases-section")}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimony-section"
                  onClick={(e) => scrollToSection(e, "testimony-section")}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq-section"
                  onClick={(e) => scrollToSection(e, "faq-section")}
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[20px] font-bold text-white">Services</h3>
            <ul className="flex flex-col mt-5 text-[14px] space-y-2">
              <li>
                <Link href="/services/ui-ux">UI/UX Design</Link>
              </li>
              <li>
                <Link href="/services/web-development">Web Development</Link>
              </li>
              <li>
                <Link href="/services/mobile-development">
                  Mobile App Development
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[20px] font-bold text-white">About</h3>
            <ul className="flex flex-col mt-5 text-[14px] space-y-2">
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-primary font-normal text-[15px] mt-10">
        Copyright © {new Date().getFullYear()}. Antartes. All Right Reserved.
      </p>
    </footer>
  );
}
