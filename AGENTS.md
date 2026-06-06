# DentalMKT.us Design Rules

1. The uploaded theme is the visual source of truth. If the original uploaded theme files are not present in the repository, use the current theme-derived implementation in `src/components`, `src/app/globals.css`, and `tailwind.config.ts` as the active source of truth.
2. Do not introduce new visual styles unless necessary.
3. Use shared components for Header, Footer, Button, Card, PageHero, CTASection, StepCard, FeatureGrid, and FormPlaceholder.
4. Maintain one consistent design system across all pages.
5. Use consistent section spacing, max-widths, heading hierarchy, button style, card style, border radius, and shadows.
6. Do not mix old website styling with theme styling.
7. Do not create Chinese pages or Chinese content unless explicitly requested.
8. Do not create a standalone Dentist Feedback service page.
9. Dentist feedback only appears as part of the internal buying review process.
10. Keep the buying review path and B2B marketing path clearly separate.
11. B2B marketing is a separate service, not part of the buying process.
12. Do not promise guaranteed purchase, sales, distribution, FDA review, clinical testing, dentist approval, or product certification.
13. Keep content concise, manufacturer-friendly, and B2B.
14. Run lint/build/test after changes when available.
15. Summarize design and code changes after each task.

# Website Design, Content, and SEO Rules

You are building a professional, SEO-focused website. Your main goal is consistency, high-quality topic-specific content, and clean reusable code.

## 1. Design Consistency Rules

Before creating or editing any page:

- Inspect the existing project structure, design system, components, layouts, CSS/Tailwind/theme files, and reusable UI patterns.
- Reuse existing components whenever possible.
- Do not create random new button styles, card styles, spacing rules, shadows, border radius values, colors, or typography styles for each page.
- All pages must look like they belong to the same website.
- Use one consistent design language across the whole site.

Create or maintain shared components for:

- Header
- Footer
- Hero section
- Section wrapper/container
- Buttons
- Cards
- CTA sections
- FAQ sections
- Testimonials
- Service/content blocks
- Breadcrumbs
- SEO content sections

Use centralized design tokens for:

- Colors
- Fonts
- Font sizes
- Spacing
- Border radius
- Shadows
- Button styles
- Section padding
- Container width

If a new visual pattern is needed, create it as a reusable component and use it consistently.

## 2. Content Quality Rules

Do not write generic, filler, or vague content.

All page content must be specific to the page topic, business, service, audience, and location if provided.

Avoid generic phrases like:

- "We provide the best services"
- "Our team is experienced"
- "We care about customers"
- "Contact us today for more information"

Instead, write specific, useful, topic-relevant content that explains:

- What the service/page is about
- Who it is for
- What problems it solves
- Why it matters
- What makes the business/service different
- What the customer should expect
- Clear benefits
- Clear process
- Clear FAQs
- Clear call to action

If important business details are missing, do not invent fake facts. Use realistic but non-false wording, or add a clear TODO comment for missing details.

## 3. SEO Rules

Every main page must include proper SEO structure.

Each page must have:

- Unique SEO title
- Unique meta description
- One clear H1
- Multiple H2 sections
- H3 headings where needed
- SEO-friendly URL/slug
- Topic-specific intro paragraph
- At least 1000 words of useful content for important landing pages, service pages, and location pages
- Internal links to related pages where appropriate
- FAQ section with relevant questions and answers
- Clear CTA section
- Image alt text if images are used
- Semantic HTML structure
- Proper heading hierarchy: H1 -> H2 -> H3
- No skipped heading levels for visual styling
- Schema markup where appropriate, such as LocalBusiness, Service, FAQPage, Article, or BreadcrumbList

The H1 must be specific, not generic.

Bad H1:
"Professional Services"

Good H1:
"Residential Plumbing Services in Austin, TX"

## 4. Page Structure Rules

For service pages, use this structure:

1. SEO metadata
2. Hero section with H1, short topic-specific intro, and CTA
3. Trust/value section
4. Main service explanation
5. Benefits section
6. Process section
7. Why choose us section
8. Related services/internal links
9. FAQ section
10. Final CTA section

For homepage, use this structure:

