"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  Sparkles,
  Users,
  Video,
  CheckCircle2,
  Filter,
  X,
  Radio,
  Flame,
  ChevronRight,
} from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Button } from "@/components/ui/Button";

interface ScheduleClass {
  id: string;
  time: string;
  title: string;
  instructor: string;
  duration: string;
  intensity: "Gentle" | "Moderate" | "Vigorous";
  discipline: "Vinyasa" | "Yin & Restorative" | "Pranayama" | "Meditation";
  attendees: number;
  isLiveNow?: boolean;
}

const SCHEDULE_DATA: ScheduleClass[] = [
  {
    id: "sc-1",
    time: "07:30 AM",
    title: "Sunrise Solar Awakening",
    instructor: "Elena Rostova",
    duration: "45 Min",
    intensity: "Vigorous",
    discipline: "Vinyasa",
    attendees: 142,
    isLiveNow: true,
  },
  {
    id: "sc-2",
    time: "09:00 AM",
    title: "Breath of Fire: Pranic Activation",
    instructor: "Julian Vance",
    duration: "30 Min",
    intensity: "Moderate",
    discipline: "Pranayama",
    attendees: 88,
  },
  {
    id: "sc-3",
    time: "12:15 PM",
    title: "Midday Fascial Release & Reset",
    instructor: "Maya Lin",
    duration: "25 Min",
    intensity: "Gentle",
    discipline: "Yin & Restorative",
    attendees: 64,
  },
  {
    id: "sc-4",
    time: "05:30 PM",
    title: "Chakra Balance & Sacred Chanting",
    instructor: "Devan Nair",
    duration: "45 Min",
    intensity: "Gentle",
    discipline: "Meditation",
    attendees: 110,
  },
  {
    id: "sc-5",
    time: "07:00 PM",
    title: "Candlelight Yin & Yoga Nidra",
    instructor: "Elena Rostova",
    duration: "60 Min",
    intensity: "Gentle",
    discipline: "Yin & Restorative",
    attendees: 185,
  },
];

const DAYS = [
  { label: "Today", date: "Oct 2" },
  { label: "Tomorrow", date: "Oct 3" },
  { label: "Saturday", date: "Oct 4" },
  { label: "Sunday", date: "Oct 5" },
  { label: "Monday", date: "Oct 6" },
];

const DISCIPLINES = [
  "All Disciplines",
  "Vinyasa",
  "Yin & Restorative",
  "Pranayama",
  "Meditation",
];

