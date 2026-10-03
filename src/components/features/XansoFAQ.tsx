"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

interface FAQItem {
  question: string;
  answer: string;
  category: "Classes" | "Pricing & Discount" | "Diet & Wellness";
}

const FAQS: FAQItem[] = [
  {
    category: "Classes",
    question: "Are the classes live or pre-recorded videos?",
    answer:
      "All Xanso classes are 100% LIVE interactive sessions conducted via Zoom. Your instructor actively watches your practice, provides real-time verbal form corrections, and ensures safe alignment—giving you the full benefit of an in-person yoga shala from home.",
  },
  {
    category: "Classes",
    question: "What are the live batch timings, and can I switch batches?",
    answer:
      "We operate 6 batches daily (Indian Standard Time): Morning at 6:00 AM, 7:00 AM, and 8:00 AM IST; Evening at 5:30 PM, 6:30 PM, and 7:30 PM IST. You have complete flexibility to attend any morning or evening slot if your work schedule changes.",
  },
  {
    category: "Classes",
    question: "Do you offer dedicated female-only batches?",
    answer:
      "Yes! We have specialized female-only batches in both morning and evening slots led by our senior certified female instructors (Neelam Rana, Muskaan Wahi, and Apeksha Chauhan), ensuring a safe, supportive, and private environment.",
  },
  {
    category: "Pricing & Discount",
    question: "How does the extra 10% discount work?",
    answer:
      "Our session costs match the official Xanso rates (2 Months: ₹1,999, 3 Months: ₹2,899, 6 Months: ₹4,899). When you book directly through this portal or our official WhatsApp (+91 91058 37321), an exclusive 10% extra discount is applied automatically: 2 Months at ₹1,799, 3 Months at ₹2,609, and 6 Months at ₹4,409.",
  },
  {
    category: "Diet & Wellness",
    question: "What is included in the Free Customized Diet Plan?",
    answer:
      "Every member receives a 1-on-1 diet assessment and a custom Indian meal plan formulated by qualified nutritionists. It covers balanced macronutrients, traditional Ayurvedic herbs, gut health protocols, and foods for joint flexibility and sustained stamina.",
  },
  {
    category: "Diet & Wellness",
    question: "What is the 7-Day Face Yoga bonus?",
    answer:
      "Face Yoga is a natural exercise routine for facial muscles. Certified instructor Muskaan Wahi guides you through acupressure points, lymphatic drainage, and toning exercises to eliminate morning puffiness, release jaw clenching, and restore skin glow.",
  },
  {
    category: "Classes",
    question: "I am a complete beginner with stiff joints. Can I join?",
    answer:
      "Absolutely. More than 60% of our members started as complete beginners. Our instructors demonstrate regressions, prop usage (pillows, belts, blocks), and gentle variations for every posture so you progress comfortably without any risk of injury.",
  },
  {
    category: "Pricing & Discount",
    question: "What equipment do I need to get started?",
    answer:
      "All you need is a yoga mat, comfortable stretchable clothing, a water bottle, and a phone, tablet, or laptop with the free Zoom app. You will receive your personal meeting link and batch guide instantly on WhatsApp.",
  },
];

export function XansoFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const WHATSAPP_NUMBER = "919105837321";

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14 space-y-4">
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-bold text-primary px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
          FREQUENTLY ASKED QUESTIONS
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-text-main">
          Everything You Need to{" "}
          <span className="font-accent text-primary text-4xl sm:text-5xl md:text-6xl ml-1">
            Know
          </span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
          Clear answers about live Zoom batches, female sessions, trainer credentials, and claiming your 10% discount.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 font-sans">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <SurfaceCard
              key={faq.question}
              className="p-0 overflow-hidden border border-border/80 shadow-soft transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-surfaceVariant/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-surfaceVariant text-text-muted">
                    {faq.category}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-medium text-text-main">
                    {faq.question}
                  </h3>
                </div>

                <div
                  className={`w-7 h-7 rounded-full bg-surfaceVariant flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-primary/10 text-primary" : "text-text-muted"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 sm:p-6 pt-0 border-t border-border/40 text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SurfaceCard>
          );
        })}
      </div>

      {/* WhatsApp Help CTA Box */}
      <div className="mt-12 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="font-display text-base font-semibold text-emerald-900">
            Have a specific health condition or timing question?
          </h4>
          <p className="font-sans text-xs text-emerald-700 mt-0.5">
            Talk directly with our team on WhatsApp: <strong>+91 91058 37321</strong>
          </p>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Hi! I have a question regarding batch suitability and the 10% discount."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-semibold whitespace-nowrap shadow-soft transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
