import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
import { ImageFeature } from "@/components/ImageFeature";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { TemplateServiceList } from "@/components/TemplateServiceList";
import { alternatesForPath, openGraphForPage, twitterForPage } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { b2bMarketingServices, marketingProblems, marketingProcess, pageMeta } from "@/lib/site";

const manufacturerTypes = [
  "Dental supply manufacturers entering the U.S. market",
  "Manufacturers seeking distributors or dealers",
  "Manufacturers looking for private-label buyers",
  "Manufacturers with weak English websites",
  "Manufacturers with poor product pages",
  "Manufacturers preparing for trade shows",
  "Manufacturers needing SEO for U.S. dental buyers",
  "Manufacturers needing better follow-up systems"
];

export const metadata: Metadata = {
  title: pageMeta.b2bMarketing.title,
  description: pageMeta.b2bMarketing.description,
  alternates: alternatesForPath(pageMeta.b2bMarketing.path),
  openGraph: openGraphForPage(pageMeta.b2bMarketing),
  twitter: twitterForPage(pageMeta.b2bMarketing)
};

export default function B2BMarketingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "B2B Marketing", path: pageMeta.b2bMarketing.path }
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "B2B Marketing for Dental Supply Manufacturers",
          description: pageMeta.b2bMarketing.description,
          path: pageMeta.b2bMarketing.path
        })}
      />
      <Hero
        title="B2B Marketing for Dental Supply Manufacturers"
        subtitle="Dental Market provides B2B marketing services for dental supply manufacturers that need stronger U.S. websites, SEO, product pages, sales materials, and buyer follow-up systems. This service is separate from our dental supply buying review process."
        imageSrc="/images/dental-products/restorative-dental-supplies-1600.webp"
        imageAlt="Restorative dental supplies and shade tabs in a dental office"
        imageLabel="B2B marketing"
        imageCaption="Websites, SEO, product pages, sales materials, and follow-up systems for U.S. dental B2B buyers."
        titleSize="compact"
        primaryLabel="Request B2B Marketing Support"
        primaryHref="/work-with-dental-market/"
        secondaryLabel="Submit Dental Supply for Buying Review"
        secondaryHref="/work-with-dental-market/"
      />
      <Breadcrumbs current="B2B Marketing" />

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-kicker">Buyer presentation</p>
            <h2 className="section-heading mt-3">For Manufacturers That Want Stronger U.S. Buyer Presentation</h2>
            <p className="mt-5 body-copy">
              Many manufacturers have strong production capability but weak English messaging, unclear product pages, or
              no system for following up with U.S. buyers after exhibitions. Dental Market helps convert product
              information into clearer buyer-facing materials.
            </p>
          </div>
          <div className="grid gap-3 text-sm font-semibold text-clinical-ink sm:grid-cols-2">
            {manufacturerTypes.map((item) => (
              <div key={item} className="border-b border-clinical-line py-3">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Common problems</p>
          <h2 className="section-heading mt-3">Common B2B Marketing Problems</h2>
          <p className="mt-5 body-copy">
            U.S. buyers need fast clarity. If the website, catalog, or follow-up message is unclear, the buyer may not
            understand the product value even when the manufacturing quality is strong.
          </p>
        </div>
        <FeatureGrid items={marketingProblems} columns="three" />
      </Section>

      <Section tone="white">
        <TemplateServiceList
          eyebrow="What we provide"
          title="Websites, SEO, Product Pages & Follow-Up Systems"
          intro="Scope depends on product category, current website, sales materials, target buyer, trade-show activity, and whether distributor, dealer, or private-label buyer presentation is the priority."
          imageSrc="/images/dental-products/dental-accessories-assortment-1600.webp"
          imageAlt="Dental tools, model jaw, brushes, and accessories on a table"
          items={b2bMarketingServices.map((service) => ({
            title: service,
            body: "A practical buyer-facing asset or system designed to make dental supply manufacturer communication clearer, easier to evaluate, and easier to follow up."
          }))}
        />
      </Section>

      <Section tone="mint">
        <ImageFeature
          eyebrow="Websites and follow-up"
          title="Websites Built for U.S. Dental Buyers"
          body="U.S. buyers expect clear product information, professional English copy, strong product pages, simple contact options, trust signals, and a clear business reason to respond. Dental Market helps manufacturers build websites, landing pages, and follow-up systems that support real B2B conversations."
          imageSrc="/images/dental-products/orthodontic-bands-instruments-1600.webp"
          imageAlt="Dental accessories and colorful dental supplies on a white surface"
          bullets={[
            "Product pages that explain use case, category, and buyer value.",
            "Turn Exhibition Contacts Into Follow-Up Conversations with email, WhatsApp, WeChat, and CRM follow-up structure.",
            "Simple lead tracking so serious buyer conversations do not get lost."
          ]}
          ctaLabel="Request B2B Marketing Support"
          ctaHref="/work-with-dental-market/"
        />
      </Section>

      <Section tone="white">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Process</p>
          <h2 className="section-heading mt-3">How Marketing Projects Work</h2>
          <p className="mt-5 body-copy">
            B2B marketing projects are scoped separately from dental supply buying review. A manufacturer may request
            marketing support whether or not Dental Market buys, private-labels, or reviews its supplies for sourcing.
          </p>
        </div>
        <FeatureGrid items={marketingProcess} columns="four" />
      </Section>

      <Section tone="soft">
        <div className="surface-panel p-8 md:p-10">
          <p className="section-kicker">Separate from buying review</p>
          <h2 className="section-heading mt-3">Marketing Support Separate From Dental Supply Buying Review</h2>
          <p className="mt-5 max-w-4xl body-copy">
            B2B marketing is a separate service. Manufacturers may request marketing support whether or not Dental
            Market buys, private-labels, or reviews their products for sourcing.
            Marketing work does not create purchase orders, supplier qualification, distribution, private-label cooperation,
            or brand cooperation.
          </p>
          <div className="mt-8">
            <ButtonLink href="/work-with-dental-market/" size="lg">
              Request B2B Marketing Support
            </ButtonLink>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Separate marketing path"
        title="Need Stronger U.S. B2B Marketing?"
        body="Request support for U.S. website clarity, SEO, product pages, sales materials, distributor/dealer presentation, trade-show follow-up, or CRM setup."
        primaryLabel="Request B2B Marketing Support"
        primaryHref="/work-with-dental-market/"
        secondaryLabel="Submit Dental Supply for Buying Review"
        secondaryHref="/work-with-dental-market/"
      />
    </>
  );
}
