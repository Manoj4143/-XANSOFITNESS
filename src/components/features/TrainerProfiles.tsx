"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { Star, Award, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
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
  accentBg: string;
  bio: string;
  image: string;
  whatsappMessage: string;
}

const INDIAN_TRAINERS: Trainer[] = [
  {
    id: "trainer-neelam",
    name: "Neelam Rana",
    role: "Lead Rishikesh Yoga Master",
    qualifications: "Ministry of Ayush & RYT-500 Certified",
    specialties: "Hatha, Ashtanga & Pranic Alignment",
    rating: 4.99,
    reviewsCount: 480,
    accentBg: "bg-[#F3E2DA] text-primary",
    bio: "6+ years teaching authentic classical yoga in Rishikesh. Specializes in traditional postures, breath synchronization, and holistic spinal alignment.",
    image: "/images/trainer-neelam.jpg",
    whatsappMessage: "Hi Neelam Rana! I want to book a 1:1 yoga session with 10% extra discount.",
  },
  {
    id: "trainer-muskaan",
    name: "Muskaan Wahi",
    role: "International & Ayush Yoga Coach",
    qualifications: "Ayush Mantralaya & Face Yoga Master",
    specialties: "Face Yoga, Vinyasa & Core Mobility",
    rating: 4.98,
    reviewsCount: 395,
    accentBg: "bg-[#EAE4DC] text-[#605B54]",
    bio: "Certified by the Ministry of Ayush. Pioneer in combining signature 7-day Face Yoga rejuvenation with dynamic flow sequences for radiant vitality.",
    image: "/images/trainer-muskaan.jpg",
    whatsappMessage: "Hi Muskaan Wahi! I want to enroll in the Face Yoga and Live Batch with 10% discount.",
  },
  {
    id: "trainer-apeksha",
    name: "Apeksha Chauhan",
    role: "Holistic Posture & Breathwork Guide",
    qualifications: "Ayush Mantralaya Certified",
    specialties: "Desk Posture Correction, Pranayama",
    rating: 4.97,
    reviewsCount: 360,
    accentBg: "bg-[#F6EDE8] text-primary",
    bio: "Expert in restorative somatic therapy and IT desk ergonomics. Blends ancient Pranayama (Anulom-Vilom, Kapalbhati) to release chronic neck & back tension.",
    image: "/images/trainer-apeksha.jpg",
    whatsappMessage: "Hi Apeksha! I want to consult for desk posture correction & breathwork.",
  },
  {
    id: "trainer-navya",
    name: "Navya Gupta",
    role: "National Yoga Champion & Instructor",
    qualifications: "National Level & Ayush Certified",
    specialties: "Deep Flexibility, Spine Mobility",
    rating: 4.96,
    reviewsCount: 310,
    accentBg: "bg-[#EFECE8] text-[#842503]",
    bio: "National-level yoga practitioner and gold medalist. Specializes in structural flexibility, beginner-to-advanced progression, and core stabilization.",
    image: "/images/trainer-navya.jpg",
    whatsappMessage: "Hi Navya! I would like to join your flexibility and morning yoga batch.",
  },
  {
    id: "trainer-arjun",
    name: "Arjun Rathore",
    role: "Functional Strength & Movement Coach",
    qualifications: "CSCS & Indian Akhada Movement Specialist",
    specialties: "Functional Strength, Joint Longevity",
    rating: 4.98,
    reviewsCount: 425,
    accentBg: "bg-[#E8F0EA] text-[#2D5A3A]",
    bio: "Integrates traditional Indian Akhada bodyweight strength, gada/kettlebell mobility, and modern functional fitness for sustainable joint longevity.",
    image: "/images/trainer-arjun.jpg",
    whatsappMessage: "Hi Arjun! I'm interested in functional strength and 1:1 personal training.",
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
  trainers = INDIAN_TRAINERS,
}: {
  trainers?: Trainer[];
}) {
  const WHATSAPP_NUMBER = "919105837321";

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
          CERTIFIED INDIAN MASTERS & GUIDES
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Meet Your Certified{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Indian Trainers
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          Trained in Rishikesh and certified by the Ministry of Ayush. Our dedicated instructors bring authentic lineage, anatomical precision, and direct 1:1 WhatsApp mentorship.
        </p>
      </motion.div>

      {/* Trainers Grid with Overlapping Avatars */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pt-10"
      >
        {trainers.map((trainer) => {
          const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            trainer.whatsappMessage
          )}`;

          return (
            <motion.div key={trainer.id} variants={fadeInUp} className="relative pt-12">
              <SurfaceCard
                hoverEffect
                className="relative p-5 pt-16 text-center flex flex-col justify-between h-full border border-border/80 shadow-soft hover:shadow-card transition-all"
              >
                {/* Overlapping Circular Avatar */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  <div className="relative group">
                    <div
                      className={`w-24 h-24 rounded-full border-4 border-surface shadow-card flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 ${trainer.accentBg}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Verified Ayush/Lineage Badge */}
                    <div
                      className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs"
                      title="Ministry of Ayush / Certified Master"
                    >
                      <Award className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Bio & Details */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-display text-lg font-medium text-text-main">
                      {trainer.name}
                    </h3>
                    <p className="font-sans text-[11px] text-primary font-semibold mt-0.5">
                      {trainer.role}
                    </p>
                  </div>

                  {/* Rating & Qualification Pills */}
                  <div className="flex flex-wrap items-center justify-center gap-1.5">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surfaceVariant text-[11px] font-sans text-text-main">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span className="font-medium">{trainer.rating}</span>
                      <span className="text-text-muted">({trainer.reviewsCount})</span>
                    </div>

                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-[10px] font-sans font-medium text-emerald-800 border border-emerald-200">
                      Ayush Certified
                    </span>
                  </div>

                  <p className="font-sans text-xs text-text-muted leading-relaxed line-clamp-3">
                    {trainer.bio}
                  </p>
                </div>

                {/* Bottom Specialty & WhatsApp CTA */}
                <div className="pt-4 mt-4 border-t border-border/60 space-y-3">
                  <div className="text-[10px] font-sans text-text-muted uppercase tracking-wider text-left">
                    Specialty: <span className="text-text-main font-medium normal-case block mt-0.5">{trainer.specialties}</span>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-full text-xs font-sans font-medium bg-emerald-600 hover:bg-emerald-700 text-white shadow-soft transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Trainer</span>
                  </a>
                </div>
              </SurfaceCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
