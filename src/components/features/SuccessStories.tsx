"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { CheckCircle, Quote, Star } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  practiceDuration: string;
  rating: number;
  offsetClass?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Xanso completely transformed my relationship with movement. The absence of aggressive fitness metrics allowed me to finally listen to my breath. The 1:1 postural therapy with Elena relieved chronic lower back tension I had carried for years.",
    author: "Sophia Aris",
    role: "Architectural Designer",
    location: "Stockholm",
    practiceDuration: "Member for 14 months",
    rating: 5,
    offsetClass: "md:translate-y-0",
  },
  {
    id: "test-2",
    quote:
      "The Yin and Sound Immersion sessions are an indispensable oasis after long screen-heavy days. The warmth and organic aesthetic of the platform feels like walking into an unhurried Kyoto retreat.",
    author: "Marcus Chen",
    role: "Software Fellow",
    location: "San Francisco",
    practiceDuration: "Member for 8 months",
    rating: 5,
    offsetClass: "md:translate-y-8",
  },
  {
    id: "test-3",
    quote:
      "We instituted the 15-minute desk posture reset across our remote design team. The shift in afternoon energy, shoulder ease, and collective focus has been astonishing. True quiet luxury.",
    author: "Amara Okonjo",
    role: "VP of People, Studio Verve",
    location: "London",
    practiceDuration: "Corporate Sanctuary Lead",
    rating: 5,
    offsetClass: "md:-translate-y-4",
  },
  {
    id: "test-4",
    quote:
      "I was skeptical of online yoga after practicing in Mysore for a decade. The lineage integrity, anatomical precision, and scholarly depth of the teachers on Xanso is unrivaled.",
    author: "Kavita Ramaswamy",
    role: "Physiotherapist & Writer",
    location: "Bengaluru",
    practiceDuration: "Member for 18 months",
    rating: 5,
    offsetClass: "md:translate-y-4",
  },
  {
    id: "test-5",
    quote:
      "The breathing pace and absence of aggressive loud soundtracks sets Xanso worlds apart from standard fitness apps. It feels deeply grounded, restorative, and profoundly respectful of the body.",
    author: "Lukas Weber",
    role: "Classical Cellist",
    location: "Vienna",
    practiceDuration: "Member for 6 months",
    rating: 5,
    offsetClass: "md:translate-y-12",
  },
  {
    id: "test-6",
    quote:
      "Every morning sequence feels like an intentional prayer for the spine and mind. The guidance on nervous system downregulation helped cure my insomnia.",
    author: "Claire Delacroix",
    role: "Creative Director",
    location: "Paris",
    practiceDuration: "Member for 11 months",
    rating: 5,
    offsetClass: "md:translate-y-2",
  },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function SuccessStories({
  stories = TESTIMONIALS,
}: {
  stories?: Testimonial[];
}) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-2xl mx-auto mb-16 space-y-4"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary">
          SANCTUARY REFLECTIONS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Stories of{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Restoration
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          Unfiltered notes from members cultivating daily stillness, spinal ease,
          and holistic nervous system recovery.
        </p>
      </motion.div>

      {/* Organic Offset Masonry Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start"
      >
        {stories.map((story) => (
          <motion.div
            key={story.id}
            variants={fadeInUp}
            className={`flex flex-col ${story.offsetClass || ""}`}
          >
            <SurfaceCard
              hoverEffect
              className="p-8 flex flex-col justify-between h-full space-y-6 border border-border/80 shadow-soft bg-surface"
            >
              <div className="space-y-4">
                {/* Top: Star rating & subtle quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: story.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-[#C97B1A] fill-[#C97B1A]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-primary/20 stroke-[1.5]" />
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm sm:text-base text-text-main/90 leading-relaxed font-normal italic">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              {/* Author Info & Verified Member Badge */}
              <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-display text-base font-semibold text-text-main">
                    {story.author}
                  </h4>
                  <p className="font-sans text-xs text-text-muted">
                    {story.role} &bull; {story.location}
                  </p>
                  <span className="font-sans text-[11px] text-text-muted/80 block mt-0.5">
                    {story.practiceDuration}
                  </span>
                </div>

                <div
                  className="flex items-center gap-1 text-[11px] font-sans font-medium text-primary px-2.5 py-1 rounded-full bg-primary/10 flex-shrink-0"
                  title="Verified Mindful Member"
                >
                  <CheckCircle className="w-3 h-3 stroke-[2.5]" />
                  <span className="hidden sm:inline">Verified</span>
                </div>
              </div>
            </SurfaceCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
