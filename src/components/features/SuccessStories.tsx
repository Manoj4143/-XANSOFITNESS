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

const INDIAN_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote:
      "Working 10+ hours a day in front of a laptop in Bengaluru gave me severe neck and lower back stiffness. Apeksha’s 15-minute desk posture resets and Neelam’s morning 7 AM Hatha batch completely dissolved the pain. The extra 10% discount and direct WhatsApp support made joining a breeze.",
    author: "Aditi Narang",
    role: "Senior Product Designer",
    location: "Bengaluru, Karnataka",
    practiceDuration: "Member for 8 months",
    rating: 5,
    offsetClass: "md:translate-y-0",
  },
  {
    id: "test-2",
    quote:
      "The 7-Day Face Yoga with Muskaan Wahi is phenomenal! My face feels sculptured and my morning puffiness is gone. Practicing live on Zoom from home with authentic Ayush-certified trainers is so much better than crowded gyms.",
    author: "Pooja Hegde",
    role: "Marketing Director",
    location: "Mumbai, Maharashtra",
    practiceDuration: "Member for 5 months",
    rating: 5,
    offsetClass: "md:translate-y-8",
  },
  {
    id: "test-3",
    quote:
      "We enrolled our 40-member tech team for the corporate wellness program. The 15-min afternoon breathwork and desk stretch sessions have noticeably boosted team energy and reduced work burnout. Exceptional Indian instructors!",
    author: "Vikram Malhotra",
    role: "VP Engineering, Fintech",
    location: "Gurugram, Delhi NCR",
    practiceDuration: "Corporate Batch Lead",
    rating: 5,
    offsetClass: "md:-translate-y-4",
  },
  {
    id: "test-4",
    quote:
      "I was skeptical of online classes until I joined Neelam’s live Rishikesh batch. Her attention to detail and live audio posture cues feel just like an in-person yoga shala in Uttarakhand. Truly authentic and grounding.",
    author: "Rohan Deshmukh",
    role: "Architect & Yogi",
    location: "Pune, Maharashtra",
    practiceDuration: "Member for 12 months",
    rating: 5,
    offsetClass: "md:translate-y-4",
  },
  {
    id: "test-5",
    quote:
      "Arjun’s Akhada mobility drills cured my lingering knee and shoulder pain from years of bad gym lifting. Having direct WhatsApp access to the trainers on 91058 37321 for diet questions and schedule adjustments is unmatched service.",
    author: "Siddharth Rao",
    role: "Data Scientist",
    location: "Hyderabad, Telangana",
    practiceDuration: "Member for 6 months",
    rating: 5,
    offsetClass: "md:translate-y-12",
  },
  {
    id: "test-6",
    quote:
      "The Pranayama and sound meditation sessions restored my sleep cycle after months of erratic work hours. The session cost is standard like Xanso but with an extra 10% off and free personalized Indian diet plan, it is the best wellness decision I made.",
    author: "Meera Krishnan",
    role: "Chartered Accountant",
    location: "Chennai, Tamil Nadu",
    practiceDuration: "Member for 9 months",
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
  stories = INDIAN_TESTIMONIALS,
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
          INDIAN WELLNESS COMMUNITY STORIES
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Stories of Transformation &{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Vitality
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          Real feedback from practitioners across India cultivating daily spinal ease, stress relief, and holistic energy.
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
                  className="flex items-center gap-1 text-[11px] font-sans font-medium text-emerald-700 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 flex-shrink-0"
                  title="Verified Member"
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
