"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const FOOTER_COLUMNS = [
  {
    title: "Sanctuary",
    links: [
      { name: "Vinyasa Flow", href: "#" },
      { name: "Yin & Restorative", href: "#" },
      { name: "Ashtanga Method", href: "#" },
      { name: "Pranayama & Breath", href: "#" },
      { name: "Sound Meditation", href: "#" },
    ],
  },
  {
    title: "Journeys",
    links: [
      { name: "Group Practices", href: "#" },
      { name: "1:1 Guided Mentorship", href: "#" },
      { name: "Corporate Wellness", href: "#" },
      { name: "Weekend Immersions", href: "#" },
      { name: "Teacher Collective", href: "#" },
    ],
  },
  {
    title: "Philosophy",
    links: [
      { name: "The Sanctuary Way", href: "#" },
      { name: "Our Guides", href: "#" },
      { name: "Mindful Architecture", href: "#" },
      { name: "Research & Science", href: "#" },
      { name: "Sustainability", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Member Portal", href: "#" },
      { name: "Schedule & Booking", href: "#" },
      { name: "Wellness Concierge", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Contact Sanctuary", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-surfaceVariant text-text-main border-t border-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-border">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
              Xanso<span className="text-primary font-serif">.</span>
            </span>
            <p className="text-sm md:text-base text-text-muted font-sans max-w-sm leading-relaxed">
              An architectural digital retreat cultivating intentional movement,
              mindful breathwork, and scholarly tranquility.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Live sanctuary sessions daily
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-border shadow-soft">
              <h4 className="font-display text-lg md:text-xl font-medium text-text-main mb-2">
                Join the Morning Reflection
              </h4>
              <p className="text-xs sm:text-sm text-text-muted mb-4">
                Receive weekly mindful sequences, breathwork guides, and retreat invites.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="flex-1 px-5 py-3 rounded-full bg-surfaceVariant border border-border/80 text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  required
                />
                <Button variant="primary" size="md" type="submit">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Middle Section: Navigation Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="space-y-4">
              <h5 className="font-display text-sm md:text-base font-semibold text-text-main tracking-normal">
                {column.title}
              </h5>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-xs md:text-sm text-text-muted hover:text-text-main transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-sans">
          <p>
            &copy; {new Date().getFullYear()} Xanso Yoga & Wellness Sanctuary. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-text-main transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-text-main transition-colors">
              Terms of Practice
            </Link>
            <Link href="#" className="hover:text-text-main transition-colors">
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
