import { Metadata } from "next";
import Link from "next/link";
import { SubscribeForm } from "@/components/ui/SubscribeForm";
import { SITE_URL, Schema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Our Vision",
    description: "Unifying Sanatana Dharma's digital presence. From fragments to a fortress.",
    openGraph: {
        title: "Our Vision | Tattva Platform",
        description: "Unifying Sanatana Dharma's digital presence. From fragments to a fortress.",
        url: `${SITE_URL}/vision`,
        images: [`${SITE_URL}/images/og-default.png`],
    },
};

export default function VisionPage() {
    return (
        <main className="pt-24 pb-16 min-h-screen">
            <Schema
                type="Article"
                data={{
                    headline: "Our Vision for a Unified Dharmic Ecosystem",
                    description: "Unifying Sanatana Dharma's digital presence through Knowledge (Samvaad), Service (Seva), and Defense (Raksha).",
                    author: {
                        "@type": "Person",
                        name: "Animesh Shaw",
                    },
                    publisher: {
                        "@type": "Organization",
                        name: "Tattva Platform",
                        logo: {
                            "@type": "ImageObject",
                            url: `${SITE_URL}/images/og-default.jpg`,
                        },
                    },
                    datePublished: "2025-12-01",
                }}
            />
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">Our Vision</h1>
                <p className="text-xl text-stone-300 font-serif border-l-4 border-orange-500 pl-6 mb-12 italic">
                    “To unify Sanatana Dharma’s digital presence under one holistic ecosystem — where knowledge, service, and defense of Dharma coexist seamlessly.”
                </p>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl font-bold text-orange-400">The Problem</h2>
                    <p className="text-stone-300 leading-relaxed">
                        Today, the Dharmic community is fragmented. Knowledge is scattered across forums mixed with misinformation.
                        Seva (service) is often unorganized and unrecognized.
                        And when Dharma is attacked, defense is reactive and disjointed.
                    </p>
                    <p className="text-stone-300 leading-relaxed">
                        We rely on platforms that profit from outrage, not truth. We need our own utilities—tools designed not for engagement, but for <strong>Pramāṇa (Evidence)</strong>, <strong>Karma (Action)</strong>, and <strong>Satya (Truth)</strong>.
                    </p>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl font-bold text-orange-400">The Solution: Three Pillars</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="bg-stone-900 p-6 rounded-lg border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-2">Learn</h3>
                            <p className="text-stone-400 text-sm">A canonical knowledge engine (Samvaad) verifying truth through scripture.</p>
                        </div>
                        <div className="bg-stone-900 p-6 rounded-lg border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-2">Act</h3>
                            <p className="text-stone-400 text-sm">A coordination tool (Seva) for civic service rooted in Karma Yoga.</p>
                        </div>
                        <div className="bg-stone-900 p-6 rounded-lg border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-2">Defend</h3>
                            <p className="text-stone-400 text-sm">A digital defense hub (Raksha) to counter misinformation.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12 space-y-6">
                    <h2 className="text-2xl font-bold text-orange-400">Roadmap (2025-2028)</h2>
                    <ul className="space-y-4">
                        <li className="flex gap-4 items-start relative">
                            {/* Line connector */}
                            <div className="absolute left-[3.25rem] top-8 bottom-0 w-px bg-stone-800" />
                            <div className="w-24 font-bold text-orange-500 pt-1">2025</div>
                            <div className="pb-8">
                                <div className="flex items-center gap-2 mb-1">
                                    <strong className="text-white block">Phase 1: Proof of Work</strong>
                                    <span className="px-2 py-0.5 bg-green-900/30 text-green-400 text-xs rounded-full border border-green-500/20">Done</span>
                                </div>
                                <p className="text-stone-400 text-sm">Launch <strong>ShastraDeep</strong> (Digital Library). Successfully deployed to thousands of users.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start relative">
                            <div className="absolute left-[3.25rem] top-8 bottom-0 w-px bg-stone-800" />
                            <div className="w-24 font-bold text-stone-500 pt-1">2026</div>
                            <div className="pb-8">
                                <strong className="text-white block">Phase 2: Foundation</strong>
                                <p className="text-stone-400 text-sm">Launch <strong>Dharma-Samvaad</strong> MVP & User Services. Begin unified account system.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start relative">
                            <div className="absolute left-[3.25rem] top-8 bottom-0 w-px bg-stone-800" />
                            <div className="w-24 font-bold text-stone-500 pt-1">2027</div>
                            <div className="pb-8">
                                <strong className="text-white block">Phase 3: Action</strong>
                                <p className="text-stone-400 text-sm">Expand to Seva-Sangathan (Geo-local service pilots).</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="w-24 font-bold text-stone-500 pt-1">2028</div>
                            <div>
                                <strong className="text-white block">Phase 4: Defense & Integration</strong>
                                <p className="text-stone-400 text-sm">Launch Tattva-Raksha hub and integrate all pillars into one unified ecosystem.</p>
                            </div>
                        </li>
                    </ul>
                </section>

                <div className="mt-16 bg-stone-900 border border-white/5 p-8 rounded-xl text-center">
                    <h3 className="text-xl font-bold text-white mb-4">Join the Samvaad</h3>
                    <p className="text-stone-400 mb-6 max-w-lg mx-auto">
                        Get notified when we launch our next major milestone.
                    </p>
                    <div className="flex justify-center">
                        <SubscribeForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
