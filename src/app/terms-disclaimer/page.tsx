import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: pageMeta.terms.title,
  description: pageMeta.terms.description,
  alternates: { canonical: pageMeta.terms.path },
  openGraph: { title: pageMeta.terms.title, description: pageMeta.terms.description, url: pageMeta.terms.path }
};

export default function TermsDisclaimerPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms / Disclaimer", path: pageMeta.terms.path }])} />
      <div className="bg-[#050505] pt-32 sm:pt-36 lg:pt-60" aria-hidden="true" />
      <Breadcrumbs current="Terms / Disclaimer" />
      <Section>
        <article className="mx-auto max-w-4xl rounded-lg border border-line bg-white p-6 shadow-sm">
          <h1 className="text-4xl font-bold text-navy">Terms / Disclaimer</h1>
          <div className="mt-6 space-y-5 leading-7 text-steel">
            <p>
              Dental Market provides market research, digital marketing, business development, and market-entry planning
              services for dental manufacturers and related B2B suppliers.
            </p>
            <p>
              Dental Market does not provide legal, medical, clinical, FDA, regulatory, import, customs, tax, or product safety advice.
              Manufacturers are responsible for compliance with all applicable laws, product registrations, labeling,
              certifications, claims, insurance, and import requirements.
            </p>
            <p>
              Dental Market does not guarantee sales, distributor agreements, regulatory approval, market acceptance, or
              specific campaign results. Research, strategy, and lead generation services are intended to support
              informed business decisions, not replace professional legal, regulatory, clinical, financial, or tax advice.
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
