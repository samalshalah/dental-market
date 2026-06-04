import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { ComplianceNote } from "@/components/ComplianceNote";
import { ContentCard } from "@/components/ContentCard";
import { CTASection } from "@/components/CTASection";
import { HomeServiceStrip } from "@/components/HomeServiceStrip";
import { HomeTemplateHero } from "@/components/HomeTemplateHero";
import { MarketValidationSection } from "@/components/MarketValidationSection";
import { ProductCategoryPanels } from "@/components/ProductCategoryPanels";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section } from "@/components/Section";
import { TextMarquee } from "@/components/TextMarquee";
import { engagementOptions, pageMeta, site } from "@/lib/site";

const processSteps = [
  {
    title: "Assess",
    body: "Review product category, current digital readiness, buyer fit, and obvious barriers."
  },
  {
    title: "Research",
    body: "Study visible competitors, search demand, category language, and public market signals."
  },
  {
    title: "Position",
    body: "Clarify the U.S. buyer message, landing page priorities, and trust-building materials."
  },
  {
    title: "Validate",
    body: "Test demand through lead capture, campaign planning, outreach, and market-response reporting."
  }
];

const servicePillars = [
  {
    title: "Market Research",
    body: "Understand U.S. category demand, competitor positioning, visible pricing signals, buyer segments, and the practical barriers that may affect entry."
  },
  {
    title: "Digital Positioning",
    body: "Translate product strengths into clear U.S.-focused website, landing page, SEO, and sales messaging that buyers can quickly understand."
  },
  {
    title: "Lead Generation Test",
    body: "Use focused campaigns and lead capture to test whether U.S. buyers respond before investing heavily in inventory or channel commitments."
  },
  {
    title: "Distributor Readiness",
    body: "Prepare the market story, digital proof points, buyer objections, and channel direction needed before serious distributor conversations."
  }
];

const marketSignals = [
  "U.S. Market Entry",
  "Dental Product Research",
  "Lead Generation",
  "E-Commerce Strategy",
  "Distributor Readiness",
  "Demand Validation"
];

const validationLine = "Before investing in U.S. inventory, distributors, or warehousing, validate the market first.";

const directorQuestions = [
  {
    title: "Will U.S. buyers understand this product?",
    body:
      "A product can sell well internationally and still need different category language, proof points, packaging expectations, or buyer education for the United States."
  },
  {
    title: "Should we pursue distributors, direct leads, private label, or e-commerce?",
    body:
      "Dental Market helps manufacturers compare practical paths before committing to one sales model, channel partner, warehouse plan, or advertising budget."
  },
  {
    title: "What should we fix before spending more?",
    body:
      "The first review looks for readiness gaps in positioning, website clarity, product pages, lead capture, competitor context, and distributor-facing materials."
  }
];

const enrollmentSteps = [
  {
    title: "Submit product and company details",
    body: "Share your product category, current U.S. activity, website, target buyers, and market-entry goals through the review form."
  },
  {
    title: "Dental Market reviews U.S. readiness",
    body: "We look at category fit, digital presentation, likely buyer path, visible market signals, and obvious gaps that may affect a U.S. conversation."
  },
  {
    title: "Qualified manufacturers receive a next-step recommendation",
    body: "The recommendation may be research, positioning, distributor readiness, lead generation testing, e-commerce planning, or a deeper strategy call."
  }
];

const proofPoints = [
  {
    title: "U.S. dental business access",
    body:
      "Dental Market connects digital marketing, dental business operations, and advisory relationships tied to more than 800 U.S. dental practices through related business networks."
  },
  {
    title: "Dentist and operator perspective",
    body:
      "The team combines business managers, dental practice advisors, and dentists who understand how products must be presented before U.S. buyers take them seriously."
  },
  {
    title: "Commercial, not theoretical",
    body:
      "The review focuses on buyer path, website readiness, product positioning, demand signals, and the next practical decision rather than a generic market report."
  }
];

const deliverables = [
  "Product category and U.S. readiness summary",
  "Competitor and pricing signal observations",
  "Website, product page, and trust-signal notes",
  "Buyer path recommendation: distributor, direct, private label, e-commerce, or hybrid",
  "Recommended next step: validation, entry planning, positioning, or lead-generation test"
];

