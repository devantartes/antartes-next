import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Antartes",
  description:
    "Learn more about Antartes, a digital agency focused on creating purposeful, scalable, and user-centered digital products.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
