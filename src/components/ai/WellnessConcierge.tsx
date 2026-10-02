"use client";

import * as React from "react";
import { useChat } from "@ai-sdk/react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Wind, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

function extractText(message: any): string {
  if (typeof message.content === "string" && message.content) {
    return message.content;
  }
  if (Array.isArray(message.parts)) {
    return message.parts
      .filter((p: any) => p.type === "text")
      .map((p: any) => p.text)
      .join("");
  }
  return "";
}

const SUGGESTED_PROMPTS = [
  "Relieve desk posture tension",
  "Recommend a morning flow",
  "Calm breathwork for sleep",
];

export function WellnessConcierge() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    // Defaults to POST /api/chat
  });

  const isTyping = status === "streaming" || status === "submitted";

  // Auto-scroll to bottom of conversation
  React.useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;
    sendMessage({ text: trimmed });
    setInput("");
  };

  const handlePromptClick = (promptText: string) => {
    if (isTyping) return;
    sendMessage({ text: promptText });
  };

  return (
    <>
      {/* ========================================================
          1. THE TRIGGER (Fixed Bottom-Right FAB)
      ======================================================== */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          aria-label={isOpen ? "Close Concierge" : "Open Wellness Concierge"}
          className="w-14 h-14 rounded-full bg-primary text-white shadow-soft flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-primary/20 select-none cursor-pointer"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 stroke-[2.25]" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6 stroke-[2]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ========================================================
          2. THE WINDOW (Expanding Floating Panel)
      ======================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[540px] max-h-[80vh] origin-bottom-right bg-surface rounded-2xl shadow-soft border border-surfaceVariant flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-surfaceVariant/60 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  {/* Subtle live indicator dot */}
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-surface" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-text-main leading-none">
                    Sanctuary Concierge
                  </h3>
                  <p className="font-sans text-xs text-text-muted mt-1">
                    AI Wellness & Asana Guide
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-text-muted hover:text-text-main rounded-full hover:bg-surface transition-colors"
                aria-label="Minimize"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-sm">
              {/* Default Welcome Message from the Guide */}
              <div className="flex flex-col items-start space-y-1">
                <span className="text-[11px] font-sans font-medium text-text-muted pl-1">
                  Xanso Guide
                </span>
                <div className="max-w-[85%] bg-surfaceVariant text-text-main rounded-2xl rounded-tl-sm px-4 py-3 leading-relaxed">
                  Namaste. Welcome to your practice. What does your body, spine,
                  or breath call for today?
                </div>
              </div>

              {/* Dynamic Conversation Stream */}
              {messages.map((m) => {
                const isUser = m.role === "user";
                const textContent = extractText(m);

                if (!textContent) return null;

                return (
                  <div
                    key={m.id}
                    className={cn(
                      "flex flex-col space-y-1",
                      isUser ? "items-end" : "items-start"
                    )}
                  >
                    <span className="text-[11px] font-sans font-medium text-text-muted px-1">
                      {isUser ? "You" : "Xanso Guide"}
                    </span>
                    <div
                      className={cn(
                        "max-w-[85%] px-4 py-3 leading-relaxed whitespace-pre-wrap",
                        isUser
                          ? "bg-primary text-white rounded-2xl rounded-tr-sm shadow-xs"
                          : "bg-surfaceVariant text-text-main rounded-2xl rounded-tl-sm border border-border/40"
                      )}
                    >
                      {textContent}
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex flex-col items-start space-y-1">
                  <span className="text-[11px] font-sans font-medium text-text-muted pl-1">
                    Xanso Guide
                  </span>
                  <div className="bg-surfaceVariant text-text-main rounded-2xl rounded-tl-sm px-4 py-3 border border-border/40 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Chips (Visible when message count is low) */}
            {messages.length <= 1 && (
              <div className="px-4 py-2 border-t border-border/40 bg-surface flex flex-wrap gap-1.5">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handlePromptClick(prompt)}
                    className="text-[11px] font-sans px-3 py-1 rounded-full bg-surfaceVariant text-text-main hover:bg-primary/10 hover:text-primary transition-colors border border-border/60"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <div className="p-3 bg-surface border-t border-border flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask about flows, postures, or breath..."
                className="flex-1 bg-transparent px-3 py-2 text-sm text-text-main placeholder:text-text-muted focus:outline-none"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                aria-label="Send Message"
                className="p-2 rounded-full bg-primary text-white disabled:opacity-40 hover:bg-primary-hover transition-colors shadow-xs"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
