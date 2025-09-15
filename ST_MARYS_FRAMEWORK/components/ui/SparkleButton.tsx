"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sparkleButtonVariants = cva(
  "inline-flex items-center justify-center relative overflow-hidden font-semibold rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-[#C2185B] to-[#40C4B4] text-white hover:shadow-lg",
        magenta: "bg-[#C2185B] text-white hover:bg-[#a9174e]",
        outline: "border border-current text-current hover:bg-current/10"
      },
      size: {
        md: "px-5 py-3 text-sm",
        lg: "px-7 py-4 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface SparkleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sparkleButtonVariants> {
  asChild?: boolean;
}

const SparkleButton = React.forwardRef<HTMLButtonElement, SparkleButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const prefersReduced = useReducedMotion();
    const Comp: any = asChild ? "span" : "button";

    return (
      <motion.div
        whileHover={!prefersReduced ? { scale: 1.05 } : {}}
        whileTap={!prefersReduced ? { scale: 0.97 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Comp
          ref={ref}
          className={cn(
            sparkleButtonVariants({ variant, size, className })
          )}
          {...props}
        >
          {children}
          {!prefersReduced && (
            <span className="absolute inset-0 pointer-events-none">
              <span className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-white opacity-30 animate-ping"></span>
            </span>
          )}
        </Comp>
      </motion.div>
    );
  }
);

SparkleButton.displayName = "SparkleButton";

export { SparkleButton, sparkleButtonVariants };
