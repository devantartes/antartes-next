import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Get started with Antartes, a digital agency focused on creating purposeful, scalable, and user-centered digital products.",
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
