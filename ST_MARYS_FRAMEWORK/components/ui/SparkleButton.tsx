"use client";

import clsx from 'clsx';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  as?: 'button' | 'a';
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'magenta' | 'outline';
  size?: 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
  children: React.ReactNode;
};

const variantClasses: Record<NonNullable<Props['variant']>, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  magenta: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
  outline: 'border border-border text-foreground hover:bg-accent/10',
};

const sizeClasses: Record<NonNullable<Props['size']>, string> = {
  md: 'px-4 py-2 text-sm rounded-md',
  lg: 'px-6 py-3 text-base rounded-lg',
};

export default function SparkleButton({
  as = 'button',
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className,
  children,
  ...rest
}: Props) {
  const shouldReduceMotion = useReducedMotion();
  const MotionComp: any = as === 'a' ? motion.a : motion.button;

  const classes = clsx(
    'relative inline-flex items-center justify-center font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition',
    variantClasses[variant || 'primary'],
    sizeClasses[size || 'md'],
    {
      'opacity-50 pointer-events-none': disabled,
    },
    className
  );

  return (
    <MotionComp
      href={as === 'a' ? href : undefined}
      onClick={onClick}
      className={classes}
      disabled={as === 'button' ? disabled : undefined}
      whileHover={!shouldReduceMotion ? { scale: 1.05 } : undefined}
      whileTap={!shouldReduceMotion ? { scale: 0.98 } : undefined}
      {...rest}
    >
      <span className="relative z-10">{children}</span>
    </MotionComp>
  );
}
