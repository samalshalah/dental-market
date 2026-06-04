import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: pageMeta.privacy.title,
  description: pageMeta.privacy.description,
  alternates: { canonical: pageMeta.privacy.path },
  openGraph: { title: pageMeta.privacy.title, description: pageMeta.privacy.description, url: pageMeta.privacy.path }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: pageMeta.privacy.path }])} />
      <div className="bg-[#050505] pt-32 sm:pt-36 lg:pt-60" aria-hidden="true" />
      <Breadcrumbs current="Privacy Policy" />
      <Section>
        <article className="mx-auto max-w-4xl rounded-lg border border-line bg-white p-6 shadow-sm">
          <h1 className="text-4xl font-bold text-navy">Privacy Policy</h1>
          <div className="mt-6 space-y-5 leading-7 text-steel">
            <p>
              Dental Market collects business information submitted through forms, email, phone, WhatsApp, WeChat, and
              other contact channels. This may include name, company, country, website, product category, contact
              details, and information about U.S. market goals.
            </p>
            <p>
              We use this information to respond to inquiries, review manufacturer fit, schedule strategy calls, provide
              market-entry services, improve website performance, and communicate about relevant business services.
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
