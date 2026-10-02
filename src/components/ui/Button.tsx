"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

const buttonVariants = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-sm border border-transparent",
  secondary:
    "bg-transparent border border-border text-text-main hover:bg-surfaceVariant hover:border-border/80",
  ghost:
    "bg-transparent text-text-muted hover:text-text-main hover:bg-surfaceVariant/60 border border-transparent",
  dark:
    "bg-text-main text-background hover:bg-[#3d3934] shadow-sm border border-transparent",
};

const sizeVariants = {
  sm: "text-xs px-4 py-2 gap-1.5",
  md: "text-sm px-6 py-3 gap-2",
  lg: "text-base px-8 py-3.5 gap-2.5",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={disabled ? undefined : { scale: 1.02 }}
        whileTap={disabled ? undefined : { scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center font-sans font-medium tracking-normal rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50 select-none",
          buttonVariants[variant],
          sizeVariants[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
