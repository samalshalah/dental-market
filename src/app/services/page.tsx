import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ImageFeature } from "@/components/ImageFeature";
import { JsonLd } from "@/components/JsonLd";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Section } from "@/components/Section";
import { TemplateServiceList, type TemplateServiceItem } from "@/components/TemplateServiceList";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { serviceDetails } from "@/lib/services";
import { engagementOptions, pageMeta, phases } from "@/lib/site";

export const metadata: Metadata = {
  title: pageMeta.services.title,
  description: pageMeta.services.description,
  alternates: { canonical: pageMeta.services.path },
  openGraph: { title: pageMeta.services.title, description: pageMeta.services.description, url: pageMeta.services.path }
};

const serviceItems: TemplateServiceItem[] = serviceDetails.map((service) => ({
  title: service.title,
  body: `${service.meaning} ${service.matters}`,
  details: [`What manufacturers receive: ${service.receive}`, `Primary focus: ${service.primaryKeyword}`]
}));

const engagementItems: TemplateServiceItem[] = engagementOptions.map((item) => ({
  title: item.name,
  eyebrow: item.scope,
  body: `${item.bestFor}. ${item.outcome}`,
  details: item.includes,
  href: "/enrollment/",
  ctaLabel: "Start Manufacturer Review"
}));

const readinessSignals = [
  {
    title: "The U.S. buyer path is unclear",
    body:
      "If a manufacturer is unsure whether to pursue distributors, direct leads, private label partners, e-commerce, or trade-show follow-up, the first step is usually research and positioning."
  },
  {
    title: "The website is not U.S.-ready",
    body:
      "Many manufacturers have strong products but weak English-language product pages, unclear claims, limited proof points, or no lead capture path for U.S. buyers."
  },
  {
    title: "Distributor conversations need preparation",
    body:
      "Before approaching distributors, manufacturers need a clearer category story, buyer objections, product proof, pricing logic, and digital credibility."
  },
  {
    title: "The company wants to test demand first",
    body:
      "The U.S. Market Validation package can help review search interest, landing page readiness, buyer fit, and lead-generation potential before larger commitments."
  }
];

const deliveryPrinciples = [
  {
    title: "Specific to dental manufacturers",
    body:
      "The work focuses on product categories, buyer segments, dealer expectations, lab or clinic purchasing behavior, and U.S. digital trust signals."
  },
  {
    title: "Built around market decisions",
    body:
      "Each service should help answer a commercial question: what to sell, who to approach, how to position it, and what to test before scaling."
  },
  {
    title: "Clear compliance boundaries",
    body:
      "Dental Market does not provide legal, FDA, regulatory, clinical, import, customs, tax, or product safety advice. Manufacturers remain responsible for qualified compliance review."
  }
];

