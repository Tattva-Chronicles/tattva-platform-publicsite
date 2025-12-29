import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Check, Copy, Heart } from "lucide-react";
import { SubscribeForm } from "@/components/ui/SubscribeForm";
import { SITE_URL, Schema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Donate",
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
        <main className="pt-24 pb-16 min-h-screen">
            <Schema
                type="WebPage"
                data={{
                    name: "Donate to Tattva Platform",
                    description: "Support the development of the Tattva Platform ecosystem.",
                    url: `${SITE_URL}/donate`,
                }}
            />
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <div className="mb-12">
                    <span className="inline-block p-4 rounded-full bg-orange-500/10 text-orange-500 mb-6">
                        <Heart size={48} />
                    </span>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">Support Dharma</h1>
                    <p className="text-xl text-stone-300">
                        Building a sovereign digital ecosystem requires resources.
                        Your contribution helps us build servers, not offices.
                    </p>
                </div>

                <div className="bg-stone-900 border border-white/10 rounded-2xl p-8 mb-12 text-left">
                    <h3 className="text-2xl font-bold text-white mb-6 font-serif">Ways to Contribute</h3>

                    <div className="space-y-6">
                        <div className="p-4 rounded-lg bg-stone-800 border border-white/5">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-stone-400 text-sm uppercase tracking-wide">UPI ID</span>
                                <Button variant="ghost" size="sm" className="h-8 text-stone-500">
                                    <Copy size={14} />
                                </Button>
                            </div>
                            <code className="text-xl text-white font-mono block">donate@tattva</code>
                            <p className="misc text-xs text-stone-500 mt-2">*This is a placeholder ID. Do not send money yet.</p>
                        </div>

                        <div className="p-4 rounded-lg bg-stone-800 border border-white/5">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-stone-400 text-sm uppercase tracking-wide">Bank Transfer</span>
                            </div>
                            <div className="space-y-1 font-mono text-stone-300">
                                <p>Account Name: Tattva Foundation</p>
                                <p>Account No: XXXXXXXXXX</p>
                                <p>IFSC: XXXXXXX</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-xl mx-auto">
                    <h3 className="text-xl font-bold text-white mb-4">Subscribe for Updates</h3>
                    <p className="text-stone-400 mb-6 text-sm">We are currently in active development. Join our waiting list to get notified when we launch Samvaad MVP.</p>

                    <div className="flex justify-center">
                        <SubscribeForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
