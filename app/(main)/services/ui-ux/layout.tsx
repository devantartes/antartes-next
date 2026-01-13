import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design | Antartes",
  description:
    "At Antartes, we design user interfaces and experiences that make digital products easy to understand and enjoyable to use.",
};

export default function UiUxServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
