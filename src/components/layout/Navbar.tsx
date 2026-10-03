"use client";

import * as React from "react";
import Link from "next/link";
import { Search, User, Menu, X, MessageCircle, Phone, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { name: "Programs", href: "/#programs" },
  { name: "Why Xanso", href: "/#why-us" },
  { name: "Indian Trainers", href: "/#training" },
  { name: "Pricing & Plans", href: "/#pricing" },
  { name: "Corporate", href: "/#corporate" },
  { name: "FAQs", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const WHATSAPP_NUMBER = "919105837321";
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Xanso Fitness! I want to claim the extra 10% discount on your yoga & fitness plans."
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Special Offer Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white py-2 px-4 text-xs font-sans font-medium text-center flex items-center justify-center gap-2 shadow-xs">
        <Tag className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
        <span>
          <strong className="text-amber-300">🇮🇳 Special Community Offer:</strong> Extra 10% OFF all live batches & personal training!
        </span>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-amber-200 font-semibold ml-1 inline-flex items-center gap-1"
        >
          <span>WhatsApp: +91 91058 37321</span>
          <MessageCircle className="w-3 h-3 fill-current" />
        </a>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 h-20">
          {/* Left: Brand Identity */}
          <Link
            href="/"
            className="group flex items-center gap-2 focus:outline-none"
          >
            <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-text-main group-hover:text-primary transition-colors">
              Xanso<span className="text-primary font-serif">.</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
              India
            </span>
          </Link>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
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

          {/* Right: Actions & Direct WhatsApp */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-sans font-semibold shadow-soft transition-all"
              title="Chat on WhatsApp: +91 91058 37321"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>+91 91058 37321</span>
            </a>

            <Button variant="primary" size="sm" href="/#pricing">
              Book Batch (10% Off)
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 text-white bg-emerald-600 rounded-full"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 text-text-main hover:bg-surfaceVariant rounded-full transition-colors focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
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

              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-emerald-600 text-white font-sans text-xs font-semibold shadow-soft"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +91 91058 37321</span>
                </a>

                <Button
                  variant="primary"
                  size="sm"
                  href="/#pricing"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Batch (Save 10%)
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
