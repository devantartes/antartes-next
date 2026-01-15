import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Talk with the Antartes Team, make enquiry and get to know us more",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
