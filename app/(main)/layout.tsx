import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Building Digital Solutions That Actually Works | Antartes",
  description:
    "Antartes specializes in building high-performance digital solutions that actually work. From custom software development to strategic digital transformation.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
