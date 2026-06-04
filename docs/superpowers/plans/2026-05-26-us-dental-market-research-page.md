# U.S. Dental Market Research Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 1000+ word SEO landing page for U.S. dental market research for international manufacturers.

**Architecture:** Reuse existing App Router page patterns, shared section/button/hero/CTA/breadcrumb components, and central metadata in `src/lib/site.ts`. Add a reusable FAQ component and schema helpers so future landing pages can use the same pattern.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS, Node test runner.

---

### Task 1: Add Failing Coverage

**Files:**
- Modify: `tests/site.test.mjs`

- [ ] Add assertions that `src/app/us-dental-market-research/page.tsx` exists, contains the page H1, FAQ section, internal links, schema usage, and 1000+ words.
- [ ] Run `npm test` and confirm failure because the new route does not exist.

### Task 2: Shared FAQ and Schema

**Files:**
- Create: `src/components/FAQSection.tsx`
- Modify: `src/lib/schema.ts`

- [ ] Create a reusable FAQ component using existing card, spacing, border, and typography patterns.
- [ ] Add `faqSchema` and `serviceSchema` helpers.

### Task 3: Page Metadata and Route

**Files:**
- Modify: `src/lib/site.ts`
- Create: `src/app/us-dental-market-research/page.tsx`

- [ ] Add `marketResearch` metadata with title, description, and path.
- [ ] Build the page using `Hero`, `Section`, `ButtonLink`, `CTASection`, `Breadcrumbs`, `FAQSection`, and `JsonLd`.
- [ ] Include one H1, multiple H2 sections, relevant H3s, internal links, FAQPage schema, Service schema, and Breadcrumb schema.

### Task 4: Verification

**Files:**
- No additional files.

- [ ] Run `npm test`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Browser-check the route for H1 count, FAQ visibility, metadata title, and horizontal overflow.
