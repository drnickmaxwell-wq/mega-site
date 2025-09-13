"use client";
import React from "react";
import { motion } from "framer-motion";

export interface SparkleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** variant controls the color gradient; primary uses brand colors, secondary uses neutral greys */
  variant?: "primary" | "secondary";
}

/**
 * SparkleButton renders a pill-shaped button with a gradient background and a subtle sparkle effect on hover.
 * It uses Framer Motion for simple scale interactions and supports dark/light themes via CSS variables.
 */
export default function SparkleButton({
  children,
  className,
  variant = "primary",
  ...props
}: SparkleButtonProps) {
  // Determine gradient classes based on variant
  const gradientClass =
    variant === "primary"
      ?
        // Brand gradient: teal to magenta inspired by provided assets
        "bg-gradient-to-r from-[#40C4B4] via-[#00B49A] to-[#C2185B]"
      :
        // Secondary neutral gradient for dark backgrounds
        "bg-gradient-to-r from-gray-700 to-gray-900";

  // Compose final className string
  const baseClasses = [
    "group", // enables group-hover for child sparkles
    "relative inline-flex items-center justify-center overflow-hidden",
    "rounded-full px-6 py-3 font-semibold text-white",
    "transition-transform focus:outline-none",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/50",
    gradientClass,
    className ?? ""
  ].join(" ");

  return (
    <motion.button
      {...props}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
    >
      {/* Sparkle pulse: animated white blur expands on hover */}
      <span className="absolute inset-0 pointer-events-none">
        <span className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 opacity-0 blur-2xl transition-all duration-700 group-hover:opacity-100 group-hover:scale-150" />
      </span>
      {/* Button label */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
