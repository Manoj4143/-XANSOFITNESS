Markdown# ARCHITECTURE.MD: Xanso System Architecture & Infrastructure (v2.0)

**Project:** Xanso Digital Fitness & Wellness Platform
**Document Version:** 2.0 (Includes Directory Structure)
**Target Audience:** Full-Stack Developers, DevOps, Tech Leads

This document outlines the high-level system design, infrastructure choices, data flow, and the exact repository file structure required to build the Xanso platform. It is designed to ensure maximum scalability, premium performance (sub-second UI updates), and seamless integration of our AI Agent layer.

---

## 1. Executive Summary

Xanso is built on a modern, decoupled **Serverless Architecture**. It leverages Next.js App Router to blend static generation for high-speed marketing pages with dynamic, real-time client components for the user dashboard and AI interactions. The backend relies on Supabase as a fully managed PostgreSQL database, enabling real-time subscriptions and secure vector search for the AI agent.

---

## 2. Repository & Folder Structure

To maintain a scalable and clean codebase, Xanso enforces a strict domain-driven directory structure within the Next.js `src/` directory. This separates routing, UI primitives, business logic, and the AI LangGraph engine.

```text
xanso-platform/
├── public/                 # Static assets (fonts, raw SVGs, favicon)
├── src/
│   ├── app/                # Next.js App Router (Routing & API Endpoints)
│   │   ├── (marketing)/    # Route Group: Public pages (SSG/ISR)
│   │   │   ├── page.tsx    # Homepage
│   │   │   ├── pricing/
│   │   │   └── programs/
│   │   ├── (dashboard)/    # Route Group: Authenticated user flows (SSR/Client)
│   │   │   ├── layout.tsx  # Protected layout checking Supabase Auth
│   │   │   └── progress/
│   │   ├── api/            # Serverless API Handlers
│   │   │   ├── chat/       # POST: Vercel AI SDK + LangGraph bridge
│   │   │   └── webhooks/   # POST: Stripe and Mux webhooks
│   │   ├── layout.tsx      # Root layout (Global providers, font injection)
│   │   └── globals.css     # Tailwind imports and global dark-theme vars
│   │
│   ├── components/         # React Components (Strictly isolated)
│   │   ├── ui/             # Reusable primitives (Button, GlassCard, Inputs)
│   │   ├── layout/         # Structural UI (Navbar, Footer, Sidebar)
│   │   ├── ai/             # AI-specific UI (WellnessConcierge, ChatBubbles)
│   │   └── features/       # Complex widgets (VideoPlayer, AssessmentWizard)
│   │
│   ├── agent/              # LangGraph & LLM Business Logic
│   │   ├── graph.ts        # The main LangGraph state machine definition
│   │   ├── state.ts        # AgentState TypeScript interfaces
│   │   ├── nodes/          # Graph execution nodes (RAG_Node, AssessmentNode)
│   │   └── tools/          # Tool definitions (search_programs, book_class)
│   │
│   ├── lib/                # Core utilities & external clients
│   │   ├── utils.ts        # cn() tailwind-merge function
│   │   ├── supabase/       # Supabase client initialization (Server & Browser)
│   │   └── stripe.ts       # Stripe client setup
│   │
│   ├── hooks/              # Custom React Hooks
│   │   ├── useUser.ts      # Fetches active user state & subscription tier
│   │   └── useDebounce.ts  # UI optimization hooks
│   │
│   └── types/              # Global TypeScript Definitions
│       ├── database.ts     # Supabase generated types (PostgreSQL schema)
│       └── index.ts        # Shared platform types (Program, Trainer, etc.)
│
├── tailwind.config.js      # Custom theme, colors, and Framer Motion utilities
├── middleware.ts           # Next.js Middleware (Route protection & Auth redirects)
└── .env.local              # Environment variables (NEVER committed)
File Saving & Naming ConventionsReact Components: PascalCase (e.g., GlassCard.tsx, WellnessConcierge.tsx).Utility/Logic Files: camelCase (e.g., utils.ts, graph.ts, searchPrograms.ts).API Routes & Pages: Must strictly follow Next.js conventions (page.tsx, layout.tsx, route.ts).Component Composition: Every component folder (e.g., components/ui/) should export its contents via an index.ts barrel file for cleaner imports.3. High-Level System Design (The Stack)LayerTechnologyPurposeFrontend UINext.js 14 (App Router), React 18, Tailwind CSSUI rendering, routing, SSG/SSR.Animation/MotionFramer MotionPhysics-based UI transitions.Backend/APINext.js Route Handlers (Serverless)REST endpoints, webhook listeners, AI orchestration.Database & AuthSupabase (PostgreSQL, Auth, Storage)Relational data, user identity, media storage.AI OrchestrationLangGraph, Vercel AI SDK, pgvectorStateful agent logic, UI streaming, semantic search.PaymentsStripe BillingSubscriptions, corporate invoicing.Video InfrastructureMux (VOD) / Daily.co (Live)HLS adaptive streaming and WebRTC live classes.4. Frontend Architecture (Next.js App Router)We strictly separate React Server Components (RSC) from Client Components to minimize JavaScript payload and maximize SEO for public pages.Server Components (Default): Used for the Homepage (app/(marketing)/page.tsx), Program Catalogs, and Pricing. They fetch data directly from Supabase securely on the server without exposing API keys.Client Components ('use client'): Restricted to leaves of the component tree (src/components/). Used only for interactive elements: Framer Motion animations, the AI Chatbot interface, and the live video player.5. Database & Security Strategy (Supabase)Xanso handles sensitive personal health and wellness data. Security is handled at the database level using Row Level Security (RLS).Core Schema (PostgreSQL)public.users: Core identity, linked to Supabase Auth. Contains roles (member, trainer, admin).public.profiles: Contains wellness goals, streak counts, and subscription status. RLS: Users can only read/update their own profile.public.programs: On-demand video library metadata. RLS: Public read, Admin write.public.live_sessions: Schedule of upcoming classes.public.xanso_knowledge: Vectorized text chunks of all programs, trainer bios, and FAQs. Uses pgvector extension for similarity search.6. The AI Layer (Wellness Concierge Integration)The AI Concierge is an alternative UI layer operating with the same backend privileges as the Next.js React frontend. The logic is strictly isolated in the src/agent/ directory to prevent LLM logic from bleeding into UI components.AI Data FlowClient Request: User types a message in <WellnessConcierge />. Vercel AI SDK streams the request to src/app/api/chat/route.ts.State Retrieval: The backend fetches the user's thread_id and previous LangGraph state from Supabase.Graph Execution (LangGraph via src/agent/graph.ts):The LLM determines if a tool is needed (e.g., book_class).If a tool is called, LangGraph executes the function from src/agent/tools/, directly modifying the Supabase database.Streaming Response: The AI's textual response and UI metadata are streamed back to the client.7. Deployment & CI/CD PipelineHosting Engine: Vercel (Edge Network).Environments:preview: Automatically generated on every GitHub Pull Request. Connects to a staging database.production: Deployed upon merge to main. Connects to the production Supabase project and live Stripe environment.