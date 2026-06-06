import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { alternatesForPath, openGraphForPage, twitterForPage } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: pageMeta.terms.title,
  description: pageMeta.terms.description,
  alternates: alternatesForPath(pageMeta.terms.path),
  openGraph: openGraphForPage(pageMeta.terms),
  twitter: twitterForPage(pageMeta.terms)
};

export default function TermsDisclaimerPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms / Disclaimer", path: pageMeta.terms.path }])} />
      <Hero
        title="Terms / Disclaimer"
        subtitle="Clear business boundaries for Dental Market product sourcing review, buying-readiness review, and separate B2B marketing support."
        imageSrc="/images/dental-products/sterile-metal-instruments-1600.webp"
        imageAlt="Sterile metal dental instruments in clinical storage"
        imageLabel="Disclaimer"
        imageCaption="Business review and B2B marketing support only. No legal, FDA, clinical, import, tax, or product-safety advice."
        titleSize="compact"
        primaryLabel="Work With Dental Market"
        primaryHref="/work-with-dental-market/"
        secondaryLabel="Contact Us"
        secondaryHref="/contact/"
      />
      <Breadcrumbs current="Terms / Disclaimer" />
      <Section tone="white">
        <article className="mx-auto max-w-4xl border border-clinical-line bg-white p-7 md:p-10">
          <p className="section-kicker">Dental Market</p>
          <h2 className="mt-3 text-3xl font-medium leading-tight text-[#050505]">Terms / Disclaimer</h2>
          <div className="mt-6 space-y-5 leading-7 text-clinical-muted">
            <p>
              Dental Market provides product sourcing review, buying-readiness review, market-readiness support, B2B
              marketing, website, SEO, product-page, sales-material, trade-show follow-up, CRM, and business
              communication support for dental manufacturers and related B2B suppliers.
            </p>
            <p>
              Dental Market does not provide legal, medical, clinical, FDA, regulatory, import, customs, tax, or product safety advice.
              Manufacturers are responsible for compliance with all applicable laws, product registrations, labeling,
              certifications, claims, insurance, and import requirements.
            </p>
            <p>
              Dental Market / DentalMKT is not offering FDA U.S. Agent service, import agent service, customs brokerage,
              product safety review, or regulatory representation.
            </p>
            <p>
              Dental Market does not promise sales, distributor agreements, regulatory approval, market acceptance, or
              specific campaign results. Product review, buying-readiness review, market-readiness support, and B2B
              marketing services are intended to support informed business decisions, not replace professional legal,
              regulatory, clinical, financial, or tax advice.
            </p>
            <p>
              Product review does not guarantee purchase orders, distribution, sales, private-label cooperation, brand
              cooperation, or supplier partnership. Manufacturers should not send samples until Dental Market confirms
              that the product is qualified for review.
            </p>
            <p>
              Manufacturers are responsible for verifying product claims, documentation, certifications, testing,
              regulatory pathways, import requirements, and all buyer-facing materials before entering the U.S. market.
            </p>
            <p>{site.legalNote}</p>
          </div>
        </article>
      </Section>
    </>
  );
}
