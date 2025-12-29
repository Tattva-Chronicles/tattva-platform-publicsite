import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Tattva Platform",
    description: "Privacy Policy for Tattva Platform.",
};

export default function PrivacyPage() {
    return (
        <main className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-stone-400">Last updated: December 2025</p>
                </div>

                <div className="bg-stone-900 border border-white/5 rounded-2xl p-8 md:p-12 prose prose-invert prose-stone max-w-none">
                    <p className="lead text-xl text-stone-300">
                        Tattva Platform ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our website and services.
                    </p>

                    <div className="my-8 h-px bg-white/10 w-full" />

                    <h3 className="text-white font-serif text-2xl mt-8 mb-4">1. Information We Collect</h3>
                    <p>We collect information you provide directly to us, such as when you subscribe to our newsletter, fill out a contact form, or make a donation.</p>
                    <ul className="list-disc pl-5 space-y-2 text-stone-300">
                        <li><strong className="text-white">Personal Data:</strong> Name, Email address.</li>
                        <li><strong className="text-white">Communication Data:</strong> Message content sent via contact forms.</li>
                    </ul>

                    <h3 className="text-white font-serif text-2xl mt-8 mb-4">2. How We Use Your Information</h3>
                    <p>We use the collected information to:</p>
                    <ul className="list-disc pl-5 space-y-2 text-stone-300">
                        <li>Send you updates about the platform (if subscribed).</li>
                        <li>Respond to your inquiries and support requests.</li>
                        <li>Improve our services and user experience.</li>
                    </ul>

                    <h3 className="text-white font-serif text-2xl mt-8 mb-4">3. Data Security</h3>
                    <p>We implement reasonable security measures (including Supabase RLS and SSL) to protect your personal information. However, no internet transmission is completely secure.</p>

                    <h3 className="text-white font-serif text-2xl mt-8 mb-4">4. Contact Us</h3>
                    <p>If you have questions about this policy, please contact us at <a href="mailto:contact@tattvaplatform.com" className="text-orange-400 hover:text-orange-300">contact@tattvaplatform.com</a>.</p>
                </div>
            </div>
        </main>
    );
}
