"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { InlineSubscribeForm } from "@/components/ui/InlineSubscribeForm";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-500/10 rounded-[100%] blur-3xl" />
                <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-stone-950 to-transparent" />
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="container relative z-10 px-4 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/30 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8">
                        <Sparkles size={14} />
                        <span>The Unified Platform for Sanatana Dharma</span>
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 max-w-5xl"
                >
                    <span className="block text-stone-400 text-2xl md:text-4xl mb-2 font-sans font-normal tracking-wide uppercase">From Śruti to Seva</span>
                    One Dharma. <br /> One <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">Ecosystem.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl text-stone-400 max-w-2xl mb-10 leading-relaxed"
                >
                    Learn with truth. Act with service. Defend with honor. <br />
                    Join the movement to unify the global Dharmic community through AI and Technology.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button variant="premium" size="lg" className="text-lg px-8" asChild>
                        <Link href="/donate">
                            Support the Cause
                        </Link>
                    </Button>
                    <Button variant="secondary" size="lg" className="text-lg" asChild>
                        <Link href="/vision" className="group">
                            Read the Vision <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                    className="mt-8 w-full"
                >
                    <InlineSubscribeForm />
                    <p className="text-stone-500 text-xs mt-2">Join 200+ waiting for the next update.</p>
                </motion.div>
            </div>
        </section>
    );
}