const visualServices = [
  {
    title: "Dental Supply & Accessory Brands",
    body: "Clarify buyer segments, pricing expectations, category language, and digital trust signals before presenting products to U.S. buyers.",
    imageSrc: "/images/dental-products/dental-accessories-assortment-1200.webp",
    imageAlt: "Dental accessories, brushes, model jaw, and tools on a table"
  },
  {
    title: "Instrument & Infection Control Suppliers",
    body: "Prepare a practical U.S. positioning path for sterile instruments, clinical supplies, infection control products, and related dental categories.",
    imageSrc: "/images/dental-products/sterile-metal-instruments-1200.webp",
    imageAlt: "Sterile metal dental instruments in clinical storage"
  },
  {
    title: "Lab Product Manufacturers",
    body: "Review how product categories, product pages, search demand, and market proof can support a stronger U.S. launch conversation.",
    imageSrc: "/images/dental-products/dental-polishing-burs-1200.webp",
    imageAlt: "Multi-colored dental buffing and polishing burs"
  }
];

export const metadata: Metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    url: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <HomeTemplateHero
        eyebrow={site.tagline}
        title="Helping Dental Manufacturers Understand and Enter the U.S. Market"
        subtitle="If you manufacture dental supplies, instruments, accessories, lab products, infection control items, or private label dental products, Dental Market helps your team gain clarity before investing in U.S. distributors, inventory, warehousing, or broad advertising."
        trustLine="U.S. Market Entry | Digital Growth | Lead Generation | E-Commerce Strategy | Distributor Readiness"
      />

      <TextMarquee items={marketSignals} />

      <MarketValidationSection validationLine={validationLine} />

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-kicker">Choose your starting point</p>
            <h2 className="section-heading mt-3">Two practical paths: validate first or prepare to enter</h2>
            <p className="mt-5 body-copy">
              Most manufacturers do not need a complicated program on day one. Dental Market starts by identifying
              whether your company needs a practical U.S. market review first, or a broader entry plan after the
              direction is already clear.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/enrollment/" size="lg">
                Start Manufacturer Review
              </ButtonLink>
              <ButtonLink href="/us-market-entry-packages/" variant="secondary" size="lg">
                Compare Paths
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {engagementOptions.map((option, index) => (
              <article key={option.name} className="surface-card h-full p-7">
                <p className="text-sm font-bold text-dental-blue">0{index + 1}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-wide text-clinical-muted">{option.scope}</p>
                <h3 className="mt-3 text-2xl font-medium leading-tight text-[#050505]">{option.name}</h3>
                <p className="mt-5 text-sm leading-7 text-clinical-muted">{option.bestFor}.</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-clinical-muted">
                  {option.includes.slice(0, 3).map((item) => (
                    <li key={item} className="border-t border-clinical-line pt-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="section-kicker">For manufacturer directors</p>
            <h2 className="section-heading mt-3">Get clarity before you choose a U.S. path</h2>
          </div>
          <p className="body-copy">
            Dental Market is built for leadership teams that need practical answers before approving U.S. launch spend.
            The first goal is not to push every manufacturer into the same package. The goal is to identify the most
            realistic next step for your product category and current readiness.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {directorQuestions.map((item) => (
            <ContentCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <Section tone="mint">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="section-kicker">Why trust the review</p>
            <h2 className="section-heading mt-3">Built around real U.S. dental business conversations</h2>
          </div>
          <p className="body-copy">
            A manufacturer does not only need a marketing opinion. The review should reflect how U.S. dental buyers,
            practice operators, product pages, distributors, and digital campaigns shape the first market-entry decision.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {proofPoints.map((item) => (
            <ContentCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <Section tone="mint">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
          <p className="section-kicker">Manufacturer audiences</p>
          <h2 className="section-heading mt-3">Who We Help</h2>
            <p className="mt-4 body-copy">
            We support international dental manufacturers, factories, and brands exploring U.S. growth from China,
            Germany, Korea, Turkey, India, and other export-focused markets.
          </p>
        </div>
          <div className="grid gap-3 text-sm font-semibold text-clinical-ink sm:grid-cols-2">
            {[
              "Dental supply manufacturers",
              "Dental equipment companies",
              "Infection control suppliers",
              "Dental lab product manufacturers",
              "Dental accessories brands",
              "Private label dental product companies"
            ].map((item) => (
              <div key={item} className="border-b border-clinical-line py-3">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <HomeServiceStrip />

      <Section tone="soft">
        <ProductCategoryPanels items={visualServices} />
      </Section>

      <Section tone="mint">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
          <p className="section-kicker">How it works</p>
          <h2 className="section-heading mt-3">How Dental Market Helps Manufacturers Validate the U.S. Market</h2>
          <p className="mt-4 body-copy">
            The process is designed to turn uncertainty into practical next steps. Instead of jumping directly into
            distributors, inventory, or warehousing, manufacturers can move through a structured path that clarifies
            readiness, market signals, positioning, and demand.
          </p>
        </div>
          <div className="surface-card divide-y divide-clinical-line">
          {processSteps.map((step, index) => (
              <div key={step.title} className="grid gap-3 p-5 sm:grid-cols-[4rem_1fr]">
                <p className="text-sm font-bold text-dental-blue">0{index + 1}</p>
                <div>
                  <h3 className="text-lg font-bold text-dental-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-clinical-muted">{step.body}</p>
                </div>
              </div>
          ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="section-kicker">What We Do</p>
            <h2 className="section-heading mt-3">Four strategic pillars for U.S. dental market entry</h2>
          </div>
          <p className="mt-4 body-copy">
            These pillars give manufacturers a practical view of the work needed before entering the U.S. market:
            research, digital positioning, lead generation, and readiness for channel conversations.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {servicePillars.map((item) => (
            <ContentCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="surface-panel flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="section-kicker">Recommended first step</p>
            <h2 className="section-heading mt-3">Start with a manufacturer review before choosing a package</h2>
            <p className="mt-4 max-w-3xl body-copy">
              Enrollment gives Dental Market enough context to review your company, product category, U.S. readiness,
              and likely market-entry path. It is the starting point for deciding whether you need research,
              positioning, distributor readiness, e-commerce planning, or demand validation.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <ButtonLink href="/enrollment/" size="lg">
              Start Manufacturer Review
            </ButtonLink>
            <ButtonLink href="/services/#engagement-options" variant="secondary" size="lg">
              View Service Options
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-kicker">Sample review outputs</p>
            <h2 className="section-heading mt-3">What a manufacturer can expect to receive</h2>
            <p className="mt-5 body-copy">
              Dental Market does not promise sales or distribution. The value is a clearer decision framework: what
              needs to be improved, what should be tested, and which U.S. path appears most practical for the product
              category.
            </p>
          </div>
          <div className="surface-card divide-y divide-clinical-line">
            {deliverables.map((item, index) => (
              <div key={item} className="grid gap-3 p-5 sm:grid-cols-[4rem_1fr]">
                <p className="text-sm font-bold text-dental-blue">0{index + 1}</p>
                <p className="font-semibold leading-7 text-[#050505]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="mb-8 max-w-4xl">
          <p className="section-kicker">What happens after enrollment</p>
          <h2 className="section-heading mt-3">A clear review process before any larger commitment</h2>
          <p className="mt-5 body-copy">
            A manufacturer director should know what happens after sharing company information. Dental Market uses the
            manufacturer review to understand the category, the current U.S. status, and the kind of support that may
            actually fit. We do not guarantee distribution, sales, regulatory approval, or immediate buyer access.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {enrollmentSteps.map((step, index) => (
            <article key={step.title} className="surface-card h-full p-8">
              <p className="text-sm font-bold text-dental-blue">0{index + 1}</p>
              <h3 className="mt-4 text-2xl font-medium leading-tight text-[#050505]">{step.title}</h3>
              <p className="mt-5 body-copy">{step.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Why manufacturers work with us</p>
          <h2 className="section-heading mt-3">Practical guidance before expensive U.S. commitments</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "U.S. digital marketing fluency",
              body: "We understand website strategy, SEO, paid campaign planning, lead capture, and the digital trust signals U.S. buyers expect."
            },
            {
              title: "Demand testing before scale",
              body: "We help manufacturers test buyer interest before making major investments in inventory, warehousing, or long-term channel commitments."
            },
            {
              title: "Research plus lead generation",
              body: "Our work connects competitor research, positioning, landing page strategy, campaign planning, and lead generation into one practical path."
            },
            {
              title: "Distributor-readiness focus",
              body: "We help companies prepare clearer positioning and digital proof points before approaching distributors, dealers, or private label partners."
            }
          ].map((item) => (
            <ContentCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Explore next</p>
          <h2 className="section-heading mt-3">Move from research to a practical U.S. market-entry plan</h2>
          <p className="mt-4 body-copy">
            These pages explain the main paths manufacturers can take after the first assessment, from research and
            validation to service scoping and enrollment.
          </p>
        </div>
        <RelatedLinks
          items={[
            {
              href: "/us-dental-market-research/",
              title: "U.S. Dental Market Research",
              body: "Understand competitors, pricing signals, buyer segments, digital readiness, and category demand before launch."
            },
            {
              href: "/services/#market-entry-program",
              title: "Market Entry Program",
              body: "See the phased assess, plan, validate, launch, and partner process for international manufacturers."
            },
            {
              href: "/us-market-entry-packages/",
              title: "U.S. Market Entry Packages",
              body: "Review the two simple paths: validate your U.S. opportunity first, or prepare a more complete U.S. market-entry plan."
            },
            {
              href: "/enrollment/",
              title: "Manufacturer Review",
              body: "Submit your company and product details so Dental Market can review your best next step."
            }
          ]}
        />
      </Section>

      <Section tone="white">
        <ComplianceNote />
      </Section>

      <CTASection />
    </>
  );
}
