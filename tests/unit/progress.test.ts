import { describe, it, expect } from "vitest";
import {
  calculateStreak,
  evaluateMilestoneBadges,
  BADGE_MILESTONES,
} from "@/app/actions/progress";

describe("Xanso Gamification & Streak Logic", () => {
  describe("calculateStreak", () => {
    it("should initialize streak to 1 if no previous practice exists", () => {
      const streak = calculateStreak(0, null, "2026-10-02");
      expect(streak).toBe(1);
    });

    it("should increment the streak count when a user completes a yoga class on consecutive days", () => {
      const currentStreak = 6;
      const lastPracticeDate = "2026-10-01";
      const today = "2026-10-02";

      const newStreak = calculateStreak(currentStreak, lastPracticeDate, today);
      expect(newStreak).toBe(7);
    });

    it("should maintain the same streak if multiple practices occur on the same day", () => {
      const currentStreak = 14;
      const lastPracticeDate = "2026-10-02";
      const today = "2026-10-02";

      const newStreak = calculateStreak(currentStreak, lastPracticeDate, today);
      expect(newStreak).toBe(14);
    });

    it("should reset the streak to 1 if a day is missed (e.g. 2 days gap)", () => {
      const currentStreak = 24;
      const lastPracticeDate = "2026-09-29";
      const today = "2026-10-02"; // 3 days later

      const newStreak = calculateStreak(currentStreak, lastPracticeDate, today);
      expect(newStreak).toBe(1);
    });
  });

  describe("evaluateMilestoneBadges", () => {
    it("should correctly unlock the '7-Day Flow Beacon' badge when the count hits 7", () => {
      const streak = 7;
      const existingBadges = ["Welcome Beacon"];

      const unlocked = evaluateMilestoneBadges(streak, existingBadges);
      expect(unlocked).toContain("7-Day Flow Beacon");
      expect(unlocked).not.toContain("14-Day Pranayama Adept");
    });

    it("should not re-unlock a badge if already earned", () => {
      const streak = 8;
      const existingBadges = ["Welcome Beacon", "7-Day Flow Beacon"];

      const unlocked = evaluateMilestoneBadges(streak, existingBadges);
      expect(unlocked).toEqual([]);
    });

    it("should unlock the '30-Day Lotus Master' badge upon achieving 30 consecutive days", () => {
      const streak = 30;
      const existingBadges = ["Welcome Beacon", "7-Day Flow Beacon", "14-Day Pranayama Adept"];

      const unlocked = evaluateMilestoneBadges(streak, existingBadges);
      expect(unlocked).toContain("30-Day Lotus Master");
    });
  });
});
