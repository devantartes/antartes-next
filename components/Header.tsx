"use client"

import { useState, useEffect } from "react";
import { ButtonBG } from "./ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Hamburger, X } from "@hugeicons/core-free-icons";
import logo from "@/public/image/logo.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useHash } from "@/hooks/useHash";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const hash = useHash();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // initially check if the user has scrolled
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsNavOpen(false);
    if (!hash) return;
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname, hash]);

  const scrollToSection = async (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (pathname !== "/") {
      await router.push("/");
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    await router.push("/#" + id);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.documentElement.classList.add(
        "overflow-hidden",
        "md:overflow-scroll"
      );
    } else
      document.documentElement.classList.remove(
        "overflow-hidden",
        "md:overflow-scroll"
      );
  }, [isNavOpen]);

  return (
    <header
      className={`fixed w-full left-0 right-0 z-100! flex justify-center transition-all duration-300 ${
        isScrolled ? (isNavOpen ? "top-0" : "top-2 md:top-5") : "top-0"
      }`}
    >
      <div
        className={`flex items-center justify-between  transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md rounded-full px-10 py-4  md:w-fit gap-20 shadow-lg border border-white/10"
            : "px-20 py-10 w-full"
        }
        ${isNavOpen && isScrolled ? "w-full" : "w-[calc(100%-60px)]"}    
        `}
      >
        <Link href="/" className="text-3xl font-raleway font-bold text-white">
          <Image src={logo} alt="Antartes Logo" draggable={false} />
        </Link>
        <nav
          className={`${
            isNavOpen ? "translate-x-[unset] px-15 py-10" : "translate-x-[150%]"
          } md:translate-x-0! transition-all duration-300 fixed right-0 top-0 z-9999999 w-screen bg-black h-screen md:px-0 md:py-0 md:bg-[unset] md:static md:z-0 md:h-[unset] md:w-[unset]`}
        >
          <ul className="flex md:flex-row flex-col gap-10 text-white">
            <li className="text-end md:hidden">
              <button
                className="cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                <HugeiconsIcon icon={X} />
              </button>
            </li>
            <li>
              <Link
                href="/#home"
                onClick={(e) => scrollToSection(e, "home")}
                className={`${pathname === "/" && "nav-active"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#services-section"
                onClick={(e) => scrollToSection(e, "services-section")}
                className={`${pathname.includes("services") && "nav-active"}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/#cases-section"
                onClick={(e) => scrollToSection(e, "cases-section")}
              >
                Cases
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
            <li>
              <Link
                href="/about"
                // onClick={(e) => scrollToSection(e, "about-section")}
              >
                About
              </Link>
            </li>
            <li className="md:hidden">
              <ButtonBG onClick={() => router.push("/get-started")}>
                Get Started
              </ButtonBG>
            </li>
          </ul>
        </nav>
        <ButtonBG className="md:hidden" onClick={() => setIsNavOpen(true)}>
          <HugeiconsIcon icon={Hamburger} />
        </ButtonBG>
        <ButtonBG
          onClick={() => router.push("/get-started")}
          className="hidden md:flex"
        >
          Get Started
        </ButtonBG>
      </div>
    </header>
  );
}
