# DECISION.MD: Antigravity Architectural Decision Log

**Project:** Xanso Digital Fitness & Wellness Platform  
**Owner:** Antigravity Agent & Senior Engineering Team  
**Purpose:** This document acts as an Architectural Decision Record (ADR). The Antigravity agent must append a new entry here whenever it makes a significant structural, technological, or UI/UX choice during development that deviates from or expands upon the core documentation.

---

## How to Log a Decision (Template)

When the Antigravity agent executes a task and makes a localized architectural or design decision, it must output an update to this file using the following format:

```markdown
### ADR-[Number]: [Short Title of Decision]
*   **Date:** YYYY-MM-DD
*   **Context:** [What is the problem or feature being addressed?]
*   **Decision:** [What exact choice was made?]
*   **Rationale:** [Why was this choice made over the alternatives?]
*   **Consequences:** [What are the trade-offs? e.g., "Increases bundle size by 12kb but saves 4 hours of dev time."]
```

---

## Architectural Decision Records

### ADR-007: UI Aesthetic Pivot to Light/Organic
*   **Date:** 2026-10-02
*   **Context:** The original requirement called for a dark, glassmorphic theme. However, upon pivoting to a strict Yoga & Mindfulness platform, this aesthetic felt too aggressive and tech-heavy.
*   **Decision:** Shifted to a light, warm, organic design system (Background: `#F9F8F6`, Surface: `#FFFFFF`, Primary: `#D95E39`).
*   **Rationale:** Soft cream, terracotta accents, and solid white cards evoke calmness, approachability, and premium wellness, aligning perfectly with a yoga studio brand.
*   **Consequences:** Required abandoning backdrop-blur utilities in favor of subtle box-shadows (`shadow-soft`).

### ADR-008: Tri-Font Typography System
*   **Date:** 2026-10-02
*   **Context:** The platform needed to feel sophisticated yet approachable, avoiding generic corporate typography.
*   **Decision:** Implemented a 3-tier font system: 'Inter' (sans-serif) for UI elements, 'Playfair Display' (serif) for main headings, and 'Caveat' (script) for single-word emotional accents.
*   **Rationale:** Mixing serif and script in hero sections creates a high-end, editorial look often seen in luxury lifestyle brands.
*   **Consequences:** Increases initial font load times slightly, requiring Next/Font optimization to prevent layout shift.

### ADR-009: Organic Shape Language & UI Primitives
*   **Date:** 2026-10-02
*   **Context:** The UI components needed to reflect the "mindful movement" of yoga. Sharp edges feel rigid.
*   **Decision:** Enforced a strict rule: All actionable buttons must be pill-shaped (`rounded-full`), all cards must have large radii (`rounded-2xl`), and hero background graphics must use organic circles.
*   **Rationale:** Circular and rounded geometries psychologically communicate safety, softness, and continuous flow.
*   **Consequences:** Limits the use of standard square UI patterns, requiring customized styling across forms and cards.

### ADR-010: Simulated Streaming Protocol for Vercel AI SDK Integration
*   **Date:** 2026-10-02
*   **Context:** The Phase 5 AI Wellness Concierge requires an active API route simulating the LangGraph agent while adhering strictly to the `AGENT.MD` "Xanso Yoga Guide" persona.
*   **Decision:** Constructed `src/app/api/chat/route.ts` using standard Web Streams (`ReadableStream`) compatible with Vercel AI SDK streaming protocols. Configured realistic typing delays and context-aware responses (handling greetings, class searches, injuries, and trial recommendations).
*   **Rationale:** Enables immediate frontend verification of stream rendering, typing states, and error handling without requiring live OpenAI or LangGraph server keys at scaffolding time.
*   **Consequences:** Uses deterministic simulation logic that must be replaced by the live LangGraph agent node pipeline in production.

### ADR-011: Fixed Floating Concierge Window with Bi-directional Morphism
*   **Date:** 2026-10-02
*   **Context:** The AI Concierge needs to be globally available across the sanctuary experience without distracting the user or breaking the warm organic design system.
*   **Decision:** Built `src/components/ai/WellnessConcierge.tsx` with a fixed bottom-right Floating Action Button (`bg-primary shadow-soft`) that smoothly morphs between a `MessageCircle` and `X` icon. The chat window expands from `origin-bottom-right` using `<SurfaceCard>`-style styling (`bg-surface rounded-2xl shadow-soft border border-surfaceVariant`). Chat bubbles adopt asymmetric organic tails (`rounded-tr-sm` for user terracotta, `rounded-tl-sm` for AI beige).
*   **Rationale:** High spatial predictability and tactile micro-animations reinforce the calm, responsive atmosphere of the sanctuary.
*   **Consequences:** Requires responsive max-height and viewport boundary clamps on smaller mobile screens (`max-w-[calc(100vw-2rem)]`).

### ADR-012: Minimalist Member Dashboard Architecture with Holistic Streak Gamification
*   **Date:** 2026-10-02
*   **Context:** The platform requires an authenticated member view to track classes, programs, and daily commitments while avoiding aggressive, hyper-metricized fitness tropes.
*   **Decision:** Implemented `src/app/(dashboard)/layout.tsx` and `src/app/(dashboard)/dashboard/page.tsx` (and `src/app/(dashboard)/page.tsx`) with a quiet sidebar navigation (`bg-background` and `bg-surface` active states). Sections include "Upcoming Yoga Classes", "Current Program", and an organic "Streak Tracker" celebrating 7-Day and 30-Day mindfulness badges.
*   **Rationale:** Celebrates daily contemplative consistency and nervous system ease instead of high-stress competitive calorie/heart rate metrics.
*   **Consequences:** Introduces nested routing under Route Groups `(dashboard)` requiring layout encapsulation.

