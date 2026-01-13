import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development | Antartes",
  description:
    "We design and build fast, secure, and scalable web applications that are tailored to your business goals.",
};

export default function WebDevelopmentServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
