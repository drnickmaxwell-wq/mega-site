"use client";

import SparkleButton from '@/components/ui/SparkleButton'

export default function StyleGuide() {
  const colors = [
    { name: 'primary', value: 'var(--color-primary)' },
    { name: 'secondary', value: 'var(--color-secondary)' },
    { name: 'accent', value: 'var(--color-accent)' },
    { name: 'background', value: 'var(--color-background)' },
    { name: 'background-secondary', value: 'var(--color-background-secondary)' },
    { name: 'foreground', value: 'var(--color-foreground)' },
    { name: 'foreground-secondary', value: 'var(--color-foreground-secondary)' },
    { name: 'border', value: 'var(--color-border)' },
    { name: 'ring', value: 'var(--color-ring)' },
  ];

  return (
    <div className="mx-auto max-w-container px-4 py-16 space-y-12">
      <h1 className="font-montserrat text-4xl font-bold mb-8">Style Guide</h1>

      <section>
        <h2 className="font-montserrat text-2xl font-bold mb-4">Colours</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {colors.map((c) => (
            <div key={c.name} className="flex flex-col items-center text-center">
              <div
                className="w-20 h-20 rounded-full border border-border"
                style={{ backgroundColor: c.value }}
              />
              <span className="text-sm mt-1 font-montserrat">{c.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-montserrat text-2xl font-bold mb-4">Typography</h2>
        <p className="font-montserrat text-5xl mb-2">Heading 1 (Montserrat)</p>
        <p className="font-montserrat text-3xl mb-2">Heading 2 (Montserrat)</p>
        <p className="font-lora text-lg">Body text (Lora) – Lorem ipsum dolor sit amet…</p>
      </section>

      <section>
        <h2 className="font-montserrat text-2xl font-bold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <SparkleButton variant="primary" size="md">Primary md</SparkleButton>
          <SparkleButton variant="primary" size="lg">Primary lg</SparkleButton>
          <SparkleButton variant="magenta" size="md">Magenta md</SparkleButton>
          <SparkleButton variant="magenta" size="lg">Magenta lg</SparkleButton>
          <SparkleButton variant="outline" size="md">Outline md</SparkleButton>
          <SparkleButton variant="outline" size="lg">Outline lg</SparkleButton>
          <SparkleButton variant="primary" size="md" disabled>Disabled</SparkleButton>
        </div>
      </section>

      <section>
        <h2 className="font-montserrat text-2xl font-bold mb-4">Notes</h2>
        <p className="text-sm text-foreground-secondary">Reduced motion users will automatically see simplified effects.</p>
      </section>
    </div>
  );
}
