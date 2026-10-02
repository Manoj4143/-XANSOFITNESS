"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Lock,
  Star,
  Video,
  Sliders,
  Clock,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Heart,
  Flame,
  Wind,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const FEATURE_ITEMS = [
  {
    icon: Video,
    title: "Live Expert-Led",
    desc: "Interactive daily studio streams",
  },
  {
    icon: Sliders,
    title: "Personalised Plans",
    desc: "Calibrated to your breath & goals",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    desc: "On-demand anytime access",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Support",
    desc: "Guided mindfulness concierges",
  },
];

const CATEGORY_ITEMS = [
  {
    title: "Vinyasa Flow",
    level: "Dynamic Movement",
    duration: "45 mins",
    icon: Flame,
    accent: "from-[#F7ECE8] to-[#F1DDD7]",
    badgeColor: "text-primary bg-primary/10",
    description: "Harmonizing breath with continuous dynamic postures.",
  },
  {
    title: "Restorative Yin",
    level: "Deep Healing",
    duration: "60 mins",
    icon: Heart,
    accent: "from-[#EFECE8] to-[#E5E0D8]",
    badgeColor: "text-[#6B655F] bg-[#6B655F]/10",
    description: "Long passive holds targeting deep fascial release.",
  },
  {
    title: "Meditation",
    level: "Mind & Breath",
    duration: "25 mins",
    icon: Wind,
    accent: "from-[#F3EFE9] to-[#EAE4DC]",
    badgeColor: "text-[#842503] bg-[#842503]/10",
    description: "Pranayama breath control and tranquil quietude.",
  },
  {
    title: "1:1 Yoga",
    level: "Private Mentorship",
    duration: "Custom",
    icon: Sparkles,
    accent: "from-[#F8ECE6] to-[#ECD5CB]",
    badgeColor: "text-primary bg-primary/15",
    description: "Tailored alignment corrections with master teachers.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text-main selection:bg-primary/20 selection:text-primary">
      {/* Persistent Sanctuary Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================
            1. HERO SECTION (Split 2-Column Layout)
        ======================================================== */}
        <section className="relative overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32 px-4 sm:px-6 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Narrative & CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6 sm:space-y-8 z-10"
            >
              <motion.div variants={fadeInUp} className="inline-block">
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  YOUR SANCTUARY AWAITS
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-text-main"
              >
                Find Your <br />
                <span className="font-accent text-primary text-6xl sm:text-7xl lg:text-8xl block mt-2">
                  Center
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="font-sans text-base sm:text-lg md:text-xl text-text-muted max-w-lg leading-relaxed"
              >
                Expert-led yoga, meditation, and mindful movement designed for
                your daily life. Step into an intentional space of physical
                restoration and inner stillness.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Button variant="primary" size="lg">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button variant="secondary" size="lg">
                  Explore Classes
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column: Hero Visual with Terracotta Circle & Overlapping SurfaceCards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center py-8 md:py-0"
            >
              {/* Solid Terracotta Circular Backdrop */}
              <div className="relative w-[300px] sm:w-[380px] lg:w-[460px] aspect-square rounded-full bg-primary flex items-center justify-center shadow-elevated overflow-hidden">
                {/* Subtle organic light gradient wash */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/20 pointer-events-none" />

                {/* Stylized Silhouette Artwork for Yoga Pose */}
                <svg
                  viewBox="0 0 400 400"
                  className="w-[85%] h-[85%] text-white fill-current drop-shadow-xl"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.95">
                    {/* Head */}
                    <circle cx="200" cy="115" r="28" />
                    {/* Torso & Core Alignment */}
                    <path d="M190 148 C185 185 180 230 200 255 C220 230 215 185 210 148 Z" />
                    {/* Extended Arms in Prayer / Mudra */}
                    <path
                      d="M190 165 C155 185 130 200 115 185 C108 178 120 160 145 152 C168 145 185 158 190 165 Z"
                      fillOpacity="0.9"
                    />
                    <path
                      d="M210 165 C245 185 270 200 285 185 C292 178 280 160 255 152 C232 145 215 158 210 165 Z"
                      fillOpacity="0.9"
                    />
                    {/* Lotus / Padmasana Base Folded Limbs */}
                    <path
                      d="M135 270 C150 255 175 250 200 255 C225 250 250 255 265 270 C280 285 260 305 200 305 C140 305 120 285 135 270 Z"
                      fillOpacity="0.95"
                    />
                    {/* Subtle aura base ring */}
                    <circle
                      cx="200"
                      cy="285"
                      r="75"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4 6"
                      opacity="0.3"
                    />
                  </g>
                </svg>
              </div>

              {/* Overlapping SurfaceCard 1: 10K+ Happy Members */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="absolute -bottom-4 sm:bottom-4 left-0 sm:-left-6 z-20"
              >
                <SurfaceCard
                  hoverEffect
                  className="px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 border border-border shadow-card bg-surface/95 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display text-base sm:text-lg font-semibold text-text-main">
                      10K+ Members
                    </div>
                    <div className="text-xs text-text-muted font-sans">
                      Verified Global Sanctuary
                    </div>
                  </div>
                </SurfaceCard>
              </motion.div>

              {/* Overlapping SurfaceCard 2: 4.9 Mindful Rating */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="absolute -top-4 sm:top-6 right-0 sm:-right-6 z-20"
              >
                <SurfaceCard
                  hoverEffect
                  className="px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-3 border border-border shadow-card bg-surface/95 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E8A348]/15 flex items-center justify-center text-[#C97B1A]">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <div className="font-display text-base sm:text-lg font-semibold text-text-main">
                      4.9 Mindful Rating
                    </div>
                    <div className="text-xs text-text-muted font-sans">
                      From 2,400+ reviews
                    </div>
                  </div>
                </SurfaceCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================
            2. FLOATING FEATURES BAR (-mt-12 overlap)
        ======================================================== */}
        <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 -mt-10 sm:-mt-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SurfaceCard
              hoverEffect={false}
              className="p-6 sm:p-8 bg-surface border border-border/80 shadow-soft"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
                {FEATURE_ITEMS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
                        idx > 0 ? "pt-4 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                      }`}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-surfaceVariant flex-shrink-0 flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-text-main">
                          {item.title}
                        </h3>
                        <p className="font-sans text-xs text-text-muted mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SurfaceCard>
          </motion.div>
        </section>

        {/* ========================================================
            3. EXPLORE YOUR PRACTICE (Category Grid)
        ======================================================== */}
        <section
          id="programs"
          className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                CURATED DISCIPLINES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-text-main mt-1">
                Deepen your{" "}
                <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
                  Practice
                </span>
              </h2>
            </div>
            <Link
              href="#classes"
              className="group inline-flex items-center gap-1.5 font-sans text-sm font-medium text-text-main hover:text-primary transition-colors"
            >
              <span>View All Classes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* 4-Column Tall Category Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CATEGORY_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="group relative bg-surfaceVariant rounded-2xl overflow-hidden border border-border/70 flex flex-col justify-between hover:shadow-card transition-all duration-300"
                >
                  {/* Top: Artistic Gradient Canvas & Pose Badge */}
                  <div
                    className={`h-52 w-full bg-gradient-to-br ${item.accent} p-6 flex flex-col justify-between relative overflow-hidden`}
                  >
                    <div className="flex items-center justify-between z-10">
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${item.badgeColor}`}
                      >
                        {item.level}
                      </span>
                      {/* Floating Circular Action Arrow */}
                      <button
                        type="button"
                        aria-label={`Explore ${item.title}`}
                        className="w-9 h-9 rounded-full bg-surface text-text-main flex items-center justify-center shadow-soft group-hover:bg-primary group-hover:text-white transition-colors duration-200"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-center my-auto z-10 text-primary/80 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-16 h-16 stroke-[1.25]" />
                    </div>

                    {/* Ambient subtle blur glow in card background */}
                    <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-white/40 rounded-full blur-xl pointer-events-none" />
                  </div>

                  {/* Bottom: Category Description & Details */}
                  <div className="p-6 bg-surface flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-text-main group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-text-muted mt-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border/60 flex items-center justify-between text-xs text-text-muted font-sans">
                      <span>{item.duration}</span>
                      <span className="font-medium text-primary">Explore &rarr;</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ========================================================
            4. PROMO SECTION (bg-surfaceVariant with circular visual)
        ======================================================== */}
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-surfaceVariant border-y border-border/80">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              {/* Left Column: Offer Headline & CTA */}
              <motion.div
                variants={fadeInUp}
                className="md:col-span-7 space-y-6"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
                  COMMENCE YOUR SANCTUARY
                </span>

                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main leading-tight">
                  Start Your Journey. <br />
                  <span className="font-display font-medium text-primary">
                    Up to 50% Off
                  </span>{" "}
                  Annual Plans.
                </h2>

                <p className="font-sans text-sm sm:text-base text-text-muted max-w-lg leading-relaxed">
                  Unlock unlimited daily live streams, personalized yoga journeys,
                  breathwork masterclasses, and dedicated wellness concierge guidance.
                </p>

                <div className="pt-2">
                  <Button variant="dark" size="lg">
                    Claim 50% Off Annual Sanctuary
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>

              {/* Right Column: Large Circular Artwork with "Limited Offer" Floating Badge */}
              <motion.div
                variants={fadeInUp}
                className="md:col-span-5 flex items-center justify-center relative"
              >
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-surface border-4 border-surface shadow-elevated flex items-center justify-center overflow-hidden">
                  {/* Subtle inner concentric yoga circles */}
                  <div className="absolute inset-4 rounded-full border border-dashed border-border flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-16 h-16 text-primary stroke-[1.25] animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Floating Circular Badge: "Limited Offer" */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  className="absolute -top-3 right-4 sm:right-8 w-24 h-24 rounded-full bg-primary text-white flex flex-col items-center justify-center text-center p-2 shadow-card"
                >
                  <span className="text-[10px] font-sans uppercase font-bold tracking-widest leading-none">
                    Limited
                  </span>
                  <span className="font-display text-lg font-bold leading-tight">
                    Offer
                  </span>
                  <span className="text-[9px] opacity-90 font-sans">
                    50% Off
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Architectural Sanctuary Footer */}
      <Footer />
    </div>
  );
}
