import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import { Unbounded } from "next/font/google";
import "./globals.scss";

const unbounded = Unbounded({ weight: "500", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "VDK",
  description: "Project calculation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={unbounded.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
