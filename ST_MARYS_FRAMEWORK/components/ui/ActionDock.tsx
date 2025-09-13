// ST_MARYS_FRAMEWORK/components/ui/ActionDock.tsx
'use client'

import SparkleButton from '@/components/ui/SparkleButton'
import { Phone, Calendar, MessageCircle, ArrowUp } from 'lucide-react'

export default function ActionDock() {
  const whatsapp = process.env.NEXT_PUBLIC_PRACTICE_WHATSAPP
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <SparkleButton as="a" href="/contact#book" variant="outline" size="md" aria-label="Book">
        <Calendar className="w-4 h-4" />
      </SparkleButton>
      <SparkleButton as="a" href="tel:+441273453109" variant="outline" size="md" aria-label="Call">
        <Phone className="w-4 h-4" />
      </SparkleButton>
      {whatsapp && (
        <SparkleButton as="a" href={`https://wa.me/${whatsapp}`} variant="outline" size="md" aria-label="WhatsApp">
          <MessageCircle className="w-4 h-4" />
        </SparkleButton>
      )}
      <SparkleButton as="button" onClick={scrollToTop} variant="outline" size="md" aria-label="Back to top">
        <ArrowUp className="w-4 h-4" />
      </SparkleButton>
    </div>
  )
}
