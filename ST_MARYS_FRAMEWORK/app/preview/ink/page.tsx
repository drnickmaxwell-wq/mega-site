'use client'

import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import SparkleButton from '@/components/ui/SparkleButton'
import { WaveBackgroundLayout } from '@/components/layout/WaveBackgroundLayout'
import { Phone, Calendar, MessageCircle } from 'lucide-react'

export default function InkPreview() {
  return (
    <div data-theme="dark">
      <WaveBackgroundLayout intensity="medium">
        <Navigation />
        <main className="flex flex-col items-center justify-center py-16">
          <h1 className="font-montserrat text-4xl font-bold">Ink Theme Preview</h1>
          <p className="font-lora mt-2">This route showcases the shell with ink (dark) theme tokens.</p>
          <div className="flex gap-4 mt-8">
            <SparkleButton variant="primary" size="lg">Book Consultation</SparkleButton>
            <SparkleButton variant="magenta" size="lg">Contact Us</SparkleButton>
          </div>
        </main>
        <Footer />
        <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
          <SparkleButton as="a" href="tel:+441273453109" variant="outline" size="md" aria-label="Call us">
            <Phone className="w-4 h-4" />
          </SparkleButton>
          <SparkleButton as="a" href="/contact#book" variant="outline" size="md" aria-label="Book now">
            <Calendar className="w-4 h-4" />
          </SparkleButton>
          <SparkleButton as="a" href="/contact" variant="outline" size="md" aria-label="Message">
            <MessageCircle className="w-4 h-4" />
          </SparkleButton>
        </div>
      </WaveBackgroundLayout>
    </div>
  )
}
