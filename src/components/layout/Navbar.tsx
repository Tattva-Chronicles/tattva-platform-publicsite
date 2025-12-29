"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Vision", href: "/vision" },
    { name: "Pillars", href: "/pillars" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-stone-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-stone-950/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold tracking-tight text-orange-500">
                    <span className="text-2xl">ॐ</span>
                    <span>Tattva Platform</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-orange-400",
                                pathname === item.href ? "text-orange-500" : "text-stone-400"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button variant="premium" size="sm" asChild>
                        <Link href="/donate">Donate</Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-stone-400 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden border-b border-white/5 bg-stone-950 px-4 py-4"
                >
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-base font-medium text-stone-300 hover:text-orange-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="/donate" onClick={() => setIsOpen(false)}>
                            <Button variant="premium" className="w-full">
                                Donate
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
