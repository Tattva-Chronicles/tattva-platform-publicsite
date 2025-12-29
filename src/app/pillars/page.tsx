import { Metadata } from "next";
import { BookOpen, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { SubscribeForm } from "@/components/ui/SubscribeForm";

export const metadata: Metadata = {
    title: "The Pillars | Tattva Chronicles",
    description: "Deep dive into Samvaad, Seva, and Raksha.",
};

export default function PillarsPage() {
    return (
        <main className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-center text-white mb-16">The Ecosystem</h1>

                {/* Samvaad */}
                <section id="samvaad" className="mb-24 flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                            <BookOpen size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Dharma-Samvaad <span className="text-stone-500 text-lg font-normal ml-2">(Learn)</span></h2>
                        <p className="text-stone-300 text-lg leading-relaxed mb-6">
                            A "Stack Overflow" for Sanatana Dharma. We are building a knowledge engine where answers are not ranked by popularity, but by <strong>scriptural validity (Pramāṇa)</strong>.
                        </p>
                        <ul className="space-y-2 text-stone-400 mb-8">
                            <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Verified Sources & Citations</li>
                            <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Academic & Traditional Scholar Roles</li>
                            <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Multi-lingual Knowledge Graph</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 bg-stone-900/50 border border-white/5 rounded-2xl overflow-hidden aspect-video relative group">
                        <Image
                            src="/images/pillar_samvaad.jpeg"
                            alt="Dharma-Samvaad UI Screenshot"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </section>

                {/* Seva */}
                <section id="seva" className="mb-24 flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="md:w-1/2">
                        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 text-green-400">
                            <Users size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Seva-Sangathan <span className="text-stone-500 text-lg font-normal ml-2">(Act)</span></h2>
                        <p className="text-stone-300 text-lg leading-relaxed mb-6">
                            A "GitHub" for Civic Service. We coordinate real-world impact by connecting volunteers with local issues (cleaning, feeding, teaching) reported by the community.
                        </p>
                        <ul className="space-y-2 text-stone-400 mb-8">
                            <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Map-based Issue Reporting</li>
                            <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Verify Impact with Proof-of-Work</li>
                            <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Earn Seva Points & Badges</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 bg-stone-900/50 border border-white/5 rounded-2xl overflow-hidden aspect-video relative group">
                        <Image
                            src="/images/pillar_seva.jpg"
                            alt="Seva-Sangathan UI Screenshot"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </section>

                {/* Raksha */}
                <section id="raksha" className="mb-24 flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 text-red-400">
                            <Shield size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Tattva-Raksha <span className="text-stone-500 text-lg font-normal ml-2">(Defend)</span></h2>
                        <p className="text-stone-300 text-lg leading-relaxed mb-6">
                            A "Digital Defense Hub". We crowdsource rebuttals to misinformation using facts and logic, ensuring the Dharmic narrative is protected with dignity.
                        </p>
                        <ul className="space-y-2 text-stone-400 mb-8">
                            <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> Bounty System for Misinformation</li>
                            <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> Collaborative Rebuttal Drafting</li>
                            <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> Acharya Verification</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 bg-stone-900/50 border border-white/5 rounded-2xl overflow-hidden aspect-video relative group">
                        <Image
                            src="/images/pillar_raksha.jpg"
                            alt="Tattva-Raksha UI Screenshot"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </section>

                <div className="text-center py-12">
                    <Button variant="premium" size="lg" asChild>
                        <Link href="/donate">Help Build This Future</Link>
                    </Button>
                </div>

                <div className="mt-24 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6 font-serif">Stay Updated</h2>
                    <p className="text-stone-400 mb-8">Follow the development of these pillars.</p>
                    <div className="flex justify-center">
                        <SubscribeForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
