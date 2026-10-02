"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
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
  CheckCircle2,
  Mail,
  MapPin,
  Building2,
  Phone,
  Send,
  X,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { FeaturedPrograms } from "@/components/features/FeaturedPrograms";
import { TrainerProfiles } from "@/components/features/TrainerProfiles";
import { PricingArchitecture } from "@/components/features/PricingArchitecture";
import { SuccessStories } from "@/components/features/SuccessStories";
import { WellnessConcierge } from "@/components/ai/WellnessConcierge";

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
      staggerChildren: 0.14,
    },
  },
};

const STATS_DATA = [
  {
    icon: Video,
    number: "500+",
    label: "On-Demand Sessions",
    description: "Multi-discipline practices across all skill horizons",
  },
  {
    icon: Sliders,
    number: "100%",
    label: "Personalized Paths",
    description: "Adaptive progressions matched to your somatic rhythm",
  },
  {
    icon: Clock,
    number: "15-90",
    label: "Minute Practices",
    description: "Tailored to complement and honor your daily routine",
  },
  {
    icon: ShieldCheck,
    number: "Top 1%",
    label: "Vetted Instructors",
    description: "Certified lineage masters and anatomical specialists",
  },
];

const CATEGORY_ITEMS = [
  {
    title: "Vinyasa Flow",
    level: "All Levels",
    description: "Fluid, breath-synchronized movement to cultivate heat and mobility.",
    duration: "20-60 min",
    icon: Flame,
    accent: "from-[#F6EDE8] to-[#ECD8CF]",
    badgeColor: "bg-surface/90 text-primary",
  },
  {
    title: "Yin & Restorative",
    level: "Beginner to Intermediate",
    description: "Passive, prolonged postures targeting deep connective fascia and nervous regulation.",
    duration: "45-75 min",
    icon: Heart,
    accent: "from-[#EFECE8] to-[#E3DCD3]",
    badgeColor: "bg-surface/90 text-[#605B54]",
  },
  {
    title: "Pranayama & Breath",
    level: "Foundational",
    description: "Ancient breathwork technologies designed to balance the vagus nerve and clarify consciousness.",
    duration: "10-30 min",
    icon: Wind,
    accent: "from-[#F8EDE6] to-[#EAD5C8]",
    badgeColor: "bg-surface/90 text-primary",
  },
  {
    title: "Sound & Meditation",
    level: "All Practitioners",
    description: "Sacred acoustic frequencies and guided stillness for deep mental decompression.",
    duration: "15-45 min",
    icon: Sparkles,
    accent: "from-[#F3ECE4] to-[#E7DDD0]",
    badgeColor: "bg-surface/90 text-[#7C6E5F]",
  },
];

