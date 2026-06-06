# DentalMKT.us Design System

This file documents the active DentalMKT.us design system for future Codex tasks. The site should feel like a polished B2B dental product-sourcing and manufacturer-support website, not a generic clinic site or a stitched-together marketing template.

## Theme Folder Path

The original uploaded theme source is not committed inside this repository. The active in-repo source of truth is the theme-derived implementation:

- `src/components/`
- `src/app/globals.css`
- `tailwind.config.ts`
- `public/images/`

Do not search `node_modules` for a theme source. Use the current shared components and Tailwind tokens as the local theme implementation.

## Chosen Color Palette

Use the palette defined in `tailwind.config.ts`.

- Primary black: `#050505`
- Dental blue: `#0875ff`
- Dental cyan / teal: `#12c7ea`
- Muted text: `#4f5f6d`
- Border line: `#d9e4ee`
- Soft background: `#edf7ff`
- Mint background: `#e9fbff`
- White: `#ffffff`

Use black, white, blue, and cyan as the main brand palette. Avoid introducing new accent colors unless there is a clear design-system reason.

## Typography Rules

- Use the Georgia-based global serif font stack: `Georgia, "Times New Roman", Times, serif`.
- Use one H1 per page.
- Use the shared `Hero` component for page H1s.
- Use `.section-heading` for major H2 sections.
- Use `.section-kicker` for small uppercase section labels.
- Use `.body-copy` for standard paragraph text.
- Keep headings concise and manufacturer-focused.
- Do not use random one-off heading sizes.

Current scale:

- H1 compact: defined inside `src/components/Hero.tsx`
- H1 default: `text-hero-mobile`, `lg:text-hero`
- H2: `.section-heading`
- H3 cards: `text-xl` to `text-2xl`, medium weight
- Body: comfortable `leading-7` or `leading-8`

## Button Styles

Use `src/components/ButtonLink.tsx` for links styled as buttons.

Allowed variants:

- `primary`: blue background, white text
- `secondary`: black border, transparent background
- `light`: white background for dark sections

Rules:

- Do not create new button styles in page files.
- Keep arrow treatment from `template-arrow`.
- Primary CTAs should usually be `Submit Product`, `Submit Product for Buying Review`, or path-specific B2B marketing/contact CTAs.

## Card Styles

Use shared card components and template-style bordered cards.

Preferred components:

- `ContentCard`
- `StepCard`
- `FeatureGrid`
- `ProductCategoryPanels`
- `TemplateServiceList`
- `ImageFeature`

Rules:

- Cards should use square or nearly square bordered B2B styling.
- Avoid old rounded cards, heavy shadows, floating SaaS cards, and mixed background treatments.
- Use numbered cards for processes, FAQ cards, review outcomes, and feature grids.
- Keep hover states subtle: border darkening and light background change.

## Section Spacing

Use `src/components/Section.tsx`.

Current section rules:

- Horizontal padding: `px-5 sm:px-6 lg:px-8`
- Vertical padding: `py-16 lg:py-28`
- Max width: `max-w-[1200px]`
- Section tones: `white`, `soft`, `mint`, and default

Rules:

- Do not create random section padding in page files.
- Do not use unrelated max-widths unless the content format requires it.
- Alternate section tones deliberately and consistently.

## Page Hero Style

Use `src/components/Hero.tsx` for all public page heroes.

Rules:

- Full-width dark image hero.
- Use a dark or brand-color overlay on all content photography.
- Keep content inside the shared 1200px site width.
- Page heroes use `variant="page"` by default.
- Homepage can use `variant="home"` and be slightly larger.
- Keep hero CTAs consistent:
  - Primary: submit product or path-specific request
  - Secondary: contact or related service path

Do not create custom hero sections unless the shared `Hero` component cannot support the required layout.

## CTA Style

Use `src/components/CTASection.tsx`.

Rules:

- Dark full-width CTA band.
- Use shared button variants.
- Keep CTA copy short and action-oriented.
- Do not create different CTA layouts per page.
- Keep buying review and B2B marketing CTAs separate when both are shown.

## Form Placeholder Style

Use `src/components/JotformEmbed.tsx` for the current product buying review form.

If a future first-party form replaces Jotform, create or reuse a shared `FormPlaceholder` / form shell with:

- Bordered white container
- Section kicker
- Clear H2
- Short intro text
- Clear compliance note
- Same spacing and button treatment as the rest of the site

Do not create a page-specific form style.

## Components To Reuse

Use these before creating new components:

- `Header`
- `Footer`
- `BrandLogo`
- `ButtonLink`
- `Hero`
- `Section`
- `CTASection`
- `ContentCard`
- `StepCard`
- `FeatureGrid`
- `ProductCategoryPanels`
- `TemplateServiceList`
- `ImageFeature`
- `ComplianceNote`
- `FAQSection`
- `Breadcrumbs`
- `JotformEmbed`
- `JsonLd`

## Components Not To Use

Avoid using or reviving old/legacy patterns unless they are first updated to match the current theme:

- Old rounded/shadow SaaS-style cards
- Old standalone custom hero spacers
- Random page-specific CTA blocks
- Generic dental clinic service sections
- Standalone Dentist Feedback service pages or links
- Chinese pages or language switchers unless explicitly requested
- Any component that mixes old soft shadows, rounded-lg cards, or unrelated max-widths with the current theme

## Content Boundaries

- DentalMKT.us is manufacturer-facing and B2B.
- Keep buying review and B2B marketing as separate public paths.
- Dentist feedback may be mentioned only as internal structured non-clinical market feedback during selected buying reviews.
- Do not imply FDA review, clinical testing, dentist approval, certification, guaranteed purchase, guaranteed sales, or guaranteed distribution.
- Manufacturers should submit product information first and should not send samples until invited.

## Verification

After design or content changes, run available checks:

- `npm run lint`
- `npm test`
- `npm run build`

Also check mobile layout when visual changes affect page structure, header, heroes, cards, or forms.
