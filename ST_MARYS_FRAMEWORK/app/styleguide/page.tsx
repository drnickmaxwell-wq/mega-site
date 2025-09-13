"use client";

import React from "react";
import SparkleButton from "@/components/ui/SparkleButton";

// Local design tokens replicated from design/tokens.json
const colors: Record<string, { light: string; ink: string }> = {
  primary: { light: "#40C4B4", ink: "#40C4B4" },
  secondary: { light: "#C2185B", ink: "#C2185B" },
  accent: { light: "#D4AF37", ink: "#D4AF37" },
  neutral: { light: "#F5F5F5", ink: "#262626" },
  neutralContrast: { light: "#262626", ink: "#F5F5F5" }
};

export const metadata = {
  title: "Style Guide"
};

export default function StyleGuidePage() {
  const themes: ("light" | "ink")[] = ["light", "ink"];
  return (
    <main className="p-8 space-y-12">
      <h1 className="text-4xl font-bold">Style Guide</h1>
      <p className="text-sm text-gray-500 max-w-xl">
        This page showcases the design tokens and base components for St Mary’s House Dental Care. Each theme is displayed side by side for easy comparison.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {themes.map((theme) => (
          <section
            key={theme}
            className="rounded-xl p-6 space-y-8"
            style={{
              backgroundColor: colors.neutral[theme],
              color: colors.neutralContrast[theme]
            }}
          >
            <header>
              <h2 className="text-2xl font-semibold capitalize mb-2">{theme} Theme</h2>
              <p className="text-sm text-current opacity-70">
                Token values and component examples for the {theme} palette.
              </p>
            </header>
            {/* Colors */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Colours</h3>
              <div className="grid grid-cols-5 gap-4">
                {Object.keys(colors).map((key) => (
                  <div key={key} className="space-y-1 text-center">
                    <div
                      className="h-12 w-full rounded"
                      style={{ backgroundColor: colors[key as keyof typeof colors][theme] }}
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
                <SparkleButton variant="primary">Primary</SparkleButton>
                <SparkleButton variant="secondary">Secondary</SparkleButton>
              </div>
            </div>
            {/* Chips */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Chips</h3>
              <div className="flex flex-wrap gap-2">
                {['Veneers', 'Whitening', 'Implants', 'Orthodontics'].map((label) => (
                  <span
                    key={label}
                    className="inline-block rounded-full px-3 py-1 text-sm font-medium"
                    style={{
                      backgroundColor: colors.accent[theme],
                      color: colors.neutralContrast[theme]
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
                  backgroundColor: theme === 'light' ? '#FFFFFF' : '#333333',
                  color: theme === 'light' ? '#000000' : '#FFFFFF'
                }}
              >
                <h4 className="font-semibold mb-1">Card Title</h4>
                <p className="text-sm">
                  This is a sample card used to demonstrate surface colors, radii and shadows. Replace with your own content.
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
                  backgroundColor: theme === 'light' ? '#FFFFFF' : '#444444',
                  color: theme === 'light' ? '#000000' : '#FFFFFF'
                }}
              />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
