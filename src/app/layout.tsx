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
    "Ecoelite Engineers — Ventilation, air purification and electrical panel solutions for commercial and industrial facilities in Bengaluru.",
  metadataBase: new URL("https://ecoelite-engineers.netlify.app"),
  openGraph: {
    title: "Ecoelite Engineers | Ventilation · Air Purification · Electrical",
    description:
      "Mixed flow inline fans, electrostatic air cleaners and electrical panels — supplied and installed by Ecoelite Engineers, Bengaluru.",
    url: "https://ecoelite-engineers.netlify.app",
    siteName: "Ecoelite Engineers",
    images: [
      {
        url: "/assets/Meta_Image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecoelite Engineers — Ventilation, Air Purification & Electrical Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecoelite Engineers | Ventilation · Air Purification · Electrical",
    description:
      "Mixed flow inline fans, electrostatic air cleaners and electrical panels — supplied and installed in Bengaluru.",
    images: ["/assets/Meta_Image.jpg"],
  },
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
