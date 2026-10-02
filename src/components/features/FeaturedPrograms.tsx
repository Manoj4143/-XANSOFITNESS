"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { Clock, Flame, Sparkles, ArrowRight, Play } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Button } from "@/components/ui/Button";

export interface ProgramItem {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  intensity: "Gentle" | "Moderate" | "Vigorous";
  focus: "Mobility" | "Breath" | "Alignment" | "Stillness";
  gradient: string;
  level: string;
}

const DEFAULT_PROGRAMS: ProgramItem[] = [
  {
    id: "prog-1",
    title: "Morning Vinyasa Flow",
    instructor: "Elena Rostova",
    duration: "45 Min",
    intensity: "Vigorous",
    focus: "Mobility",
    gradient: "from-[#F6EDE8] to-[#ECD8CF]",
    level: "All Levels",
  },
  {
    id: "prog-2",
    title: "Deep Yin Release",
    instructor: "Devan Nair",
    duration: "60 Min",
    intensity: "Gentle",
    focus: "Stillness",
    gradient: "from-[#EFECE8] to-[#E3DCD3]",
    level: "Restorative",
  },
  {
    id: "prog-3",
    title: "15-Min Desk Posture Reset",
    instructor: "Maya Lin",
    duration: "15 Min",
    intensity: "Moderate",
    focus: "Alignment",
    gradient: "from-[#F3ECE4] to-[#E7DDD0]",
    level: "Quick Practice",
  },
  {
    id: "prog-4",
    title: "Chakra Meditation",
    instructor: "Julian Vance",
    duration: "30 Min",
    intensity: "Gentle",
    focus: "Breath",
    gradient: "from-[#F8EDE6] to-[#EAD5C8]",
    level: "Mindfulness",
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
  programs = DEFAULT_PROGRAMS,
}: {
  programs?: ProgramItem[];
}) {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
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
            DAILY SANCTUARY SCHEDULE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main mt-1">
            Featured{" "}
            <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
              Programs
            </span>
          </h2>
        </div>
        <p className="font-sans text-sm text-text-muted max-w-md">
          Structured practices curated by lineage practitioners to harmonize breath,
          fascial balance, and inner calm.
        </p>
      </motion.div>

      {/* Program Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {programs.map((item) => (
          <motion.div key={item.id} variants={fadeInUp}>
            <SurfaceCard
              hoverEffect
              className="p-0 overflow-hidden flex flex-col justify-between h-full group border border-border/80"
            >
              {/* Card Top: Gradient Image Placeholder with Badges */}
              <div
                className={`h-48 w-full bg-gradient-to-br ${item.gradient} p-5 flex flex-col justify-between relative overflow-hidden`}
              >
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-surface/90 text-text-main shadow-xs">
                    {item.level}
                  </span>

                  {/* Play Action Trigger */}
                  <div className="w-8 h-8 rounded-full bg-surface/90 text-primary flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="z-10">
                  <span className="text-xs text-text-muted font-sans block">
                    Guided by {item.instructor}
                  </span>
                </div>

                {/* Subtle decorative aura ring */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/40 blur-2xl pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5 bg-surface">
                <div>
                  <h3 className="font-display text-xl font-medium text-text-main group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Metadata Pills: Duration, Intensity, Focus */}
                <div className="pt-2 border-t border-border/60 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-sans bg-surfaceVariant text-text-muted">
                    <Clock className="w-3 h-3" />
                    {item.duration}
                  </span>

                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-sans ${getIntensityBadge(
                      item.intensity
                    )}`}
                  >
                    {item.intensity}
                  </span>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-sans bg-surfaceVariant text-text-muted">
                    <Sparkles className="w-3 h-3 text-primary" />
                    {item.focus}
                  </span>
                </div>
              </div>
            </SurfaceCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
