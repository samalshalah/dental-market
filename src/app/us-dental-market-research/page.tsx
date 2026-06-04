import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/site";

const benefits = [
  {
    title: "Clarify U.S. demand before major investment",
    body: "Research gives your team a more practical view of whether the category has visible demand, how buyers search, and where your offer may need adjustment before you spend on U.S. inventory, warehousing, or sales infrastructure."
  },
  {
    title: "Understand competitors and pricing signals",
    body: "International manufacturers often compare themselves to factories in their own region. U.S. buyers compare against what they already see from domestic distributors, e-commerce sellers, dealer catalogs, and established brands."
  },
  {
    title: "Improve positioning for U.S. buyers",
    body: "A product may be technically strong but still difficult for U.S. buyers to evaluate. Research helps identify what must be explained, what proof points matter, and which claims need careful compliance review."
  },
  {
    title: "Prepare for distributor conversations",
    body: "Distributors and dealers usually want more than a product catalog. They need pricing logic, support materials, demand signals, channel clarity, and confidence that the manufacturer understands the U.S. sales environment."
  }
];

const process = [
  {
    title: "Category and product review",
    body: "We begin by understanding the product category, intended buyer, current website, product materials, existing export activity, and the manufacturer’s goals for the United States."
  },
  {
    title: "Competitor and market scan",
    body: "We review visible U.S. competitors, category language, search results, public pricing signals where available, sales channels, and common positioning patterns."
  },
  {
    title: "Buyer and positioning analysis",
    body: "We identify likely buyer segments, messaging gaps, credibility issues, website weaknesses, content needs, and questions a U.S. buyer may ask before responding."
  },
  {
    title: "Practical recommendations",
    body: "The output focuses on what to do next: improve digital positioning, build a landing page, run a lead generation test, prepare distributor materials, or pause until key readiness gaps are addressed."
  }
];

export const metadata: Metadata = {
  title: pageMeta.marketResearch.title,
  description: pageMeta.marketResearch.description,
  alternates: { canonical: pageMeta.marketResearch.path },
  openGraph: {
    title: pageMeta.marketResearch.title,
    description: pageMeta.marketResearch.description,
    url: pageMeta.marketResearch.path
  }
};

