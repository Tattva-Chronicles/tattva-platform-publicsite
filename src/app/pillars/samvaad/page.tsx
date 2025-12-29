import { Metadata } from "next";
import { BookOpen, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SubscribeForm } from "@/components/ui/SubscribeForm";
import { SITE_URL, Schema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Dharma-Samvaad | The Learn Pillar",
    description: "The Knowledge Engine of the Tattva Platform. A verifiable, scriptural Q&A system for the digital age.",
    openGraph: {
        title: "Dharma-Samvaad | The Learn Pillar",
        description: "Recovering the lost art of dialectic. Truth, verified by Pramāṇa.",
        url: `${SITE_URL}/pillars/samvaad`,
        images: [`${SITE_URL}/images/pillar_samvaad.jpeg`],
    },
};

export default function SamvaadPage() {
    return (
        <main className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-blue-500/30">
            <Schema
                type="WebPage"
                data={{
                    name: "Dharma-Samvaad",
                    description: "The Learn Pillar of Tattva Platform. A knowledge engine for Sanatana Dharma.",
                    url: `${SITE_URL}/pillars/samvaad`,
                }}
            />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/pillar_samvaad.jpeg"
                        alt="Samvaad Abstract Background"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/50 to-stone-950" />
                </div>

                <div className="container relative z-10 px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 backdrop-blur-md">
                        <BookOpen size={16} />
                        <span className="text-sm font-medium tracking-wide uppercase">The First Pillar: Knowledge</span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
                        Dharma <span className="text-blue-500">Samvaad</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto leading-relaxed font-light font-serif italic">
                        "Where opinion ends, and Pramāṇa begins."
                    </p>
                </div>
            </section>

            {/* The Mystery / Problem */}
            <section className="py-24 border-y border-white/5 bg-stone-900/30">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">The Lost Library</h2>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            For centuries, the knowledge of the Rishis was preserved not just in books, but in the living tradition of <span className="text-white">Samvaad</span>—dialogue rooted in truth.
                        </p>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            Today, the internet is flooded with half-truths. A simple search for &quot;Karma&quot; yields a million opinions but zero authority. We are drowning in information, yet starving for wisdom.
                        </p>
                        <div className="pl-4 border-l-2 border-blue-500 italic text-stone-500">
                            How do we distinguish the Signal from the Noise?
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-stone-900 p-8 flex items-center justify-center group">
                        <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-700" />
                        <div className="text-center space-y-4 relative z-10">
                            <Sparkles className="w-12 h-12 text-blue-400 mx-auto opacity-80" />
                            <p className="text-blue-200 font-serif text-xl">The Solution is Not More Content.<br />It is Better Verification.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-12">The Knowledge Engine</h2>

                    <div className="grid gap-8 text-left">
                        <div className="p-8 rounded-2xl bg-stone-900 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-2">1. Pramāṇa-Based Ranking</h3>
                            <p className="text-stone-400">Unlike current platforms that rank answers by popularity, Samvaad ranks by scriptural validity. An answer is only as good as its source.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-stone-900 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-2">2. The Acharya Circle</h3>
                            <p className="text-stone-400">A verified tier of traditional scholars and academics who have the final say on complex theological disputes.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-stone-900 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-2">3. Universal Access</h3>
                            <p className="text-stone-400">Translating ancient Sanskrit wisdom into modern languages, making it accessible to the seeker in New York, London, or Mumbai.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-t from-blue-950/20 to-stone-950 border-t border-white/5">
                <div className="container mx-auto px-4 text-center max-w-2xl">
                    <h2 className="font-serif text-3xl font-bold text-white mb-6">Help Us Rebuild the Library</h2>
                    <p className="text-stone-400 mb-10">
                        The architecture is being designed. The texts are being digitized. But we need builders.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Button variant="premium" size="lg" asChild>
                            <Link href="/donate">Donate to Research</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/contact">Join as a Scholar</Link>
                        </Button>
                    </div>

                    <div className="bg-stone-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <h3 className="text-lg font-bold text-white mb-4">Get Development Updates</h3>
                        <SubscribeForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