export default function HomePage() {
  const [corporateModalOpen, setCorporateModalOpen] = React.useState(false);
  const [contactSubmitted, setContactSubmitted] = React.useState(false);
  const [corporateSubmitted, setCorporateSubmitted] = React.useState(false);

  return (
    <div className="min-h-screen bg-background text-text-main flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* Sticky Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================
            1. HERO SECTION (Split Layout)
        ======================================================== */}
        <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Typography & CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="md:col-span-6 lg:col-span-7 space-y-6 md:space-y-8 z-10"
            >
              <motion.div variants={fadeInUp} className="inline-block">
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  YOUR SANCTUARY AWAITS
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-text-main leading-[1.08]"
              >
                Find Your <br />
                <span className="font-accent text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl block mt-1">
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
                <Button variant="primary" size="lg" href="#pricing">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button variant="secondary" size="lg" href="#programs">
                  Explore Classes
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column: Visual Composition with Organic Circular Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="md:col-span-6 lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]"
            >
              {/* Organic Canvas Base */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#ECD8CF] via-[#F4E9E2] to-[#FAF6F3] p-1 shadow-elevated flex items-center justify-center">
                {/* Secondary Inset Ring */}
                <div className="w-[88%] h-[88%] rounded-full bg-surface border border-border/80 flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent opacity-80" />
                  <div className="text-center space-y-2 z-10">
                    <span className="font-accent text-4xl sm:text-5xl text-primary block">
                      Peace in Motion
                    </span>
                    <span className="font-sans text-xs uppercase tracking-widest text-text-muted">
                      Ancient Wisdom • Modern Science
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card: Active Members */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -top-4 -left-2 sm:left-4 z-20"
              >
                <SurfaceCard hoverEffect className="p-4 flex items-center gap-3 shadow-card border border-border/60">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Heart className="w-5 h-5 fill-primary/20" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-text-main leading-none">
                      10,000+
                    </p>
                    <p className="font-sans text-xs text-text-muted mt-0.5">
                      Mindful Practitioners
                    </p>
                  </div>
                </SurfaceCard>
              </motion.div>

              {/* Floating Stat Card: Rating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="absolute -bottom-6 -right-2 sm:right-4 z-20"
              >
                <SurfaceCard hoverEffect className="p-4 flex items-center gap-3 shadow-card border border-border/60">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center">
                    <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-display text-lg font-bold text-text-main leading-none">
                        4.9
                      </span>
                      <span className="text-xs text-amber-600 font-sans font-bold">
                        ★
                      </span>
                    </div>
                    <p className="font-sans text-xs text-text-muted mt-0.5">
                      Sanctuary Rating
                    </p>
                  </div>
                </SurfaceCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================
            2. FLOATING FEATURES BAR (Architectural Elevation)
        ======================================================== */}
        <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <SurfaceCard className="p-6 sm:p-8 md:p-10 shadow-elevated border border-border/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
              {STATS_DATA.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex flex-col space-y-2.5 ${
                      index !== 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-surfaceVariant text-primary flex items-center justify-center">
                        <Icon className="w-4 h-4 stroke-[1.75]" />
                      </div>
                      <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-text-main">
                        {item.number}
                      </span>
                    </div>
                    <h4 className="font-display text-sm font-semibold text-text-main pt-1">
                      {item.label}
                    </h4>
                    <p className="font-sans text-xs text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </SurfaceCard>
        </section>

        {/* ========================================================
            3. PRACTICE CATEGORIES GRID (Exploration Grid)
        ======================================================== */}
        <section
          id="programs"
          className="pt-24 md:pt-32 pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
                DISCOVER YOUR PRACTICE
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main mt-1">
                Explore{" "}
                <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
                  Disciplines
                </span>
              </h2>
            </div>
            <p className="font-sans text-sm text-text-muted max-w-md">
              From invigorating solar flows to restorative lunar stillness,
              discover sequences tuned to where your body is today.
            </p>
          </div>

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
                <Link
                  key={item.title}
                  href="/dashboard/programs"
                  className="group block"
                >
                  <motion.div
                    variants={fadeInUp}
                    className="group relative bg-surfaceVariant rounded-2xl overflow-hidden border border-border/70 flex flex-col justify-between hover:shadow-card transition-all duration-300 h-full"
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
                        <div
                          aria-label={`Explore ${item.title}`}
                          className="w-9 h-9 rounded-full bg-surface text-text-main flex items-center justify-center shadow-soft group-hover:bg-primary group-hover:text-white transition-colors duration-200"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="flex items-center justify-center my-auto z-10 text-primary/80 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-16 h-16 stroke-[1.25]" />
                      </div>

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
                </Link>
              );
            })}
          </motion.div>
        </section>

        {/* ========================================================
            4. FEATURED PROGRAMS (Structured Daily Schedule)
        ======================================================== */}
        <FeaturedPrograms />

        {/* ========================================================
            5. TRAINER PROFILES (The Sanctuary Collective)
        ======================================================== */}
        <section id="training">
          <TrainerProfiles />
        </section>

        {/* ========================================================
            6. PROMO SECTION (bg-surfaceVariant with circular visual)
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
                  <Button variant="dark" size="lg" href="#pricing">
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

        {/* ========================================================
            7. PRICING ARCHITECTURE (3-Tier with Switch)
        ======================================================== */}
        <PricingArchitecture />

        {/* ========================================================
            8. CORPORATE SANCTUARY (Enterprise Well-Being)
        ======================================================== */}
        <section id="corporate" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="bg-surface rounded-3xl p-8 sm:p-12 md:p-16 border border-border shadow-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
                  ORGANIZATIONAL RESILIENCE
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
                  Corporate Sanctuary & Executive Somatics
                </h2>
                <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-xl">
                  Elevate team focus, eliminate postural fatigue, and cultivate collective mental clarity with custom corporate subscriptions, live private streams, and executive retreats.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-surfaceVariant">
                    <span className="font-display text-xl font-bold text-text-main block">15-Min</span>
                    <span className="text-xs font-sans text-text-muted">Desk Posture Resets</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-surfaceVariant">
                    <span className="font-display text-xl font-bold text-text-main block">100%</span>
                    <span className="text-xs font-sans text-text-muted">Dedicated Guide</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-surfaceVariant">
                    <span className="font-display text-xl font-bold text-text-main block">Custom</span>
                    <span className="text-xs font-sans text-text-muted">HRV Analytics</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setCorporateModalOpen(true)}
                  >
                    <Building2 className="w-4 h-4 mr-2" />
                    Inquire for Team Sanctuary
                  </Button>
                  <Button variant="secondary" size="lg" href="#contact">
                    Speak with Concierge
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 rounded-3xl bg-surfaceVariant border border-border flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    TRUSTED BY MINDFUL TEAMS
                  </span>
                  <div className="space-y-3 font-sans text-sm text-text-main">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Executive breath pacing before quarterly reviews</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Private live broadcasts scheduled to your time zones</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Team engagement portal & streak leaderboards</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/80">
                  <p className="font-serif italic text-text-muted text-xs sm:text-sm">
                    "Xanso transformed our design team's posture and afternoon focus. The 15-minute desk resets are non-negotiable now."
                  </p>
                  <span className="font-sans text-xs font-semibold text-text-main block mt-2">
                    — Creative Director, Studio Monolith
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Inquiry Modal */}
        <AnimatePresence>
          {corporateModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text-main/70 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-lg bg-surface rounded-3xl overflow-hidden shadow-elevated border border-border p-6 sm:p-8 space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary">
                    Corporate Briefing
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setCorporateModalOpen(false);
                      setCorporateSubmitted(false);
                    }}
                    className="w-8 h-8 rounded-full bg-surfaceVariant hover:bg-border text-text-main flex items-center justify-center cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {corporateSubmitted ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h3 className="font-display text-2xl font-medium text-text-main">
                      Inquiry Received
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-text-muted max-w-xs mx-auto">
                      Our Executive Wellness Director will contact you within 24 hours with custom corporate options.
                    </p>
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => {
                        setCorporateModalOpen(false);
                        setCorporateSubmitted(false);
                      }}
                    >
                      Close Window
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setCorporateSubmitted(true);
                    }}
                    className="space-y-4 font-sans text-xs sm:text-sm"
                  >
                    <div>
                      <h3 className="font-display text-2xl font-medium text-text-main">
                        Bring Xanso to Your Company
                      </h3>
                      <p className="text-text-muted mt-1 text-xs">
                        Custom plans starting from 10 team members.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text-main block">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-text-main block">
                          Company Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Acme Corp"
                          className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-text-main block">
                          Team Size
                        </label>
                        <select className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30">
                          <option>10 - 50</option>
                          <option>50 - 250</option>
                          <option>250+</option>
                        </select>
                      </div>
                    </div>

                    <Button variant="primary" size="lg" type="submit" className="w-full justify-center">
                      Submit Briefing Request
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* ========================================================
            9. SUCCESS STORIES (Organic Offset Masonry Grid)
        ======================================================== */}
        <SuccessStories />

        {/* ========================================================
            10. CONTACT SANCTUARY SECTION
        ======================================================== */}
        <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Sanctuary Details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
                LET US GUIDE YOU
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-text-main">
                Connect with the Sanctuary
              </h2>
              <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed">
                Whether you have questions regarding our teacher lineage, subscription billing,
                or 1:1 guided mentorship, our concierge is here to assist.
              </p>

              <div className="space-y-4 pt-4 font-sans text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium text-text-main block">Email Sanctuary Concierge</span>
                    <span className="text-text-muted">concierge@xanso.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium text-text-main block">Physical Studios & Tea Houses</span>
                    <span className="text-text-muted">Kyoto (Higashiyama) • London (Mayfair)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <SurfaceCard className="lg:col-span-7 p-6 sm:p-8 border border-border shadow-soft">
              {contactSubmitted ? (
                <div className="text-center py-12 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="font-display text-2xl font-medium text-text-main">
                    Message Received
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-text-muted max-w-sm mx-auto">
                    Thank you for reaching out. A dedicated concierge guide will review your inquiry and reply within 24 hours.
                  </p>
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => setContactSubmitted(false)}
                    className="mt-4"
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setContactSubmitted(true);
                  }}
                  className="space-y-5 font-sans"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text-main">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Elena"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text-main">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="elena@sanctuary.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text-main">
                      Inquiry Focus
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30">
                      <option>Membership & Billing Inquiries</option>
                      <option>1:1 Guided Mentorship</option>
                      <option>Corporate Sanctuary Program</option>
                      <option>Teacher Training & Retreats</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text-main">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share your goals or questions with us..."
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <Button variant="primary" size="lg" type="submit" className="w-full justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry Note
                  </Button>
                </form>
              )}
            </SurfaceCard>
          </div>
        </section>
      </main>

      {/* Architectural Sanctuary Footer */}
      <Footer />

      {/* Global AI Wellness Concierge */}
      <WellnessConcierge />
    </div>
  );
}
