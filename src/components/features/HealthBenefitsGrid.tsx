"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Activity,
  HeartPulse,
  Scale,
  Moon,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const HEALTH_CONCERNS = [
  {
    icon: Activity,
    title: "IT Desk Posture & Spine Pain",
    concern: "Neck stiffness, hunched shoulders & lower back ache from 8+ hours at a laptop.",
    solution:
      "Targeted cervical spine traction, thoracic openers, and pelvic resets to realign vertebrae and eliminate daily screen strain.",
    recommended: "Daily 1:15 PM & 5:30 PM Posture Batches",
    tag: "Ergonomics",
  },
  {
    icon: HeartPulse,
    title: "PCOS / PCOD & Hormonal Health",
    concern: "Irregular cycles, insulin resistance, mood fluctuations, and stubborn bloating.",
    solution:
      "Gentle pelvic vascular stimulation, adrenal-calming restorative asanas, and anti-inflammatory Indian Sattvic nutrition.",
    recommended: "Female-Only Live Batches + Diet Plan",
    tag: "Women's Wellness",
  },
  {
    icon: Scale,
    title: "Weight Management & Metabolism",
    concern: "Sluggish metabolism, visceral belly fat, and low energy levels.",
    solution:
      "Dynamic metabolic Hatha flows, core stabilization, and personalized high-protein meal guides designed for Indian kitchens.",
    recommended: "Morning 6 AM & 7 AM Solar Batches",
    tag: "Metabolic Tone",
  },
  {
    icon: Moon,
    title: "Stress, Anxiety & Insomnia",
    concern: "Restless racing mind, shallow chest breathing, and interrupted sleep cycles.",
    solution:
      "Vagus nerve downregulation through Anulom-Vilom, Bhramari pranayama, and 432 Hz acoustic sound meditation before bedtime.",
    recommended: "Evening 7:30 PM Restorative Session",
    tag: "Mental Calm",
  },
  {
    icon: Sparkles,
    title: "Facial Sculpting & Natural Glow",
    concern: "Morning facial puffiness, dull complexion, double chin, and jaw tension.",
    solution:
      "Proprietary 7-day Face Yoga combining acupressure, lymphatic drainage, and facial muscle lifting for natural radiance.",
    recommended: "7-Day Face Yoga Included Free",
    tag: "Signature Bonus",
  },
  {
    icon: ShieldAlert,
    title: "Joint Stiffness & Flexibility",
    concern: "Tight hamstrings, stiff hips, knee discomfort, and restricted movement range.",
    solution:
      "Safe progressive fascial stretching, gentle joint lubrication, and personalized modifications tailored to your flexibility horizon.",
    recommended: "All Levels & Beginner Friendly",
    tag: "Joint Longevity",
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

export function HealthBenefitsGrid() {
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
          HOLISTIC WELLNESS SOLUTIONS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Health Concerns We{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Address Daily
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          Structured, science-backed yoga therapies designed for modern lifestyle challenges. Real-time form corrections by certified Indian instructors.
        </p>
      </motion.div>

      {/* Grid of 6 Health Concerns */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {HEALTH_CONCERNS.map((item) => {
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
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-medium text-text-main">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-text-muted mt-2 italic">
                      &ldquo;{item.concern}&rdquo;
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-text-main/90 mt-2.5 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/60 space-y-2">
                  <div className="text-[11px] font-sans font-medium text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                    {item.recommended}
                  </div>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Hi! I have concerns regarding "${item.title}". Can you help me select the right batch with 10% discount?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-primary hover:text-primary-hover font-semibold pt-1"
                  >
                    <span>Consult on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
