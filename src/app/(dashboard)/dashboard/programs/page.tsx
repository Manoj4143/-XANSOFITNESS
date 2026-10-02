"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Play,
  CheckCircle2,
  Clock,
  Flame,
  Sparkles,
  BookOpen,
  Filter,
  X,
  Volume2,
} from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Button } from "@/components/ui/Button";

interface Program {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  totalDays: number;
  completedDays: number;
  level: "All Levels" | "Foundational" | "Intermediate" | "Advanced";
  category: "Spine & Posture" | "Restorative Yin" | "Power Flow" | "Mindfulness";
  gradient: string;
  isEnrolled: boolean;
}

const PROGRAMS_DATA: Program[] = [
  {
    id: "prog-1",
    title: "21-Day Awakening: Spine & Fascial Health",
    instructor: "Elena Rostova",
    duration: "25 min/day",
    totalDays: 21,
    completedDays: 14,
    level: "Foundational",
    category: "Spine & Posture",
    gradient: "from-[#F6EDE8] to-[#ECD8CF]",
    isEnrolled: true,
  },
  {
    id: "prog-2",
    title: "Deep Yin & Nervous System Somatics",
    instructor: "Devan Nair",
    duration: "40 min/day",
    totalDays: 14,
    completedDays: 9,
    level: "All Levels",
    category: "Restorative Yin",
    gradient: "from-[#EFECE8] to-[#E3DCD3]",
    isEnrolled: true,
  },
  {
    id: "prog-3",
    title: "Pranayama Mastery: The 8 Breaths of Fire",
    instructor: "Julian Vance",
    duration: "20 min/day",
    totalDays: 10,
    completedDays: 0,
    level: "Intermediate",
    category: "Mindfulness",
    gradient: "from-[#F8EDE6] to-[#EAD5C8]",
    isEnrolled: false,
  },
  {
    id: "prog-4",
    title: "Ashtanga Core Foundations & Arm Balances",
    instructor: "Maya Lin",
    duration: "45 min/day",
    totalDays: 28,
    completedDays: 0,
    level: "Advanced",
    category: "Power Flow",
    gradient: "from-[#F3ECE4] to-[#E7DDD0]",
    isEnrolled: false,
  },
  {
    id: "prog-5",
    title: "Desk Worker's Mobility Prescription",
    instructor: "Elena Rostova",
    duration: "15 min/day",
    totalDays: 7,
    completedDays: 7,
    level: "Foundational",
    category: "Spine & Posture",
    gradient: "from-[#F5EBE1] to-[#E8D9C8]",
    isEnrolled: true,
  },
];

