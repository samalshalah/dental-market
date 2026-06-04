# Dental Market Static Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static-export friendly Next.js website for Dental Market, optimized for SEO, conversion, accessibility, and Cloudflare Pages deployment.

**Architecture:** Use Next.js App Router with static pages, shared content data, and reusable presentational components. Keep schema, SEO metadata, navigation, page content, and UI primitives in focused files so the site can be updated without touching every route.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Node test runner.

---

### Task 1: Project Foundation

**Files:**
- Create: `package.json`
- Create: `next.config.mjs`
- Create: `tsconfig.json`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts`
- Create: `.gitignore`

- [ ] Add npm scripts for `dev`, `build`, `lint`, and `test`.
- [ ] Configure Next static export with `output: "export"`.
- [ ] Configure Tailwind content paths for the App Router and components.

### Task 2: Guard Test

**Files:**
- Create: `tests/site.test.mjs`

- [ ] Add a Node test that verifies core site files exist after implementation.
- [ ] Add assertions for required routes, package names, schema helper, Jotform component, sitemap, robots, and required SEO phrases.
- [ ] Run `npm test` before implementation and confirm it fails because files are missing.

### Task 3: Shared Content and Components

**Files:**
- Create: `src/lib/site.ts`
- Create: `src/lib/schema.ts`
- Create: `src/components/*.tsx`

- [ ] Add site constants, navigation, page metadata, service data, package data, process phases, and audience cards.
- [ ] Add reusable UI sections: header, footer, hero, CTA, cards, timeline, compliance note, breadcrumbs, Jotform embed, contact placeholders, and JSON-LD.

### Task 4: App Routes and SEO

**Files:**
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: route pages for services, market-entry-program, packages, enrollment, about, contact, privacy-policy, and terms-disclaimer.
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Create: `src/app/globals.css`

- [ ] Add unique metadata, canonical URLs, Open Graph, semantic HTML, one H1 per page, and keyword-rich headings.
- [ ] Add Organization, ProfessionalService, and Breadcrumb schema where appropriate.
- [ ] Add conversion CTAs on all main pages.

### Task 5: Documentation and Verification

**Files:**
- Create: `README.md`

- [ ] Add Cloudflare Pages deployment instructions.
- [ ] Run `npm test`, `npm run lint`, and `npm run build`.
- [ ] Fix any failures and rerun the relevant checks.
