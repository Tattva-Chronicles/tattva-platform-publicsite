import { Metadata } from "next";
import { Shield, Sword, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SubscribeForm } from "@/components/ui/SubscribeForm";
import { SITE_URL, Schema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Tattva-Raksha | The Defend Pillar",
    description: "The Defense Hub of the Tattva Platform. Crowdsourcing the narrative defense of Sanatana Dharma.",
    openGraph: {
        title: "Tattva-Raksha | The Defend Pillar",
        description: "Truth is not fragile, but it must be defended. The digital shield for Dharma.",
        url: `${SITE_URL}/pillars/raksha`,
        images: [`${SITE_URL}/images/pillar_raksha.jpg`],
    },
};

export default function RakshaPage() {
    return (
        <main className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-red-500/30">
            <Schema
                type="WebPage"
                data={{
                    name: "Tattva-Raksha",
                    description: "The Defend Pillar of Tattva Platform. Countering misinformation and protecting the narrative.",
                    url: `${SITE_URL}/pillars/raksha`,
                }}
            />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/pillar_raksha.jpg"
                        alt="Raksha Abstract Background"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/50 to-stone-950" />
                </div>

                <div className="container relative z-10 px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-8 backdrop-blur-md">
                        <Shield size={16} />
                        <span className="text-sm font-medium tracking-wide uppercase">The Third Pillar: Defense</span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
                        Tattva <span className="text-red-500">Raksha</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto leading-relaxed font-light font-serif italic">
                        "Protect Dharma, and Dharma protects you."
                    </p>
                </div>
            </section>

            {/* The Threat / Problem */}
            <section className="py-24 border-y border-white/5 bg-stone-900/30">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">The Narrative War</h2>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            We live in an age of information warfare. Malicious narratives, distorted history, and deliberate mistranslations are used to dismantle the Dharmic identity.
                        </p>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            <span className="text-white">Tattva-Raksha</span> is our shield. It is a decentralized, crowdsourced intelligence hub designed to identify falsehoods and dismantle them with cold, hard logic.
                        </p>
                        <div className="pl-4 border-l-2 border-red-500 italic text-stone-500">
                            Truth requires no violence, only a voice.
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-stone-900 p-8 flex items-center justify-center group">
                        <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors duration-700" />
                        <div className="text-center space-y-4 relative z-10">
                            <Sword className="w-12 h-12 text-red-400 mx-auto opacity-80" />
                            <p className="text-red-200 font-serif text-xl">Identify the lie.<br />Verify the truth.<br />Publish the rebuttal.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-12">The Defense Grid</h2>

                    <div className="grid gap-8 text-left">
                        <div className="p-8 rounded-2xl bg-stone-900 border border-white/5 hover:border-red-500/30 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-2">1. Alert System</h3>
                            <p className="text-stone-400">AI-driven monitoring of media biases and trending misinformation. When a new false narrative emerges, the community is alerted instantly.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-stone-900 border border-white/5 hover:border-red-500/30 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-2">2. Collaborative Rebuttals</h3>
                            <p className="text-stone-400">Wiki-style drafting of fact-checks and essays. Experts contribute sources, editors refine the language, and we publish unified, authoritative responses.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-stone-900 border border-white/5 hover:border-red-500/30 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-2">3. The Archives</h3>
                            <p className="text-stone-400">A permanent, immutable record of debunked myths. Once a lie is defeated, it stays defeated.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-t from-red-950/20 to-stone-950 border-t border-white/5">
                <div className="container mx-auto px-4 text-center max-w-2xl">
                    <h2 className="font-serif text-3xl font-bold text-white mb-6">Hold the Line</h2>
                    <p className="text-stone-400 mb-10">
                        This is not for the faint of heart. This is for the protectors.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Button variant="premium" size="lg" asChild>
                            <Link href="/donate">Support the Cause</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/contact">Join as a Protector</Link>
                        </Button>
                    </div>

                    <div className="bg-stone-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <h3 className="text-lg font-bold text-white mb-4">Subscribe for Updates</h3>
                        <SubscribeForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