1. SEO metadata
2. Hero section with clear value proposition
3. Main services overview
4. Why choose us
5. Process/how it works
6. Testimonials or trust indicators
7. Service areas or industries served if relevant
8. FAQ section
9. Final CTA

For blog/articles, use this structure:

1. SEO metadata
2. H1 title
3. Intro
4. Table of contents if long
5. H2/H3 organized article body
6. Practical examples
7. FAQ section if relevant
8. Related internal links
9. Final CTA

## 5. Development Rules

Before making changes:

- Review the current codebase.
- Identify reusable components and styles.
- Create a short implementation plan.
- Then implement the changes.

After making changes:

- Check that the page uses the shared design system.
- Check that headings are SEO-correct.
- Check that the page has enough useful content.
- Check that there is no generic filler.
- Check that layout is responsive.
- Check that components are consistent with the rest of the site.
- Run lint/build/typecheck if available.

## 6. Final Response Required From Codex

After completing the task, summarize:

- Files changed
- Components reused or created
- SEO title
- Meta description
- H1
- H2 sections
- Approximate word count
- Any TODOs or missing business details
- Commands run and results

# Modern Dental Website UI/UX Design Rules

Codex must act as a senior UI/UX designer and frontend engineer for a modern dental marketing website.

The website must feel:
- Professional
- Clean
- Modern
- Trustworthy
- Calm
- Medical but not cold
- Premium but not luxury-only
- Friendly and reassuring for patients

The design must not feel:
- Generic
- Old-fashioned
- Overcrowded
- Like a template
- Like every page was designed separately
- Too colorful
- Too playful
- Too corporate
- Too empty

## 1. Visual Identity

Use one consistent visual language across the whole website.

Preferred dental-market design direction:

- White or soft off-white background
- Deep navy, charcoal, or dark blue for main text/headings
- Dental teal, soft blue, or fresh green as the primary brand accent
- Light blue, mint, or soft gray background sections
- Rounded but professional cards
- Soft shadows, not heavy shadows
- Large clean spacing
- Calm, confident typography
- High-quality medical/dental visual style
- Modern icons with consistent stroke width
- Clear CTAs for booking appointments

Do not randomly change colors, buttons, cards, spacing, or typography from page to page.

## 2. Typography Rules

Use a clear type hierarchy.

Every page should use consistent typography:

- Large confident H1
- Clear H2 section headings
- H3 for smaller content groups
- Comfortable paragraph line height
- Avoid long unreadable text blocks
- Use short paragraphs, bullets, cards, and visual sections to improve readability

Suggested style:
- H1: bold, modern, 48-64px desktop, 36-44px mobile
- H2: 32-44px desktop, 28-34px mobile
- H3: 22-28px
- Body: 16-18px
- Line height: 1.6-1.8 for content sections

If the project already has typography tokens, use them. Do not create conflicting sizes.

## 3. Layout Rules

Every page must use a consistent layout system.

Use:
- Max-width containers
- Consistent section padding
- Consistent grid gaps
- Consistent card spacing
- Consistent border radius
- Consistent CTA placement
- Consistent mobile stacking

Recommended layout patterns:
- Hero section with strong headline, short explanation, CTA, and trust points
- Alternating white and soft-background sections
- 2-column content sections
- 3-card benefit sections
- Step-by-step process sections
- FAQ accordion or FAQ grid
- Final CTA band
- Sticky or highly visible appointment CTA if appropriate

Avoid:
- Random full-width text sections
- Giant walls of text
- Unbalanced spacing
- Different button styles per page
- Different card styles per section
- Too many visual effects

## 4. Dental Website UX Rules

Every page should help a patient quickly understand:

- What dental service is offered
- Who the service is for
- What symptoms or problems it solves
- What happens during the visit
- Why the clinic is trustworthy
- How to book an appointment
- What to expect next

Important patient concerns to address:
- Pain
- Cost uncertainty
- Treatment time
- Fear or anxiety
- Safety and cleanliness
- Dentist experience
- Emergency availability
- Insurance or payment options if provided
- Recovery or aftercare if relevant

Never use fake claims, fake awards, fake reviews, fake years of experience, fake prices, or fake certifications.

## 5. Conversion UX Rules

Every important page must include clear conversion paths.

Use CTAs such as:
- Book an Appointment
- Call the Clinic
- Request a Consultation
- Schedule Your Visit
- Get Emergency Dental Help

