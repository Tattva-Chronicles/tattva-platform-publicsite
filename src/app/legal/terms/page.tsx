import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Tattva Platform",
    description: "Terms of Service for Tattva Platform.",
};

export default function TermsPage() {
    return (
        <main className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
                    <p className="text-stone-400">Last updated: December 2025</p>
                </div>

                <div className="bg-stone-900 border border-white/5 rounded-2xl p-8 md:p-12 prose prose-invert prose-stone max-w-none">
                    <p className="lead text-xl text-stone-300">
                        By accessing or using Tattva Platform, you agree to be bound by these Terms of Service. Please read them carefully.
                    </p>

                    <div className="my-8 h-px bg-white/10 w-full" />

                    <h3 className="text-white font-serif text-2xl mt-8 mb-4">1. Use of the Platform</h3>
                    <ul className="list-disc pl-5 space-y-2 text-stone-300">
                        <li>You agree to use the platform only for lawful purposes.</li>
                        <li>You agree to act in accordance with Sanatana Dharma principles of <strong>Satya (Truth)</strong> and <strong>Ahimsa (Non-harm)</strong> while interacting with our ecosystem.</li>
                        <li>Harassment, hate speech, or malicious activities will result in immediate suspension.</li>
                    </ul>

                    <h3 className="text-white font-serif text-2xl mt-8 mb-4">2. Intellectual Property</h3>
                    <p>
                        <strong>Open Knowledge:</strong> Content contributed to public repositories (like ShastraDeep) is generally educational and open. <br />
                        <strong>Platform IP:</strong> The core branding, design, logo, and codebase of Tattva Platform are owned by us, unless open-sourced under a specific license.
                    </p>

                    <h3 className="text-white font-serif text-2xl mt-8 mb-4">3. Disclaimer</h3>
                    <p>The content provided on this platform is for educational and informational purposes only. We do not claim to replace traditional Gurukul lineage instruction.</p>

                    <h3 className="text-white font-serif text-2xl mt-8 mb-4">4. User Contributions</h3>
                    <p>If you contribute content (e.g., via ShastraDeep or Samvaad), you grant us a license to display, distribute, and archive that content for the purpose of the platform.</p>

                    <h3 className="text-white font-serif text-2xl mt-8 mb-4">5. Changes to Terms</h3>
                    <p>We reserve the right to modify these terms at any time. Continued use of the platform constitutes acceptance of the new terms.</p>
                </div>
            </div>
        </main>
    );
}
