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

export const metadata: Metadata = {
  title: "Tattva Platform | Learn. Act. Defend.",
  description: "A unified ecosystem for Sanatana Dharma. Learn with truth, Act with Dharma, Defend with honor.",
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
