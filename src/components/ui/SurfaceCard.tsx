"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface SurfaceCardProps extends HTMLMotionProps<"div"> {
  hoverEffect?: boolean;
}

export const SurfaceCard = React.forwardRef<HTMLDivElement, SurfaceCardProps>(
  ({ className, children, hoverEffect = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          hoverEffect
            ? {
                y: -4,
                boxShadow:
                  "0 20px 35px -10px rgba(45, 42, 38, 0.07), 0 8px 16px -4px rgba(217, 94, 57, 0.04)",
              }
            : undefined
        }
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={cn(
          "bg-surface rounded-2xl border border-border/80 shadow-soft p-6 transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

SurfaceCard.displayName = "SurfaceCard";
