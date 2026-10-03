"use client";

import * as React from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Clock, Sparkles, Play, X, MessageCircle, Calendar } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Button } from "@/components/ui/Button";

export interface ProgramItem {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  timing: string;
  intensity: "Gentle" | "Moderate" | "Vigorous";
  focus: "Flexibility" | "Breathwork" | "Posture Relief" | "Face Yoga" | "Strength";
  level: string;
  image: string;
  description: string;
}

const INDIAN_PROGRAMS: ProgramItem[] = [
  {
    id: "prog-hatha",
    title: "Rishikesh Morning Hatha Flow",
    instructor: "Neelam Rana",
    duration: "45 Min",
    timing: "Daily: 6:00 AM & 7:00 AM IST",
    intensity: "Moderate",
    focus: "Flexibility",
    level: "All Levels",
    image: "/images/trainer-neelam.jpg",
    description: "Authentic classical Hatha sequences from Rishikesh designed to open energy meridians, improve flexibility, and balance the nervous system.",
  },
  {
    id: "prog-face-yoga",
    title: "7-Day Signature Face Yoga",
    instructor: "Muskaan Wahi",
    duration: "25 Min",
    timing: "Daily: 8:00 AM & 6:30 PM IST",
    intensity: "Gentle",
    focus: "Face Yoga",
    level: "Special Bonus",
    image: "/images/trainer-muskaan.jpg",
    description: "Ayush certified facial muscle sculpting, lymphatic drainage, and acupressure points for natural skin rejuvenation and tension release.",
  },
  {
    id: "prog-desk-posture",
    title: "IT Desk Posture & Spine Reset",
    instructor: "Apeksha Chauhan",
    duration: "25 Min",
    timing: "Daily: 1:15 PM & 5:30 PM IST",
    intensity: "Gentle",
    focus: "Posture Relief",
    level: "WFH / Desk Ergonomics",
    image: "/images/trainer-apeksha.jpg",
    description: "Targeted decompression for cervical spine, shoulders, and lower back strained by sedentary office and laptop work.",
  },
  {
    id: "prog-pranayama",
    title: "Pranayama & Mindful Dhyana",
    instructor: "Navya Gupta",
    duration: "30 Min",
    timing: "Daily: 6:30 AM & 7:30 PM IST",
    intensity: "Gentle",
    focus: "Breathwork",
    level: "Foundational to Advanced",
    image: "/images/trainer-navya.jpg",
    description: "Classical breathwork technologies (Kapalbhati, Anulom Vilom, Bhastrika, Bhramari) to balance the autonomic nervous system and soothe stress.",
  },
  {
    id: "prog-akhada-strength",
    title: "Akhada Mobility & Functional Core",
    instructor: "Arjun Rathore",
    duration: "45 Min",
    timing: "Daily: 7:00 AM & 6:00 PM IST",
    intensity: "Vigorous",
    focus: "Strength",
    level: "Intermediate",
    image: "/images/trainer-arjun.jpg",
    description: "Ancient Indian bodyweight conditioning, joint mobility drills, and core stability inspired by traditional Akhada training for modern longevity.",
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

const getIntensityBadge = (intensity: ProgramItem["intensity"]) => {
  switch (intensity) {
    case "Gentle":
      return "bg-[#EAE4DC] text-[#605B54]";
    case "Moderate":
      return "bg-[#F3E2DA] text-primary";
    case "Vigorous":
      return "bg-primary/15 text-primary font-semibold";
  }
};

export function FeaturedPrograms({
  programs = INDIAN_PROGRAMS,
}: {
  programs?: ProgramItem[];
}) {
  const [selectedProgram, setSelectedProgram] = React.useState<ProgramItem | null>(null);
  const WHATSAPP_NUMBER = "919105837321";

  return (
    <section id="programs" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
      >
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
            LIVE ZOOM BATCHES & ONLINE MASTERCLASSES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main mt-1">
            Featured Indian{" "}
            <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
              Practices
            </span>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="font-sans text-sm text-text-muted max-w-md">
            Morning and evening batches scheduled to Indian Standard Time (IST).
            Interactive Zoom instruction with direct form correction.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hi! I would like to join the trial live yoga batch with 10% discount."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-sans font-semibold whitespace-nowrap shadow-soft transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Book Trial on WhatsApp</span>
          </a>
        </div>
      </motion.div>

      {/* Program Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
      >
        {programs.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeInUp}
            onClick={() => setSelectedProgram(item)}
            className="cursor-pointer"
          >
            <SurfaceCard
              hoverEffect
              className="p-0 overflow-hidden flex flex-col justify-between h-full group border border-border/80 shadow-soft hover:shadow-card transition-all"
            >
              {/* Card Top: Photography */}
              <div className="h-56 w-full relative overflow-hidden bg-surfaceVariant">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                {/* Badges & Play Action */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-surface/90 text-text-main shadow-xs backdrop-blur-xs">
                      {item.level}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-surface/90 text-primary flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-white/95 font-sans font-medium block drop-shadow-sm">
                      {item.instructor}
                    </span>
                    <span className="text-[10px] text-white/80 block mt-0.5">
                      {item.timing}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-surface">
                <div>
                  <h3 className="font-display text-lg font-medium text-text-main group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-text-muted mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Metadata Pills: Duration, Intensity, Focus */}
                <div className="pt-2 border-t border-border/60 flex flex-wrap items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-sans bg-surfaceVariant text-text-muted">
                    <Clock className="w-3 h-3" />
                    {item.duration}
                  </span>

                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-sans ${getIntensityBadge(
                      item.intensity
                    )}`}
                  >
                    {item.intensity}
                  </span>

                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-sans bg-surfaceVariant text-text-muted">
                    <Sparkles className="w-3 h-3 text-primary" />
                    {item.focus}
                  </span>
                </div>
              </div>
            </SurfaceCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Program Preview Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text-main/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg bg-surface rounded-3xl overflow-hidden shadow-elevated border border-border p-6 space-y-5"
            >
              <div className="w-full h-48 rounded-2xl overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-sans text-white/95 font-semibold">
                  Live Zoom Batch &bull; {selectedProgram.timing}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                  {selectedProgram.level} • {selectedProgram.duration}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProgram(null)}
                  className="w-8 h-8 rounded-full bg-surfaceVariant hover:bg-border text-text-main flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <h3 className="font-display text-2xl font-medium text-text-main">
                  {selectedProgram.title}
                </h3>
                <p className="font-sans text-xs text-text-muted mt-1">
                  Guided by {selectedProgram.instructor} • Focus: {selectedProgram.focus}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surfaceVariant space-y-2 text-xs font-sans text-text-muted">
                <p>{selectedProgram.description}</p>
                <div className="flex items-center justify-between pt-2 text-text-main font-medium border-t border-border/60">
                  <span>Intensity: {selectedProgram.intensity}</span>
                  <span className="text-emerald-700">10% Extra Discount Available</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hi! I would like to register for "${selectedProgram.title}" with trainer ${selectedProgram.instructor} and claim my 10% extra discount.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:flex-1 py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-semibold shadow-soft transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Batch on WhatsApp</span>
                </a>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => setSelectedProgram(null)}
                  className="w-full sm:w-auto"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
