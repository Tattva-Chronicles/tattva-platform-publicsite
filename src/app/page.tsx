import { Hero } from "@/components/home/Hero";
import { Pillars } from "@/components/home/Pillars";
import { ShastraDeepShowcase } from "@/components/home/ShastraDeepShowcase";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Pillars />
      <ShastraDeepShowcase />
      <div className="py-24 bg-stone-900 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-6">Ready to Contribute?</h2>
          <p className="text-stone-400 max-w-2xl mx-auto mb-8">
            Whether you are a scholar, a volunteer, or a defender of Dharma, there is a place for you in this ecosystem.
          </p>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
