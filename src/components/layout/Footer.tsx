"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const FOOTER_COLUMNS = [
  {
    title: "Sanctuary",
    links: [
      { name: "Vinyasa Flow", href: "/#programs" },
      { name: "Yin & Restorative", href: "/#programs" },
      { name: "Ashtanga Method", href: "/#programs" },
      { name: "Pranayama & Breath", href: "/dashboard/biometrics" },
      { name: "Sound Meditation", href: "/dashboard/programs" },
    ],
  },
  {
    title: "Journeys",
    links: [
      { name: "Group Practices", href: "/dashboard/schedule" },
      { name: "1:1 Guided Mentorship", href: "/#training" },
      { name: "Corporate Wellness", href: "/#corporate" },
      { name: "Weekend Immersions", href: "/#pricing" },
      { name: "Teacher Collective", href: "/#training" },
    ],
  },
  {
    title: "Philosophy",
    links: [
      { name: "The Sanctuary Way", href: "/#programs" },
      { name: "Our Guides", href: "/#training" },
      { name: "Mindful Architecture", href: "/#programs" },
      { name: "Research & Science", href: "/dashboard/biometrics" },
      { name: "Sustainability", href: "/#programs" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Member Portal", href: "/dashboard" },
      { name: "Schedule & Booking", href: "/dashboard/schedule" },
      { name: "My Programs", href: "/dashboard/programs" },
      { name: "Membership Tiers", href: "/#pricing" },
      { name: "Contact Sanctuary", href: "/#contact" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="w-full bg-surfaceVariant text-text-main border-t border-border/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-border">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
              Xanso<span className="text-primary font-serif">.</span>
            </span>
            <p className="font-sans text-xs sm:text-sm text-text-muted max-w-sm leading-relaxed">
              A serene digital sanctuary for lineage-based yoga, pranayama,
              restorative stillness, and somatic consciousness.
            </p>
            <div className="flex items-center gap-3 text-xs text-text-muted">
              <span>Kyoto</span>
              <span>•</span>
              <span>London</span>
              <span>•</span>
              <span>Ubud</span>
              <span>•</span>
              <span>Big Sur</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-border shadow-soft">
              <h4 className="font-display text-lg md:text-xl font-medium text-text-main mb-2">
                Join the Morning Reflection
              </h4>
              <p className="text-xs sm:text-sm text-text-muted mb-4 font-sans">
                Receive weekly mindful sequences, breathwork guides, and retreat invites.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Thank you for joining our sanctuary reflection circle! Check your inbox soon.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 px-5 py-3 rounded-full bg-surfaceVariant border border-border/80 text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-sans"
                    required
                  />
                  <Button variant="primary" size="md" type="submit">
                    Subscribe
                  </Button>
                </form>
              )}
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
                      className="group inline-flex items-center gap-1 text-xs md:text-sm text-text-muted hover:text-text-main transition-colors font-sans"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-sans">
          <p>© {new Date().getFullYear()} Xanso Sanctuary Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/#contact" className="hover:text-text-main transition-colors">
              Privacy Philosophy
            </Link>
            <Link href="/#contact" className="hover:text-text-main transition-colors">
              Terms of Stillness
            </Link>
            <Link href="/#contact" className="hover:text-text-main transition-colors">
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
