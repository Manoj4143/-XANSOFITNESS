"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Settings,
  User,
  Bell,
  Shield,
  CreditCard,
  CheckCircle2,
  Sparkles,
  Save,
  X,
} from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Button } from "@/components/ui/Button";

export default function SettingsPage() {
  const [name, setName] = React.useState("Elena Rostova");
  const [email, setEmail] = React.useState("elena.wellness@xanso.com");
  const [goal, setGoal] = React.useState("Spine & Fascial Health");
  const [reminderLive, setReminderLive] = React.useState(true);
  const [reminderStreak, setReminderStreak] = React.useState(true);
  const [reminderAi, setReminderAi] = React.useState(false);
  const [savedToast, setSavedToast] = React.useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3500);
  };

  return (
    <div className="space-y-8 font-sans max-w-4xl">
      {/* Toast Notification */}
      <AnimatePresence>
        {savedToast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 right-6 z-50 bg-text-main text-white px-5 py-3 rounded-2xl shadow-elevated flex items-center gap-3 text-xs sm:text-sm font-sans"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Sanctuary profile & preferences saved successfully!</span>
            <button
              type="button"
              onClick={() => setSavedToast(false)}
              className="ml-2 text-white/70 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Header */}
      <div>
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
          SANCTUARY PREFERENCES
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-medium text-text-main mt-1">
          Account & Sanctuary Settings
        </h1>
        <p className="font-sans text-xs sm:text-sm text-text-muted mt-1">
          Customize your practitioner identity, practice schedule reminders, and membership status.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Profile Card */}
        <SurfaceCard className="p-6 sm:p-8 border border-border/80 space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border/60">
            <User className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-medium text-text-main">
              Practitioner Profile
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-sans font-semibold uppercase tracking-wider text-text-main">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant/60 text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-sans font-semibold uppercase tracking-wider text-text-main">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant/60 text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <label className="text-xs font-sans font-semibold uppercase tracking-wider text-text-main">
                Primary Sanctuary Goal
              </label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border bg-surfaceVariant/60 text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="Spine & Fascial Health">Spine & Fascial Health</option>
                <option value="Stress & Vagal Reset">Stress & Vagal Reset</option>
                <option value="Pranayama & Breath Mastery">Pranayama & Breath Mastery</option>
                <option value="Ashtanga Flexibility & Core">Ashtanga Flexibility & Core</option>
              </select>
            </div>
          </div>
        </SurfaceCard>

        {/* Membership Status Card */}
        <SurfaceCard className="p-6 sm:p-8 border border-border/80 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-border/60">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-primary" />
              <h2 className="font-display text-xl font-medium text-text-main">
                Current Plan
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary">
              Active Member
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-surfaceVariant">
            <div>
              <h3 className="font-display text-lg font-medium text-text-main">
                Complete Sanctuary (Annual)
              </h3>
              <p className="font-sans text-xs text-text-muted mt-0.5">
                $49 / month billed annually • Renews October 2027
              </p>
            </div>
            <Button variant="secondary" size="sm" href="/#pricing">
              Change Plan
            </Button>
          </div>
        </SurfaceCard>

        {/* Notification Reminders */}
        <SurfaceCard className="p-6 sm:p-8 border border-border/80 space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-border/60">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-medium text-text-main">
              Sanctuary Notifications
            </h2>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between p-3 rounded-xl hover:bg-surfaceVariant/60 cursor-pointer">
              <div>
                <span className="text-sm font-medium text-text-main block">
                  Live Studio Broadcast Alerts
                </span>
                <span className="text-xs text-text-muted font-sans">
                  Receive a prompt 10 minutes before your reserved live class starts.
                </span>
              </div>
              <input
                type="checkbox"
                checked={reminderLive}
                onChange={(e) => setReminderLive(e.target.checked)}
                className="w-4 h-4 text-primary rounded accent-primary cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl hover:bg-surfaceVariant/60 cursor-pointer">
              <div>
                <span className="text-sm font-medium text-text-main block">
                  Streak Protection Nudges
                </span>
                <span className="text-xs text-text-muted font-sans">
                  Remind me at 6:00 PM if I haven't completed my daily practice.
                </span>
              </div>
              <input
                type="checkbox"
                checked={reminderStreak}
                onChange={(e) => setReminderStreak(e.target.checked)}
                className="w-4 h-4 text-primary rounded accent-primary cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl hover:bg-surfaceVariant/60 cursor-pointer">
              <div>
                <span className="text-sm font-medium text-text-main block">
                  AI Concierge Morning Wisdom
                </span>
                <span className="text-xs text-text-muted font-sans">
                  Receive daily micro-meditation prompts tailored to your goals.
                </span>
              </div>
              <input
                type="checkbox"
                checked={reminderAi}
                onChange={(e) => setReminderAi(e.target.checked)}
                className="w-4 h-4 text-primary rounded accent-primary cursor-pointer"
              />
            </label>
          </div>
        </SurfaceCard>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <Button variant="secondary" size="lg" href="/dashboard">
            Back to Dashboard
          </Button>
          <Button variant="primary" size="lg" type="submit">
            <Save className="w-4 h-4 mr-2" />
            Save Preferences
          </Button>
        </div>
      </form>
    </div>
  );
}
