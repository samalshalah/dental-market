import type { Metadata } from "next";
import { ComplianceNote } from "@/components/ComplianceNote";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { WorkWithJotformEmbed } from "@/components/WorkWithJotformEmbed";
import { alternatesForPath, openGraphForPage, twitterForPage } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta, site } from "@/lib/site";

const inquiryPaths = [
  {
    title: "Submit dental supplies for buying review",
    body: "For manufacturers that want Dental Market to review selected dental supplies for sourcing, purchase discussion, private-label discussion, brand cooperation, or supplier partnership."
  },
  {
    title: "Request B2B marketing support",
    body: "For dental supply manufacturers that need stronger U.S. websites, SEO, supply pages, sales materials, buyer follow-up, or trade-show response systems."
  },
  {
    title: "Both",
    body: "For manufacturers that want Dental Market to review selected dental supplies and also improve their U.S. B2B buyer presentation."
  },
  {
    title: "Not sure",
    body: "For manufacturers that need help choosing whether buying review, B2B marketing support, or both paths fit their current situation."
  }
];

export const metadata: Metadata = {
  title: pageMeta.workWith.title,
  description: pageMeta.workWith.description,
  alternates: alternatesForPath(pageMeta.workWith.path),
  openGraph: openGraphForPage(pageMeta.workWith),
  twitter: twitterForPage(pageMeta.workWith)
};

export default function WorkWithDentalMarketPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work With Dental Market", path: pageMeta.workWith.path }
        ])}
      />
      <Hero
        eyebrow="Choose your path"
        title="Work With Dental Market"
        subtitle="Use one inquiry page to submit dental supplies for buying review, request B2B marketing support, select both paths, or ask Dental Market which option fits your company."
        imageSrc="/images/dental-products/hero-dental-instruments-blue-1600.webp"
        imageAlt="Dental supplies arranged on a blue surface"
        imageLabel="Work With Us"
        imageCaption="Buying review and B2B marketing support are separate paths."
        titleSize="compact"
        primaryLabel="Start Inquiry"
        primaryHref="#inquiry-form"
        secondaryLabel="Contact Us"
        secondaryHref="/contact/"
      />

      <Section tone="white">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Inquiry options</p>
          <h2 className="section-heading mt-3">Choose the Request That Fits Your Company</h2>
          <p className="mt-5 body-copy">
            Dental Market keeps dental supply buying review and B2B marketing support separate. If you need both, select
            both in the inquiry so the next conversation is scoped clearly.
          </p>
        </div>
        <FeatureGrid items={inquiryPaths} columns="four" />
      </Section>

      <Section id="inquiry-form" tone="soft">
        <div className="mb-8 max-w-4xl">
          <p className="section-kicker">Work with Dental Market</p>
          <h2 className="section-heading mt-3">Dental Market Inquiry Form</h2>
          <p className="mt-5 body-copy">
            Complete the form below to choose buying review, B2B marketing support, both, or not sure. Manufacturers
            should not send samples until Dental Market confirms that the product is qualified for review.
          </p>
        </div>
        <WorkWithJotformEmbed />
      </Section>

      <Section tone="mint">
        <ComplianceNote body={`${site.compliance} ${site.reviewDisclaimer} ${site.dentistFeedbackDisclaimer}`} />
      </Section>
    </>
  );
}
