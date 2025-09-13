// components/sections/Hero.tsx (updated)
// Client component for the homepage hero section. Renders a full‑width video
// with a gradient overlay, shimmering heading and two CTA buttons. It
// respects the user's reduced‑motion preference by pausing the video and
// showing the poster instead, and defers expensive animations.

'use client';

import React, { useEffect, useState } from 'react';
// Import SparkleButton as a default export. The component internally
// handles dynamic framer‑motion loading and reduced‑motion fallback.
import SparkleButton from '@/components/ui/SparkleButton';
import { Play, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  // Track whether the user prefers reduced motion. This flag will
  // disable auto‑playing the video and hide particle animations.
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReduceMotion(mediaQuery.matches);
      const handler = (event) => setReduceMotion(event.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);

  return (
    <section className="relative isolate w-full overflow-hidden">
      {/* Maintain a 16:9 aspect ratio on desktop to avoid CLS */}
      <div className="relative w-full pt-[56.25%]">
        {!reduceMotion ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            muted
            playsInline
            autoPlay
            loop
            preload="metadata"
            poster="/video/hero/hero-poster.jpg"
          >
            <source src="/video/hero/hero.webm" type="video/webm" />
            <source src="/video/hero/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/video/hero/hero-poster.jpg"
            alt="Dental practice hero background"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {/* Gradient mask overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />
      </div>
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-montserrat bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-pulse">
          Luxury Dentistry on the Coast
        </h1>
        <p className="mt-4 max-w-xl text-lg font-lora text-foreground-secondary">
          Discover the latest in 3D printed veneers, implants and sedation care — all under one roof.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <SparkleButton as="a" href="/contact#book" variant="primary" size="lg">
            Book a Consultation
          </SparkleButton>
          <SparkleButton as="a" href="/preview/light" variant="magenta" size="lg">
            See 3D Dentistry
          </SparkleButton>
        </div>
      </div>
    </section>
  );
}
