"use client";

import { useState } from "react";
import ellipseGlow from "@/public/image/ellipse-glow.png";
import Image from "next/image";
import { ButtonBG } from "@/components/ui/button";
import Link from "next/link";
import GetStartedSection from "@/components/GetStartedSection";

export default function ContactPage() {
  const [hasSubmitted] = useState(false);

  return (
    <div>
      <div className="absolute -top-20  w-full z-0">
        <div className="flex w-full justify-center">
          <Image src={ellipseGlow} alt="header-ellipse" draggable={false} />
        </div>
      </div>
      <div className="md:px-20 md:py-20 px-10 py-10 text-white bg-black pt-30! md:pt-40! text-center z-10">
        <h1 className="text-4xl font-bold">Let&apos;s Talk</h1>
        <p className="md:w-[70%] mx-auto mt-5 mb-20">
          Not ready to start a project yet? Totally fine. This space is for
          questions, clarifications, or early conversations. If you&apos;ve got
          an idea, a question, or you&apos;re just curious about how we work,
          reach out and let&apos;s talk — no pressure, no commitments.
        </p>
      </div>

      <div className="mx-10 md:mx-20 my-20 py-10 px-10 md:py-20 md:px-20 bg-white border border-black/30 rounded-2xl">
        {!hasSubmitted ? (
          <form action="" className="flex flex-col gap-y-8">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-black/50 mb-3">
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="John Doe"
                className="border border-black/25 rounded-[12px] p-2"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="whatsappOrEmail" className="text-black/50 mb-3">
                Whatsapp number or Email Address
              </label>
              <input
                type="text"
                id="whatsappOrEmail"
                placeholder="Enter your Whatsapp number or Email Address"
                className="border border-black/25 rounded-[12px] p-2"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-black/50 mb-3">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your quick brief"
                className="border border-black/25 rounded-[12px] h-[150px] p-2"
                required
              ></textarea>
            </div>
            <div className="flex flex-col">
              <ButtonBG>Submit</ButtonBG>
            </div>
            <div className="flex flex-col w-[40%] mt-2">
              <p className="text-sm text-black/45">
                We usually reply within 24-48 hours. When you&apos;re ready to
                start something bigger? You can always head to{" "}
                <Link href={"/get-started"} className="text-black underline">
                  Get Started
                </Link>
                .
              </p>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-y-5">
            <svg
              width="175"
              height="175"
              viewBox="0 0 175 175"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M163.953 67.8281C161.008 64.75 157.961 61.5781 156.812 58.7891C155.75 56.2344 155.688 52 155.625 47.8984C155.508 40.2734 155.383 31.6328 149.375 25.625C143.367 19.6172 134.727 19.4922 127.102 19.375C123 19.3125 118.766 19.25 116.211 18.1875C113.43 17.0391 110.25 13.9922 107.172 11.0469C101.781 5.86719 95.6562 0 87.5 0C79.3438 0 73.2266 5.86719 67.8281 11.0469C64.75 13.9922 61.5781 17.0391 58.7891 18.1875C56.25 19.25 52 19.3125 47.8984 19.375C40.2734 19.4922 31.6328 19.6172 25.625 25.625C19.6172 31.6328 19.5312 40.2734 19.375 47.8984C19.3125 52 19.25 56.2344 18.1875 58.7891C17.0391 61.5703 13.9922 64.75 11.0469 67.8281C5.86719 73.2188 0 79.3438 0 87.5C0 95.6562 5.86719 101.773 11.0469 107.172C13.9922 110.25 17.0391 113.422 18.1875 116.211C19.25 118.766 19.3125 123 19.375 127.102C19.4922 134.727 19.6172 143.367 25.625 149.375C31.6328 155.383 40.2734 155.508 47.8984 155.625C52 155.688 56.2344 155.75 58.7891 156.812C61.5703 157.961 64.75 161.008 67.8281 163.953C73.2188 169.133 79.3438 175 87.5 175C95.6562 175 101.773 169.133 107.172 163.953C110.25 161.008 113.422 157.961 116.211 156.812C118.766 155.75 123 155.688 127.102 155.625C134.727 155.508 143.367 155.383 149.375 149.375C155.383 143.367 155.508 134.727 155.625 127.102C155.688 123 155.75 118.766 156.812 116.211C157.961 113.43 161.008 110.25 163.953 107.172C169.133 101.781 175 95.6562 175 87.5C175 79.3438 169.133 73.2266 163.953 67.8281ZM123.172 73.1719L79.4219 116.922C78.8414 117.503 78.1521 117.964 77.3934 118.279C76.6346 118.593 75.8214 118.755 75 118.755C74.1786 118.755 73.3654 118.593 72.6066 118.279C71.8479 117.964 71.1586 117.503 70.5781 116.922L51.8281 98.1719C51.2474 97.5912 50.7868 96.9018 50.4725 96.1431C50.1583 95.3844 49.9965 94.5712 49.9965 93.75C49.9965 92.9288 50.1583 92.1156 50.4725 91.3569C50.7868 90.5982 51.2474 89.9088 51.8281 89.3281C53.0009 88.1554 54.5915 87.4965 56.25 87.4965C57.0712 87.4965 57.8844 87.6583 58.6431 87.9725C59.4018 88.2868 60.0912 88.7474 60.6719 89.3281L75 103.664L114.328 64.3281C114.909 63.7474 115.598 63.2868 116.357 62.9725C117.116 62.6583 117.929 62.4965 118.75 62.4965C119.571 62.4965 120.384 62.6583 121.143 62.9725C121.902 63.2868 122.591 63.7474 123.172 64.3281C123.753 64.9088 124.213 65.5982 124.527 66.3569C124.842 67.1156 125.003 67.9288 125.003 68.75C125.003 69.5712 124.842 70.3844 124.527 71.1431C124.213 71.9018 123.753 72.5912 123.172 73.1719Z"
                fill="#7FFBAE"
              />
            </svg>
            <h1 className="text-2xl mt-3">
              Chukwudi! Your message just landed safe with us!
            </h1>
            <p className="text-black/45 text-center">
              Next Steps: Our team will review message within 24 hours and
              contact you via WhatsApp or Email to discuss further.
            </p>
          </div>
        )}
      </div>
      <GetStartedSection />
    </div>
  );
}
