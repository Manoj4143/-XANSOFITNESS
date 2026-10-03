"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { Users, UserCheck, Building2, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Button } from "@/components/ui/Button";

const TRAINING_PATHWAYS = [
  {
    id: "group-yoga",
    title: "1. Group Yoga Sessions",
    tagline: "Live on Zoom • Morning & Evening IST",
    description:
      "Join our live, certified instructor-led yoga classes via Zoom. Designed for all fitness levels, these sessions focus on flexibility, breathing, and posture correction. Ideal for people with sedentary desk jobs seeking low-impact daily movement without heavy equipment.",
    icon: Users,
    badge: "Most Accessible",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
    features: [
      "Live interactive Zoom classes (no recorded videos)",
      "Daily Morning (6 AM, 7 AM, 8 AM) & Evening (5:30 PM, 6:30 PM, 7:30 PM) IST",
      "Special Female-Only Batches for comfort & privacy",
      "Free 7-Day Face Yoga rejuvenation bonus",
      "Free customized Indian diet plan included",
    ],
    ctaText: "Explore Group Batches (10% Off)",
    ctaLink: "#pricing",
    accent: "from-amber-500/10 to-primary/5",
  },
  {
    id: "personal-transformation",
    title: "2. 1:1 Transformation Plans",
    tagline: "Tailored Coaching • Direct Trainer WhatsApp",
    description:
      "For individuals seeking dedicated attention, tailored strength training, and accelerated transformation. You receive a personalized workout blueprint, monthly nutrition adjustments, and daily accountability to ensure you achieve your specific health goals.",
    icon: UserCheck,
    badge: "Personalized",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
    features: [
      "Private 1:1 live Zoom sessions with Ayush master",
      "Tailored strength, mobility & posture correction",
      "Customized Indian meal plan (Sattvic & High-Protein)",
      "Daily WhatsApp check-ins on +91 91058 37321",
      "Weekly biometric, posture & habit tracking",
    ],
    ctaText: "Begin 1:1 Transformation (10% Off)",
    ctaLink: "#pricing",
    accent: "from-emerald-500/10 to-teal-500/5",
  },
  {
    id: "corporate-sessions",
    title: "3. Corporate Sessions",
    tagline: "Virtual & On-Site • IT Workplace Wellness",
    description:
      "Wellness sessions tailored to organizations and team sizes. Designed to reduce workplace screen fatigue, relieve IT neck/back pain, and boost afternoon focus, energy, and overall employee productivity.",
    icon: Building2,
    badge: "For Organizations",
    badgeColor: "bg-primary/15 text-primary border-primary/30",
    features: [
      "Virtual or on-site team wellness sessions",
      "15-Minute IT desk posture & ergonomics resets",
      "Stress relief & pranayama breath breaks",
      "Customized session timings to suit Indian office hours",
      "Dedicated corporate account coordinator",
    ],
    ctaText: "Inquire for Corporate Team",
    ctaLink: "#corporate",
    accent: "from-primary/10 to-amber-500/5",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function ThreeWaysToTrain() {
  const WHATSAPP_NUMBER = "919105837321";

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-3xl mx-auto mb-16 space-y-4"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          STRUCTURED WELLNESS ARCHITECTURE
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Three Ways to{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Train with Us
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          From live group classes to private 1:1 mentorship and enterprise team sessions, choose the pathway that honors your fitness journey.
        </p>
      </motion.div>

      {/* 3 Pathway Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
      >
        {TRAINING_PATHWAYS.map((pathway) => {
          const Icon = pathway.icon;
          return (
            <motion.div key={pathway.id} variants={fadeInUp} className="flex">
              <SurfaceCard
                hoverEffect
                className={`relative p-8 flex flex-col justify-between w-full h-full border border-border/80 shadow-soft bg-gradient-to-b ${pathway.accent} to-surface transition-all`}
              >
                <div className="space-y-6">
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-surface border border-border shadow-xs text-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span
                      className={`text-[10px] font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${pathway.badgeColor}`}
                    >
                      {pathway.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-semibold text-text-main">
                      {pathway.title}
                    </h3>
                    <p className="font-sans text-xs text-primary font-semibold mt-1">
                      {pathway.tagline}
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-text-muted mt-3 leading-relaxed">
                      {pathway.description}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <div className="pt-4 border-t border-border/60 space-y-2.5">
                    <span className="text-xs uppercase tracking-wider font-semibold text-text-main block">
                      Program Highlights:
                    </span>
                    <ul className="space-y-2">
                      {pathway.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-text-muted"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-border/60 space-y-2">
                  <Button
                    variant="primary"
                    size="md"
                    href={pathway.ctaLink}
                    className="w-full justify-center"
                  >
                    <span>{pathway.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Hi! I would like to learn more about "${pathway.title}" with 10% discount.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 text-xs font-sans text-emerald-700 hover:text-emerald-800 font-medium"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Quick Consultation on WhatsApp</span>
                  </a>
                </div>
              </SurfaceCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
