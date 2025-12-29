import { Metadata } from "next";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { SubscribeForm } from "@/components/ui/SubscribeForm";
import { SITE_URL, Schema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "The Builder",
    description: "One developer's tapasya. Join Animesh Shaw in building the unified ecosystem.",
    openGraph: {
        title: "The Builder | Tattva Platform",
        description: "One developer's tapasya. Join the movement.",
        url: `${SITE_URL}/team`,
        images: [`${SITE_URL}/images/og-default.jpg`],
    },
};

export default function TeamPage() {
    return (
        <main className="pt-24 pb-16 min-h-screen">
            <Schema
                type="Person"
                data={{
                    name: "Animesh Shaw",
                    jobTitle: "Founder & Lead Developer",
                    url: `${SITE_URL}/team`,
                    sameAs: [
                        "https://github.com/AnimeshShaw",
                        "https://twitter.com/TattvaChronicle",
                        "https://www.linkedin.com/in/animeshshaw/",
                        "https://www.instagram.com/animesh.infosec/"
                    ],
                }}
            />
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">One Developer&apos;s Tapasya</h1>
                    <p className="text-xl text-stone-300 italic max-w-2xl mx-auto">
                        "I built the foundation. Now, I need you to help build the Temple."
                    </p>
                </div>

                <div className="bg-stone-900 border border-white/5 p-8 rounded-2xl mb-16">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-32 h-32 bg-stone-800 rounded-full flex items-center justify-center text-4xl border-2 border-orange-500 overflow-hidden">
                            {/* Placeholder for Profile Image */}
                            <span className="font-serif text-stone-500">👨‍💻</span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">The Solo Journey</h2>
                            <p className="text-stone-300 leading-relaxed mb-4">
                                Tattva Platform (formerly Tattva Chronicles) operates as a solo endeavor.
                                Every line of code, every architectural decision, and every pixel is currently crafted by a single developer
                                dedicated to the revival of Dharmic consciousness through AI and technology.
                            </p>
                            <p className="text-stone-300 leading-relaxed">
                                In 2025, I launched <strong>ShastraDeep</strong> as a proof of concept.
                                Now, I am scaling this vision into a unified ecosystem.
                                But a single pair of hands can only do so much.
                                I realized that digital sovereignty is not given, it is built.
                                <br /><br />
                                Tattva Platform is my contribution. I am building the &quot;Infrastructure of Dharma&quot;—open source, decentralized, and uncompromising.
                            </p>
                            <div className="flex gap-4 mt-6">
                                <Link href="https://x.com/TattvaChronicle" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-orange-500 transition-colors">
                                    <Twitter size={20} />
                                </Link>
                                <Link href="https://github.com/AnimeshShaw" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-orange-500 transition-colors">
                                    <Github size={20} />
                                </Link>
                                <Link href="https://www.linkedin.com/in/animeshshaw/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-orange-500 transition-colors">
                                    <Linkedin size={20} />
                                </Link>
                                <Link href="https://www.instagram.com/animesh.infosec/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-orange-500 transition-colors">
                                    <Instagram size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-6 font-serif">Join the Movement</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-stone-950 border border-stone-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-orange-400 mb-2">For Developers</h3>
                            <p className="text-stone-400 text-sm mb-4">Help build the Samvaad engine (Next.js/NestJS). We need frontend wizards and backend architects.</p>
                        </div>
                        <div className="bg-stone-950 border border-stone-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-orange-400 mb-2">For Acharyas</h3>
                            <p className="text-stone-400 text-sm mb-4">Guide the moderation policy and help verify knowledge on ShastraDeep and Samvaad.</p>
                        </div>
                        <div className="bg-stone-950 border border-stone-800 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-orange-400 mb-2">For Supporters</h3>
                            <p className="text-stone-400 text-sm mb-4">Your donations fund the servers and allow me to dedicate more time to code.</p>
                        </div>
                    </div>
                </section>

                <div className="mt-16 pt-8 border-t border-white/5 text-center">
                    <p className="text-stone-400 mb-4">Or simply stay in the loop.</p>
                    <div className="flex justify-center">
                        <SubscribeForm />
                    </div>
                </div>

            </div>
        </main>
    );
}
