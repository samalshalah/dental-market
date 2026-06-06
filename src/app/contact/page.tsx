import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { FormPlaceholder } from "@/components/FormPlaceholder";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { alternatesForPath, openGraphForPage, twitterForPage } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
  alternates: alternatesForPath(pageMeta.contact.path),
  openGraph: openGraphForPage(pageMeta.contact),
  twitter: twitterForPage(pageMeta.contact)
};

const contactDetails = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone / WhatsApp", value: site.phoneDisplay, href: site.whatsappUrl },
  { label: "WeChat", value: site.wechat },
  { label: "Address", value: site.address.display },
  { label: "Website", value: site.domain, href: site.url }
];

const productFields = [
  "Company name",
  "Country",
  "Website",
  "Contact name",
  "Email",
  "WhatsApp / WeChat",
  "Dental supply category",
  "Supply description",
  "Product page or catalog",
  "Sample availability",
  "What do you want Dental Market to review?"
];

const marketingFields = [
  "Company name",
  "Website",
  "Contact name",
  "Email",
  "WhatsApp / WeChat",
  "What marketing support do you need?",
  "Current website link",
  "Target market",
  "Message / goals"
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: pageMeta.contact.path }])} />
      <Hero
        title="Contact Dental Market"
        subtitle="Choose the path that fits your goal: submit dental supplies for buying review or request B2B marketing support."
        primaryLabel="Submit Dental Supply for Buying Review"
        primaryHref="/work-with-dental-market/"
        secondaryLabel="Request B2B Marketing Support"
        secondaryHref="/work-with-dental-market/"
        imageSrc="/images/dental-products/orthodontic-supplies-tray-1600.webp"
        imageAlt="Dental supply accessories and instruments on a tray"
        imageLabel="Contact"
        imageCaption="Dental supply buying review and B2B marketing are handled as separate paths."
        titleSize="compact"
      />
      <Breadcrumbs current="Contact" />

      <Section tone="white">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Choose your path</p>
          <h2 className="section-heading mt-3">Start With the Right Request</h2>
          <p className="mt-5 body-copy">
            Dental supply buying review and B2B marketing support are separate paths. Choose the option that matches
            your current goal.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="border border-clinical-line bg-white p-8 transition hover:border-[#050505] hover:bg-surface-soft md:p-10">
            <p className="section-kicker">Buying review</p>
            <h3 className="mt-3 text-3xl font-medium leading-tight text-[#050505]">Submit Dental Supply for Buying Review</h3>
            <p className="mt-5 body-copy">
              For manufacturers that want Dental Market to review a dental supply item for sourcing, purchase,
              private-label, brand cooperation, or supplier partnership.
            </p>
            <div className="mt-8">
              <ButtonLink href="/work-with-dental-market/" size="lg">
                Submit Dental Supply for Buying Review
              </ButtonLink>
            </div>
          </div>
          <div id="marketing-inquiry" className="scroll-mt-28 border border-clinical-line bg-white p-8 transition hover:border-[#050505] hover:bg-surface-soft md:p-10">
            <p className="section-kicker">Marketing support</p>
            <h3 className="mt-3 text-3xl font-medium leading-tight text-[#050505]">Request B2B Marketing Support</h3>
            <p className="mt-5 body-copy">
              For dental supply manufacturers that need stronger websites, SEO, product pages, sales materials,
              distributor/dealer presentation, or follow-up systems.
            </p>
            <div className="mt-8">
              <ButtonLink href="/work-with-dental-market/" size="lg">
                Request B2B Marketing Support
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <FormPlaceholder
          eyebrow="Supply submission form"
          title="Dental Supply Submission Form"
          body="Dental supply buying review form will be embedded here."
          note="Do not send samples until Dental Market confirms that your product is qualified for review."
          fields={productFields}
          ctaLabel="Work With Dental Market"
          ctaHref="/work-with-dental-market/"
        />
      </Section>

      <Section tone="white">
        <FormPlaceholder
          eyebrow="B2B marketing inquiry form"
          title="B2B Marketing Inquiry Form"
          body="B2B marketing inquiry form will be embedded here."
          fields={marketingFields}
          ctaLabel="Work With Dental Market"
          ctaHref="/work-with-dental-market/"
        />
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-kicker">Contact details</p>
            <h2 className="section-heading mt-3">Reach Dental Market</h2>
            <p className="mt-5 body-copy">
              For the fastest review, include product category, company website or catalog, sample availability, and
              whether your request is dental supply buying review or B2B marketing support.
            </p>
          </div>
          <div className="surface-card divide-y divide-clinical-line">
            {contactDetails.map((item) => (
              <div key={item.label} className="p-6">
                <p className="section-kicker">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="mt-3 block break-words text-2xl font-medium text-[#050505] hover:text-dental-blue">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 break-words text-2xl font-medium text-[#050505]">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
