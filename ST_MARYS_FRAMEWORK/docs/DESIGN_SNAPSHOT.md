# Design Snapshot

This document summarizes the design tokens and visual language extracted from the provided assets and framework. It captures the core palette, typography, spacing, radii and effects that underpin the St Mary’s House visual system.

## Colours

| Token | Light value | Ink value | Notes |
|------|-------------|-----------|------|
| primary | #40C4B4 | #40C4B4 | calming teal used for key actions and accents |
| secondary | #C2185B | #C2185B | vivid magenta for contrast and highlights |
| accent | #D4AF37 | #D4AF37 | metallic gold sparkle for interactive highlights |
| background | #F7F7F9 | #1E1E1F | page backgrounds (light and ink) |
| card | #FFFFFF | #26262C | container surfaces |
| border | #E4E4E7 | #4A4A55 | outlines and dividers |
| input | #E5E7EB | #52525B | form controls and fields |
| ring | #94A3B8 | #2E8DAB | focus rings and outlines |

## Typography

- **Font families:**  
  - *Montserrat* – geometric sans for headings and UI labels.  
  - *Lora* – humanist serif for longform body copy.

- **Scale:** uses a modular scale centred on a 16 px base:
  - `text-base` (1 rem) for body,  
  - `text-xl` / `text-2xl` / `text-3xl` for headings.

## Radii

- Base radius: `0.75rem` (12 px) for cards, inputs and containers.
- `full` radius for chips and circular buttons.

## Spacing

A 4 px/0.25 rem spacing unit underpins the rhythm. Multipliers (1, 2, 3, 4…) yield 4 px, 8 px, 12 px, 16 px, 20 px, 24 px, 32 px, etc.

## Shadows

- **Medium shadow:** `0 4px 8px rgba(0,0,0,0.03)` – subtle lift for cards and panels.
- **Large shadow:** `0 8px 24px rgba(0,0,0,0.06)` – used for modals or hover surfaces.

## Effects

- **Gradient:** primary gradient transitions from teal to magenta (`linear-gradient(90deg, #40C4B4 0%, #C2185B 100%)`) and is used on buttons and highlights.
- **Sparkle hover:** interactive elements may emit gold sparkles on hover using Framer Motion.
- **Waves:** abstract wave illustrations in the background combine magenta and teal lines on a white canvas and provide a dynamic sense of motion.
