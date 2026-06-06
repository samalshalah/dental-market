import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { alternatesForPath, openGraphForPage, twitterForPage } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buyingFaqItems, pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  title: pageMeta.faq.title,
  description: pageMeta.faq.description,
  alternates: alternatesForPath(pageMeta.faq.path),
  openGraph: openGraphForPage(pageMeta.faq),
  twitter: twitterForPage(pageMeta.faq)
};

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: pageMeta.faq.path }
        ])}
      />
      <JsonLd data={faqSchema(buyingFaqItems)} />
      <Hero
        title="FAQ for Dental Supply Manufacturers"
        subtitle="Answers about Dental Market's buying review process, sample requests, internal non-clinical market feedback, and separate B2B marketing support."
        imageSrc="/images/dental-products/dental-polishing-burs-1600.webp"
        imageAlt="Dental polishing burs arranged for product review"
        imageLabel="FAQ"
        imageCaption="Clear answers before supply submission, sample review, or B2B marketing inquiry."
        titleSize="compact"
        primaryLabel="Submit Dental Supply"
        primaryHref="/work-with-dental-market/"
        secondaryLabel="Contact Us"
        secondaryHref="/contact/"
      />
      <Breadcrumbs current="FAQ" />

      <Section tone="white">
        <FAQSection
          title="Questions From Dental Supply Manufacturers"
          intro="These answers keep dental supply buying review, sample requests, internal feedback, and B2B marketing support clearly separated."
          items={buyingFaqItems}
        />
      </Section>

      <CTASection
        title="Have dental supplies for Dental Market to review?"
        body="Submit product information first. Samples should only be sent after Dental Market confirms that the product qualifies for review."
        primaryLabel="Submit Dental Supply"
        primaryHref="/work-with-dental-market/"
        secondaryLabel="Contact Us"
        secondaryHref="/contact/"
      />
    </>
  );
}
