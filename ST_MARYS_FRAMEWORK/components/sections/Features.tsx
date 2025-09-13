'use client'

import React from 'react'
import {
  Printer,
  Bone,
  Smile,
  HeartPulse,
  AlarmClock,
  ScanLine,
} from 'lucide-react'

interface FeatureItem {
  icon: React.ReactElement
  title: string
  description: string
}

const features: FeatureItem[] = [
  {
    icon: <Printer className="w-8 h-8 text-accent" aria-hidden="true" />,
    title: 'Same‑Day 3D Veneers',
    description: 'Custom 3D printed veneers designed and fitted in one visit for a perfect smile.',
  },
  {
    icon: <Bone className="w-8 h-8 text-accent" aria-hidden="true" />,
    title: 'Guided Implants',
    description: 'Precision dental implants using 3D planning for optimal placement and comfort.',
  },
  {
    icon: <Smile className="w-8 h-8 text-accent" aria-hidden="true" />,
    title: 'Spark Aligners',
    description: 'Clear aligners expertly planned to straighten your teeth discreetly and comfortably.',
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-accent" aria-hidden="true" />,
    title: 'Anxiety & Sedation Care',
    description: 'Relax with sedation options and compassionate care for anxious patients.',
  },
  {
    icon: <AlarmClock className="w-8 h-8 text-accent" aria-hidden="true" />,
    title: 'Emergency Appointments',
    description: 'Same-day emergency dental appointments to relieve pain and restore your smile.',
  },
  {
    icon: <ScanLine className="w-8 h-8 text-accent" aria-hidden="true" />,
    title: 'Digital Smile Planning',
    description: 'State-of-the-art digital smile design for predictable, beautiful results.',
  },
]

export default function Features() {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground-primary mb-8">
          Our Signature Treatments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col bg-card p-6 rounded-xl border border-border/10 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-foreground-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
