// components/ui/ActionDock.tsx
'use client';

import React from 'react';
import SparkleButton from '@/components/ui/SparkleButton';
import { PhoneIcon, CalendarIcon, MessageCircleIcon, ArrowUpIcon } from 'lucide-react';

export default function ActionDock() {
  // WhatsApp number from environment (NEXT_PUBLIC_ prefix makes it available on client)
  const whatsapp = process.env.NEXT_PUBLIC_PRACTICE_WHATSAPP;

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-40">
      <SparkleButton
        as="a"
        href="/contact#book"
        variant="outline"
        size="md"
        aria-label="Book a consultation"
        className="flex items-center gap-2"
      >
        <CalendarIcon className="w-4 h-4" />
        <span>Book</span>
      </SparkleButton>
      <SparkleButton
        as="a"
        href="tel:+441273453109"
        variant="outline"
        size="md"
        aria-label="Call us"
        className="flex items-center gap-2"
      >
        <PhoneIcon className="w-4 h-4" />
        <span>Call</span>
      </SparkleButton>
      {whatsapp && (
        <SparkleButton
          as="a"
          href={`https://wa.me/${whatsapp}`}
          variant="outline"
          size="md"
          aria-label="WhatsApp"
          className="flex items-center gap-2"
        >
          <MessageCircleIcon className="w-4 h-4" />
          <span>WhatsApp</span>
        </SparkleButton>
      )}
      <SparkleButton
        as="button"
        onClick={handleBackToTop}
        variant="outline"
        size="md"
        aria-label="Back to top"
        className="flex items-center gap-2"
      >
        <ArrowUpIcon className="w-4 h-4" />
        <span>Top</span>
      </SparkleButton>
    </div>
  );
}
