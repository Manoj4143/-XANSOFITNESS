"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Heart,
  Wind,
  Flame,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Button } from "@/components/ui/Button";

export default function BiometricsPage() {
  const [isBreathingActive, setIsBreathingActive] = React.useState(false);
  const [breathPhase, setBreathPhase] = React.useState<"Inhale" | "Hold" | "Exhale" | "Pause">("Inhale");
  const [secondsRemaining, setSecondsRemaining] = React.useState(4);
  const [cyclesCompleted, setCyclesCompleted] = React.useState(12);

  React.useEffect(() => {
    if (!isBreathingActive) return;

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev > 1) {
          return prev - 1;
        }

        // Cycle through 4x4 Box Breathing
        setBreathPhase((currentPhase) => {
          if (currentPhase === "Inhale") return "Hold";
          if (currentPhase === "Hold") return "Exhale";
          if (currentPhase === "Exhale") return "Pause";
          // If Pause, increment completed cycles
          setCyclesCompleted((c) => c + 1);
          return "Inhale";
        });

        return 4;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isBreathingActive]);

  const WEEKLY_DATA = [
    { day: "Mon", minutes: 35, hrv: 68 },
    { day: "Tue", minutes: 45, hrv: 72 },
    { day: "Wed", minutes: 20, hrv: 65 },
    { day: "Thu", minutes: 50, hrv: 78 },
    { day: "Fri", minutes: 40, hrv: 75 },
    { day: "Sat", minutes: 60, hrv: 82 },
    { day: "Sun", minutes: 30, hrv: 74 },
  ];

  return (
    <div className="space-y-8 font-sans">
      {/* Page Header */}
      <div>
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
          SOMATIC NERVOUS SYSTEM RECOVERY
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-medium text-text-main mt-1">
          Breath & Biometrics
        </h1>
        <p className="font-sans text-xs sm:text-sm text-text-muted mt-1">
          Monitor your heart rate variability, vagal tone coherence, and regulated breath intervals.
        </p>
      </div>

      {/* Main Grid: Breath Pacer & Biometric Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Breath Pacer (7 cols) */}
        <SurfaceCard className="lg:col-span-7 p-8 flex flex-col items-center justify-between min-h-[460px] text-center border border-border/80">
          <div className="w-full flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider font-semibold text-primary inline-flex items-center gap-1.5">
              <Wind className="w-4 h-4" />
              Somatic Box Breath Pacer (4-4-4-4)
            </span>
            <span className="text-xs font-sans text-text-muted">
              {cyclesCompleted} Cycles Completed
            </span>
          </div>

          {/* Animated Pulsing Breath Orb */}
          <div className="relative my-8 flex items-center justify-center">
            {/* Outer halo */}
            <motion.div
              animate={{
                scale: isBreathingActive
                  ? breathPhase === "Inhale" || breathPhase === "Hold"
                    ? [1, 1.45]
                    : [1.45, 1]
                  : 1,
                opacity: isBreathingActive ? [0.2, 0.4, 0.2] : 0.2,
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute w-56 h-56 rounded-full bg-primary/20 blur-xl pointer-events-none"
            />

            {/* Middle decorative border ring */}
            <motion.div
              animate={{
                scale: isBreathingActive
                  ? breathPhase === "Inhale" || breathPhase === "Hold"
                    ? 1.25
                    : 1
                  : 1,
              }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="w-48 h-48 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center"
            >
              {/* Inner core circle */}
              <motion.div
                animate={{
                  scale: isBreathingActive
                    ? breathPhase === "Inhale" || breathPhase === "Hold"
                      ? 1.15
                      : 0.9
                    : 1,
                  backgroundColor:
                    breathPhase === "Hold" || breathPhase === "Pause"
                      ? "#ECD8CF"
                      : "#F6EDE8",
                }}
                transition={{ duration: 4, ease: "easeInOut" }}
                className="w-36 h-36 rounded-full shadow-soft flex flex-col items-center justify-center text-primary"
              >
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-primary/80">
                  {isBreathingActive ? breathPhase : "Ready"}
                </span>
                <span className="font-display text-4xl font-bold mt-1 text-primary">
                  {isBreathingActive ? `${secondsRemaining}s` : "4s"}
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsBreathingActive(!isBreathingActive)}
              className="min-w-[160px]"
            >
              {isBreathingActive ? (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  Pause Pacer
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2 fill-current" />
                  Begin Pacing
                </>
              )}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                setIsBreathingActive(false);
                setBreathPhase("Inhale");
                setSecondsRemaining(4);
              }}
            >
              <RotateCcw className="w-4 h-4 mr-1.5" />
              Reset
            </Button>
          </div>
        </SurfaceCard>

        {/* Right Column: Vagal Coherence & Metrics (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 1: HRV Coherence */}
          <SurfaceCard className="p-6 border border-border/80 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                HEART RATE VARIABILITY (HRV)
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                High Coherence
              </span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-text-main">
                74
              </span>
              <span className="font-sans text-xs text-text-muted">
                ms rMSSD • +8% vs last week
              </span>
            </div>

            <p className="font-sans text-xs text-text-muted leading-relaxed">
              Your parasympathetic nervous system demonstrates optimal adaptive resilience following morning pranayama.
            </p>
          </SurfaceCard>

          {/* Card 2: Rest & Recovery Score */}
          <SurfaceCard className="p-6 border border-border/80 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                REST & VAGAL TONE
              </span>
              <Heart className="w-4 h-4 text-primary" />
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold text-text-main">
                91
              </span>
              <span className="font-sans text-xs text-text-muted">/ 100 Score</span>
            </div>

            <div className="w-full h-2 rounded-full bg-surfaceVariant overflow-hidden">
              <div className="h-full bg-primary rounded-full w-[91%]" />
            </div>

            <span className="text-xs font-sans text-text-muted block">
              Ideal state for deep restorative yin or meditation.
            </span>
          </SurfaceCard>
        </div>
      </div>

      {/* Weekly Practice & Coherence Trends */}
      <SurfaceCard className="p-6 border border-border/80 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-xl font-medium text-text-main">
              7-Day Somatic Minutes
            </h3>
            <p className="font-sans text-xs text-text-muted mt-0.5">
              Accumulated mindful movement and breathwork practice.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-sans text-primary font-medium">
            <TrendingUp className="w-4 h-4" />
            <span>280 Total Mins</span>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-3 pt-4 border-t border-border/60">
          {WEEKLY_DATA.map((item) => (
            <div key={item.day} className="flex flex-col items-center gap-2">
              <div className="w-full h-32 bg-surfaceVariant rounded-xl flex items-end justify-center p-1.5 overflow-hidden">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(item.minutes / 60) * 100}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full bg-primary rounded-lg"
                />
              </div>
              <span className="text-xs font-sans font-medium text-text-main">
                {item.day}
              </span>
              <span className="text-[11px] font-sans text-text-muted">
                {item.minutes}m
              </span>
            </div>
          ))}
        </div>
      </SurfaceCard>
    </div>
  );
}
