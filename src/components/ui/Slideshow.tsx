"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/images/ShastraDeep-ImageSlide-1.png",
    "/images/ShastraDeep-ImageSlide-2.png",
    "/images/ShastraDeep-ImageSlide-3.png",
];

export function Slideshow() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full aspect-[16/9] bg-stone-900 rounded-lg overflow-hidden border border-stone-800 shadow-2xl">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[index]}
                        alt={`ShastraDeep Screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors ${i === index ? "bg-orange-500" : "bg-stone-600"}`}
                    />
                ))}
            </div>
        </div>
    );
}
