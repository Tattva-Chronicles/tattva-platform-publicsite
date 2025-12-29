"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ExternalLink, CheckCircle } from "lucide-react";
import { Slideshow } from "@/components/ui/Slideshow";

export function ShastraDeepShowcase() {
    return (
        <section className="py-24 bg-stone-900 border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 relative"
                    >
                        <div className="absolute -inset-4 bg-orange-500/10 blur-3xl rounded-full" />
                        <div className="relative bg-stone-950 border border-stone-800 rounded-2xl p-2 shadow-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">The Engine: <span className="text-orange-500">ShastraDeep</span></h2>
                            <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
                                Before we build the platform, we built the brain. ShastraDeep is the world&apos;s most advanced Dharmic AI model.
                            </p>            <span className="w-3 h-3 rounded-full bg-green-500" />
                            <div className="ml-auto px-3 py-1 bg-stone-900 rounded-full text-xs text-stone-500 font-mono">shastradeep.com</div>
                        </div>
                        <Slideshow />
                        {/* Overlay Badge */}
                        <div className="absolute -right-6 -bottom-6 bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-3 rounded-xl shadow-lg transform rotate-3 z-20">
                            <p className="font-bold text-white text-sm">Launched Dec 2025</p>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
                            A &quot;Google&quot; for Shastras. <span className="text-orange-400">Search 10,000+ texts</span> with semantic understanding.
                            Ask: &quot;What does the Gita say about Duty?&quot; and get citations, not opinions.
                        </h2>
                        <p className="text-xl text-stone-300 mb-8 leading-relaxed">
                            We don&apos;t just dream; we build. In 2025, we successfully launched <strong>ShastraDeep</strong> — a research-oriented digital library for Sanātana Dharma.
                        </p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex gap-3 text-stone-300">
                                <CheckCircle className="text-green-500 shrink-0" />
                                <span><strong>Structured Knowledge:</strong> Deep access to Vedas, Upanishads, and Puranas.</span>
                            </li>
                            <li className="flex gap-3 text-stone-300">
                                <CheckCircle className="text-green-500 shrink-0" />
                                <span><strong>AI-Powered:</strong> Semantic search that understands concepts, not just keywords.</span>
                            </li>
                            <li className="flex gap-3 text-stone-300">
                                <CheckCircle className="text-green-500 shrink-0" />
                                <span><strong>Live & Scalable:</strong> A high-performance PWA serving thousands of seekers.</span>
                            </li>
                        </ul>

                        <p className="text-stone-400 mb-8 italic border-l-2 border-stone-700 pl-4">
                            "This laid the foundation. Now, we are building the next pillar: **Dharma-Samvaad**."
                        </p>

                        <Button variant="default" size="lg" asChild>
                            <Link href="https://shastradeep.com" target="_blank" className="flex items-center gap-2">
                                Visit ShastraDeep <ExternalLink size={16} />
                            </Link>
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
