// ST_MARYS_FRAMEWORK/components/ui/SparkleButton.tsx
'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface SparkleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button' | 'a'
  href?: string
  variant?: 'primary' | 'magenta' | 'outline'
  size?: 'md' | 'lg'
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

const baseClasses =
  'relative inline-flex items-center justify-center font-semibold rounded-full focus-visible:ring ring ring-offset-2 transition-transform no-underline overflow-hidden'

const variantClasses: Record<string, string> = {
  primary: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white',
  magenta: 'bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white',
  outline: 'border border-[var(--color-accent)] bg-transparent text-[var(--color-foreground)]',
}
const sizeClasses: Record<string, string> = {
  md: 'min-h-[2.5rem] px-6 py-2 text-base',
  lg: 'min-h-[3rem] px-8 py-3 text-lg',
}

function SparkleButton({
  as = 'button',
  href,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  children,
  ...props
}: SparkleButtonProps) {
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? 'opacity-50 cursor-not-allowed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const Comp: any = (motion as any)[as]

  return (
    <Comp
      {...(as === 'a' ? { href } : {})}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute inset-0 rounded-full pointer-events-none ${
          variant === 'outline'
            ? 'bg-gradient-to-r from-transparent via-[var(--color-accent)]/30 to-transparent'
            : 'bg-[var(--color-accent)]/20'
        }`}
      />
    </Comp>
  )
}

export default SparkleButton
