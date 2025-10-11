'use client';

import React from "react";

// Local design tokens for the style guide page. These mirror the brand colors.
const colors = {
  primary: { light: '#40C4B4', ink: '#40C4B4' },
  secondary: { light: '#C2185B', ink: '#C2185B' },
  accent: { light: '#D4AF37', ink: '#D4AF37' },
  neutralContrast: { light: '#262626', ink: '#F5F5F5' },
};

// Note: metadata export is omitted because this is a client component. Next.js
// requires metadata exports to come from server components.

export default function StyleGuidePage() {
  const themes: ('light' | 'ink')[] = ['light','ink'];
  return (
    <main className="p-8 space-y-12">
      <h1 className="text-4xl font-bold">Style Guide</h1>
      <p className="text-sm text-gray-500 max-w-xl">
        This page shows the design tokens and base components for St Mary’s House Dental Care. Each theme is
        displayed side by side for easy comparison.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {themes.map((theme) => (
          <section
            key={theme}
            className="rounded-xl p-6 space-y-8"
            style={{
              backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
              color: theme === 'light' ? '#000000' : '#ffffff',
            }}
          >
            <h2 className="text-2xl font-semibold capitalize">{theme} theme</h2>
            {/* Colors */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Colors</h3>
              <div className="flex gap-4">
                {Object.entries(colors).map(([key, val]) => (
                  <div key={key} className="space-y-1 text-center">
                    <div
                      style={{ backgroundColor: (val as any)[theme] }}
                      className="h-12 w-12 rounded"
                    />
                    <span className="text-xs font-medium">{key}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button
                  className="rounded-full px-6 py-3 font-semibold text-white"
                  style={{
                    background: 'linear-gradient(90deg, #40C4B4 0%, #C2185B 100%)',
                  }}
                >
                  Primary
                </button>
                <button
                  className="rounded-full px-6 py-3 font-semibold text-white"
                  style={{
                    background: 'linear-gradient(90deg, #424242 0%, #212121 100%)',
                  }}
                >
                  Secondary
                </button>
              </div>
            </div>
            {/* Chips */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Chips</h3>
              <div className="flex flex-wrap gap-2">
                {['Veneers', 'Whitening', 'Implants', 'Orthodontics'].map((label) => (
                  <span
                    key={label}
                    className="inline-block rounded-full px-3 py-1 text-sm"
                    style={{
                      backgroundColor: colors.accent[theme],
                      color: colors.neutralContrast[theme],
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            {/* Card */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Card</h3>
              <div
                className="rounded-lg p-4 shadow-md"
                style={{
                  backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
                  color: theme === 'light' ? '#000000' : '#ffffff',
                }}
              >
                <h4 className="font-semibold mb-1">Card Title</h4>
                <p className="text-sm">
                  This is a sample card used to demonstrate surface colors, radii and shadows. Replace with your
                  own content.
                </p>
              </div>
            </div>
            {/* Input */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Input</h3>
              <input
                type="text"
                placeholder="Enter text"
                className="w-full rounded-md p-2"
                style={{
                  border: `1px solid ${colors.primary[theme]}`,
                  backgroundColor: theme === 'light' ? '#ffffff' : '#444444',
                  color: theme === 'light' ? '#000000' : '#ffffff',
                }}
              />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
