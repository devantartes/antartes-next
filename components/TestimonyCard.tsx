import { Quote } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function TestimonyCard({
  testimonial,
}: {
  testimonial: {
    name: string;
    position: string;
    testimonial: string;
  };
}) {
  return (
      <div className="bg-white p-10 rounded-2xl flex flex-col">
      <p className="text-black/60">
        <span className="text-black text-6xl">
          <HugeiconsIcon icon={Quote} />
        </span>
        {testimonial.testimonial}
      </p>
      <div className="mt-auto">
        <h2 className="text-2xl font-bold mt-5">{testimonial.name}</h2>
        <p className="text-black/60">{testimonial.position}</p>
      </div>
    </div>
  );
}