export default function SchedulePage() {
  const [selectedDay, setSelectedDay] = React.useState(0);
  const [selectedDiscipline, setSelectedDiscipline] = React.useState("All Disciplines");
  const [bookedClasses, setBookedClasses] = React.useState<Record<string, boolean>>({});
  const [activeStreamModal, setActiveStreamModal] = React.useState<ScheduleClass | null>(null);
  const [notification, setNotification] = React.useState<string | null>(null);

  const toggleBookClass = (id: string, title: string) => {
    setBookedClasses((prev) => {
      const isBooked = !prev[id];
      showNotification(
        isBooked
          ? `Reserved spot for "${title}". Added to personal schedule.`
          : `Reservation cancelled for "${title}".`
      );
      return { ...prev, [id]: isBooked };
    });
  };

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  const filteredClasses = SCHEDULE_DATA.filter((item) => {
    if (selectedDiscipline === "All Disciplines") return true;
    return item.discipline === selectedDiscipline;
  });

  return (
    <div className="space-y-8 font-sans">
      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 z-50 bg-text-main text-white px-5 py-3 rounded-2xl shadow-elevated flex items-center gap-3 text-xs sm:text-sm font-sans"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{notification}</span>
            <button
              type="button"
              onClick={() => setNotification(null)}
              className="ml-2 text-white/70 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
            LIVE BROADCASTS & SESSIONS
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-text-main mt-1">
            Studio Schedule
          </h1>
          <p className="font-sans text-xs sm:text-sm text-text-muted mt-1">
            Real-time live streaming classes with master practitioners worldwide.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          onClick={() => {
            const liveNow = SCHEDULE_DATA.find((c) => c.isLiveNow) || SCHEDULE_DATA[0];
            setActiveStreamModal(liveNow);
          }}
          className="flex items-center gap-2 self-start sm:self-auto"
        >
          <Radio className="w-4 h-4 text-white animate-pulse" />
          <span>Enter Live Room</span>
        </Button>
      </div>

      {/* Day Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-border/80">
        {DAYS.map((day, idx) => (
          <button
            key={day.label}
            type="button"
            onClick={() => setSelectedDay(idx)}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-200 flex flex-col items-center gap-0.5 cursor-pointer min-w-[90px] ${
              selectedDay === idx
                ? "bg-surface text-primary shadow-soft border border-primary/20 font-semibold"
                : "text-text-muted hover:text-text-main hover:bg-surface/50 border border-transparent"
            }`}
          >
            <span>{day.label}</span>
            <span className="text-[11px] opacity-80">{day.date}</span>
          </button>
        ))}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <Filter className="w-4 h-4 text-text-muted ml-1 mr-1 flex-shrink-0" />
        {DISCIPLINES.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setSelectedDiscipline(d)}
            className={`px-4 py-1.5 rounded-full text-xs font-sans transition-all duration-200 cursor-pointer whitespace-nowrap ${
              selectedDiscipline === d
                ? "bg-text-main text-background font-medium"
                : "bg-surfaceVariant text-text-muted hover:text-text-main border border-border/50"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Class Schedule List */}
      <div className="space-y-4">
        {filteredClasses.map((item) => {
          const isBooked = !!bookedClasses[item.id];

          return (
            <SurfaceCard
              key={item.id}
              className={`p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border transition-all ${
                item.isLiveNow
                  ? "border-primary/40 bg-surface ring-1 ring-primary/10"
                  : "border-border/80 bg-surface"
              }`}
            >
              {/* Left: Time & Class Information */}
              <div className="flex items-start gap-5">
                <div className="text-center min-w-[75px] pt-1">
                  <span className="font-display text-xl sm:text-2xl font-semibold text-text-main block">
                    {item.time.split(" ")[0]}
                  </span>
                  <span className="text-xs font-sans font-medium text-text-muted uppercase">
                    {item.time.split(" ")[1]}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    {item.isLiveNow && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500 text-white animate-pulse">
                        <Radio className="w-3 h-3" /> Live Now
                      </span>
                    )}
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                      {item.discipline}
                    </span>
                    <span className="text-xs font-sans text-text-muted">
                      • {item.duration}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-medium text-text-main">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs font-sans text-text-muted pt-0.5">
                    <span>Guided by <strong className="text-text-main font-medium">{item.instructor}</strong></span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-text-muted" />
                      {item.attendees} practicing
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-border/60">
                {item.isLiveNow ? (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setActiveStreamModal(item)}
                    className="w-full sm:w-auto"
                  >
                    <Video className="w-4 h-4 mr-2" />
                    Enter Stream
                  </Button>
                ) : (
                  <Button
                    variant={isBooked ? "secondary" : "primary"}
                    size="md"
                    onClick={() => toggleBookClass(item.id, item.title)}
                    className="w-full sm:w-auto"
                  >
                    {isBooked ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-500" />
                        Reserved
                      </>
                    ) : (
                      "Reserve Spot"
                    )}
                  </Button>
                )}
              </div>
            </SurfaceCard>
          );
        })}
      </div>

      {/* Live Stream Broadcast Modal */}
      <AnimatePresence>
        {activeStreamModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text-main/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-3xl bg-surface rounded-3xl overflow-hidden shadow-elevated border border-border"
            >
              {/* Video Screen Area */}
              <div className="relative aspect-video bg-text-main flex flex-col justify-between p-6">
                <div className="flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-600 text-white">
                    <Radio className="w-3.5 h-3.5 animate-pulse" /> Live Stream
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveStreamModal(null)}
                    className="w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-center my-auto z-10 text-white space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-medium">
                    {activeStreamModal.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/80">
                    Lead Master: {activeStreamModal.instructor} • Sanctuary Room Alpha
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-white/70 z-10 font-sans">
                  <span>1080p Sanctuary Audio HD</span>
                  <span>{activeStreamModal.attendees} Collective Meditators</span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 pointer-events-none" />
              </div>

              {/* Modal Footer Controls */}
              <div className="p-6 bg-surface flex items-center justify-between">
                <div>
                  <h4 className="font-display text-lg font-medium text-text-main">
                    Sanctuary Broadcast In Progress
                  </h4>
                  <p className="font-sans text-xs text-text-muted">
                    Synchronize your breath to the binaural audio chime.
                  </p>
                </div>
                <Button
                  variant="dark"
                  size="md"
                  onClick={() => setActiveStreamModal(null)}
                >
                  Leave Room
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