const clarityItems = [
  {
    title: "A practical U.S. entry path",
    body:
      "Understand whether your next step should be market validation, digital positioning, distributor-readiness materials, direct lead generation, private label outreach, e-commerce planning, or a full entry plan."
  },
  {
    title: "A clearer buyer story",
    body:
      "Translate product strengths into language U.S. buyers can understand: category fit, use case, proof points, purchase path, and why the product deserves a conversation."
  },
  {
    title: "A readiness view before larger spend",
    body:
      "Identify what should be fixed before you commit to U.S. inventory, warehousing, trade-show follow-up, distributor contracts, or broad advertising."
  }
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: pageMeta.services.path }])} />
      <JsonLd
        data={serviceSchema({
          name: "U.S. Market Entry Services for Dental Manufacturers",
          description: pageMeta.services.description,
          path: pageMeta.services.path
        })}
      />
      <Hero
        title="U.S. Market Entry Services for Dental Manufacturers"
        subtitle="Research, strategy, digital positioning, lead generation, distributor readiness, and e-commerce planning for international dental manufacturers evaluating the U.S. market."
        imageSrc="/images/dental-products/sterile-metal-instruments-1600.webp"
        imageAlt="Sterile metal dental instruments in clinical storage"
        imageLabel="Service strategy"
        imageCaption="Market research, positioning, lead generation, and distributor-readiness planning."
      />
      <Breadcrumbs current="Services" />

      <Section id="engagement-options" tone="soft">
        <TemplateServiceList
          eyebrow="Choose your U.S. market path"
          title="Two simple packages: validate first, then enter with clarity"
          intro="Dental Market keeps the offer simple. If your team needs clarity, start with U.S. Market Validation. If your company is ready to prepare a serious U.S. commercial path, move into U.S. Market Entry."
          imageSrc="/images/dental-products/orthodontic-supplies-tray-1200.webp"
          imageAlt="Orthodontic bands and dental instruments on a tray"
          items={engagementItems}
        />
        <p className="surface-card mt-8 p-5 text-sm leading-6 text-clinical-muted">
          Every engagement is scoped after reviewing the manufacturer, product category, market complexity, research
          depth, number of products, campaign needs, and U.S. launch readiness. The two paths are simple: validate the
          market first, or prepare a more complete entry plan. Dental Market does not publish fixed pricing because the
          right scope depends on the actual market-entry path.
        </p>
      </Section>

      <Section tone="soft">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="section-kicker">Manufacturer clarity</p>
            <h2 className="section-heading mt-3">Services are scoped around the decision you need to make</h2>
          </div>
          <p className="body-copy">
            Dental Market is most useful when leadership needs a clearer answer before spending more money in the
            United States. The service recommendation depends on your product category, current U.S. activity, digital
            readiness, buyer path, and whether you are trying to validate demand, prepare distributors, or build a
            stronger digital launch.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {clarityItems.map((item) => (
            <ContentCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <ImageFeature
          eyebrow="Service model"
          title="Focused services for manufacturers preparing a U.S. commercial path"
          body="Dental Market services are designed for international dental manufacturers that need to evaluate U.S. opportunity before committing to distribution, inventory, fulfillment, or large advertising budgets. The service model stays high-level at first because the right scope should come after reviewing the manufacturer, product category, current assets, and U.S. readiness."
          imageSrc="/images/dental-products/dental-lab-production-components-1600.webp"
          imageAlt="Dental lab production components arranged in rows"
          bullets={[
            "Research market signals before committing to sales infrastructure.",
            "Translate product strengths into U.S.-ready messaging and landing pages.",
            "Plan lead generation and distributor-readiness around real buyer behavior."
          ]}
          ctaLabel="Start Manufacturer Review"
          ctaHref="/enrollment/"
        />
      </Section>

      <Section tone="soft">
        <TemplateServiceList
          eyebrow="What we do"
          title="U.S. dental market-entry service areas"
          intro="Each service is designed to help an international dental manufacturer reduce uncertainty before making larger investments in inventory, warehousing, distributors, or U.S. advertising."
          imageSrc="/images/dental-products/sterile-instrument-preparation-1200.webp"
          imageAlt="Gloved hand preparing sterile dental instruments"
          items={serviceItems}
        />
      </Section>

      <Section id="market-entry-program" tone="white">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="section-kicker">Market Entry Program</p>
            <h2 className="section-heading mt-3">A practical U.S. market-entry path under Services</h2>
          </div>
          <p className="body-copy">
            The Dental Market Access Program is now part of Services. It gives manufacturers a simple sequence for
            moving from early research to launch validation without treating every company as ready for inventory,
            warehousing, distributor contracts, or broad advertising.
          </p>
        </div>
        <ProcessTimeline phases={phases} />
      </Section>

      <Section tone="white">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="section-kicker">When to start</p>
            <h2 className="section-heading mt-3">Signals that your U.S. strategy needs service support</h2>
          </div>
          <p className="body-copy">
            Dental Market is most useful when a manufacturer has real export ambition but needs a clearer U.S. path
            before spending heavily on inventory, distributor outreach, warehousing, advertising, or sales materials.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {readinessSignals.map((item) => (
            <ContentCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <Section tone="mint">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">How service work is scoped</p>
            <h2 className="section-heading mt-3">Practical support without overstating what we do</h2>
            <p className="mt-5 body-copy">
              Service recommendations depend on the manufacturer’s product category, current website, sales materials,
              existing U.S. activity, target buyer, and readiness to test demand. Some companies need research first.
              Others need a landing page, campaign plan, lead tracking, or distributor-readiness materials before
              outreach makes sense.
            </p>
          </div>
          <div className="surface-card divide-y divide-clinical-line">
            {deliveryPrinciples.map((item) => (
              <div key={item.title} className="p-6">
                <h3 className="text-xl font-bold text-dental-navy">{item.title}</h3>
                <p className="mt-3 body-copy">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Service direction</p>
          <h2 className="section-heading mt-3">Choose the right next step after a focused review</h2>
          <p className="mt-5 body-copy">
            Manufacturers do not need to guess which service should come first. Dental Market reviews your product
            category, current U.S. readiness, digital assets, and sales goals, then recommends the most practical next
            step.
          </p>
        </div>
        <RelatedLinks
          items={[
            {
              href: "/services/#market-entry-program",
              title: "Dental Market Access Program",
              body: "See the assess, plan, validate, launch, and partner framework for U.S. market entry."
            },
            {
              href: "/us-market-entry-packages/",
              title: "Choose Your U.S. Market Path",
              body: "Compare the two simple package paths: U.S. Market Validation and U.S. Market Entry."
            },
            {
              href: "/us-dental-market-research/",
              title: "U.S. Dental Market Research",
              body: "Understand how market research helps manufacturers evaluate opportunity before launch."
            },
            {
              href: "/enrollment/",
              title: "Manufacturer Review",
              body: "Submit your company and product details so Dental Market can review the best next step."
            }
          ]}
        />
      </Section>

      <CTASection title="Need a practical U.S. dental market plan?" />
    </>
  );
}
