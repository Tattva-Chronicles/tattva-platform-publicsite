"use client";

import { motion } from "framer-motion";
import { BookOpen, HeartHandshake, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
    {
        id: "samvaad",
        title: "Dharma-Samvaad",
        subtitle: "The Learn Pillar",
        description: "A verifiable knowledge engine. Think 'Stack Overflow for Shastras'. Ask questions, get answers backed by authentic Pramāṇa (scriptural evidence).",
        icon: BookOpen,
        color: "text-blue-400",
        gradient: "from-blue-500/20 to-blue-500/0",
        border: "group-hover:border-blue-500/50",
        link: "/pillars/samvaad"
    },
    {
        id: "seva",
        title: "Seva-Sangathan",
        subtitle: "The Act Pillar",
        description: "Coordinate real-world impact. Think 'GitHub for Seva'. Report local issues, organize cleanups, and track your Dharmic service record.",
        icon: HeartHandshake,
        color: "text-green-400",
        gradient: "from-green-500/20 to-green-500/0",
        border: "group-hover:border-green-500/50",
        link: "/pillars/seva"
    },
    {
        id: "raksha",
        title: "Tattva-Raksha",
        subtitle: "The Defend Pillar",
        description: "Collaborative digital defense. Think 'Crowdsourced Truth'. Counter misinformation with facts, sources, and dignity.",
        icon: Shield,
        titleColor: "text-red-400", // Special color for Raksha title if needed, but keeping consistent is better.
        color: "text-red-400",
        gradient: "from-red-500/20 to-red-500/0",
        border: "group-hover:border-red-500/50",
        link: "/pillars/raksha"
    }
];

export function Pillars() {
    return (
        <section className="py-24 relative bg-stone-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">Three Pillars. One Purpose.</h2>
                    <p className="text-stone-400 max-w-2xl mx-auto">
                        The ecosystem is designed to cover the entire lifecycle of a Dharmic citizen:
                        learning the truth, acting for society, and defending against falsehood.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`group relative p-8 rounded-2xl bg-stone-900/50 border border-white/5 hover:bg-stone-900 transition-all duration-300 ${pillar.border}`}
                        >
                            {/* Radial Gradient Hover Effect */}
                            <div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-lg bg-stone-800 flex items-center justify-center mb-6 ${pillar.color}`}>
                                    <pillar.icon size={24} />
                                </div>

                                <h3 className="font-serif text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                                <p className={`text-sm font-medium uppercase tracking-wider mb-4 ${pillar.color}`}>{pillar.subtitle}</p>

                                <p className="text-stone-400 leading-relaxed mb-8 min-h-[80px]">
                                    {pillar.description}
                                </p>

                                <div className="flex items-center text-white font-medium group-hover:underline decoration-stone-500 underline-offset-4 pointer-events-none">
                                    Learn more <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </div>
                            </div>
                            <Link href={pillar.link} className="absolute inset-0 z-20" aria-label={`Learn more about ${pillar.title}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
