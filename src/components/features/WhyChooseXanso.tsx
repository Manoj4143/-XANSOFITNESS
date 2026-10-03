"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Video,
  Users2,
  Sparkles,
  Utensils,
  Award,
  MessageCircle,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const VALUE_PROPS = [
  {
    icon: Video,
    title: "100% Live Interactive Sessions",
    description:
      "Unlike pre-recorded fitness apps, our classes are conducted live on Zoom. Instructors watch your camera and provide real-time audio posture corrections.",
    badge: "Interactive Zoom",
  },
  {
    icon: Users2,
    title: "Dedicated Female-Only Batches",
    description:
      "Safe, empowering, and supportive space with dedicated female instructors. Available in both early morning and evening IST slots.",
    badge: "Comfort & Privacy",
  },
  {
    icon: Sparkles,
    title: "7-Day Signature Face Yoga Included",
    description:
      "Every membership includes our proprietary Face Yoga masterclass to sculpt facial muscles, improve lymphatic flow, and restore natural skin radiance.",
    badge: "Free Bonus",
  },
  {
    icon: Utensils,
    title: "Free Customized Indian Diet Plan",
    description:
      "Personalized Sattvic and balanced nutrition plans designed for Indian kitchens, focusing on natural digestion, joint mobility, and sustainable fat loss.",
    badge: "Dietitian Designed",
  },
  {
    icon: Award,
    title: "Ayush & Rishikesh Lineage Masters",
    description:
      "Learn from verified instructors with 6+ years experience, Ayush Mantralaya certifications, and over 6,000+ satisfied clients trained globally.",
    badge: "Ministry of Ayush",
  },
  {
    icon: MessageCircle,
    title: "Direct WhatsApp Accountability",
    description:
      "Direct 1:1 contact with your trainer on +91 91058 37321 for posture check-ins, batch switching, and diet guidance throughout your membership.",
    badge: "+91 91058 37321",
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

export function WhyChooseXanso() {
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
          THE XANSO DIFFERENCE
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Why Train with{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Xanso?
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          We combine authentic Himalayan yoga lineages with structured science. No generic recorded videos—only live guidance, personal accountability, and tangible results.
        </p>
      </motion.div>

      {/* Grid of 6 Core Value Props */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {VALUE_PROPS.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title} variants={fadeInUp} className="flex">
              <SurfaceCard
                hoverEffect
                className="p-7 flex flex-col justify-between w-full h-full border border-border/80 shadow-soft bg-surface space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-surfaceVariant text-text-muted border border-border/60">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-medium text-text-main">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-text-muted mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/50 flex items-center gap-1.5 text-xs font-sans font-medium text-primary">
                  <span>Included in All Memberships</span>
                  <span>&bull;</span>
                  <span className="text-emerald-700">10% Off</span>
                </div>
              </SurfaceCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Quick Batch Timings Callout Bar */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-12 p-6 sm:p-8 rounded-3xl bg-surfaceVariant border border-border flex flex-col lg:flex-row items-center justify-between gap-6"
      >
        <div className="space-y-1.5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
            <Clock className="w-4 h-4" />
            <span>DAILY LIVE BATCH TIMINGS (IST)</span>
          </div>
          <h4 className="font-display text-lg sm:text-xl font-medium text-text-main">
            Morning Batches: 6:00 AM, 7:00 AM, 8:00 AM &bull; Evening: 5:30 PM, 6:30 PM, 7:30 PM
          </h4>
          <p className="font-sans text-xs text-text-muted">
            Flexible batch switching anytime. Missed a morning session? Jump into the evening batch seamlessly.
          </p>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Hi! I want to check batch timings and join with the 10% discount."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-semibold whitespace-nowrap shadow-soft transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Confirm Batch on WhatsApp</span>
        </a>
      </motion.div>
    </section>
  );
}
