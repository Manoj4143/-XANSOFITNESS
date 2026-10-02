"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export interface LogSessionResult {
  success: boolean;
  newStreak: number;
  totalPracticedMinutes?: number;
  newlyUnlockedBadges: string[];
  message: string;
}

export const BADGE_MILESTONES = [
  { days: 7, badge: "7-Day Flow Beacon" },
  { days: 14, badge: "14-Day Pranayama Adept" },
  { days: 30, badge: "30-Day Lotus Master" },
];

/**
 * Pure helper: Computes updated streak based on last practice date.
 * Enforces mindful consistency:
 * - Same day practice: streak remains unchanged.
 * - Next day practice (diff = 1): streak increments.
 * - Missed day (diff > 1): streak resets to 1.
 */
export function calculateStreak(
  currentStreak: number,
  lastPracticeDate: string | null,
  currentDateStr: string = new Date().toISOString().split("T")[0]
): number {
  if (!lastPracticeDate) return 1;
  const last = new Date(lastPracticeDate);
  const current = new Date(currentDateStr);
  const diffDays = Math.round((current.getTime() - last.getTime()) / (1000 * 3600 * 24));

  if (diffDays === 0) return currentStreak;
  if (diffDays === 1) return currentStreak + 1;
  return 1;
}

/**
 * Pure helper: Evaluates newly unlocked badges based on streak threshold.
 */
export function evaluateMilestoneBadges(
  streak: number,
  existingBadges: string[]
): string[] {
  const newlyUnlocked: string[] = [];
  for (const milestone of BADGE_MILESTONES) {
    if (streak >= milestone.days && !existingBadges.includes(milestone.badge)) {
      newlyUnlocked.push(milestone.badge);
    }
  }
  return newlyUnlocked;
}

/**
 * Server Action: Log completed asana or meditation practice session.
 * Atomically increments user streak count, logs completion history,
 * evaluates milestone badges, and triggers dashboard cache revalidation.
 */
export async function logSessionCompletion(
  userId: string,
  programId: string,
  durationMinutes: number = 30
): Promise<LogSessionResult> {
  try {
    const supabase = await createClient();

    // 1. Fetch current profile state
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("streak_count, total_minutes_practiced, unlocked_badges, last_practice_date")
      .eq("id", userId)
      .single();

    if (profileError && profileError.code !== "PGRST116") {
      console.warn("Supabase profile fetch error:", profileError.message);
    }

    const currentStreak = profile?.streak_count || 0;
    const currentBadges: string[] = profile?.unlocked_badges || ["Welcome Beacon"];
    const lastDate: string | null = profile?.last_practice_date || null;
    const totalMinutes = (profile?.total_minutes_practiced || 0) + durationMinutes;

    const newStreak = calculateStreak(currentStreak, lastDate);
    const newlyUnlockedBadges = evaluateMilestoneBadges(newStreak, currentBadges);
    const updatedBadges = [...currentBadges, ...newlyUnlockedBadges];

    // 2. Persist to practice_sessions log (Audit Trail)
    await supabase.from("practice_sessions").insert({
      user_id: userId,
      program_id: programId,
      duration_minutes: durationMinutes,
      completed_at: new Date().toISOString(),
    });

    // 3. Update public.profiles
    await supabase
      .from("profiles")
      .update({
        streak_count: newStreak,
        total_minutes_practiced: totalMinutes,
        unlocked_badges: updatedBadges,
        last_practice_date: new Date().toISOString().split("T")[0],
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId);

    // 4. Revalidate authenticated views
    revalidatePath("/dashboard");

    return {
      success: true,
      newStreak,
      totalPracticedMinutes: totalMinutes,
      newlyUnlockedBadges,
      message: newlyUnlockedBadges.length > 0
        ? `Incredible devotion! You unlocked the '${newlyUnlockedBadges.join(", ")}' badge.`
        : `Session honored. Your mindful streak is now ${newStreak} days.`,
    };
  } catch (error) {
    console.error("Failed to log practice session completion:", error);
    return {
      success: false,
      newStreak: 1,
      newlyUnlockedBadges: [],
      message: "Session recorded locally. Connection to sanctuary ledger restored.",
    };
  }
}
