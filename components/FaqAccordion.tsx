"use client";

import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";

export default function FaqAccordion({
  faq,
}: {
  faq: { question: string; answer: string };
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      className="border-b border-black/7 w-full text-start p-3 cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex items-center justify-between gap-x-5">
        <h3 className="text-2xl">{faq.question}</h3>
        {isOpen ? (
          <HugeiconsIcon icon={MinusSignIcon} />
        ) : (
          <HugeiconsIcon icon={PlusSignIcon} />
        )}
      </div>

      {isOpen && <p className="text-black/45 mt-5">{faq.answer}</p>}
    </button>
  );
}