export default function USDentalMarketResearchPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "U.S. Dental Market Research", path: pageMeta.marketResearch.path }
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "U.S. Dental Market Research for International Manufacturers",
          description: pageMeta.marketResearch.description,
          path: pageMeta.marketResearch.path
        })}
      />
      <Hero
        title="U.S. Dental Market Research for International Manufacturers"
        subtitle="Dental Market helps international dental manufacturers evaluate U.S. demand, competitors, pricing signals, positioning, buyer readiness, and practical next steps before committing to distribution, inventory, warehousing, or a full digital launch."
        primaryLabel="Start Manufacturer Review"
        primaryHref="/enrollment/"
        secondaryLabel="Contact Us"
        secondaryHref="/contact/"
      />
      <Breadcrumbs current="U.S. Dental Market Research" />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-ocean">The Problem</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy">
              Entering the U.S. dental market without research creates expensive uncertainty.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-steel">
            <p>
              Many international dental manufacturers first look at the United States through the lens of opportunity:
              a large dental economy, professional buyers, established distribution channels, and demand for supplies,
              equipment, infection control products, lab materials, accessories, and private label production. The
              opportunity may be real, but the path is rarely simple. A manufacturer can have a strong product and still
              struggle if U.S. buyers cannot quickly understand the offer, compare it to familiar alternatives, verify
              credibility, or see a clear buying path.
            </p>
            <p>
              U.S. dental market research helps reduce that uncertainty. Before investing in U.S. inventory,
              distributors, trade show follow-up, warehousing, paid campaigns, or e-commerce infrastructure, your team
              needs to understand category demand, competitor positioning, buyer expectations, pricing signals, website
              readiness, and channel fit. Dental Market focuses on that practical evaluation stage. We help
              manufacturers identify what is worth testing, what needs to be improved, and what should be clarified
              before a larger market-entry commitment.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-navy">What U.S. Dental Market Research Includes</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-steel">
            <p>
              Dental Market research is built for manufacturers that need business and digital market-entry insight, not
              theoretical reports that sit unused. The work can include product category review, competitor scan, visible
              pricing comparison, buyer segment analysis, keyword direction, digital positioning review, website
              credibility review, distributor-readiness notes, and recommendations for a validation path.
            </p>
            <p>
              A dental equipment manufacturer may need to understand whether U.S. buyers search by product type,
              procedure, feature, brand comparison, or distributor category. A dental supply factory may need to know
              whether the product is better positioned for direct lead generation, distributor outreach, private label,
              or e-commerce testing. An infection control supplier may need to review how U.S. competitors present
              safety, documentation, claims, packaging, and buyer education, while still leaving regulatory and product
              compliance questions to qualified professionals.
            </p>
            <p>
              The goal is not to promise market success. The goal is to create a clearer view of the market before
              making expensive decisions. Research should help answer practical questions: Is the category crowded? Are
              buyers likely to understand the product? Does the current website support U.S. credibility? Are the price
              expectations realistic? Should the manufacturer approach distributors, test direct demand, explore private
              label, improve product materials, or move into a structured U.S. Market Entry package?
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-ocean">Benefits</p>
          <h2 className="mt-3 text-3xl font-bold text-navy">Why market research matters before U.S. launch planning</h2>
          <p className="mt-4 leading-7 text-steel">
            Useful research connects market signals to decisions. It should help your leadership team decide what to
            improve, what to test, and what not to spend money on yet.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-navy">{benefit.title}</h3>
              <p className="mt-3 leading-7 text-steel">{benefit.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-ocean">Main Service Explanation</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">
              Research that connects product-market fit, digital readiness, and channel strategy.
            </h2>
            <p className="mt-5 leading-7 text-steel">
              Dental Market is not a clinical dental advisor, legal advisor, FDA consultant, importer, or immediate
              distributor. Our role is to help manufacturers understand the business, marketing, and demand-validation
              side of U.S. entry. That distinction matters because many failed market-entry efforts are not caused by one
              issue alone. They often happen when product positioning, buyer education, digital trust, pricing logic,
              channel strategy, and lead capture are not aligned.
            </p>
          </div>
          <div className="space-y-5 text-lg leading-8 text-steel">
            <p>
              For example, a manufacturer may believe the product is ready because it sells well in other countries. But
              U.S. buyers may expect different proof, clearer documentation, stronger website content, faster response
              processes, better English-language materials, or a more specific explanation of how the product compares
              to brands already available in the market. Research can show where the manufacturer appears strong and
              where the buyer journey may break down.
            </p>
            <p>
              The most useful output is a set of practical decisions. If the research shows weak search demand and a
              crowded category, the next step may be a narrow validation test rather than a broad launch. If competitor
              pricing is unclear, the manufacturer may need a positioning strategy before sales outreach. If the website
              lacks U.S.-focused pages, the next step may be a landing page and lead capture system. If distributors are
              the likely path, the manufacturer may need distributor-readiness materials before outreach.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-ocean">Process</p>
          <h2 className="mt-3 text-3xl font-bold text-navy">How the research process works</h2>
          <p className="mt-4 leading-7 text-steel">
            The process is structured to move from category understanding to practical next steps. It can support a
            standalone market-entry assessment or feed directly into a U.S. market entry plan.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <article key={step.title} className="rounded-lg border border-line bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-ocean">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-steel">{step.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-ocean">Why Dental Market</p>
            <h2 className="mt-3 text-3xl font-bold text-navy">
              Built for manufacturers that need practical U.S. market validation.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-steel">
            <p>
              Dental Market was created for international manufacturers that want to avoid entering the U.S. market
              blindly. The company combines digital marketing, SEO, lead generation, website strategy, e-commerce
              planning, and market validation experience to help manufacturers evaluate opportunity before they spend
              heavily. This makes the research useful for leadership teams that need more than a simple competitor list.
            </p>
            <p>
              Our perspective is practical and commercial. We look at how a U.S. buyer may discover the product, what
              they may compare it against, whether the message is clear, whether the website supports trust, whether
              there is a logical lead capture path, and whether the next step should be assessment, planning, validation,
              or launch support. The result is a clearer decision-making framework for dental manufacturer market entry
              USA strategy.
            </p>
            <p>
              We also keep the boundaries clear. Dental Market does not provide legal, FDA, regulatory, clinical,
              customs, tax, import, product safety, or medical advice. Manufacturers are responsible for compliance,
              labeling, registration, claims, certifications, insurance, and import requirements. When regulatory or
              product safety questions arise, the correct next step is to speak with qualified specialists.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-ocean">Internal Links</p>
          <h2 className="mt-3 text-3xl font-bold text-navy">Related U.S. market-entry services</h2>
          <p className="mt-4 leading-7 text-steel">
            Market research is often the first step. These related pages explain how Dental Market can help turn research
            findings into a plan, service scope, or validation process.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              href: "/services/",
              title: "U.S. Market Entry Services",
              body: "Review the full service set, including competitor analysis, digital launch planning, lead generation, SEO, distributor readiness, and e-commerce planning."
            },
            {
              href: "/services/#market-entry-program",
              title: "Dental Market Access Program",
              body: "See the phased assess, plan, validate, launch, and partner process for manufacturers preparing a U.S. growth path."
            },
            {
              href: "/services/#engagement-options",
              title: "Service Options",
              body: "Review the two simple paths: U.S. Market Validation for clarity or U.S. Market Entry for a more complete commercial plan."
            }
          ].map((item) => (
            <article key={item.href} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-navy">
                <Link href={item.href} className="hover:text-ocean">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-3 leading-7 text-steel">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/enrollment/">Start Manufacturer Review</ButtonLink>
        </div>
      </Section>

      <CTASection
        title="Need a clearer view of the U.S. dental market?"
        body="Start with a practical review of your product category, competitors, positioning, buyer readiness, and best next step before investing in U.S. distribution or inventory."
      />
    </>
  );
}
