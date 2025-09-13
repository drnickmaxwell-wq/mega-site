'use client'

import React from 'react'
import { Star, Printer, Clock, HeartPulse } from 'lucide-react'

interface StatItem {
  icon: React.ReactElement
  title: string
  subtitle: string
}

const stats: StatItem[] = [
  {
    icon: <Star className="w-8 h-8 text-accent" aria-hidden="true" />, 
    title: '5★',
    subtitle: 'Google Rated',
  },
  {
    icon: <Printer className="w-8 h-8 text-accent" aria-hidden="true" />, 
    title: '3D Same‑Day',
    subtitle: 'Dentistry',
  },
  {
    icon: <Clock className="w-8 h-8 text-accent" aria-hidden="true" />, 
    title: '20+ Years',
    subtitle: 'of Care',
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-accent" aria-hidden="true" />, 
    title: 'Sedation',
    subtitle: 'Available',
  },
]

export default function Stats() {
  return (
    <section className="section-padding bg-background text-center">
      <div className="container-padding mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center" >
            {item.icon}
            <p className="mt-2 text-3xl font-bold text-foreground-primary">{item.title}</p>
            <p className="text-sm text-foreground-secondary uppercase tracking-wide">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
