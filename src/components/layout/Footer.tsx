"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

const FOOTER_COLUMNS = [
  {
    title: "Indian Practices",
    links: [
      { name: "Rishikesh Hatha Yoga", href: "/#programs" },
      { name: "7-Day Face Yoga", href: "/#programs" },
      { name: "Desk Posture Therapy", href: "/#programs" },
      { name: "Pranayama & Dhyana", href: "/#programs" },
      { name: "Akhada Mobility", href: "/#programs" },
    ],
  },
  {
    title: "Memberships & Batches",
    links: [
      { name: "2 Months Plan (₹1,799)", href: "/#pricing" },
      { name: "3 Months Popular (₹2,609)", href: "/#pricing" },
      { name: "6 Months Immersion (₹4,409)", href: "/#pricing" },
      { name: "1:1 Personal Transformation", href: "/#pricing" },
      { name: "Corporate Wellness Batches", href: "/#corporate" },
    ],
  },
  {
    title: "Ayush Certified Trainers",
    links: [
      { name: "Neelam Rana (Rishikesh)", href: "/#training" },
      { name: "Muskaan Wahi (Face Yoga)", href: "/#training" },
      { name: "Apeksha Chauhan (Posture)", href: "/#training" },
      { name: "Navya Gupta (Champion)", href: "/#training" },
      { name: "Arjun Rathore (Strength)", href: "/#training" },
    ],
  },
  {
    title: "Quick Support",
    links: [
      { name: "WhatsApp (+91 91058 37321)", href: "https://wa.me/919105837321" },
      { name: "Claim 10% Extra Discount", href: "/#pricing" },
      { name: "Free Customized Diet Plan", href: "/#pricing" },
      { name: "Schedule & Timings (IST)", href: "/#programs" },
      { name: "Contact Team", href: "/#contact" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);
  const WHATSAPP_NUMBER = "919105837321";

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
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                Xanso<span className="text-primary font-serif">.</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                India
              </span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-text-muted max-w-sm leading-relaxed">
              India's premier digital fitness & wellness platform. Authentic Rishikesh yoga lineages, Ayush-certified instructors, daily live Zoom batches, and customized nutrition.
            </p>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hi Xanso! I have a question about batches and membership discount."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-soft transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: +91 91058 37321</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted pt-1">
              <span>Rishikesh</span>
              <span>•</span>
              <span>Bengaluru</span>
              <span>•</span>
              <span>Mumbai</span>
              <span>•</span>
              <span>Delhi NCR</span>
              <span>•</span>
              <span>Pune</span>
              <span>•</span>
              <span>Hyderabad</span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-border shadow-soft">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase font-bold tracking-widest text-primary">
                  COMMUNITY UPDATES
                </span>
              </div>
              <h4 className="font-display text-lg md:text-xl font-medium text-text-main mb-1">
                Receive Free Weekly Indian Diet & Asana Tips
              </h4>
              <p className="text-xs sm:text-sm text-text-muted mb-4 font-sans">
                Curated Sattvic recipes, posture routines, and early batch notifications straight to your inbox.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Dhanyavaad! Welcome to our wellness family. Check your inbox soon.</span>
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
                    Join Circle
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
          <p>© {new Date().getFullYear()} Xanso Fitness & Wellness India. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/#contact" className="hover:text-text-main transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#contact" className="hover:text-text-main transition-colors">
              Terms of Practice
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-semibold hover:underline"
            >
              WhatsApp Support: +91 91058 37321
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
