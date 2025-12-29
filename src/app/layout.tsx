import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google"; // Using standard Google Fonts
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

import { SITE_URL, defaultOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tattva Platform | Learn. Act. Defend.",
    template: "%s | Tattva Platform",
  },
  description: "A unified ecosystem for Sanatana Dharma. Learn with truth (Samvaad), Act with service (Seva), and Defend with honor (Raksha).",
  keywords: ["Sanatana Dharma", "Hinduism", "Tattva Platform", "ShastraDeep", "Seva", "Dharma", "Knowledge Engine"],
  authors: [{ name: "Animesh Shaw" }],
  creator: "Animesh Shaw",
  publisher: "Tattva Platform",
  openGraph: {
    ...defaultOpenGraph,
    title: "Tattva Platform | Learn. Act. Defend.",
    description: "A unified ecosystem for Sanatana Dharma. Learn with truth, Act with service, and Defend with honor.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TattvaChronicle",
    creator: "@TattvaChronicle",
    title: "Tattva Platform | Learn. Act. Defend.",
    description: "A unified ecosystem for Sanatana Dharma.",
    images: [`${SITE_URL}/images/og-default.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          inter.variable,
          merriweather.variable,
          "antialiased bg-stone-950 text-stone-100 min-h-screen font-sans selection:bg-orange-500/30 flex flex-col"
        )}
      >
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
