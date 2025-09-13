'use client'

import React, { useEffect, useState } from 'react'
import { SparkleButton } from '@/components/ui/SparkleButton'

// Hero section component for the home page.  
// Shows a background video with gradient overlay, shimmering headline and CTAs.  
// Respects prefers-reduced-motion to avoid playing video and disable sparkle particles.
export default function Hero() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mediaQuery.matches)
    const handler = (event: MediaQueryListEvent) => setReduceMotion(event.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <section className="relative isolate w-full overflow-hidden">
      {/* Maintain aspect ratio to avoid CLS. Use a pseudo-element padding-top ratio. */}
      <div className="relative w-full pt-[56.25%] md:pt-[40%]">
        {!reduceMotion ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/video/hero/hero-poster.jpg"
          >
            <source src="/video/hero/hero.webm" type="video/webm" />
            <source src="/video/hero/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/video/hero/hero-poster.jpg"
            alt="Hero background"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-montserrat tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-[pulse_6s_infinite]">
            Luxury Coastal Dentistry
          </h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl md:text-2xl text-foreground-secondary">
            Transforming smiles with same‑day dentistry and personalised care in Shoreham-by-Sea.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <SparkleButton
              as="a"
              href="/contact#book"
              variant="primary"
              size="lg"
            >
              Book a Consultation
            </SparkleButton>
            <SparkleButton
              as="a"
              href="/treatments/3d-veneers"
              variant="magenta"
              size="lg"
            >
              See 3D Dentistry
            </SparkleButton>
          </div>
        </div>
      </div>
    </section>
  )
}
