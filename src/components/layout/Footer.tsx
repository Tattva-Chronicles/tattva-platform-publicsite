import Link from "next/link";
import { Github, Twitter, MessageCircle, Heart } from "lucide-react";
import { ShareButton } from "@/components/ui/ShareButton";

export function Footer() {
    return (
        <footer className="bg-stone-950 border-t border-white/10 py-12 text-stone-400 text-sm">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div className="md:col-span-2 space-y-4">
                    <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold text-stone-200">
                        <span className="text-2xl text-orange-500">ॐ</span>
                        <span>Tattva Platform</span>
                    </Link>
                    <p className="max-w-md">
                        A unified ecosystem to Learn, Act, and Defend.
                        Preserving Sanatana Dharma through verified knowledge, civic service, and digital defense.
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://twitter.com" target="_blank" className="hover:text-orange-500 transition-colors">
                            <Twitter size={20} />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="https://github.com" target="_blank" className="hover:text-orange-500 transition-colors">
                            <Github size={20} />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-serif font-bold text-stone-100 mb-4">Pillars</h3>
                    <ul className="space-y-2">
                        <li><Link href="/pillars/samvaad" className="hover:text-orange-500 transition-colors">Dharma-Samvaad</Link></li>
                        <li><Link href="/pillars/seva" className="hover:text-orange-500 transition-colors">Seva-Sangathan</Link></li>
                        <li><Link href="/pillars/raksha" className="hover:text-orange-500 transition-colors">Tattva-Raksha</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-serif font-bold text-stone-100 mb-4">Platform</h3>
                    <ul className="space-y-2">
                        <li><Link href="/vision" className="hover:text-orange-500 transition-colors">Our Vision</Link></li>
                        <li><Link href="/donate" className="hover:text-orange-500 transition-colors">Donate</Link></li>
                        <li><Link href="/team" className="hover:text-orange-500 transition-colors">Team</Link></li>
                        <li><Link href="/legal/privacy" className="hover:text-orange-500 transition-colors text-stone-500">Privacy Policy</Link></li>
                        <li><Link href="/legal/terms" className="hover:text-orange-500 transition-colors text-stone-500">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>


            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Tattva Platform. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <ShareButton />
                    <p className="flex items-center gap-1 text-stone-500">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> for Dharma
                    </p>
                </div>
            </div>
        </footer>
    );
}