### ADR-013: Supabase Schema Design with Strict Row Level Security (RLS)
*   **Date:** 2026-10-02
*   **Context:** User profiles, programs, sessions, and AI conversations require relational storage with granular access control enforcing zero unauthorized data leakage.
*   **Decision:** Authored `supabase/schema.sql` defining `users`, `profiles`, `programs`, `sessions_log`, and `ai_chat_history`. Enabled RLS on all tables with explicit policies: `profiles` and `ai_chat_history` restrict read/write to `auth.uid() = user_id`, while `programs` allows public `SELECT` and restricts writes to admins. Added automated `handle_new_user()` trigger for synchronization with `auth.users`.
*   **Rationale:** Enforces zero-trust data boundaries directly at the database engine level per `SECURITY.MD`.
*   **Consequences:** Requires foreign keys linking to Supabase's `auth.users(id)`.

### ADR-014: Server Actions for Gamified Streak & Badge Progression
*   **Date:** 2026-10-02
*   **Context:** When members complete an asana or pranayama session, their streak count and milestone badges must update reliably without exposing client-side tampering.
*   **Decision:** Implemented Next.js Server Action `logSessionCompletion(userId, programId)` in `src/app/actions/progress.ts`. Executes atomic increment of `streak_count`, writes session timestamp, checks threshold conditions (7-day "Flow Beacon", 14-day "Pranayama Adept", 30-day "Lotus Master"), and returns unlocked achievements.
*   **Rationale:** Keeps business progression logic encapsulated on the server while preserving responsive UI updates.
*   **Consequences:** Relies on server-side invocation with authenticated session cookies.

### ADR-015: Modular LangGraph State Machine Architecture
*   **Date:** 2026-10-02
*   **Context:** The AI Wellness Concierge requires stateful transitions across intent classification, assessment question loops, and knowledge retrieval.
*   **Decision:** Created `src/agent/graph.ts` structuring an executable `StateGraph` around the `AgentState` schema defined in `AGENT.MD` (`messages`, `intent`, `assessmentProgress`, `recommendedProgramId`). Scaffolded `ClassifierNode`, `AssessmentNode`, and `RAG_Node` with clear execution edges and conditional routing.
*   **Rationale:** Decouples LLM prompt routing and tool invocation from Next.js HTTP request lifecycles, enabling testable graph cycles.
*   **Consequences:** Introduces graph state schemas that must be preserved across user turns.

### ADR-016: Vitest & React Testing Library for Fast Unit/Component Testing
*   **Date:** 2026-10-02
*   **Context:** Need a fast, ESM-native testing harness compatible with Next.js App Router, TypeScript aliases (`@/*`), and React 19 component trees.
*   **Decision:** Selected Vitest over Jest along with `@testing-library/react` and `jsdom`.
*   **Rationale:** Vitest reuses Vite's fast transformation engine, supports native ESM without complex Babel or `ts-jest` configurations, executes in sub-seconds, and shares test syntax with Jest/Testing Library.
*   **Consequences:** Requires custom path resolution in `vitest.config.ts` matching `tsconfig.json`.

### ADR-017: Playwright for End-to-End (E2E) Sanctuary Journey Simulation
*   **Date:** 2026-10-02
*   **Context:** E2E validation requires verifying real browser behaviors: scrolling animations, floating FAB triggers, expanding AI chat panels, and dynamic monthly/annual billing recalculations.
*   **Decision:** Implemented Playwright (`@playwright/test`) for headless and headed cross-browser test automation.
*   **Rationale:** Playwright provides auto-waiting, resilient element locators, robust network interception, and video/trace capture capabilities without flaky race conditions.
*   **Consequences:** Requires separate test execution scripts (`npx playwright test`) and a running dev/preview server.

### ADR-018: Full-Spectrum Interactive Navigation, Route Coverage, and Click Reliability
*   **Date:** 2026-10-02
*   **Context:** Buttons across the platform previously suffered from nested `<button>` inside `<a>` anti-patterns, missing dashboard routes (`/dashboard/schedule`, `/dashboard/programs`, `/dashboard/biometrics`, `/dashboard/settings`), non-interactive category cards, and missing anchor targets (`#corporate`, `#contact`).
*   **Decision:**
    1. Refactored `src/components/ui/Button.tsx` to handle `href` directly via `useRouter()` navigation and smooth anchor scrolling, eliminating invalid nested interactive HTML elements.
    2. Implemented all missing authenticated sub-routes:
       - `/dashboard/schedule`: Interactive date filter, discipline switcher, class reservation toggles, and live studio streaming modal.
       - `/dashboard/programs`: Active journeys vs library tabs, progress indicators, class previews, and series enrollment.
       - `/dashboard/biometrics`: Interactive 4-4-4-4 somatic box breathing pacer with dynamic pulsing animation, HRV tracking, and weekly practice chart.
       - `/dashboard/settings`: Practitioner profile editor, notification preferences, and membership management with toast alerts.
    3. Added `#corporate` and `#contact` sections to the homepage with interactive briefing and message submission modals.
    4. Wired all Navbar, Hero, Category card, and Footer links to valid destinations.
*   **Rationale:** Guarantees that every single clickable element on the platform provides instant visual and functional feedback with zero dead-ends or 404 errors.
*   **Consequences:** Complete client-side and server-rendered route coverage across marketing and member spaces.

