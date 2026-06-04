# Homepage Enhancement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enhance the Dental Market homepage with stronger process explanation, internal links, FAQ content, and conversion flow while preserving SEO and the existing design system.

**Architecture:** Reuse the existing App Router homepage and shared design-system components. Add a small reusable related-links component only if it improves consistency and keeps page markup clean.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, Node test runner.

---

### Task 1: Add Failing Homepage Test

**Files:**
- Modify: `tests/site.test.mjs`

- [ ] Add assertions for homepage FAQ, process section, internal links to research/program/packages/enrollment, and one H1.
- [ ] Run `npm test` and confirm the new test fails before implementation.

### Task 2: Add Related Links Component

**Files:**
- Create: `src/components/RelatedLinks.tsx`

- [ ] Create a reusable card-grid internal links component using existing design-system classes.

### Task 3: Enhance Homepage

**Files:**
- Modify: `src/app/page.tsx`

- [ ] Add process/how-it-works content.
- [ ] Add related internal links.
- [ ] Add homepage FAQ.
- [ ] Add a mid-page CTA without changing the existing SEO title, H1, or compliance boundaries.

### Task 4: Verification

**Files:**
- No additional files.

- [ ] Run `npm test`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Browser-check homepage desktop/mobile for no overflow, one H1, FAQ visibility, CTA visibility, and rendered word count.
