import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ecoelite Engineers | Sustainable Engineering Solutions",
  description:
    "Ecoelite Engineers — Pioneering sustainable HVAC and electrical engineering solutions for a greener tomorrow.",
};

export const viewport: Viewport = {
  themeColor: "#071A0E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
