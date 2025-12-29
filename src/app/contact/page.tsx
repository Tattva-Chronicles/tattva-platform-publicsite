import { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import { Mail } from "lucide-react";
import { SITE_URL, Schema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with the team. Join the community of Dharmic builders.",
    openGraph: {
        title: "Contact Us | Tattva Platform",
        description: "Get in touch with the team. Join the community of Dharmic builders.",
        url: `${SITE_URL}/contact`,
        images: [`${SITE_URL}/images/og-default.jpg`],
    },
};

export default function ContactPage() {
    return (
        <main className="pt-24 pb-16 min-h-screen">
            <Schema
                type="ContactPage"
                data={{
                    name: "Contact Tattva Platform",
                    description: "Contact page for Tattva Platform. Reach out for volunteering or inquiries.",
                    url: `${SITE_URL}/contact`,
                    mainEntity: {
                        "@type": "Organization",
                        "name": "Tattva Platform",
                        "email": "contact@tattvaplatform.com"
                    }
                }}
            />
            <div className="container mx-auto px-4 max-w-5xl">
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-8 text-center">Get in Touch</h1>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Info */}
                    <div className="space-y-8">
                        <div className="text-lg text-stone-300 space-y-4">
                            <p>
                                Have questions about the platform? Want to volunteer your skills or knowledge?
                                We represent a growing community of Dharmic builders.
                            </p>
                            <p>
                                Whether you are an Acharya, a developer, or a Sevak, we want to hear from you.
                            </p>
                        </div>

                        <div className="bg-stone-900 border border-white/5 p-6 rounded-xl space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-stone-800 rounded-lg text-orange-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Email Us</h3>
                                    <p className="text-stone-400 text-sm">contact@tattvaplatform.org</p>
                                    <p className="text-xs text-stone-500 mt-1">(Response time: 24-48 hours)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-stone-900 border border-white/5 p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold text-white mb-6 font-serif">Send a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </main>
    );
}
