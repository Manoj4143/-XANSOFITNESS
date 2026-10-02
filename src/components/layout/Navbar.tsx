"use client";

import * as React from "react";
import Link from "next/link";
import { Search, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "#programs" },
  { name: "1:1 Training", href: "#training" },
  { name: "Corporate", href: "#corporate" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md border-b border-border/40 transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 h-20">
        {/* Left: Brand Identity */}
        <Link
          href="/"
          className="group flex items-center gap-1.5 focus:outline-none"
        >
          <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-text-main group-hover:text-primary transition-colors">
            Xanso<span className="text-primary font-serif">.</span>
          </span>
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-sm font-medium text-text-muted hover:text-text-main transition-colors duration-200 relative group py-1"
            >
              {link.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </Link>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="p-2 text-text-muted hover:text-text-main hover:bg-surfaceVariant/80 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            type="button"
            aria-label="Account"
            className="p-2 text-text-muted hover:text-text-main hover:bg-surfaceVariant/80 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          >
            <User className="w-4 h-4" />
          </button>

          <Button variant="primary" size="sm" className="ml-2">
            Start Free Trial
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 text-text-main hover:bg-surfaceVariant rounded-full transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-border/80 bg-background/98 px-6 py-6 overflow-hidden shadow-soft"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-base font-medium text-text-muted hover:text-text-main py-1"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-border flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Search"
                    className="p-2.5 text-text-muted hover:text-text-main rounded-full bg-surfaceVariant/70"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Account"
                    className="p-2.5 text-text-muted hover:text-text-main rounded-full bg-surfaceVariant/70"
                  >
                    <User className="w-4 h-4" />
                  </button>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
