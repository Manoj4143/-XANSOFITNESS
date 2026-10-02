"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Button } from "@/components/ui/Button";

interface PlanTier {
  id: string;
  name: string;
  badge?: string;
  monthlyPrice: number;
  annualPrice: number;
  cadence: string;
  description: string;
  features: string[];
  ctaText: string;
  highlighted?: boolean;
}

const PRICING_TIERS: PlanTier[] = [
  {
    id: "group-practice",
    name: "Group Practice",
    monthlyPrice: 29,
    annualPrice: 24,
    cadence: "per member / month",
    description: "Daily intentional group practice, live stream access, and mindfulness libraries.",
    features: [
      "Unlimited Daily Live Studio Classes",
      "Full On-Demand Asana & Yin Vault",
      "Pranayama & Sound Bath Sessions",
      "Community Satsang & Forums",
      "Standard Mobile & Web App Access",
    ],
    ctaText: "Join Group Practice",
    highlighted: false,
  },
  {
    id: "yoga-therapy",
    name: "1:1 Yoga Therapy",
    badge: "Most Popular",
    monthlyPrice: 89,
    annualPrice: 74,
    cadence: "per member / month",
    description: "Bespoke somatic biomechanics, tailored postural corrections, and direct teacher dialogue.",
    features: [
      "Everything in Group Practice",
      "2x Monthly 1:1 Private Video Sessions",
      "Personalized Musculoskeletal Alignment Plan",
      "Dedicated Wellness Concierge AI & Human Guide",
      "Biometric Breath & Heart Rate Tracking",
      "Priority Booking for Studio Immersions",
    ],
    ctaText: "Begin 1:1 Journey",
    highlighted: true,
  },
  {
    id: "corporate-wellness",
    name: "Corporate Wellness",
    monthlyPrice: 199,
    annualPrice: 169,
    cadence: "per team seat / month",
    description: "Holistic team decompression, posture resets for desk workers, and enterprise metrics.",
    features: [
      "Unlimited Enterprise Team Access",
      "Weekly Live Team Decompression Hour",
      "15-Min Desk Posture Ergonomic Protocols",
      "HR Wellness Impact & Engagement Portal",
      "Custom Retreat Planning & In-Office Workshops",
      "Dedicated Enterprise Account Director",
    ],
    ctaText: "Consult for Teams",
    highlighted: false,
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

export function PricingArchitecture() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header & Toggle */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-2xl mx-auto mb-16 space-y-5"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
          INVEST IN YOUR PEACE
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Pricing for Every{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Path
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          Transparent, commitment-friendly memberships. Choose the rhythm that best honors your practice.
        </p>

        {/* Monthly / Annual Toggle Switch */}
        <div className="pt-4 flex items-center justify-center">
          <div className="bg-surfaceVariant p-1 rounded-full border border-border inline-flex items-center">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-200 ${
                billingCycle === "monthly"
                  ? "bg-surface text-text-main shadow-soft"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              Billed Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-200 inline-flex items-center gap-1.5 ${
                billingCycle === "annual"
                  ? "bg-surface text-text-main shadow-soft"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              <span>Billed Annually</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* 3-Column Tiers Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
      >
        {PRICING_TIERS.map((tier) => {
          const price =
            billingCycle === "annual" ? tier.annualPrice : tier.monthlyPrice;

          return (
            <motion.div key={tier.id} variants={fadeInUp} className="flex">
              <SurfaceCard
                hoverEffect
                className={`relative p-8 flex flex-col justify-between w-full h-full border ${
                  tier.highlighted
                    ? "border-primary shadow-elevated bg-surface ring-1 ring-primary/20"
                    : "border-border/80 shadow-soft bg-surface"
                }`}
              >
                {/* Most Popular Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-sans font-semibold tracking-wider uppercase bg-primary text-white shadow-soft">
                      <Sparkles className="w-3 h-3" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Tier Info & Price */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-text-main">
                      {tier.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-text-muted mt-2 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-4xl sm:text-5xl font-bold text-text-main">
                        ${price}
                      </span>
                      <span className="font-sans text-xs text-text-muted">
                        / month
                      </span>
                    </div>
                    <span className="font-sans text-xs text-primary font-medium block mt-1">
                      {billingCycle === "annual" ? "Billed annually" : "Billed month-to-month"}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-2 space-y-3">
                    <span className="text-xs uppercase tracking-wider font-semibold text-text-main block">
                      Included in Sanctuary:
                    </span>
                    <ul className="space-y-2.5">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-xs sm:text-sm font-sans text-text-muted"
                        >
                          <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex-shrink-0 flex items-center justify-center mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* High-visibility Pill CTA Button */}
                <div className="pt-8 mt-8 border-t border-border/60">
                  <Button
                    variant={tier.highlighted ? "primary" : "secondary"}
                    size="lg"
                    href="/dashboard"
                    className="w-full justify-center"
                  >
                    {tier.ctaText}
                  </Button>
                </div>
              </SurfaceCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
