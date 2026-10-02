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
