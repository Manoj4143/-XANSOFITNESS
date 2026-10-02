"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { Star, Award, Compass, ArrowRight } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Button } from "@/components/ui/Button";

export interface Trainer {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  specialties: string;
  rating: number;
  reviewsCount: number;
  initials: string;
  accentBg: string;
  bio: string;
}

const DEFAULT_TRAINERS: Trainer[] = [
  {
    id: "trainer-1",
    name: "Elena Rostova",
    role: "Lead Vinyasa Master",
    qualifications: "RYT-500 Certified",
    specialties: "Ashtanga, Dynamic Alignment",
    rating: 4.98,
    reviewsCount: 340,
    initials: "ER",
    accentBg: "bg-[#F3E2DA] text-primary",
    bio: "14 years teaching intentional movement in Mysore and Zurich. Focused on anatomical precision.",
  },
  {
    id: "trainer-2",
    name: "Devan Nair",
    role: "Restorative & Breath Guide",
    qualifications: "E-RYT 500 & Sound Master",
    specialties: "Sound Healing, Yin, Pranayama",
    rating: 4.99,
    reviewsCount: 512,
    initials: "DN",
    accentBg: "bg-[#EAE4DC] text-[#605B54]",
    bio: "Trained in Rishikesh. Weaves Tibetan singing bowls with slow fascial decompression.",
  },
  {
    id: "trainer-3",
    name: "Maya Lin",
    role: "Biomechanics & Yoga Therapist",
    qualifications: "C-IAYT Yoga Therapist",
    specialties: "Desk Posture, Spine Health",
    rating: 4.95,
    reviewsCount: 285,
    initials: "ML",
    accentBg: "bg-[#F6EDE8] text-primary",
    bio: "Bridging physical therapy with classical hatha sequences for modern sedentary lifestyles.",
  },
  {
    id: "trainer-4",
    name: "Julian Vance",
    role: "Meditation & Dharma Teacher",
    qualifications: "Vipassana Fellow & RYT-500",
    specialties: "Chakra Meditation, Somatic Presence",
    rating: 4.97,
    reviewsCount: 420,
    initials: "JV",
    accentBg: "bg-[#EFECE8] text-[#842503]",
    bio: "Over two decades studying contemplative traditions across Kyoto and the Himalayas.",
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

export function TrainerProfiles({
  trainers = DEFAULT_TRAINERS,
}: {
  trainers?: Trainer[];
}) {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-2xl mx-auto mb-16 space-y-4"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
          THE SANCTUARY COLLECTIVE
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Meet Your Mindful{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Guides
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          Internationally revered masters steeped in authentic lineages, anatomical
          biomechanics, and compassionate presence.
        </p>
      </motion.div>

      {/* Trainers Grid with Overlapping Avatars */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8"
      >
        {trainers.map((trainer) => (
          <motion.div key={trainer.id} variants={fadeInUp} className="relative pt-12">
            <SurfaceCard
              hoverEffect
              className="relative p-6 pt-14 text-center flex flex-col justify-between h-full border border-border/80"
            >
              {/* Overlapping Circular Avatar */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <div
                    className={`w-24 h-24 rounded-full border-4 border-surface shadow-card flex items-center justify-center font-display text-2xl font-semibold ${trainer.accentBg}`}
                  >
                    {trainer.initials}
                  </div>
                  {/* Small verified qualification badge */}
                  <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shadow-xs">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                {/* Rating */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surfaceVariant text-xs font-sans text-text-main">
                  <Star className="w-3.5 h-3.5 text-[#C97B1A] fill-[#C97B1A]" />
                  <span className="font-semibold">{trainer.rating}</span>
                  <span className="text-text-muted">({trainer.reviewsCount})</span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-text-main">
                    {trainer.name}
                  </h3>
                  <p className="font-sans text-xs font-medium text-primary mt-0.5">
                    {trainer.qualifications}
                  </p>
                </div>

                <div className="pt-2 text-xs font-sans text-text-muted">
                  <span className="font-semibold text-text-main block mb-0.5">
                    Specialties:
                  </span>
                  {trainer.specialties}
                </div>

                <p className="font-sans text-xs text-text-muted leading-relaxed line-clamp-3 pt-1">
                  {trainer.bio}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-border/60">
                <Button
                  variant="ghost"
                  size="sm"
                  href="/dashboard"
                  className="w-full justify-center"
                >
                  View Profile &rarr;
                </Button>
              </div>
            </SurfaceCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
