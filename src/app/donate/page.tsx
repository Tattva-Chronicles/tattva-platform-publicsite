import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Copy, Heart, ExternalLink, Coffee, CreditCard } from "lucide-react";
import { SubscribeForm } from "@/components/ui/SubscribeForm";
import { SITE_URL, Schema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Donate | Support the Dharma Renaissance",
    description: "Support the development of the Tattva Platform ecosystem. Help us build sovereign digital infrastructure.",
    openGraph: {
        title: "Donate | Tattva Platform",
        description: "Support the development of the Tattva Platform ecosystem.",
        url: `${SITE_URL}/donate`,
        images: [`${SITE_URL}/images/og-default.jpg`],
    },
};

export default function DonatePage() {
    return (
        <main className="pt-24 pb-16 min-h-screen bg-stone-950">
            <Schema
                type="WebPage"
                data={{
                    name: "Donate to Tattva Platform",
                    description: "Support the development of the Tattva Platform ecosystem.",
                    url: `${SITE_URL}/donate`,
                }}
            />

            {/* Hero Section with Emotional Hook */}
            <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6 border border-orange-500/20">
                    <Heart size={14} className="fill-orange-500/50" />
                    <span>Seva for the Digital Age</span>
                </div>

                <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    This is not just code.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                        It is an Offering.
                    </span>
                </h1>

                <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
                    We are building the <strong>Digital Fortress</strong> for Sanatana Dharma.
                    No corporate funding. No hidden agendas. Just a few volunteers working quietly to protect our heritage.
                    <br /><br />
                    Servers cost money. APIs cost money. Your contribution fuels this revolution.
                </p>
            </div>

            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Card 1: UPI (Primary - Easy Access) */}
                    <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-orange-500/30 rounded-2xl p-6 relative overflow-hidden group hover:border-orange-500/50 transition-all shadow-xl shadow-orange-900/10">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500" />
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-white">UPI / QR</h3>
                            <span className="text-xs font-mono text-orange-400 bg-orange-900/30 px-2 py-1 rounded">Preferred</span>
                        </div>

                        <div className="bg-white p-3 rounded-xl mx-auto w-fit mb-6 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                            <Image
                                src="/images/upi_1767010336678.png"
                                alt="UPI QR Code"
                                width={200}
                                height={200}
                                className="rounded-lg"
                            />
                        </div>

                        <div className="bg-stone-800/50 rounded-lg p-3 border border-white/5 flex items-center justify-between">
                            <code className="text-stone-300 font-mono text-sm">animesh.shaw@superyes</code>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-stone-400 hover:text-white">
                                <Copy size={14} />
                            </Button>
                        </div>
                        <p className="text-center text-xs text-stone-500 mt-4">Scan with any UPI App</p>
                    </div>

                    {/* Card 2: International (PayPal & Coffee) */}
                    <div className="bg-stone-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-all">
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                    <CreditCard size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">International Support</h3>
                            </div>
                            <p className="text-stone-400 text-sm mb-8">
                                For our global family. Support us securely via PayPal or Buy Me a Coffee.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <Button variant="outline" size="lg" className="w-full justify-between group border-stone-700 hover:bg-stone-800 hover:text-white" asChild>
                                <a href="https://paypal.me/AnimeshShaw?locale.x=en_GB&country.x=IN" target="_blank" rel="noopener noreferrer">
                                    <span className="flex items-center gap-2">Donate via PayPal</span>
                                    <ExternalLink size={16} className="text-stone-500 group-hover:text-white transition-colors" />
                                </a>
                            </Button>

                            <Button variant="outline" size="lg" className="w-full justify-between group border-yellow-600/30 hover:bg-yellow-500/10 hover:border-yellow-500/50 text-yellow-500 hover:text-yellow-400" asChild>
                                <a href="https://buymeacoffee.com/tattvachronicles" target="_blank" rel="noopener noreferrer">
                                    <span className="flex items-center gap-2"><Coffee size={18} /> Buy us a Coffee</span>
                                    <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Card 3: Institutional (Bank Transfer) */}
                    {/* 
                    <div className="bg-stone-900 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="p-2 bg-stone-800 rounded-lg text-stone-400">
                                <span className="font-serif font-bold text-xl">🏛️</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Bank Transfer</h3>
                        </div>

                        <div className="space-y-4 font-mono text-sm text-stone-300 bg-stone-950/50 p-4 rounded-lg border border-white/5">
                            <div>
                                <p className="text-stone-500 text-xs uppercase tracking-wider mb-1">Account Name</p>
                                <p>Tattva Foundation</p>
                            </div>
                            <div>
                                <p className="text-stone-500 text-xs uppercase tracking-wider mb-1">Account No</p>
                                <p>XXXXXXXXXX</p>
                            </div>
                            <div>
                                <p className="text-stone-500 text-xs uppercase tracking-wider mb-1">IFSC Code</p>
                                <p>XXXXXXX</p>
                            </div>
                        </div>
                        <p className="text-xs text-stone-500 mt-4 text-center">
                            For large organizational grants, please email us directly.
                        </p>
                    </div>
                    */}

                </div>

                {/* Footer Section */}
                <div className="max-w-2xl mx-auto mt-20 text-center border-t border-white/5 pt-12">
                    <h3 className="text-xl font-bold text-white mb-4">Join the Silent Army</h3>
                    <p className="text-stone-400 mb-8">
                        Can't donate right now? You can still serve. Join our waiting list to become a beta tester for <strong>Dharma-Samvaad</strong>.
                    </p>
                    <div className="flex justify-center">
                        <SubscribeForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