CTA rules:
- Primary CTA should appear in the hero section
- Repeat CTA after major educational sections
- Final CTA must appear near the bottom
- CTAs must be specific to the page topic
- Do not use vague CTAs like "Learn More" as the main conversion action

For emergency dental pages, make the CTA more urgent:
- Call Now for Emergency Dental Care
- Request Same-Day Dental Help
- Get Help for Tooth Pain

For cosmetic dental pages, make the CTA benefit-focused:
- Book a Smile Consultation
- Start Your Smile Makeover
- Explore Cosmetic Dentistry Options

## 6. Component System Rules

Before creating or editing pages, Codex must inspect existing components.

Reuse or create shared components for:

- Header
- Footer
- Hero
- PageHero
- Section
- Container
- Button
- CTASection
- ServiceCard
- BenefitCard
- ProcessStep
- FAQSection
- TestimonialCard
- TrustBar
- Breadcrumbs
- RelatedServices
- BeforeAfterGallery if appropriate
- AppointmentCTA
- ContactCard

Do not create page-specific duplicate components unless there is a strong reason.

If a new component is created, it must:
- Match the current design system
- Be reusable
- Support responsive layout
- Use design tokens
- Avoid hard-coded one-off styling when possible

## 7. Modern UI Details

Use polished UI details carefully:

- Subtle gradients
- Soft background shapes
- Light borders
- Gentle hover states
- Icon cards
- Trust badges
- Clean form styling
- Consistent button states
- Modern section dividers
- Rounded image containers
- Subtle animated transitions only if the project already uses them
- Always place a dark or brand-color overlay on content photography and decorative background images so generic stock-style dental images support the layout without becoming the main message. Logos, icons, and form embeds are exempt.

Avoid:
- Heavy animations
- Random decorative blobs everywhere
- Too many gradients
- Too many icons
- Overdesigned sections
- Low-contrast text
- Tiny text
- Inconsistent image sizes
- Generic stock-photo feeling

## 8. Dental Content Presentation Rules

Dental pages must be educational but easy to scan.

Use sections like:

- Symptoms this treatment helps with
- When to see a dentist
- What to expect during treatment
- Benefits of treatment
- Treatment process
- Recovery or aftercare
- Why choose this clinic
- Related dental services
- FAQs
- Appointment CTA

Content should be specific to the treatment, not generic.

Bad:
"Our dental services are designed to help patients achieve healthy smiles."

Good:
"If you have sharp tooth pain, swelling near the gums, sensitivity to hot or cold, or pain when biting, an emergency dental visit can help identify whether the cause is decay, infection, trauma, or a damaged restoration."

## 9. Mobile UX Rules

Mobile experience is extremely important.

Every page must be checked for:
- Clear mobile H1
- CTA visible near the top
- No horizontal scrolling
- Cards stack cleanly
- Forms are easy to use
- Tap targets are large enough
- Header/navigation works properly
- Images do not dominate the screen
- Content is easy to scan

## 10. Accessibility Rules

Follow accessibility best practices:

- Semantic HTML
- Proper heading hierarchy
- Descriptive alt text
- Good color contrast
- Visible focus states
- Buttons and links must be keyboard accessible
- Form inputs must have labels
- Do not use headings only for visual size

## 11. Before Coding

Before coding any page or redesign, Codex must provide a short design plan covering:

- Existing components to reuse
- New components needed
- Page layout structure
- Visual direction
- UX goals
- SEO heading structure
- Conversion CTA strategy

Then implement.

## 12. Design Review Before Final Answer

Before finishing, Codex must review the work as a senior UI/UX designer.

Check:
- Does this page match the rest of the website?
- Is the design modern and polished?
- Is the page easy for a dental patient to understand?
- Is the CTA clear?
- Is the content scannable?
- Is the mobile layout strong?
- Are components consistent?
- Are there any generic sections?
- Are headings SEO-friendly?
- Is the page visually better than a basic template?

## 13. Final Response Required

At the end of every task, Codex must report:

- Design system/components reused
- New components created
- UX improvements made
- CTA strategy
- Mobile responsiveness notes
- SEO title
- H1
- H2 sections
- Approximate word count
- Files changed
- Commands run
- Any missing business details or TODOs
