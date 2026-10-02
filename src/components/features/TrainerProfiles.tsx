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
  image?: string;
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
    image: "/images/trainer-elena.jpg",
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
    image: "/images/trainer-devan.jpg",
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
    image: "/images/program-posture.jpg",
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
    image: "/images/hero-yoga.jpg",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
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
              className="relative p-6 pt-14 text-center flex flex-col justify-between h-full border border-border/80 shadow-soft hover:shadow-card transition-all"
            >
              {/* Overlapping Circular Avatar */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="relative group">
                  <div
                    className={`w-24 h-24 rounded-full border-4 border-surface shadow-card flex items-center justify-center font-display text-2xl font-semibold overflow-hidden transition-transform duration-300 group-hover:scale-105 ${trainer.accentBg}`}
                  >
                    {trainer.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      trainer.initials
                    )}
                  </div>
                  {/* Small verified qualification badge */}
                  <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center shadow-xs">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-xl font-medium text-text-main">
                    {trainer.name}
                  </h3>
                  <p className="font-sans text-xs text-primary font-medium mt-0.5">
                    {trainer.role}
                  </p>
                </div>

                {/* Rating & Qualification Pills */}
                <div className="flex items-center justify-center gap-2">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surfaceVariant text-xs font-sans text-text-main">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>{trainer.rating}</span>
                    <span className="text-text-muted">({trainer.reviewsCount})</span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-surfaceVariant text-xs font-sans text-text-muted">
                    {trainer.qualifications}
                  </span>
                </div>

                <p className="font-sans text-xs text-text-muted leading-relaxed">
                  {trainer.bio}
                </p>
              </div>

              {/* Bottom Specialty & CTA */}
              <div className="pt-4 mt-4 border-t border-border/60 space-y-3">
                <div className="text-[11px] font-sans text-text-muted uppercase tracking-wider">
                  Specialty: <span className="text-text-main font-medium">{trainer.specialties}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  href="/dashboard"
                  className="w-full text-xs text-primary hover:text-primary-hover hover:bg-primary/5"
                >
                  Book 1:1 Guided Session &rarr;
                </Button>
              </div>
            </SurfaceCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
