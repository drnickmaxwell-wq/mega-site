'use client'

import React from 'react'
import { FAQAccordion } from '@/components/faq/FAQAccordion'
// Import FAQs from zero-click dataset. Because Next.js supports JSON import, this will be tree-shaken.
import faqs from '@/data/zero-click/home.json'

export default function HomeFAQ() {
  return (
    <section className="section-padding bg-background">
      <div className="container-padding mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground-primary mb-6">
          Frequently Asked Questions
        </h2>
        {/* FAQAccordion will emit FAQPage JSON-LD when emitJsonLd is true */}
        <FAQAccordion items={faqs} emitJsonLd={true} />
      </div>
    </section>
  )
}
