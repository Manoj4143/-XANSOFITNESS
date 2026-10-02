# TRD.MD: Technical Requirements Document
**Project:** Xanso Digital Fitness & Wellness Platform
**Document Version:** 1.0
**Focus:** Full-Stack Architecture & AI Agent Integration

This document defines the technical architecture, backend infrastructure, and data flow required to support the Xanso platform. It includes the specific implementation strategy for the newly requested "AI Wellness Concierge" (Smart Chatbot) designed to guide users seamlessly.

---

## 1. System Architecture Overview

Xanso operates on a modern, decoupled serverless architecture to ensure high performance, scalability, and seamless UI transitions.

*   **Frontend Ecosystem:** Next.js (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion.
*   **Backend Application:** Next.js API Routes (Serverless) & Node.js for heavy background processing.
*   **Database & Auth:** PostgreSQL hosted on Supabase (utilizing Row Level Security for data privacy) and Supabase Auth.
*   **AI Agent Orchestration:** LangChain / LangGraph running on the backend to handle the smart chatbot logic and workflow automation.

---

## 2. Feature Specifications

### 2.1. The AI Wellness Concierge (Smart Chatbot)
To provide users with immediate guidance without overwhelming them with choices, we are integrating an intelligent, context-aware AI agent.

**Core Capabilities:**
*   **Instant Routing:** "I have 15 minutes and bad posture." -> The bot instantly returns a deep link to the *15-Min Desk Mobility* video.
*   **Assessment Alternative:** Acts as a conversational alternative to the static 8-question Wellness Assessment.
*   **Contextual Memory:** Remembers if the user is a premium member or a free trial user, tailoring recommendations accordingly.

**Technical Implementation:**
*   **UI/UX:** A floating glassmorphic action button (`bottom-right`) that expands into a sleek chat interface. It uses Framer Motion for a spring-physics expansion. The chat bubbles use the dark-theme surface colors (`#18181b`).
*   **Logic Engine:** Built using **LangGraph** to manage conversational state and cyclic workflows.
*   **RAG (Retrieval-Augmented Generation):** The chatbot will query a vector database (using Supabase vector extension `pgvector`) containing all Xanso programs, trainer bios, and FAQs to generate accurate, platform-specific responses.
*   **Response Time:** Target latency is < 1.5 seconds. Use streaming responses (Vercel AI SDK) so the user sees text appearing instantly.

### 2.2. Core Platform Modules
*   **Authentication:** Social Logins (Google, Apple) and Magic Links via Supabase Auth to reduce friction.
*   **Video Delivery:** On-demand videos hosted via a global CDN (e.g., Mux or AWS CloudFront) with HLS streaming for adaptive bitrate (smooth playback on mobile).
*   **Live Sessions:** Integration with Zoom SDK or Daily.co API embedded directly into the platform so users don't have to leave the web app.
*   **Payments:** Stripe Billing API for managing subscription tiers (Group, 1:1, Corporate) and free trial lifecycle.

---

## 3. Database Schema (High-Level PostgreSQL)

We will utilize a relational structure optimized for fast queries.

*   **`users`**: `id`, `role` (member, trainer, corporate_admin), `wellness_goal`, `streak_count`, `subscription_status`.
*   **`programs`**: `id`, `title`, `difficulty_level`, `category` (yoga, HIIT, meditation), `video_url`.
*   **`live_classes`**: `id`, `trainer_id`, `start_time`, `max_participants`, `meeting_link`.
*   **`ai_chat_history`**: `id`, `user_id`, `session_id`, `messages` (JSONB) - *Used to maintain context for the AI Concierge.*

---

## 4. API & Integration Map

| Service | Purpose | Protocol |
| :--- | :--- | :--- |
| **Supabase Client API** | User CRUD, Auth, Real-time streaks | REST / WebSockets |
| **OpenAI / Anthropic API** | LLM powering the Wellness Concierge | REST |
| **Stripe API** | Payment processing & webhooks | REST |
| **Daily.co / Zoom API** | Live video conferencing injection | WebRTC / REST |
| **SendGrid / Resend** | Transactional emails (booking confirmed) | REST |

---

## 5. Non-Functional Requirements (NFRs)

*   **Performance:** The platform must achieve a Google Lighthouse performance score of 90+. Next.js Image Optimization and static generation (SSG) for marketing pages are mandatory.
*   **Security:** 
    *   All health and goal data must be encrypted at rest.
    *   Strict Supabase Row Level Security (RLS) policies: Users can only read/write their own progress data.
*   **Scalability:** The serverless architecture ensures the platform can auto-scale during peak workout hours (e.g., 6:00 AM - 8:00 AM local time).
*   **Mobile-First:** 100% functional on mobile browsers. The UI must accommodate native-like touch gestures (swipe to close chatbot, horizontal scroll for carousels).

---

## 6. AI Chatbot UI Component Specification

To integrate this into our `task.md` workflow, the chatbot component (`<WellnessConcierge />`) must adhere to these UI rules:

```tsx
// Technical structure for the Chatbot UI
- State: useChat() from 'ai/react' (Vercel AI SDK)
- Wrapper: <motion.div> fixed to bottom-right, z-index 50.
- Closed State: Circular glassmorphic button with an amber glowing Lucide <MessageCircle/> icon.
- Open State: 
   - Header: "Xanso Guide" with an avatar.
   - Body: Scrollable area. User messages align right (Amber background), AI messages align left (Surface background).
   - Input: Transparent input field with a subtle bottom border, triggering on 'Enter'.