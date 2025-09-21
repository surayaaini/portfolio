// src/components/Carousel.tsx
"use client";
import React, { useState } from "react";

const slides = [
  { src: "/images/photo1.jpg", caption: "City festival, KL" },
  { src: "/images/photo2.jpg", caption: "Cinema night reflections" },
  { src: "/images/photo3.jpg", caption: "Sunset walk" },
];

export default function Carousel() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  return (
    <div className="relative">
      <div className="w-full h-[420px] overflow-hidden rounded-md shadow-lg">
        <img src={slides[idx].src} alt={slides[idx].caption} className="w-full h-full object-cover" />
      </div>

      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center hover:scale-105 transition"
          aria-label="Previous"
        >
          ‹
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center hover:scale-105 transition"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      <p className="mt-4 text-sm text-neutral text-center">{slides[idx].caption}</p>
    </div>
  );
}
