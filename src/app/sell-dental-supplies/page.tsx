import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { ComplianceNote } from "@/components/ComplianceNote";
import { CTASection } from "@/components/CTASection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
import { ImageFeature } from "@/components/ImageFeature";
import { JsonLd } from "@/components/JsonLd";
import { ProductCategoryPanels } from "@/components/ProductCategoryPanels";
import { Section } from "@/components/Section";
import { alternatesForPath, openGraphForPage, twitterForPage } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import {
  buyingSteps,
  manufacturerFitItems,
  pageMeta,
  productCategories,
  reviewFactors,
  reviewOutcomes,
  site
} from "@/lib/site";

const categoryPanels = [
  {
    title: "Dental Consumables & Disposables",
    body: "Selected consumables, disposable dental supplies, infection-control supplies, preventive-care supplies, and clinic supply products can be reviewed when the use case and packaging path are clear.",
    imageSrc: "/images/dental-products/sterile-metal-instruments-1600.webp",
    imageAlt: "Sterile dental supplies in clinical storage"
  },
  {
    title: "Dental Accessories & Oral-Care Supplies",
    body: "Dental accessories and oral-care supplies may be reviewed for pricing logic, presentation, packaging readiness, sample availability, and U.S. buyer fit.",
    imageSrc: "/images/dental-products/restorative-dental-supplies-1600.webp",
    imageAlt: "Dental accessories and oral-care supplies on a table"
  },
  {
    title: "OEM / Private-Label Supply Products",
    body: "Packaging-ready dental supply items and OEM/private-label capable products may move to business review after qualification and sample review.",
    imageSrc: "/images/dental-products/orthodontic-bands-instruments-1600.webp",
    imageAlt: "Small dental supply items and accessories arranged for review"
  }
];

const extendedBuyingSteps = [
  ...buyingSteps,
  {
    title: "Review Product, Packaging, Pricing, and Fit",
    body: "Dental Market reviews product category, packaging, pricing logic, market fit, and supplier communication before business terms are discussed."
  },
  {
    title: "Discuss Business Terms After Qualification",
    body: "Business terms are discussed only after the product qualifies for the review path and a next-step decision is appropriate."
  }
];

export const metadata: Metadata = {
  title: pageMeta.sellDentalSupplies.title,
  description: pageMeta.sellDentalSupplies.description,
  alternates: alternatesForPath(pageMeta.sellDentalSupplies.path),
  openGraph: openGraphForPage(pageMeta.sellDentalSupplies),
  twitter: twitterForPage(pageMeta.sellDentalSupplies)
};

