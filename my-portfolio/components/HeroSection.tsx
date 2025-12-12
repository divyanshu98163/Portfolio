"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    const imgRef = useRef<HTMLDivElement | null>(null);

    const PARALLAX = 0.15; // adjust parallax movement

    useEffect(() => {
        const el = imgRef.current;
        if (!el) return;

        let rafId: number | null = null;

        const update = () => {
            const y = window.scrollY;
            el.style.transform = `translateY(${y * PARALLAX}px)`;
        };

        const handleScroll = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                update();
                rafId = null;
            });
        };

        window.addEventListener("scroll", handleScroll);
        update();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="w-full pt-36 md:pt-48 pb-16">
            <div className="text-center space-y-6">
                {/* Title */}
                <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
                    Divyanshu Singh <br /> Portfolio
                </h1>

                {/* Subtitle */}
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Full Stack Developer • Machine Learning • MERN • NLP • AI Innovation
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-4">
                    <Link
                        href="https://drive.google.com/file/d/1b7yPiCOn2AzPdMunbb-NCFcPxo76iLQ8/view"
                        target="_blank"
                    >
                        <button className="px-8 py-3 bg-primary text-white rounded-lg hover:opacity-80 transition font-medium">
                            Download Resume
                        </button>
                    </Link>

                    <Link href="#projects">
                        <button className="px-8 py-3 border text-white rounded-lg hover:bg-white/10 transition font-medium">
                            View Projects
                        </button>
                    </Link>
                </div>
            </div>

            {/* Parallax Image */}
            <div
                ref={imgRef}
                className="mt-10 will-change-transform transition-transform"
            >
                <div ref={imgRef} className="mt-10 will-change-transform">
                    <Image
                        src="/divyanshu.png.jpg"
                        width={450}
                        height={450}
                        alt="Divyanshu Singh Portfolio Image"
                        className="rounded-full shadow-xl mx-auto object-cover border-4 border-primary"
                        priority
                    />
                </div>

            </div>
        </section>
    );
}
