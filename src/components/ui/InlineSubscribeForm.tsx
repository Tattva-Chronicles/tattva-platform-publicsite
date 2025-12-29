"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Loader2, Send } from "lucide-react";

export function InlineSubscribeForm() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        setStatus("idle");

        try {
            const { error } = await supabase
                .from("subscribers")
                .insert([{ email }]);

            if (error) throw error;
            setStatus("success");
            setEmail("");
        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    if (status === "success") {
        return <p className="text-green-400 text-sm animate-fade-in">Thanks! You&apos;re on the list.</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full max-w-md mx-auto">
            <input
                type="email"
                placeholder="Enter your email for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white text-sm placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all backdrop-blur-sm"
            />
            <button
                type="submit"
                disabled={loading}
                className="text-stone-400 hover:text-orange-500 transition-colors disabled:opacity-50"
            >
                {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            </button>
        </form>
    );
}
