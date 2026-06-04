import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
  alternates: { canonical: pageMeta.contact.path },
  openGraph: { title: pageMeta.contact.title, description: pageMeta.contact.description, url: pageMeta.contact.path }
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: pageMeta.contact.path }])} />
      <Hero
        title="Contact Dental Market"
        subtitle="Use the contact details below to reach Dental Market about U.S. market validation, digital growth, e-commerce planning, and manufacturer enrollment."
        primaryLabel="Start Manufacturer Review"
        primaryHref="/enrollment/"
        secondaryLabel="Email Dental Market"
        secondaryHref={`mailto:${site.email}`}
        imageSrc="/images/dental-products/dental-accessories-assortment-1600.webp"
        imageAlt="Dental accessories, brushes, model jaw, and tools on a table"
        imageLabel="Manufacturer conversations"
        imageCaption="Share your product category, current readiness, and U.S. growth goals."
      />
      <Breadcrumbs current="Contact" />

      <Section tone="white">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Contact us</p>
            <h2 className="section-heading mt-3">Reach Dental Market directly</h2>
            <p className="mt-5 body-copy">
              For manufacturer review, the website review form is the best first step. For direct communication, use email,
              phone, WhatsApp, or WeChat.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/enrollment/">Start Manufacturer Review</ButtonLink>
              <ButtonLink href={`mailto:${site.email}`} variant="secondary">
                Email Us
              </ButtonLink>
            </div>
          </div>
          <div className="surface-panel p-6 md:p-8">
            <p className="section-kicker">Contact details</p>
            <dl className="mt-6 grid gap-5 text-clinical-muted sm:grid-cols-2">
              <div>
                <dt className="font-bold text-clinical-ink">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="hover:text-dental-blue">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-clinical-ink">Phone</dt>
                <dd>
                  <a href={`tel:${site.phone}`} className="hover:text-dental-blue">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-clinical-ink">WhatsApp</dt>
                <dd>
                  <a href={site.whatsappUrl} className="hover:text-dental-blue">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-clinical-ink">WeChat</dt>
                <dd>{site.wechat}</dd>
              </div>
              <div>
                <dt className="font-bold text-clinical-ink">Location</dt>
                <dd>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>
      <CTASection title="Ready to start the manufacturer review?" />
    </>
  );
}
