'use client';

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import SparkleButton from '@/components/ui/SparkleButton';
import { WaveBackgroundLayout } from '@/components/layout/WaveBackgroundLayout';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

export default function InkPreview() {
  return (
    <div className="dark">
      <WaveBackgroundLayout intensity="medium">
        <Navigation />
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          <section className="w-full max-w-5xl text-center py-16">
            <h1 className="text-4xl font-bold font-montserrat text-foreground">
              Ink Theme Preview
            </h1>
            <p className="mt-4 text-lg font-lora text-foreground-secondary">
              Explore the dark theme shell. This page uses our brand tokens for colours and typography.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <SparkleButton variant="primary" size="lg">
                Book Consultation
              </SparkleButton>
              <SparkleButton variant="magenta" size="lg">
                Contact Us
              </SparkleButton>
            </div>
          </section>
        </main>
        {/* Action dock with outline buttons and icons */}
        <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
          <SparkleButton as="a" href="tel:+441273453109" variant="outline" size="md" aria-label="call us">
            <Phone className="w-4 h-4" />
          </SparkleButton>
          <SparkleButton as="a" href="/contact" variant="outline" size="md" aria-label="book appointment">
            <Calendar className="w-4 h-4" />
          </SparkleButton>
          <SparkleButton as="a" href="/contact" variant="outline" size="md" aria-label="message us">
            <MessageCircle className="w-4 h-4" />
          </SparkleButton>
        </div>
        <Footer />
      </WaveBackgroundLayout>
    </div>
  );
}
