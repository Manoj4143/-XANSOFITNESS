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
  Volume2,
  MessageCircle,
  Tag,
  Percent,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { FeaturedPrograms } from "@/components/features/FeaturedPrograms";
import { WhyChooseXanso } from "@/components/features/WhyChooseXanso";
import { TrainerProfiles } from "@/components/features/TrainerProfiles";
import { PricingArchitecture } from "@/components/features/PricingArchitecture";
import { SuccessStories } from "@/components/features/SuccessStories";
import { XansoFAQ } from "@/components/features/XansoFAQ";
import { WellnessConcierge } from "@/components/ai/WellnessConcierge";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { playSanctuaryChime } from "@/lib/sound";

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
    label: "Live & On-Demand Sessions",
    description: "Daily interactive Zoom classes with real-time posture corrections",
  },
  {
    icon: Sliders,
    number: "100%",
    label: "Ayush Certified Trainers",
    description: "Lineage masters from Rishikesh & Ministry of Ayush certified",
  },
  {
    icon: Clock,
    number: "6 Batches",
    label: "Daily Morning & Evening IST",
    description: "6:00 AM, 7:00 AM, 8:00 AM & 5:30 PM, 6:30 PM, 7:30 PM",
  },
  {
    icon: ShieldCheck,
    number: "10% Extra",
    label: "Discount vs Xanso Standard",
    description: "Exclusive community pricing on all 2, 3 & 6 month memberships",
  },
];

const CATEGORY_ITEMS = [
  {
    title: "Rishikesh Hatha Flow",
    level: "All Levels",
    description: "Fluid, breath-synchronized classical postures to cultivate heat, mobility, and spinal strength.",
    duration: "45-60 min",
    icon: Flame,
    accent: "from-[#F6EDE8] to-[#ECD8CF]",
    badgeColor: "bg-surface/90 text-primary",
  },
  {
    title: "7-Day Face Yoga",
    level: "Special Bonus",
    description: "Ayush certified facial muscle sculpting, lymphatic drainage, and natural skin rejuvenation.",
    duration: "20-25 min",
    icon: Heart,
    accent: "from-[#EFECE8] to-[#E3DCD3]",
    badgeColor: "bg-surface/90 text-[#605B54]",
  },
  {
    title: "IT Desk Posture & Spine",
    level: "Ergonomics / WFH",
    description: "Targeted decompression for cervical spine, shoulders, and lower back strained by laptop work.",
    duration: "15-25 min",
    icon: Wind,
    accent: "from-[#F8EDE6] to-[#EAD5C8]",
    badgeColor: "bg-surface/90 text-primary",
  },
  {
    title: "Pranayama & Dhyana",
    level: "Mindfulness",
    description: "Ancient breathwork (Kapalbhati, Anulom Vilom) and acoustic meditation for deep stress relief.",
    duration: "20-30 min",
    icon: Sparkles,
    accent: "from-[#F3ECE4] to-[#E7DDD0]",
    badgeColor: "bg-surface/90 text-[#7C6E5F]",
  },
];

