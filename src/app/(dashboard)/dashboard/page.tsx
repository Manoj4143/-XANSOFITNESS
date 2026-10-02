"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  Calendar,
  Sparkles,
  Play,
  Clock,
  Award,
  CheckCircle,
  Video,
  X,
  Volume2,
  Users,
} from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Button } from "@/components/ui/Button";

const UPCOMING_CLASSES = [
  {
    id: "cls-1",
    title: "Morning Vinyasa & Core Cadence",
    instructor: "Elena Rostova",
    time: "Today at 08:30 AM",
    duration: "45 Min",
    intensity: "Vigorous",
    status: "Starting in 15m",
  },
  {
    id: "cls-2",
    title: "15-Min Midday Desk Posture Reset",
    instructor: "Maya Lin",
    time: "Today at 01:15 PM",
    duration: "15 Min",
    intensity: "Moderate",
    status: "Registered",
  },
  {
    id: "cls-3",
    title: "Deep Yin & Singing Bowl Savasana",
    instructor: "Devan Nair",
    time: "Tomorrow at 07:00 PM",
    duration: "60 Min",
    intensity: "Gentle",
    status: "Registered",
  },
];

export default function DashboardPage() {
  const [streak, setStreak] = React.useState(18);
  const [sessionCompleted, setSessionCompleted] = React.useState(false);
  const [activeStream, setActiveStream] = React.useState<{
    title: string;
    instructor: string;
  } | null>(null);

  const handleResumePractice = () => {
    if (!sessionCompleted) {
      setStreak((prev) => prev + 1);
      setSessionCompleted(true);
    }
  };

  return (
    <div className="space-y-8 font-sans relative">
      {/* Toast Notification for Completed Practice */}
      <AnimatePresence>
        {sessionCompleted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4 rounded-2xl bg-primary text-white shadow-elevated flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-sm">
                  Practice Session Honored!
                </div>
                <div className="text-xs opacity-90">
                  Your mindful streak has advanced to {streak} consecutive days.
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSessionCompleted(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Greeting & Morning Reflection */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-primary font-bold">
            SANCTUARY SANCTUM
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-normal text-text-main mt-1">
            Welcome back,{" "}
            <span className="font-accent text-primary text-4xl sm:text-5xl ml-1">
              Sophia
            </span>
          </h1>
          <p className="text-sm text-text-muted mt-1">
            Day {streak} of your conscious movement practice. Your breath rhythm is steady.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={() =>
              setActiveStream({
                title: "Live Studio Broadcast",
                instructor: "Elena Rostova",
              })
            }
          >
            <Video className="w-4 h-4 mr-1.5" />
            Enter Studio Stream
          </Button>
        </div>
      </div>

      {/* Top Row: Current Program & Streak Tracker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Current Program Card (8 cols) */}
        <SurfaceCard className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between border border-border/80">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold text-primary px-3 py-1 rounded-full bg-primary/10">
                ACTIVE COMMITMENT
              </span>
              <span className="text-xs text-text-muted font-sans font-medium">
                Week 3 of 4 &bull; {sessionCompleted ? "72%" : "68%"} Complete
              </span>
            </div>

            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-text-main">
                21-Day Spine & Alignment Journey
              </h2>
              <p className="text-sm text-text-muted mt-1.5 max-w-xl leading-relaxed">
                Biomechanical spine decompression calibrated to eliminate anterior pelvic
                tilt and neck stiffness from desk work.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1.5 pt-2">
              <div className="w-full h-2 rounded-full bg-surfaceVariant overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: sessionCompleted ? "72%" : "68%" }}
                />
              </div>
              <div className="flex justify-between text-xs text-text-muted">
                <span>{sessionCompleted ? "15" : "14"} of 21 Practices Completed</span>
                <span className="font-semibold text-primary">
                  {sessionCompleted ? "6" : "7"} Sessions Remaining
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-text-muted block">Next Up Today:</span>
              <span className="text-sm font-semibold text-text-main">
                Session 15: Thoracic Mobility & Heart Openers (20 Min)
              </span>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={handleResumePractice}
              disabled={sessionCompleted}
            >
              <Play className="w-3.5 h-3.5 mr-1.5 fill-current" />
              {sessionCompleted ? "Completed Today ✓" : "Resume Practice"}
            </Button>
          </div>
        </SurfaceCard>

        {/* Gamification Streak Tracker (4 cols) */}
        <SurfaceCard className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border border-border/80">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold text-text-main">
                MINDFUL STREAK
              </span>
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Flame className="w-4 h-4 fill-current" />
              </div>
            </div>

            <div className="text-center py-2">
              <div className="font-display text-5xl font-bold text-text-main">
                {streak} <span className="text-xl text-primary font-sans font-medium">Days</span>
              </div>
              <p className="text-xs text-text-muted mt-1">
                Consecutive days on the sanctuary mat
              </p>
            </div>

            {/* Badges Display */}
            <div className="pt-2 space-y-2.5">
              {/* 7-Day Badge */}
              <div className="p-3 rounded-xl bg-surfaceVariant flex items-center justify-between border border-border/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/15 text-emerald-700 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-text-main">
                      7-Day Flow Beacon
                    </div>
                    <div className="text-[10px] text-text-muted">Achieved Oct 2026</div>
                  </div>
                </div>
                <Award className="w-4 h-4 text-[#C97B1A]" />
              </div>

              {/* 30-Day Streak Badge */}
              <div className="p-3 rounded-xl bg-surfaceVariant/60 flex items-center justify-between border border-border/40">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-text-main">
                      30-Day Lotus Master
                    </div>
                    <div className="text-[10px] text-text-muted">
                      {30 - streak} days remaining
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-primary px-2 py-0.5 rounded-full bg-primary/10">
                  {Math.round((streak / 30) * 100)}%
                </span>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-text-muted text-center pt-4">
            Practice for at least 10 minutes daily to sustain your momentum.
          </p>
        </SurfaceCard>
      </div>

      {/* Upcoming Yoga Classes (List View) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-2xl font-semibold text-text-main">
            Upcoming Sanctuary Classes
          </h3>
          <span className="text-xs text-text-muted">Synchronized with your local studio</span>
        </div>

        <div className="space-y-3">
          {UPCOMING_CLASSES.map((cls) => (
            <SurfaceCard
              key={cls.id}
              hoverEffect
              className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-border/80"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-surfaceVariant text-primary flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-display text-lg font-medium text-text-main">
                      {cls.title}
                    </h4>
                    {cls.status === "Starting in 15m" && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/15 text-primary animate-pulse">
                        {cls.status}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted mt-1">
                    <span>Guided by {cls.instructor}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {cls.time} ({cls.duration})
                    </span>
                    <span>&bull;</span>
                    <span className="font-medium text-text-main">{cls.intensity}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 sm:pt-0">
                <Button
                  variant={cls.status === "Starting in 15m" ? "primary" : "secondary"}
                  size="sm"
                  onClick={() =>
                    setActiveStream({
                      title: cls.title,
                      instructor: cls.instructor,
                    })
                  }
                >
                  Join Live Room
                </Button>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </div>

      {/* Live Stream Simulation Modal */}
      <AnimatePresence>
        {activeStream && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-surface w-full max-w-2xl rounded-2xl shadow-elevated border border-border overflow-hidden"
            >
              <div className="p-4 bg-surfaceVariant/60 border-b border-border flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-text-main">
                    {activeStream.title}
                  </h3>
                  <span className="text-xs text-primary font-medium">
                    Live with {activeStream.instructor}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveStream(null)}
                  className="p-1.5 rounded-full hover:bg-surface text-text-muted hover:text-text-main"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Canvas */}
              <div className="aspect-video bg-neutral-900 text-white relative flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary animate-pulse">
                  <Video className="w-8 h-8" />
                </div>
                <p className="font-display text-xl text-neutral-200">
                  Connecting to Sanctuary Studio Feed...
                </p>
                <p className="text-xs text-neutral-400 mt-2 max-w-md">
                  Audio & crystal video stream calibrated with HLS adaptive delivery.
                </p>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Studio (78 Participants)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-4 h-4 cursor-pointer" />
                    <Users className="w-4 h-4 cursor-pointer" />
                  </div>
                </div>
              </div>

              <div className="p-4 flex justify-end">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setActiveStream(null)}
                >
                  Leave Studio
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
