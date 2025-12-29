import { Metadata } from "next";
import { Users, HandHeart, Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SubscribeForm } from "@/components/ui/SubscribeForm";
import { SITE_URL, Schema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Seva-Sangathan | The Act Pillar",
    description: "The Action Engine of the Tattva Platform. Coordinating real-world impact through Dharmic service.",
    openGraph: {
        title: "Seva-Sangathan | The Act Pillar",
        description: "From rituals to responsibility. A GitHub for civic service.",
        url: `${SITE_URL}/pillars/seva`,
        images: [`${SITE_URL}/images/pillar_seva.jpg`],
    },
};

export default function SevaPage() {
    return (
        <main className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-green-500/30">
            <Schema
                type="WebPage"
                data={{
                    name: "Seva-Sangathan",
                    description: "The Act Pillar of Tattva Platform. Coordinating civic service and community action.",
                    url: `${SITE_URL}/pillars/seva`,
                }}
            />

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/pillar_seva.jpg"
                        alt="Seva Abstract Background"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/50 to-stone-950" />
                </div>

                <div className="container relative z-10 px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-8 backdrop-blur-md">
                        <Users size={16} />
                        <span className="text-sm font-medium tracking-wide uppercase">The Second Pillar: Action</span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
                        Seva <span className="text-green-500">Sangathan</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto leading-relaxed font-light font-serif italic">
                        "Dharma is not just spoken. It is performed."
                    </p>
                </div>
            </section>

            {/* The Vision / Problem */}
            <section className="py-24 border-y border-white/5 bg-stone-900/30">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-stone-900 p-8 flex items-center justify-center group order-last md:order-first">
                        <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors duration-700" />
                        <div className="text-center space-y-4 relative z-10">
                            <Map className="w-12 h-12 text-green-400 mx-auto opacity-80" />
                            <p className="text-green-200 font-serif text-xl">Coordinate locally.<br />Impact globally.</p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">The Fragmented Effort</h2>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            Millions of us want to help. We see the dirty streets, the hungry children, the decaying temples. But we act in silos. Our efforts are sporadic, unmeasured, and often invisible.
                        </p>
                        <p className="text-lg text-stone-400 leading-relaxed">
                            <span className="text-white">Seva-Sangathan</span> changes this. We are building the operating system for Dharmic social capital.
                        </p>
                        <div className="pl-4 border-l-2 border-green-500 italic text-stone-500">
                            Imagine if helping your community was as seamless as pushing code.
                        </div>
                    </div>
                </div>
            </section>

            {/* The Solution */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-12">The Action Ecosystem</h2>

                    <div className="grid gap-8 text-left">
                        <div className="p-8 rounded-2xl bg-stone-900 border border-white/5 hover:border-green-500/30 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-2">1. Map-Based Reporting</h3>
                            <p className="text-stone-400">See a problem? Pin it. Whether it's a pothole or a temple in need of repair, our map connects issues to local volunteers instantly.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-stone-900 border border-white/5 hover:border-green-500/30 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-2">2. Proof of Seva</h3>
                            <p className="text-stone-400">Validate your impact. Upload photos, get verified by the community, and build an on-chain record of your service to society.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-stone-900 border border-white/5 hover:border-green-500/30 transition-all duration-300">
                            <h3 className="text-xl font-bold text-white mb-2">3. Gamified Virtue</h3>
                            <p className="text-stone-400">Earn badges and reputation not for vanity, but to inspire others. Compete to be the most helpful citizen in your city.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-t from-green-950/20 to-stone-950 border-t border-white/5">
                <div className="container mx-auto px-4 text-center max-w-2xl">
                    <h2 className="font-serif text-3xl font-bold text-white mb-6">Mobilize the Sangha</h2>
                    <p className="text-stone-400 mb-10">
                        The platform is being built. The network is forming. Be the first to act.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Button variant="premium" size="lg" asChild>
                            <Link href="/donate">Fund the Platform</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/contact">Volunteer as a Dev</Link>
                        </Button>
                    </div>

                    <div className="bg-stone-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <h3 className="text-lg font-bold text-white mb-4">Join the Waitlist</h3>
                        <SubscribeForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
