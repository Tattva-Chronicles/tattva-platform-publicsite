"use client";

import { Share2, Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "./Button";

export function ShareButton() {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        const shareData = {
            title: 'Tattva Platform',
            text: 'Check out Tattva Platform: A unified ecosystem for Sanatana Dharma.',
            url: window.location.origin,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback to copy clipboard
            try {
                await navigator.clipboard.writeText(window.location.origin);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy', err);
            }
        }
    };

    return (
        <Button variant="ghost" size="sm" onClick={handleShare} className="text-stone-400 hover:text-orange-500 gap-2">
            {copied ? <Check size={16} /> : <Share2 size={16} />}
            {copied ? "Copied Link" : "Share Platform"}
        </Button>
    );
}