export default function SellDentalSuppliesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Sell Dental Supplies", path: pageMeta.sellDentalSupplies.path }
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Sell Dental Supplies to Dental Market",
          description: pageMeta.sellDentalSupplies.description,
          path: pageMeta.sellDentalSupplies.path
        })}
      />
      <Hero
        title="Sell Dental Supplies to Dental Market"
        subtitle="Dental Market is actively sourcing selected dental supplies from qualified manufacturers for the U.S. market. Products must complete our structured buying review process before purchase, private-label, brand cooperation, or supplier partnership decisions."
        imageSrc="/images/dental-products/sterile-metal-instruments-1600.webp"
        imageAlt="Sterile dental supplies in clinical storage"
        imageLabel="Buying review"
        imageCaption="Qualified supplies move through a structured buying process before purchase or cooperation decisions."
        titleSize="compact"
        primaryLabel="Submit Dental Supply for Buying Review"
        primaryHref="/work-with-dental-market/"
        secondaryLabel="Contact Dental Market"
        secondaryHref="/contact/"
      />
      <Breadcrumbs current="Sell Dental Supplies" />

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-kicker">Manufacturer fit</p>
            <h2 className="section-heading mt-3">Who Should Submit Supplies?</h2>
            <p className="mt-5 body-copy">
              This path is for dental supply manufacturers with export-ready products, clear specifications, sample
              availability when invited, and realistic pricing or packaging options for the U.S. market.
            </p>
          </div>
          <div className="grid gap-3 text-sm font-semibold text-clinical-ink sm:grid-cols-2">
            {manufacturerFitItems.map((item) => (
              <div key={item} className="border-b border-clinical-line py-3">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Supply interest</p>
          <h2 className="section-heading mt-3">Supplies We Are Interested In</h2>
          <p className="mt-5 body-copy">
            At this stage, Dental Market is primarily focused on dental supplies, consumables, accessories,
            infection-control products, oral-care products, and packaging-ready supply items.
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

      <Section id="buying-instructions" tone="white">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Buying instructions</p>
          <h2 className="section-heading mt-3">Buying Instructions for Manufacturers</h2>
          <p className="mt-5 body-copy">
            Manufacturers should submit product information first. Samples and business terms come later only if Dental
            Market confirms that the supply item qualifies for review.
          </p>
        </div>
        <FeatureGrid items={extendedBuyingSteps} columns="three" />
        <div className="mt-8 border border-[#050505] bg-[#050505] p-6 text-white">
          <h3 className="text-2xl font-medium">
            Manufacturers should not send samples until Dental Market confirms that the product is qualified for review.
          </h3>
          <p className="mt-4 leading-7 text-slate-200">
            Unrequested samples may not be reviewed or returned.
          </p>
        </div>
      </Section>

      <Section tone="mint">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-kicker">Sample review requirements</p>
            <h2 className="section-heading mt-3">Sample Review Requirements</h2>
            <p className="mt-5 body-copy">
              If a product qualifies for review, Dental Market may request samples. Sample quantity depends on the
              product category and review plan. Selected reviews may require approximately 10 units per product.
            </p>
            <p className="mt-5 text-sm font-semibold leading-6 text-[#050505]">
              Unrequested samples may not be reviewed or returned.
            </p>
          </div>
          <FeatureGrid
            items={[
              { title: "Qualification First", body: "Dental Market confirms whether the supply item fits current sourcing goals." },
              { title: "Sample Quantity Varies", body: "Selected reviews may require approximately 10 units per product." },
              { title: "Business Review Follows", body: "Purchase or cooperation discussion requires separate business review and agreement." }
            ]}
            columns="three"
          />
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-kicker">Review criteria</p>
            <h2 className="section-heading mt-3">What We Review Before Buying Decisions</h2>
            <p className="mt-5 body-copy">
              Dental Market reviews both the supply item and the supplier communication around it. Strong supplies may
              still need clearer packaging, English materials, pricing logic, or claim discipline before a U.S. business
              conversation.
            </p>
          </div>
          <div className="grid gap-3 text-sm font-semibold text-clinical-ink sm:grid-cols-2">
            {reviewFactors.map((item) => (
              <div key={item} className="border-b border-clinical-line py-3">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <ImageFeature
          eyebrow="Internal dental-market feedback"
          title="Internal Dental-Market Feedback"
          body="Selected supplies may be reviewed with input from U.S. dentists and dental professionals as part of Dental Market's internal buying process. This feedback may help us understand product presentation, perceived usefulness, handling impression, packaging clarity, buyer concerns, and market fit."
          imageSrc="/images/dental-products/orthodontic-supplies-tray-1600.webp"
          imageAlt="Dental supply items and small instruments on a tray"
          bullets={[
            "This is non-clinical market feedback only.",
            "It is not clinical testing, FDA review, patient-use testing, product approval, product-safety certification, or legal/regulatory advice.",
            "Dentist feedback is not sold as a standalone public service."
          ]}
        />
      </Section>

      <Section tone="white">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Review outcomes</p>
          <h2 className="section-heading mt-3">Review Outcomes</h2>
          <p className="mt-5 body-copy">
            All purchase, private-label, brand cooperation, or supplier partnership decisions require separate business
            review and agreement.
          </p>
        </div>
        <FeatureGrid items={reviewOutcomes} columns="three" />
      </Section>

      <Section tone="mint">
        <div className="border border-[#050505] bg-white p-8 md:p-10">
          <p className="section-kicker">Start here</p>
          <h2 className="section-heading mt-3">Start With Product Submission</h2>
          <p className="mt-5 max-w-4xl body-copy">
            Submit dental supply information first. If the supply item fits current sourcing goals, Dental Market may
            invite samples and continue through the buying review process.
          </p>
          <div className="mt-8">
            <ButtonLink href="/work-with-dental-market/" size="lg">
              Submit Dental Supply for Buying Review
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <ComplianceNote body={`${site.sampleDisclaimer} ${site.reviewDisclaimer} ${site.compliance}`} />
      </Section>

      <CTASection
        title="Have dental supplies for Dental Market to review?"
        body="Submit product information first. If your supply item fits our current sourcing goals, Dental Market may invite you to send samples and continue through the buying review process."
        primaryLabel="Submit Dental Supply for Buying Review"
        primaryHref="/work-with-dental-market/"
        secondaryLabel="Contact Dental Market"
        secondaryHref="/contact/"
      />
    </>
  );
}
