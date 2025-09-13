'use client';

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import SparkleButton from '@/components/ui/SparkleButton';
import WaveBackgroundLayout from '@/components/layout/WaveBackgroundLayout';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

export default function LightPreview() {
  return (
    <WaveBackgroundLayout intensity="medium">
      {/* Container ensures min-h-screen is handled by WaveBackgroundLayout */}
      <Navigation />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <section className="w-full max-w-5xl text-center py-16">
          <h1 className="text-4xl font-bold font-montserrat text-foreground">
            Light Theme Preview
          </h1>
          <p className="mt-4 text-lg font-lora text-foreground-secondary">
            Explore the light theme shell. This page uses our brand tokens for colours and typography.
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
        <SparkleButton as="a" href="tel:+441273453109" variant="outline" size="md" aria-label="Call us">
          <Phone className="w-4 h-4" />
        </SparkleButton>
        <SparkleButton as="a" href="#book" variant="outline" size="md" aria-label="Book appointment">
          <Calendar className="w-4 h-4" />
        </SparkleButton>
        <SparkleButton as="a" href="/contact" variant="outline" size="md" aria-label="Message us">
          <MessageCircle className="w-4 h-4" />
        </SparkleButton>
      </div>
      <Footer />
    </WaveBackgroundLayout>
  );
}
