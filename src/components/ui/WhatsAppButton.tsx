"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Sparkles, X } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export function WhatsAppButton({
  phoneNumber = "919105837321",
  defaultMessage = "Hi Xanso Fitness! I want to claim the extra 10% discount on your yoga & fitness plans.",
}: WhatsAppButtonProps) {
  const [tooltipVisible, setTooltipVisible] = React.useState(true);

  // Auto-hide tooltip after 10s if not interacted
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTooltipVisible(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3 select-none">
      {/* Floating Action Button */}
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-elevated flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-emerald-500/30 transition-colors"
        aria-label="Chat on WhatsApp with Xanso Trainer (+91 91058 37321)"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white stroke-emerald-600 group-hover:scale-110 transition-transform" />

        {/* Small 10% discount badge */}
        <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-white font-sans text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-xs">
          -10%
        </span>
      </motion.a>

      {/* Floating Prompt Bubble */}
      <AnimatePresence>
        {tooltipVisible && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.95 }}
            className="hidden sm:flex items-center gap-3 bg-surface/95 backdrop-blur-md border border-emerald-200/80 px-4 py-2.5 rounded-2xl shadow-elevated text-xs font-sans text-text-main"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-text-main">
                  Chat on WhatsApp
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded-full">
                  Instant
                </span>
              </div>
              <p className="text-[11px] text-text-muted">
                +91 91058 37321 &bull; Claim 10% Extra Off
              </p>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setTooltipVisible(false);
              }}
              aria-label="Dismiss message"
              className="text-text-muted hover:text-text-main p-1 rounded-full hover:bg-surfaceVariant"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
