"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus("idle");

        try {
            const { error } = await supabase
                .from("contacts")
                .insert([formData]);

            if (error) throw error;
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    if (status === "success") {
        return (
            <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto text-green-500">
                    <Send size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-stone-400">Thank you for reaching out. We will get back to you shortly.</p>
                <Button variant="outline" onClick={() => setStatus("idle")}>Send Another</Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-stone-300">Name</label>
                    <input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-stone-800 border border-stone-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-stone-300">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-stone-800 border border-stone-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-stone-300">Subject</label>
                <input
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-stone-800 border border-stone-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-stone-300">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-stone-800 border border-stone-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                />
            </div>

            <Button type="submit" variant="premium" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2" /> : "Send Message"}
            </Button>

            {status === "error" && (
                <p className="text-red-400 text-sm text-center">Failed to send message. Please try again.</p>
            )}
        </form>
    );
}
