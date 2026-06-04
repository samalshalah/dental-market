# Modern Dental Design System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade Dental Market with a reusable modern dental website design system and update the homepage as the example page.

**Architecture:** Centralize visual tokens in Tailwind and reusable CSS component classes, then update shared React components to consume those patterns. Keep existing SEO metadata, content, routes, and schema intact.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, Node test runner.

---

### Task 1: Design-System Guard Test

**Files:**
- Modify: `tests/site.test.mjs`

- [ ] Add a test that verifies dental design tokens and reusable component classes exist.
- [ ] Add assertions for `TrustBar`, `ContentCard`, upgraded `Hero`, homepage use of `TrustBar`, and core token names.
- [ ] Run `npm test` and confirm it fails before implementation.

### Task 2: Tokens and Reusable Components

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Create: `src/components/ContentCard.tsx`
- Create: `src/components/TrustBar.tsx`

- [ ] Add dental color, radius, shadow, spacing, and typography tokens.
- [ ] Add reusable component classes for cards, labels, form surfaces, and content grids.
- [ ] Create reusable `ContentCard` and `TrustBar` components.

### Task 3: Shared Component Upgrade

**Files:**
- Modify: `src/components/ButtonLink.tsx`
- Modify: `src/components/Section.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/CTASection.tsx`
- Modify: `src/components/FAQSection.tsx`
- Modify: `src/components/ServiceCard.tsx`
- Modify: `src/components/PackageCard.tsx`
- Modify: `src/components/JotformEmbed.tsx`

- [ ] Update buttons, sections, cards, hero, CTA, FAQ, and form embed to use the new consistent design language.
- [ ] Preserve existing props and page compatibility.

### Task 4: Homepage Example

**Files:**
- Modify: `src/app/page.tsx`

- [ ] Rework homepage visual sections with `TrustBar` and `ContentCard`.
- [ ] Keep H1, SEO metadata, compliance copy, and CTA flow intact.

### Task 5: Verification

**Files:**
- No additional files.

- [ ] Run `npm test`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Browser-check homepage desktop and mobile for no horizontal overflow, one H1, visible CTA, and consistent card styles.
