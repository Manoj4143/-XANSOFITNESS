# STYLE.MD: Xanso Code Architecture & UI Engineering Guidelines (v2.0 - AI Integrated)

As a senior UI/UX engineer, I've designed these guidelines to ensure the Xanso codebase remains scalable, performant, and visually flawless. This document now includes the specific architectural and styling rules for our LangGraph/Vercel AI-powered "Wellness Concierge".

---

## 1. Core Technology Stack
*   **Framework:** Next.js (App Router) + React 18
*   **Language:** TypeScript (Strict Mode Enabled)
*   **Styling:** Tailwind CSS (v3+) + `tailwind-merge` + `clsx`
*   **Animation:** Framer Motion (Complex transitions, layout shifts)
*   **AI Integration:** Vercel AI SDK (`ai/react`) for seamless chat streaming.
*   **Icons:** Lucide React (Clean, modern, customizable)

---

## 2. Design Tokens & Tailwind Configuration

Our aesthetic relies on a deep, immersive dark theme with high-contrast amber accents.

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#09090b', // Deep almost-black
        surface: '#18181b', // Charcoal for cards/chat window
        surfaceHover: '#27272a',
        primary: {
          DEFAULT: '#F59E0B', // Amber/Gold CTA & User Chat Bubbles
          hover: '#D97706',
          light: '#FCD34D',
        },
        text: {
          main: '#FAFAFA',
          muted: '#A1A1AA',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-playfair-display)', 'serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 20px -5px rgba(245, 158, 11, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    }
  }
}
3. The AI Chatbot Visual Signatures (Wellness Concierge)
To keep the chatbot premium, we avoid generic 3rd-party widget looks.

FAB (Floating Action Button): Positioned bottom-right. Must use the shadow-glow-primary and a glassmorphic base.

Chat Window: Expanding from the bottom right (origin-bottom-right). Uses bg-surface with a heavy shadow-glass and a border-white/10.

Chat Bubbles:

User: bg-primary text-background rounded-2xl rounded-tr-sm

AI Agent: bg-background border border-white/5 text-text-main rounded-2xl rounded-tl-sm

Input Area: Transparent background, border-t border-white/10, triggering exclusively on 'Enter' to keep the UI minimal.

4. Animation & Motion Design (Framer Motion)
Global Spring Configuration
JavaScript
const springConfig = {
  type: "spring",
  stiffness: 300,
  damping: 30, // Keeps it smooth and deliberate, not bouncy
  mass: 1
};
Chatbot Expansion Animation
When opening the Wellness Concierge, the window must scale up from the button's location.

JavaScript
export const chatWindowVariants = {
  closed: { opacity: 0, scale: 0.8, y: 20, pointerEvents: "none" },
  open: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    pointerEvents: "auto",
    transition: { type: "spring", damping: 25, stiffness: 250 }
  }
};
// Must apply style={{ transformOrigin: "bottom right" }} to the container.
5. Component Architecture
Folder Structure Update
Plaintext
src/
├── app/               
├── components/
│   ├── ui/            # Buttons, GlassCard
│   ├── layout/        # Navbar, Footer
│   ├── ai/            # NEW: WellnessConcierge, ChatMessage, ChatInput
│   └── features/      
AI Component Blueprint (WellnessConcierge)
Must utilize useChat from Vercel AI SDK to handle state effortlessly.

TypeScript
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from 'ai/react';
import { MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const WellnessConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({ api: '/api/chat' });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            /* Insert chatWindowVariants here */
            className="mb-4 w-[350px] h-[500px] flex flex-col rounded-2xl bg-surface border border-white/10 shadow-glass overflow-hidden"
          >
            {/* Header, Messages map, Input form go here */}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* FAB Trigger */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-primary flex items-center justify-center shadow-glow-primary"
      >
        {isOpen ? <X className="text-background"/> : <MessageCircle className="text-background"/>}
      </motion.button>
    </div>
  );
};