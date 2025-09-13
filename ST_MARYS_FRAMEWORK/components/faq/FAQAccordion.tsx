'use client'

import React, { useState } from 'react'
// Import helper to generate FAQPage JSON-LD; implemented separately
import { faqPageJsonLd } from '@/lib/seo/jsonld'

export interface FAQItem {
  question: string
  answer: string
}

export function FAQAccordion({
  items,
  emitJsonLd = false,
}: {
  items: FAQItem[]
  emitJsonLd?: boolean
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <div className="max-w-prose mx-auto">
      {emitJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageJsonLd(items)),
          }}
        />
      )}
      <div className="divide-y divide-border">
        {items.map((item, idx) => (
          <div key={idx} className="py-4">
            <button
              type="button"
              className="flex justify-between w-full py-2 font-semibold text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
              id={`faq-heading-${idx}`}
              onClick={() => toggle(idx)}
            >
              <span>{item.question}</span>
              <span className="ml-4">{openIndex === idx ? '\u2013' : '+'}</span>
            </button>
            <div
              id={`faq-panel-${idx}`}
              role="region"
              aria-labelledby={`faq-heading-${idx}`}
              className={`${openIndex === idx ? 'mt-2' : 'hidden'}`}
            >
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
