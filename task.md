### 2. Updated `TASK.MD`

```markdown
# TASK.MD: Xanso Platform - Antigravity Execution Plan (v2.0)

## 1. Project Parameters & Constraints
**Project:** Xanso Digital Fitness & Wellness Platform
**Role:** Senior UI/UX Design Engineer
**Styling Directive:** Strictly adhere to `STYLE.MD`. Utilize dark-theme palette (black/charcoal/amber), glassmorphism, and Framer Motion spring physics.
**Execution Rule:** Build modular, reusable UI primitives first. Wait for review after generating the code for each phase.

---

## Phase 1: Architecture & Design System Setup
- [ ] **Task 1.1: Initialize Next.js & Dependencies**
  - Set up Next.js (App Router), TypeScript, and Tailwind CSS.
  - Install core UI: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
  - Install AI SDK: `npm i ai`.
- [ ] **Task 1.2: Configure Tailwind & Globals**
  - Inject custom theme configuration from `STYLE.MD`.
  - Set global CSS to enforce dark background and `text-main`.
- [ ] **Task 1.3: Utility Setup**
  - Create the `cn()` utility function in `src/lib/utils.ts`.

## Phase 2: UI Primitives (Component Library)
- [ ] **Task 2.1: Typography & Buttons**
  - Create `<Button />` (Primary, Secondary, Ghost variants) with Framer Motion hover/tap states.
- [ ] **Task 2.2: Glassmorphism Cards**
  - Build `<GlassCard />` wrapper utilizing background blur, low-opacity borders, and ambient hover glows.
- [ ] **Task 2.3: Layout Elements**
  - Build a sticky glassmorphic `<Navbar />` and a comprehensive `<Footer />`.

## Phase 3: Homepage Assembly (Core User Journey)
- [ ] **Task 3.1: Hero Section**
  - Build full-screen hero. Use Framer Motion `fadeInUp` for the H1 and CTAs.
- [ ] **Task 3.2: Value Proposition ("Why Xanso?")**
  - Grid layout using `<GlassCard />` for core features with Lucide icons.
- [ ] **Task 3.3: Interactive Goal Selector**
  - Horizontal/pill-based selection UI using `layoutId` for the active indicator.
- [ ] **Task 3.4: "Choose Your Journey" Section**
  - High-impact pathway cards (GROUP, 1:1, CORPORATE).

## Phase 4: Content & Data Visualization
- [ ] **Task 4.1: Featured Programs & Trainer Profiles**
  - Build program cards and trainer profile cards with premium layout and typography.
- [ ] **Task 4.2: Pricing Architecture**
  - 3-tier pricing section (Group, Personal, Corporate) with a Monthly/Annual toggle.
- [ ] **Task 4.3: Success Stories**
  - Masonry or slider layout for verified testimonials.

## Phase 5: AI Wellness Concierge & Dynamic Features (NEW)
*Objective: Implement the LangGraph-ready smart chatbot and user dashboards.*

- [ ] **Task 5.1: Scaffold AI API Route**
  - Create `src/app/api/chat/route.ts`. For UI testing purposes, set up a mock streaming response using `ai` core functions to simulate the LangGraph backend.
- [ ] **Task 5.2: Wellness Concierge UI (The Trigger)**
  - Build the fixed bottom-right Floating Action Button (FAB).
  - Implement Framer Motion transitions for morphing the icon (Message to X) upon clicking.
- [ ] **Task 5.3: Wellness Concierge UI (The Chat Window)**
  - Build the pop-up panel (`origin-bottom-right`).
  - Style the Chat Bubbles (Amber for User, Charcoal for AI) and the transparent input field.
  - Integrate `useChat` from Vercel AI SDK to handle the state, typing indicators, and message mapping seamlessly.
- [ ] **Task 5.4: Member Dashboard Wireframe**
  - Construct a sidebar layout for the authenticated user view, featuring upcoming classes and streak tracking.

---

## Antigravity Agent Execution Instructions

**How to use this file:**
1. Load `STYLE.MD` into your context to map the styling variables.
2. Begin with **Phase 1**. Do not proceed to the next phase until the code is fully generated and reviewed by the user.
3. Pay special attention to **Phase 5**. The AI chat component must feel native to the application—no default browser scrollbars, no rigid animations. Use `framer-motion` for every layout shift.
4. Output the code, explain your motion design choices, and await the user's "Proceed" command.