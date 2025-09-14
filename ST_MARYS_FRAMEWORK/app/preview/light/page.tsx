"use client";

import React from 'react';
import SparkleButton from '@/components/ui/SparkleButton';

export default function Page() {
  const year = new Date().getFullYear();
  return (
    <div className="theme-light min-h-screen flex flex-col bg-background text-foreground">
      <header className="p-4 border-b border-border">
        <h1 className="text-2xl font-heading">St Mary’s House – Light Preview</h1>
      </header>
      <main className="flex-grow p-8 space-y-6">
        <h2 className="text-3xl font-heading">Experience dental care with a smile</h2>
        <p className="text-lg font-body">Our clinic offers quality treatments and a comfortable environment.</p>
        <div className="flex gap-4">
          <SparkleButton as="a" href="#" variant="primary" size="lg" aria-label="Book appointment">
            Book Appointment
          </SparkleButton>
          <SparkleButton as="a" href="#" variant="magenta" size="lg" aria-label="View treatments">
            View Treatments
          </SparkleButton>
        </div>
      </main>
      <footer className="p-4 border-t border-border text-center">
        <small>© {year} St Mary’s House Dental Care</small>
      </footer>
    </div>
  );
}