export default function ProgramsPage() {
  const [activeTab, setActiveTab] = React.useState<"enrolled" | "library">("enrolled");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [activeModalProgram, setActiveModalProgram] = React.useState<Program | null>(null);
  const [enrolledMap, setEnrolledMap] = React.useState<Record<string, boolean>>({
    "prog-1": true,
    "prog-2": true,
    "prog-5": true,
  });
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleEnroll = (prog: Program) => {
    setEnrolledMap((prev) => ({ ...prev, [prog.id]: true }));
    showToast(`Successfully enrolled in "${prog.title}"! Added to your sanctuary.`);
  };

  const categories = ["All", "Spine & Posture", "Restorative Yin", "Power Flow", "Mindfulness"];

  const filteredPrograms = PROGRAMS_DATA.filter((prog) => {
    const isEnrolled = !!enrolledMap[prog.id];
    if (activeTab === "enrolled" && !isEnrolled) return false;
    if (selectedCategory !== "All" && prog.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="space-y-8 font-sans">
      {/* Toast Banner */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 z-50 bg-text-main text-white px-5 py-3 rounded-2xl shadow-elevated flex items-center gap-3 text-xs sm:text-sm font-sans"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
            <button
              type="button"
              onClick={() => setToastMessage(null)}
              className="ml-2 text-white/70 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
            PATHWAY PRACTICES
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-text-main mt-1">
            My Programs
          </h1>
          <p className="font-sans text-xs sm:text-sm text-text-muted mt-1">
            Immersive, progressive journeys designed to transform body alignment and inner equilibrium.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="bg-surfaceVariant p-1 rounded-full border border-border inline-flex items-center self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab("enrolled")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === "enrolled"
                ? "bg-surface text-text-main shadow-soft font-semibold"
                : "text-text-muted hover:text-text-main"
            }`}
          >
            Active Journeys
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("library")}
            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === "library"
                ? "bg-surface text-text-main shadow-soft font-semibold"
                : "text-text-muted hover:text-text-main"
            }`}
          >
            Explore Library
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <Filter className="w-4 h-4 text-text-muted mr-1" />
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-sans transition-all duration-200 cursor-pointer whitespace-nowrap ${
              selectedCategory === cat
                ? "bg-primary text-white font-medium shadow-xs"
                : "bg-surfaceVariant text-text-muted hover:text-text-main border border-border/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Program Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.map((item) => {
          const isEnrolled = !!enrolledMap[item.id];
          const progressPercent = Math.round((item.completedDays / item.totalDays) * 100);

          return (
            <SurfaceCard
              key={item.id}
              hoverEffect
              className="p-0 overflow-hidden flex flex-col justify-between border border-border/80 group"
            >
              {/* Card Banner */}
              <div
                className={`h-44 w-full bg-gradient-to-br ${item.gradient} p-5 flex flex-col justify-between relative overflow-hidden`}
              >
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-surface/90 text-text-main shadow-xs">
                    {item.level}
                  </span>
                  <span className="text-xs font-sans text-text-muted bg-surface/90 px-2.5 py-0.5 rounded-full">
                    {item.duration}
                  </span>
                </div>

                <div className="z-10">
                  <span className="text-xs text-text-muted font-sans block">
                    Guided by {item.instructor}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5 bg-surface">
                <div className="space-y-2">
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-primary">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl font-medium text-text-main group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Progress Bar (if enrolled) */}
                {isEnrolled && (
                  <div className="space-y-2 pt-2 border-t border-border/60">
                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="text-text-muted">
                        Day {item.completedDays} of {item.totalDays}
                      </span>
                      <span className="font-semibold text-primary">
                        {progressPercent}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surfaceVariant overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Card Action */}
                <div className="pt-3 border-t border-border/60">
                  {isEnrolled ? (
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => setActiveModalProgram(item)}
                      className="w-full justify-center"
                    >
                      <Play className="w-4 h-4 mr-2 fill-current" />
                      {item.completedDays === item.totalDays
                        ? "Review Practice"
                        : `Resume Day ${item.completedDays + 1}`}
                    </Button>
                  ) : (
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={() => handleEnroll(item)}
                      className="w-full justify-center"
                    >
                      Enroll in Series
                    </Button>
                  )}
                </div>
              </div>
            </SurfaceCard>
          );
        })}
      </div>

      {/* Program Video Player Modal */}
      <AnimatePresence>
        {activeModalProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text-main/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-3xl bg-surface rounded-3xl overflow-hidden shadow-elevated border border-border"
            >
              {/* Video Player Display */}
              <div className="relative aspect-video bg-text-main flex flex-col justify-between p-6">
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary text-white">
                    Day {activeModalProgram.completedDays + 1}: Alignment Practice
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveModalProgram(null)}
                    className="w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-center my-auto z-10 text-white space-y-2">
                  <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center mx-auto shadow-elevated cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <h3 className="font-display text-2xl font-medium pt-2">
                    {activeModalProgram.title}
                  </h3>
                  <p className="font-sans text-xs text-white/80">
                    Master Class with {activeModalProgram.instructor}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-white/70 z-10 font-sans">
                  <span className="flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5" /> Binaural Soundscape: 432 Hz
                  </span>
                  <span>{activeModalProgram.duration}</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 pointer-events-none" />
              </div>

              {/* Player Controls & Info */}
              <div className="p-6 bg-surface flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display text-lg font-medium text-text-main">
                    Sequence: Sacrum Decompression & Breath Synch
                  </h4>
                  <p className="font-sans text-xs text-text-muted mt-0.5">
                    Complete all 25 minutes to automatically log to your 19-day streak.
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    showToast(`Practice completed! Logged 25 mins towards your streak.`);
                    setActiveModalProgram(null);
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Complete Practice
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
