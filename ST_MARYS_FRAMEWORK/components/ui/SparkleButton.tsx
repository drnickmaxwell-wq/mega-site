'use client';

import React from 'react';

export interface SparkleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const VARIANT_GRADIENTS: Record<'primary' | 'secondary', string> = {
  primary: 'bg-gradient-to-r from-[#40C4B4] via-[#00849A] to-[#C2185B]',
  secondary: 'bg-gradient-to-r from-gray-700 to-gray-900',
};

export default function SparkleButton({
  variant = 'primary',
  className = '',
  children,
  ...props
}: SparkleButtonProps) {
  const gradientClass = VARIANT_GRADIENTS[variant] || VARIANT_GRADIENTS.primary;

  return (
    <button
      className={`${gradientClass} text-white font-semibold rounded-full px-6 py-3 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
