
### README.md: Xanso Digital Fitness & Wellness Platform

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![OpenAI](https://img.shields.io/badge/LangGraph_AI-412991?style=for-the-badge&logo=openai&logoColor=white)

## 🚀 Overview

**Xanso** is a premium, mobile-first digital fitness and wellness platform designed to transcend standard booking sites. It seamlessly connects users, certified trainers, and organizations through live classes, 1:1 personal training, on-demand video content, and comprehensive corporate wellness solutions. 

The platform features an integrated **AI Wellness Concierge**—a stateful LangGraph-powered agent acting as an intelligent UI layer to guide users, perform assessments, and execute bookings natively within a conversational interface.

---

## ✨ Core Features

*   **Immersive Premium UI:** Dark-theme, glassmorphic design utilizing Framer Motion spring-physics for expensive-feeling, hardware-accelerated interactions.
*   **Triple-Tier Wellness Journeys:**
    *   **Group:** Live instructor-led classes (Zoom/Daily.co integration).
    *   **1:1 Personal Training:** Personalized programs, weekly reviews, and goal tracking.
    *   **Corporate:** Custom organizational packages with dedicated onboarding.
*   **Smart AI Concierge:** Not a standard chatbot. A LangGraph/Vercel AI integrated agent capable of executing database mutations, booking classes, and conducting dynamic 8-question wellness assessments.
*   **Member Dashboard & Gamification:** Real-time progress tracking, upcoming schedules, and 7/14/30-day streak achievement badges.
*   **Secure Infrastructure:** Powered by Next.js Server Components, protected by Supabase Row Level Security (RLS), and monetized via Stripe.

---

## 🛠 Technology Stack

*   **Frontend:** Next.js (App Router), React 18, TypeScript.
*   **Styling & Motion:** Tailwind CSS, `clsx`, `tailwind-merge`, Framer Motion, Lucide React.
*   **Backend & API:** Next.js Route Handlers (Serverless), Vercel AI SDK.
*   **Database & Auth:** Supabase (PostgreSQL), Supabase Auth (Magic Links + OAuth), `pgvector` for AI embeddings.
*   **AI Engine:** LangChain / LangGraph, OpenAI (`gpt-4o`, `text-embedding-3-small`).
*   **Payments:** Stripe Billing API.

---

## 📂 Documentation Directory

To understand the specific engineering decisions, design system, and execution tasks, please refer to the internal documentation:
*   `STYLE.md` - UI constraints, Tailwind config, and Framer Motion spring physics.
*   `ARCHITECTURE.md` - Next.js routing, database schema, and folder structure.
*   `AGENT.md` - LangGraph state machine and AI Concierge persona/tools.
*   `SECURITY.md` - Auth protocols, RLS policies, and API security.
*   `DECISION.md` - Architectural Decision Record (ADR).
*   `TASK.md` - Step-by-step developer execution plan.

---

## ⚙️ Local Development Setup

Follow these instructions to get the Xanso platform running on your local machine.

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18.17 or higher)
*   [Git](https://git-scm.com/)
*   [Supabase CLI](https://supabase.com/docs/guides/cli) (for local database and RLS testing)
*   Stripe Developer Account
*   OpenAI API Key

### 1. Clone the Repository
```bash
git clone [https://github.com/your-org/xanso-platform.git](https://github.com/your-org/xanso-platform.git)
cd xanso-platform

```

### 2. Install Dependencies

```bash
npm install
# or
yarn install

```

### 3. Environment Variables

Copy the template file and fill in your secure credentials. **Never commit `.env.local` to version control.**

```bash
cp .env.example .env.local

```

Open `.env.local` and populate the following:

```env
# Next.js URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase (Auth & Database)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key # NEVER expose to client

# Stripe (Payments)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# AI Agent (OpenAI/LangChain)
OPENAI_API_KEY=sk-proj-...
LANGCHAIN_TRACING_V2=true
LANGCHAIN_API_KEY=lsv2_pt_...

```

### 4. Database Setup (Supabase Local)

We use the Supabase CLI to spin up a local PostgreSQL instance complete with Auth, Storage, and the `pgvector` extension.

```bash
# Start the local Supabase instance (requires Docker)
npx supabase start

# Push the database schema and RLS policies
npx supabase db push

# (Optional) Seed the database with dummy trainers, programs, and vectors
npx supabase db reset

```

### 5. Start the Development Server

```bash
npm run dev
# or
yarn dev

```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## 🤖 Initializing the AI Knowledge Base

To ensure the AI Wellness Concierge can answer questions and recommend programs, you must generate the initial vector embeddings for the local database.

1. Ensure your Supabase local instance is running.
2. Run the backend embedding script to scrape the local dummy database and generate vectors:
```bash
npm run generate-embeddings

```


*Note: This script queries `public.programs` and `public.trainers`, chunks the text, calls OpenAI `text-embedding-3-small`, and inserts the vectors into `public.xanso_knowledge`.*

---

## 🧪 Testing

```bash
# Run unit tests (Jest)
npm run test

# Run E2E tests (Playwright - tests user auth, dashboard routing, and Stripe checkout)
npm run test:e2e

```

## 📜 License

Private & Proprietary. All rights reserved by Xanso.

```
