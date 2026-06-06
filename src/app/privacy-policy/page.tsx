import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { alternatesForPath, openGraphForPage, twitterForPage } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: pageMeta.privacy.title,
  description: pageMeta.privacy.description,
  alternates: alternatesForPath(pageMeta.privacy.path),
  openGraph: openGraphForPage(pageMeta.privacy),
  twitter: twitterForPage(pageMeta.privacy)
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: pageMeta.privacy.path }])} />
      <Hero
        title="Privacy Policy"
        subtitle="How Dental Market handles business contact information submitted by dental manufacturers, suppliers, and related B2B contacts."
        imageSrc="/images/dental-products/dental-lab-production-components-1600.webp"
        imageAlt="Dental lab production components arranged in rows"
        imageLabel="Privacy"
        imageCaption="Business contact information, forms, analytics, and communication practices."
        titleSize="compact"
        primaryLabel="Work With Dental Market"
        primaryHref="/work-with-dental-market/"
        secondaryLabel="Contact Us"
        secondaryHref="/contact/"
      />
      <Breadcrumbs current="Privacy Policy" />
      <Section tone="white">
        <article className="mx-auto max-w-4xl border border-clinical-line bg-white p-7 md:p-10">
          <p className="section-kicker">Dental Market</p>
          <h2 className="mt-3 text-3xl font-medium leading-tight text-[#050505]">Privacy Policy</h2>
          <div className="mt-6 space-y-5 leading-7 text-clinical-muted">
            <p>
              Dental Market collects business information submitted through forms, email, phone, WhatsApp, WeChat, and
              other contact channels. This may include name, company, country, website, product category, contact
              details, and information about U.S. market goals.
            </p>
            <p>
              We use this information to respond to inquiries, review manufacturer fit, evaluate product submissions,
              provide buying-review next steps when appropriate, support separate B2B marketing services, improve
              website performance, and communicate about relevant business services.
            </p>
            <p>
              The website may use analytics, cookies, and similar technologies to understand traffic, page performance,
              and campaign results. Visitors can manage cookies through browser settings.
            </p>
            <p>
              Dental Market may use trusted service providers for hosting, forms, analytics, CRM, email, and advertising
              operations. We do not sell personal information as a consumer data broker.
            </p>
            <p>
              Users may request access, correction, or deletion of submitted contact information by contacting {site.email}.
              We may retain limited records when required for legitimate business, legal, security, or accounting purposes.
            </p>
            <p>{site.legalNote}</p>
          </div>
        </article>
      </Section>
    </>
  );
}
