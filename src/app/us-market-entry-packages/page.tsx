import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { ContentCard } from "@/components/ContentCard";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { TemplateServiceList, type TemplateServiceItem } from "@/components/TemplateServiceList";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { engagementOptions, pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  title: pageMeta.packages.title,
  description: pageMeta.packages.description,
  alternates: { canonical: pageMeta.packages.path },
  openGraph: {
    title: pageMeta.packages.title,
    description: pageMeta.packages.description,
    url: pageMeta.packages.path
  }
};

const packageItems: TemplateServiceItem[] = engagementOptions.map((item) => ({
  title: item.name,
  eyebrow: item.scope,
  body: `${item.bestFor}. ${item.outcome}`,
  details: item.includes,
  href: "/enrollment/",
  ctaLabel: "Start Manufacturer Review"
}));

const fitCards = [
  {
    title: "Choose U.S. Market Validation if you need clarity",
    body:
      "This path is for manufacturers that are unsure whether the U.S. market is ready for their product category, website, positioning, buyer story, pricing logic, or channel direction."
  },
  {
    title: "Choose U.S. Market Entry if you are ready to prepare",
    body:
      "This path is for manufacturers that already want a serious U.S. commercial plan and need deeper research, positioning, channel recommendations, landing page direction, and launch priorities."
  },
  {
    title: "Start with enrollment if you are unsure",
    body:
      "If your team does not know which package fits, start with a manufacturer review. Dental Market reviews the category and readiness before recommending the practical next step."
  }
];

const afterEnrollment = [
  {
    title: "Review",
    body:
      "Dental Market reviews your company, product category, website, current U.S. activity, and market-entry goals."
  },
  {
    title: "Recommend",
    body:
      "The team recommends whether U.S. Market Validation or U.S. Market Entry is the better starting point."
  },
  {
    title: "Scope",
    body:
      "If there is a fit, Dental Market scopes the work based on product complexity, readiness, research depth, and launch needs."
  }
];

export default function PackagesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "U.S. Market Entry Packages", path: pageMeta.packages.path }
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "U.S. Market Entry Packages for Dental Manufacturers",
          description: pageMeta.packages.description,
          path: pageMeta.packages.path
        })}
      />
      <Hero
        title="Choose the Right U.S. Market Path for Your Dental Products"
        subtitle="Dental Market offers two simple package paths for international dental manufacturers: validate your U.S. opportunity first, or prepare a more complete market-entry plan when your company is ready to move."
        imageSrc="/images/dental-products/dental-accessories-assortment-1600.webp"
        imageAlt="Dental accessories, brushes, model jaw, and tools on a table"
        imageLabel="Validate or enter"
        imageCaption="A simpler way to choose the right U.S. market-entry support."
        titleSize="compact"
      />
      <Breadcrumbs current="U.S. Market Entry Packages" />

      <Section tone="soft">
        <TemplateServiceList
          eyebrow="Two package paths"
          title="Validate first, then enter with clarity"
          intro="The package structure is intentionally simple. U.S. Market Validation helps manufacturers understand whether the opportunity and readiness are there. U.S. Market Entry helps manufacturers prepare a serious commercial path after the direction is clearer."
          imageSrc="/images/dental-products/sterile-instrument-preparation-1200.webp"
          imageAlt="Gloved hand preparing sterile dental instruments"
          items={packageItems}
        />
      </Section>

      <Section tone="white">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="section-kicker">Which package fits?</p>
            <h2 className="section-heading mt-3">Pick based on your current decision</h2>
          </div>
          <p className="body-copy">
            Manufacturers do not need to guess the full U.S. path on day one. The right package depends on whether your
            company is still validating the opportunity or already preparing to enter the market with a clearer
            commercial direction.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {fitCards.map((item) => (
            <ContentCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <Section tone="mint">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="section-kicker">After enrollment</p>
            <h2 className="section-heading mt-3">How Dental Market recommends the right package</h2>
            <p className="mt-5 body-copy">
              Enrollment is the intake step. It helps Dental Market understand your category, company readiness, and
              U.S. goals before recommending validation, entry planning, or another practical next step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/enrollment/" size="lg">
                Start Manufacturer Review
              </ButtonLink>
              <ButtonLink href="/contact/" variant="secondary" size="lg">
                Contact Us
              </ButtonLink>
            </div>
          </div>
          <div className="surface-card divide-y divide-clinical-line">
            {afterEnrollment.map((item, index) => (
              <div key={item.title} className="grid gap-3 p-6 sm:grid-cols-[4rem_1fr]">
                <p className="text-sm font-bold text-dental-blue">0{index + 1}</p>
                <div>
                  <h3 className="text-xl font-bold text-dental-navy">{item.title}</h3>
                  <p className="mt-3 body-copy">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="surface-panel p-8 md:p-10">
          <p className="section-kicker">Important boundaries</p>
          <h2 className="section-heading mt-3">Business clarity, not regulatory or sales guarantees</h2>
          <p className="mt-5 max-w-4xl body-copy">
            Dental Market helps manufacturers evaluate market opportunity, improve digital positioning, plan lead
            generation, prepare distributor-readiness materials, and organize U.S. market-entry decisions. Dental
            Market does not provide legal, FDA, regulatory, clinical, customs, tax, import, product safety, or medical
            advice, and does not guarantee distribution, buyer acceptance, sales, or market success.
          </p>
        </div>
      </Section>

      <CTASection title="Ready to choose the right U.S. market path?" />
    </>
  );
}
