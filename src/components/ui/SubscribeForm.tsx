"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase";
import { Loader2, Send } from "lucide-react";

export function SubscribeForm() {
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

    return (
        <div className="w-full max-w-sm">
            <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                    type="email"
                    placeholder="Enter your email for updates"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading || status === "success"}
                    className="flex-1 bg-stone-800 border border-stone-700 rounded-md px-4 py-2 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:opacity-50"
                />
                <Button variant="default" type="submit" disabled={loading || status === "success"}>
                    {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </Button>
            </form>
            {status === "success" && (
                <p className="text-green-400 text-sm mt-2">Thanks for subscribing! We&apos;ll keep you posted.</p>
            )}
            {status === "error" && (
                <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
            )}
        </div>
    );
}
