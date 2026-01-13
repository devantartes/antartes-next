import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development | Antartes",
  description:
    "We design and build high-performance mobile applications that are intuitive, reliable, and built to scale.",
};

export default function MobileDevelopmentServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
