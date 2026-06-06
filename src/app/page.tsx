import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
import { ImageFeature } from "@/components/ImageFeature";
import { ProductCategoryPanels } from "@/components/ProductCategoryPanels";
import { Section } from "@/components/Section";
import { TemplateServiceList } from "@/components/TemplateServiceList";
import { alternatesForPath, openGraphForPage, twitterForPage } from "@/lib/metadata";
import {
  b2bMarketingServices,
  buyingSteps,
  pageMeta,
  productCategories,
  reviewOutcomes,
  site,
  sourcingCards
} from "@/lib/site";

const categoryPanels = [
  {
    title: "Consumables & Disposable Supplies",
    body: "Review clear-use dental consumables, disposable dental supplies, infection-control items, and clinic supply products with practical U.S. buyer expectations.",
    imageSrc: "/images/dental-products/sterile-metal-instruments-1600.webp",
    imageAlt: "Sterile dental supplies and instruments in clinical storage"
  },
  {
    title: "Accessories & Oral-Care Supplies",
    body: "Clarify packaging, pricing, category language, sample readiness, and buyer presentation for dental accessories and oral-care supply products.",
    imageSrc: "/images/dental-products/restorative-dental-supplies-1600.webp",
    imageAlt: "Dental accessories and oral-care supplies on a table"
  },
  {
    title: "OEM / Private-Label Supply Items",
    body: "Review packaging-ready dental supplies and OEM/private-label supply products before purchase, brand cooperation, or supplier partnership discussions.",
    imageSrc: "/images/dental-products/dental-polishing-burs-1600.webp",
    imageAlt: "Packaging-ready dental supply items arranged for review"
  }
];

const marketingItems = b2bMarketingServices.slice(0, 9).map((service) => ({
  title: service,
  body: "A focused B2B marketing asset or system that helps dental supply manufacturers communicate more clearly with U.S. buyers, dealers, distributors, or brand partners."
}));

export const metadata: Metadata = {
  title: pageMeta.home.title,
  description: pageMeta.home.description,
  alternates: alternatesForPath(pageMeta.home.path),
  openGraph: openGraphForPage(pageMeta.home),
  twitter: twitterForPage(pageMeta.home)
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="For qualified dental supply manufacturers"
        title="We Are Sourcing Dental Supplies for the U.S. Market"
        subtitle="Dental Market is a U.S.-based dental supply sourcing group actively sourcing selected dental supplies from qualified manufacturers. Our team reviews products through a structured buying process before any purchase, private-label, brand cooperation, or supplier partnership decisions."
        imageSrc="/images/dental-products/hero-dental-instruments-blue-1600.webp"
        imageAlt="Dental supplies arranged on a blue surface"
        imageLabel="Dental Market"
        imageCaption={site.reviewDisclaimer}
        titleSize="compact"
        variant="home"
        primaryLabel="Submit Dental Supply for Buying Review"
        primaryHref="/work-with-dental-market/"
        secondaryLabel="View Buying Instructions"
        secondaryHref="#buying-instructions"
      />

      <Section tone="white">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Dental supply sourcing</p>
          <h2 className="section-heading mt-3">A U.S. Buying Gateway for Dental Supply Manufacturers</h2>
          <p className="mt-5 body-copy">
            Dental Market works with qualified manufacturers that want their dental supplies reviewed for the U.S.
            market. Selected supplies may move through product qualification, sample review, internal dental-market
            feedback, and business evaluation before buying or cooperation decisions are made.
          </p>
        </div>
        <FeatureGrid items={sourcingCards} columns="three" />
      </Section>

      <Section id="buying-instructions" tone="soft">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Buying instructions</p>
          <h2 className="section-heading mt-3">How to Submit Dental Supplies for Buying Review</h2>
          <p className="mt-5 body-copy">Please follow these steps before sending samples or expecting order discussion.</p>
        </div>
        <FeatureGrid items={buyingSteps} columns="five" />
        <div className="mt-8 border border-[#050505] bg-[#050505] p-6 text-white">
          <h3 className="text-2xl font-medium">Do not send samples before approval.</h3>
          <p className="mt-4 leading-7 text-slate-200">
            Unrequested samples may not be reviewed or returned. Selected reviews may require approximately 10 units per
            product, depending on product category and review plan.
          </p>
        </div>
      </Section>

      <Section tone="white">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Supply categories</p>
          <h2 className="section-heading mt-3">Dental Supply Categories We Review</h2>
          <p className="mt-5 body-copy">
            We prioritize supplies with clear use cases, consistent quality, competitive pricing, packaging options,
            sample availability, and realistic U.S. market potential.
          </p>
        </div>
        <ProductCategoryPanels items={categoryPanels} />
        <div className="mt-10 grid gap-3 text-sm font-semibold text-clinical-ink sm:grid-cols-2 lg:grid-cols-5">
          {productCategories.map((item) => (
            <div key={item} className="border-b border-clinical-line py-3">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mint">
        <ImageFeature
          eyebrow="Review team"
          title="Reviewed by U.S. Business, Marketing, and Dental Professionals"
          body="Dental Market brings together U.S. business, marketing, and dental professionals to review selected supplies from both commercial and dental-market perspectives. Our review process may include internal non-clinical feedback from dentists and dental professionals to better understand product presentation, perceived usefulness, packaging, buyer concerns, and U.S. market fit."
          imageSrc="/images/team/about-hero-hussam-presentation-bw-1600.webp"
          imageAlt="Dental Market presentation on healthcare digital marketing"
          bullets={[
            "Dentist feedback is part of our internal buying review process.",
            "It is not clinical testing, FDA review, product approval, patient-use testing, or product certification.",
            "Review is used to support business evaluation, not guaranteed purchase decisions."
          ]}
        />
      </Section>

      <Section tone="white">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Review outcomes</p>
          <h2 className="section-heading mt-3">What Happens After Product Review?</h2>
          <p className="mt-5 body-copy">
            Product review can lead to several next steps. All purchase, private-label, brand cooperation, or supplier
            partnership decisions require separate business review and agreement.
          </p>
        </div>
        <FeatureGrid items={reviewOutcomes} columns="three" />
      </Section>

      <Section tone="soft">
        <TemplateServiceList
          eyebrow="Separate service"
          title="Separate Service: B2B Marketing for Dental Supply Manufacturers"
          intro="Dental Market also provides B2B marketing services for dental supply manufacturers that need stronger U.S. websites, SEO, product pages, sales materials, and buyer follow-up systems. This service is separate from our dental supply buying review process."
          imageSrc="/images/dental-products/orthodontic-supplies-tray-1600.webp"
          imageAlt="Dental supply accessories and instruments on a tray"
          items={marketingItems}
        />
        <div className="mt-10">
          <ButtonLink href="/work-with-dental-market/" size="lg">
            Request B2B Marketing Support
          </ButtonLink>
        </div>
      </Section>

      <CTASection
        title="Have Dental Supplies for the U.S. Market?"
        body="Submit your product information first. If your supply item fits our current sourcing goals, Dental Market may invite you to send samples and continue through the buying review process."
        primaryLabel="Submit Dental Supply for Buying Review"
        primaryHref="/work-with-dental-market/"
        secondaryLabel="Contact Us"
        secondaryHref="/contact/"
        eyebrow="Start with supply submission"
      />
    </>
  );
}
