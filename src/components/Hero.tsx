// src/components/Hero.tsx
"use client";
import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function Hero() {
  return (
    <section className="pt-12 pb-12"> {/* reduced top & bottom padding */}
      <div className="max-w-[1000px] mx-auto px-6 text-center">

        {/* Profile Image */}
        <img
          src="/images/photo.jpg"
          alt="Suraya Aini"
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-6 border-4 border-accent object-cover shadow-md"
        />

        {/* Name */}
        <h1
          className={`${playfair.className} text-[48px] sm:text-[60px] md:text-[72px] leading-[1.05] text-secondary`}
        >
          Suraya Aini
        </h1>

        {/* Intro */}
        <p className="mt-4 text-[18px] sm:text-[20px] text-secondary max-w-2xl mx-auto">
          Welcome to My Portfolio!
          <br />
          Just trying to build, learn, and enjoy — one day at a time.
        </p>

        {/* View CV button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-[#a12234] text-white font-medium rounded-full shadow-md hover:bg-[#c92c43] transition-colors"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
