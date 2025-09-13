'use client';

import React, { useEffect, useState } from 'react';

export interface SparkleButtonProps {
  as?: 'button' | 'a';
  href?: string;
  variant?: 'primary' | 'magenta' | 'outline';
  size?: 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  'aria-label'?: string;
}

export default function SparkleButton({
  as = 'button',
  href,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  children,
  onClick,
  ...rest
}: SparkleButtonProps) {
  const [Motion, setMotion] = useState<any>(null);
  const [reduced, setReduced] = useState<boolean>(false);

  // Detect reduced motion and dynamically import framer-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReduced(mediaQuery.matches);
      if (!mediaQuery.matches) {
        import('framer-motion')
          .then((mod) => {
            setMotion(mod.motion);
          })
          .catch(() => {
            setMotion(null);
          });
      }
    }
  }, []);

  // Gradient backgrounds based on variant
  const gradientClass =
    variant === 'primary'
      ? 'bg-gradient-to-r from-[#40C4B4] via-[#00849A] to-[#C2185B]'
      : variant === 'magenta'
      ? 'bg-gradient-to-r from-[#C2185B] via-[#00849A] to-[#40C4B4]'
      : 'bg-transparent';

  const borderClass = variant === 'outline' ? 'border border-[#D4AF37]' : '';
  const textClass = variant === 'outline' ? 'text-[#C2185B] dark:text-[#FFC5D4]' : 'text-white';

  const sizeClass = size === 'lg' ? 'min-h-[3rem] px-8 py-3 text-lg' : 'min-h-[2.75rem] px-6 py-2.5 text-base';

  const baseClass = `relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium ${gradientClass} ${borderClass} ${textClass} ${sizeClass} focus:outline-none focus-visible:ring-2 focus-visible:ring-[#94A3B8] ${className}`;

  // Generate simple particle overlay
  const particleCount = 14;
  const particles = Array.from({ length: particleCount });

  const content = (
    <>
      {/* Overlay for particles */}
      <span aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {particles.map((_, idx) => {
          const style: React.CSSProperties = {
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor:
              variant === 'outline'
                ? '#D4AF37'
                : idx % 2 === 0
                ? '#40C4B4'
                : '#C2185B',
          };
          if (Motion && !reduced) {
            // Use Framer Motion for animation
            return (
              <Motion.span
                key={idx}
                className="absolute block w-1.5 h-1.5 rounded-full opacity-0"
                style={style}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                  x: [0, 5, -5, 0],
                  y: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: Math.random() * 1.5,
                }}
              />
            );
          }
          // Fallback: no motion, static invisible particles to preserve layout
          return <span key={idx} className="absolute block w-1.5 h-1.5 rounded-full opacity-0" style={style} />;
        })}
      </span>
      {/* Actual children */}
      <span className="relative z-10">{children}</span>
    </>
  );

  // Determine element type
  if (as === 'a' && href) {
    if (Motion && !reduced) {
      return (
        <Motion.a
          href={href}
          className={baseClass}
          onClick={onClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...(rest as any)}
        >
          {content}
        </Motion.a>
      );
    }
    return (
      <a href={href} className={baseClass} onClick={onClick} {...(rest as any)}>
        {content}
      </a>
    );
  }

  if (Motion && !reduced) {
    return (
      <Motion.button
        type="button"
        disabled={disabled}
        className={baseClass}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...(rest as any)}
      >
        {content}
      </Motion.button>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      className={baseClass}
      onClick={onClick}
      {...(rest as any)}
    >
      {content}
    </button>
  );
}
