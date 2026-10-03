"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { Check, Sparkles, MessageCircle, Tag, Clock, Calendar } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { Button } from "@/components/ui/Button";

interface PlanTier {
  id: string;
  name: string;
  badge?: string;
  originalPrice: number;
  discountedPrice: number;
  savings: number;
  duration: string;
  batches: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const LIVE_GROUP_PLANS: PlanTier[] = [
  {
    id: "plan-2-months",
    name: "2 Months Plan",
    badge: "Beginner Choice",
    originalPrice: 1999,
    discountedPrice: 1799,
    savings: 200,
    duration: "2 Months Unlimited",
    batches: "Morning (6 AM, 7 AM, 8 AM) & Evening (5:30 PM, 6:30 PM)",
    description: "Ideal foundation for beginners looking to build posture, flexibility, and daily mindfulness.",
    features: [
      "Daily Live Interactive Sessions via Zoom",
      "Bonus: 7-Day Signature Face Yoga Access",
      "Free Customized Indian Diet & Nutrition Plan",
      "Female & Mixed Batch Flexibility",
      "Direct Trainer WhatsApp Support (+91 91058 37321)",
      "Posture & Alignment Corrections by Ayush Trainers",
    ],
    highlighted: false,
  },
  {
    id: "plan-3-months",
    name: "3 Months Plan",
    badge: "Most Popular",
    originalPrice: 2899,
    discountedPrice: 2609,
    savings: 290,
    duration: "3 Months Unlimited",
    batches: "Morning & Evening Live Batches + Recordings",
    description: "Our most chosen plan for lasting habit formation, weight management, and spinal ease.",
    features: [
      "Everything in the 2 Months Plan",
      "Full On-Demand Recording Vault Access",
      "Dedicated 15-Min IT Desk Posture Reset Series",
      "Pranayama Masterclass (Kapalbhati & Anulom Vilom)",
      "Weekly Trainer Progress & Milestone Reviews",
      "Exclusive Weekend Meditation Satsang",
    ],
    highlighted: true,
  },
  {
    id: "plan-6-months",
    name: "6 Months Plan",
    badge: "Best Value",
    originalPrice: 4899,
    discountedPrice: 4409,
    savings: 490,
    duration: "6 Months Unlimited",
    batches: "All Batches + Priority Batch Switching",
    description: "Comprehensive holistic lifestyle immersion for total mind, body, and breath transformation.",
    features: [
      "Everything in the 3 Months Plan",
      "Unlimited Access to All Live Batches for 180 Days",
      "Personalized Ayurvedic Lifestyle Consultation",
      "Priority 1:1 Q&A with Senior Rishikesh Master",
      "Family Guest Passes (2 Complimentary Session Passes)",
      "Certificate of Holistic Yoga Practice Completion",
    ],
    highlighted: false,
  },
];

const PERSONAL_1ON1_PLANS: PlanTier[] = [
  {
    id: "1on1-trial",
    name: "1:1 Single Consultation & Trial",
    badge: "Discovery",
    originalPrice: 999,
    discountedPrice: 899,
    savings: 100,
    duration: "1 Private 60-Min Session",
    batches: "Personalized Schedule (Flexible IST Timings)",
    description: "One-on-one postural assessment, biomechanical evaluation, and custom practice blueprint.",
    features: [
      "60-Min Private 1:1 Video Session on Zoom",
      "Spine, Hip & Shoulder Mobility Evaluation",
      "Customized 14-Day Home Practice Regimen",
      "Personalized Sattvic / High-Protein Diet Advice",
      "Direct WhatsApp Follow-up with Your Coach",
    ],
    highlighted: false,
  },
  {
    id: "1on1-transformation",
    name: "1:1 Monthly Transformation",
    badge: "Personal Mentor",
    originalPrice: 4999,
    discountedPrice: 4499,
    savings: 500,
    duration: "12 Private Sessions / Month",
    batches: "Dedicated Coach (Your Preferred Timings)",
    description: "High-touch personalized guidance with an Ayush certified master tailored to your specific fitness goals.",
    features: [
      "12 Private 1:1 Live Sessions per Month (3x / week)",
      "Complete Tailored Strength & Asana Blueprint",
      "Custom Indian Diet Plan by Qualified Nutritionist",
      "Daily WhatsApp Check-ins & Form Reviews",
      "Free Unlimited Access to All Group Live Batches",
      "Weekly Video Biometric & Posture Tracking",
    ],
    highlighted: true,
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

export function PricingArchitecture() {
  const [activeTab, setActiveTab] = React.useState<"group" | "personal">("group");
  const WHATSAPP_NUMBER = "919105837321";

  const tiers = activeTab === "group" ? LIVE_GROUP_PLANS : PERSONAL_1ON1_PLANS;

  return (
    <section id="pricing" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Header & Toggle */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center max-w-3xl mx-auto mb-14 space-y-4"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-sans font-bold text-amber-600 uppercase tracking-widest">
          <Tag className="w-3.5 h-3.5" />
          <span>Extra 10% Discount on Xanso Rates</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Authentic Yoga & Fitness{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Pricing
          </span>
        </h2>

        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          Standard session costs matching Xanso, with an exclusive{" "}
          <strong className="text-emerald-700 font-semibold">additional 10% discount</strong>{" "}
          applied on every membership. Book instantly on WhatsApp with our trainers.
        </p>

        {/* Tab Toggle: Group Batches vs 1:1 Personal */}
        <div className="pt-4 flex items-center justify-center">
          <div className="bg-surfaceVariant p-1 rounded-full border border-border inline-flex items-center">
            <button
              type="button"
              onClick={() => setActiveTab("group")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-200 ${
                activeTab === "group"
                  ? "bg-surface text-text-main shadow-soft font-semibold"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              Online Live Yoga Batches (Zoom)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("personal")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-200 inline-flex items-center gap-1.5 ${
                activeTab === "personal"
                  ? "bg-surface text-text-main shadow-soft font-semibold"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              <span>1:1 Personal Transformation</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white">
                10% Off
              </span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Pricing Cards Grid */}
      <motion.div
        key={activeTab}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
        className={`grid grid-cols-1 ${
          activeTab === "group" ? "lg:grid-cols-3" : "max-w-4xl mx-auto md:grid-cols-2"
        } gap-8 items-stretch`}
      >
        {tiers.map((tier) => {
          const waMessage = `Hi! I would like to book the "${tier.name}" with the extra 10% discount (₹${tier.discountedPrice} instead of ₹${tier.originalPrice}). Please share the batch details and payment link.`;
          const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            waMessage
          )}`;

          return (
            <motion.div key={tier.id} variants={fadeInUp} className="flex">
              <SurfaceCard
                hoverEffect
                className={`relative p-7 sm:p-8 flex flex-col justify-between w-full h-full border ${
                  tier.highlighted
                    ? "border-emerald-600/80 shadow-elevated bg-surface ring-2 ring-emerald-600/20"
                    : "border-border/80 shadow-soft bg-surface"
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-xs font-sans font-bold tracking-wider uppercase shadow-soft ${
                        tier.highlighted
                          ? "bg-emerald-600 text-white"
                          : "bg-primary text-white"
                      }`}
                    >
                      <Sparkles className="w-3 h-3" />
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Tier Info & Price */}
                <div className="space-y-5">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-text-main">
                      {tier.name}
                    </h3>
                    <p className="font-sans text-xs text-text-muted mt-1 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Price Banner with 10% Extra Discount */}
                  <div className="p-4 rounded-2xl bg-surfaceVariant/80 border border-border/60">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl sm:text-4xl font-bold text-text-main">
                        ₹{tier.discountedPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="text-base text-text-muted line-through font-sans">
                        ₹{tier.originalPrice.toLocaleString("en-IN")}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        Extra 10% OFF
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-emerald-700 font-sans font-semibold mt-1">
                      <span>You Save ₹{tier.savings.toLocaleString("en-IN")}</span>
                      <span className="text-text-muted font-normal">
                        ({tier.duration})
                      </span>
                    </div>

                    {/* Batch times */}
                    <div className="mt-3 pt-2 border-t border-border/50 flex items-center gap-2 text-[11px] text-text-muted">
                      <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span className="truncate">{tier.batches}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-1">
                    <span className="text-xs uppercase tracking-wider font-semibold text-text-main block">
                      Plan Inclusions:
                    </span>
                    <ul className="space-y-2.5">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-text-muted"
                        >
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0 flex items-center justify-center mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* WhatsApp Direct Action CTA */}
                <div className="pt-6 mt-6 border-t border-border/60 space-y-2.5">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full text-sm font-sans font-semibold shadow-soft transition-all duration-200 ${
                      tier.highlighted
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-elevated"
                        : "bg-surfaceVariant hover:bg-emerald-50 text-text-main hover:text-emerald-800 border border-border"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Book on WhatsApp & Save 10%</span>
                  </a>

                  <p className="text-[11px] text-center text-text-muted">
                    Quick confirmation on <strong>+91 91058 37321</strong>
                  </p>
                </div>
              </SurfaceCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom Guarantee Banner */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="mt-14 p-6 rounded-3xl bg-surface border border-border text-center max-w-3xl mx-auto shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <div className="text-left space-y-1">
          <h4 className="font-display text-base font-semibold text-text-main">
            Need a Customized Corporate or Family Plan?
          </h4>
          <p className="font-sans text-xs text-text-muted">
            We offer custom session slots, corporate posture workshops, and flexible batch timings.
          </p>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Hi! I need information about corporate wellness or customized batches."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-sans font-semibold whitespace-nowrap shadow-soft transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>
      </motion.div>
    </section>
  );
}