export default function HomePage() {
  const [corporateModalOpen, setCorporateModalOpen] = React.useState(false);
  const [contactSubmitted, setContactSubmitted] = React.useState(false);
  const [corporateSubmitted, setCorporateSubmitted] = React.useState(false);
  const [chimeActive, setChimeActive] = React.useState(false);

  const WHATSAPP_NUMBER = "919105837321";
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Xanso Fitness! I want to claim the extra 10% discount on your yoga & fitness plans."
  )}`;

  const handlePlayChime = () => {
    playSanctuaryChime();
    setChimeActive(true);
    setTimeout(() => setChimeActive(false), 3800);
  };

  return (
    <div className="min-h-screen bg-background text-text-main flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* Sticky Global Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================
            1. HERO SECTION (Split Layout)
        ======================================================== */}
        <section className="relative pt-10 md:pt-16 pb-20 md:pb-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Typography & CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="md:col-span-6 lg:col-span-7 space-y-6 md:space-y-8 z-10"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-emerald-800 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                  NAMASTE &bull; AUTHENTIC INDIAN WELLNESS
                </span>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  Extra 10% OFF
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
                Live interactive Zoom yoga, signature 7-day Face Yoga, and posture therapy led by Ministry of Ayush certified Indian trainers. Free personalized Indian diet plans and direct WhatsApp support.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Button variant="primary" size="lg" href="#pricing">
                  Claim 10% Extra Discount
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-sm font-semibold shadow-soft transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp: +91 91058 37321</span>
                </a>
              </motion.div>

              {/* Interactive Solfeggio 432 Hz Sound Bell */}
              <motion.div variants={fadeInUp} className="pt-2">
                <button
                  type="button"
                  onClick={handlePlayChime}
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-surfaceVariant/80 hover:bg-surface border border-border/80 text-xs font-sans text-text-muted hover:text-text-main transition-all cursor-pointer shadow-soft group"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Volume2 className={`w-3.5 h-3.5 ${chimeActive ? "animate-pulse text-primary" : ""}`} />
                  </div>
                  <span>{chimeActive ? "Resonating Himalayan Chime (432 Hz)..." : "Play 432 Hz Himalayan Chime"}</span>
                  <div className="flex items-center gap-0.5 h-3">
                    <span className={`w-0.5 bg-primary rounded-full transition-all duration-300 ${chimeActive ? "h-3 animate-pulse" : "h-1.5"}`} />
                    <span className={`w-0.5 bg-primary rounded-full transition-all duration-300 ${chimeActive ? "h-4 animate-pulse delay-75" : "h-2"}`} />
                    <span className={`w-0.5 bg-primary rounded-full transition-all duration-300 ${chimeActive ? "h-2 animate-pulse delay-150" : "h-1"}`} />
                  </div>
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column: Editorial Indian Wellness Photography */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="md:col-span-6 lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]"
            >
              {/* Pulsing Warm Terracotta Glow */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-primary/30 to-amber-500/20 blur-3xl pointer-events-none"
              />

              {/* Organic Canvas Base with Real Indian Yoga Photography */}
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#ECD8CF] via-[#F4E9E2] to-[#FAF6F3] p-1.5 shadow-elevated flex items-center justify-center group overflow-hidden">
                <div className="w-full h-full rounded-full bg-surface border-4 border-surface shadow-inner overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/hero-yoga.jpg"
                    alt="Indian Yoga Practice"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Tag */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none whitespace-nowrap">
                    <span className="font-accent text-2xl sm:text-3xl text-white drop-shadow-md">
                      Peace in Motion
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card: Active Practitioners */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-2 sm:left-4 z-20"
              >
                <SurfaceCard hoverEffect className="p-4 flex items-center gap-3 shadow-card border border-border/60">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Heart className="w-5 h-5 fill-emerald-500/20" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-text-main leading-none">
                      15,000+
                    </p>
                    <p className="font-sans text-xs text-text-muted mt-0.5">
                      Practicing across India
                    </p>
                  </div>
                </SurfaceCard>
              </motion.div>

              {/* Floating Stat Card: Rating */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-2 sm:right-4 z-20"
              >
                <SurfaceCard hoverEffect className="p-4 flex items-center gap-3 shadow-card border border-border/60">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center">
                    <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-display text-lg font-bold text-text-main leading-none">
                        4.98
                      </span>
                      <span className="text-xs text-amber-600 font-sans font-bold">
                        ★
                      </span>
                    </div>
                    <p className="font-sans text-xs text-text-muted mt-0.5">
                      Ayush Certified Care
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
                TIME-HONORED DISCIPLINES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main mt-1">
                Explore Indian{" "}
                <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
                  Practices
                </span>
              </h2>
            </div>
            <p className="font-sans text-sm text-text-muted max-w-md">
              From solar Hatha flows and 7-day Face Yoga to deep Pranayama and desk posture correction.
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
                  href="#pricing"
                  className="group block"
                >
                  <motion.div
                    variants={fadeInUp}
                    className="group relative bg-surfaceVariant rounded-2xl overflow-hidden border border-border/70 flex flex-col justify-between hover:shadow-card transition-all duration-300 h-full"
                  >
                    {/* Top: Artistic Gradient Canvas & Pose Badge */}
                    <div
                      className={`h-48 w-full bg-gradient-to-br ${item.accent} p-6 flex flex-col justify-between relative overflow-hidden`}
                    >
                      <div className="flex items-center justify-between z-10">
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${item.badgeColor}`}
                        >
                          {item.level}
                        </span>
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
                        <span className="font-medium text-primary">View Batches &rarr;</span>
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
            5. THE XANSO DIFFERENCE (Live Zoom, Female Batches, Diet)
        ======================================================== */}
        <section id="why-us">
          <WhyChooseXanso />
        </section>

        {/* ========================================================
            6. TRAINER PROFILES (Ayush & Rishikesh Certified Masters)
        ======================================================== */}
        <section id="training">
          <TrainerProfiles />
        </section>

        {/* ========================================================
            6. PROMO SECTION (10% Extra Discount on Xanso Rates)
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-sans font-bold uppercase tracking-wider">
                  <Percent className="w-3.5 h-3.5" />
                  <span>Extra 10% Off Standard Rates</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main leading-tight">
                  Same Session Cost as Xanso. <br />
                  <span className="font-display font-medium text-emerald-700">
                    Plus 10% Extra Discount
                  </span>{" "}
                  for You.
                </h2>

                <p className="font-sans text-sm sm:text-base text-text-muted max-w-lg leading-relaxed">
                  Join our live morning and evening Zoom batches with certified Rishikesh yoga teachers. Every membership includes the free 7-Day Face Yoga bonus and a customized Indian nutrition plan.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button variant="primary" size="lg" href="#pricing">
                    Claim 10% Extra Off Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-sm font-semibold shadow-soft transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp: +91 91058 37321</span>
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Indian Yoga Art / Meditation Visual */}
              <motion.div
                variants={fadeInUp}
                className="md:col-span-5 flex items-center justify-center relative"
              >
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-surface border-4 border-surface shadow-elevated flex items-center justify-center overflow-hidden group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/trainer-neelam.jpg"
                    alt="Master Neelam Rana"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Circular Badge: "Extra 10% Off" */}
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 right-4 sm:right-8 w-24 h-24 rounded-full bg-emerald-600 text-white flex flex-col items-center justify-center text-center p-2 shadow-card"
                >
                  <span className="text-[10px] font-sans uppercase font-bold tracking-widest leading-none">
                    Special
                  </span>
                  <span className="font-display text-lg font-bold leading-tight">
                    10% Off
                  </span>
                  <span className="text-[9px] opacity-90 font-sans">
                    All Plans
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================
            7. PRICING ARCHITECTURE (INR & 10% Discount)
        ======================================================== */}
        <PricingArchitecture />

        {/* ========================================================
            8. CORPORATE SANCTUARY (Indian Workspaces & IT Teams)
        ======================================================== */}
        <section id="corporate" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="bg-surface rounded-3xl p-8 sm:p-12 md:p-16 border border-border shadow-elevated">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
                  WORKPLACE VITALITY & ERGONOMICS
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
                  Corporate Wellness for Indian Teams
                </h2>
                <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-xl">
                  Eliminate IT postural fatigue, reduce screen strain, and revitalize employee focus with live 15-minute desk yoga, guided breath breaks, and dedicated corporate Zoom batches.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-surfaceVariant">
                    <span className="font-display text-xl font-bold text-text-main block">15-Min</span>
                    <span className="text-xs font-sans text-text-muted">IT Desk Resets</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-surfaceVariant">
                    <span className="font-display text-xl font-bold text-text-main block">100%</span>
                    <span className="text-xs font-sans text-text-muted">Ayush Certified</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-surfaceVariant">
                    <span className="font-display text-xl font-bold text-text-main block">Custom</span>
                    <span className="text-xs font-sans text-text-muted">Batch Timings</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setCorporateModalOpen(true)}
                  >
                    <Building2 className="w-4 h-4 mr-2" />
                    Inquire for Corporate Plan
                  </Button>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      "Hi! We are looking for corporate wellness sessions for our organization."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-sm font-semibold shadow-soft transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp Us: +91 91058 37321</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 rounded-3xl bg-surfaceVariant border border-border flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    TRUSTED BY INDIAN ENTERPRISES
                  </span>
                  <div className="space-y-3 font-sans text-sm text-text-main">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Live 15-min afternoon desk stretch sessions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Tailored to Bengaluru, Gurugram & Mumbai work schedules</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Free Indian diet & posture guides for all team members</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/80">
                  <p className="font-serif italic text-text-muted text-xs sm:text-sm">
                    "Our tech engineers in Bengaluru look forward to the 1:15 PM desk posture breaks. Back pain complaints dropped significantly in 4 weeks."
                  </p>
                  <span className="font-sans text-xs font-semibold text-text-main block mt-2">
                    — HR Director, SaaS Unicorn (Gurugram)
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
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                    Corporate Wellness Briefing
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
                      Our Corporate Wellness Lead will contact you on WhatsApp / Email within 24 hours.
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
                        Custom plans starting from 10 team members with extra 10% corporate discount.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text-main block">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.in"
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
                          placeholder="Your Company"
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
            9. SUCCESS STORIES (Indian Practitioners)
        ======================================================== */}
        <SuccessStories />

        {/* ========================================================
            10. FREQUENTLY ASKED QUESTIONS (From Xanso.in)
        ======================================================== */}
        <XansoFAQ />

        {/* ========================================================
            11. CONTACT SECTION (Prominent WhatsApp)
        ======================================================== */}
        <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
                WE ARE HERE TO HELP
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-text-main">
                Connect with Us Directly
              </h2>
              <p className="font-sans text-xs sm:text-sm text-text-muted leading-relaxed">
                Have questions about batch timings, trainer credentials, diet plans, or claiming your 10% extra discount? Reach out to us directly on WhatsApp or submit a quick note.
              </p>

              <div className="space-y-4 pt-4 font-sans text-xs sm:text-sm">
                {/* Highlighted WhatsApp Card */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="font-bold text-emerald-900 block text-sm">
                      WhatsApp Quick Support (Mine Only)
                    </span>
                    <span className="text-emerald-700 font-semibold text-sm">
                      +91 91058 37321
                    </span>
                    <span className="text-[11px] text-emerald-600 block mt-0.5">
                      Instant response &bull; 10% discount claim
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium text-text-main block">Email Support</span>
                    <span className="text-text-muted">contact@xanso.in</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-medium text-text-main block">Lineage Roots & Hubs</span>
                    <span className="text-text-muted">Rishikesh (Uttarakhand) • Bengaluru • Mumbai • Delhi NCR</span>
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
                    Message Received!
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-text-muted max-w-sm mx-auto">
                    Thank you for reaching out. We will connect with you on WhatsApp (+91 91058 37321) or email within 24 hours.
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
                        placeholder="Rohan / Priya"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-text-main">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text-main">
                      Inquiry Focus
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30">
                      <option>Claim 10% Extra Discount on 2/3/6 Month Plan</option>
                      <option>1:1 Personal Yoga & Strength Training</option>
                      <option>7-Day Face Yoga Masterclass</option>
                      <option>Desk Posture & Spine Relief for IT Professionals</option>
                      <option>Corporate Team Wellness Batches</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-text-main">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your fitness goals, preferred batch timings (Morning/Evening IST), or any back/neck pain..."
                      className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant text-xs sm:text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>

                  <Button variant="primary" size="lg" type="submit" className="w-full justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Inquiry (Claim 10% Off)
                  </Button>
                </form>
              )}
            </SurfaceCard>
          </div>
        </section>
      </main>

      {/* Architectural Indian Wellness Footer */}
      <Footer />

      {/* Global AI Wellness Concierge */}
      <WellnessConcierge />

      {/* Global Floating WhatsApp Button (+91 91058 37321) */}
      <WhatsAppButton phoneNumber="919105837321" />
    </div>
  );
}
