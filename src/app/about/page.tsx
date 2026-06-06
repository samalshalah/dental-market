import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Hero } from "@/components/Hero";
import { ImageFeature } from "@/components/ImageFeature";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { alternatesForPath, openGraphForPage, twitterForPage } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta, site } from "@/lib/site";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  alt: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Hussam Hadi",
    role: "General Manager",
    image: "/images/team/hussam-hadi-900.webp",
    alt: "Hussam Hadi, General Manager at Dental Market"
  },
  {
    name: "Nawar Alsaad",
    role: "Operations Manager",
    image: "/images/team/nawar-alsaad-900.webp",
    alt: "Nawar Alsaad, Operations Manager at Dental Market"
  },
  {
    name: "Dr Ali Aldouri",
    role: "Internal Product Review Advisor",
    image: "/images/team/dr-ali-aldouri-900.webp",
    alt: "Dr Ali Aldouri, Internal Product Review Advisor"
  },
  {
    name: "Dr Ahmed Al Attar",
    role: "Internal Product Review Advisor",
    image: "/images/team/dr-ahmed-al-attar-900.webp",
    alt: "Dr Ahmed Al Attar, Internal Product Review Advisor"
  },
  {
    name: "Dr Humam Alathari",
    role: "Internal Product Review Advisor",
    image: "/images/team/dr-humam-alathari-900.webp",
    alt: "Dr Humam Alathari, Internal Product Review Advisor"
  }
];

const aboutCards = [
  {
    title: "U.S. Market Perspective",
    body: "We understand how dental supplies must be presented for U.S. business buyers."
  },
  {
    title: "Dental Professional Input",
    body: "Selected supplies may receive internal non-clinical feedback from dentists and dental professionals during buying review."
  },
  {
    title: "Business Review",
    body: "We evaluate supplier fit, pricing logic, product category, and cooperation potential."
  },
  {
    title: "Marketing Execution",
    body: "We can also help manufacturers improve websites, SEO, product pages, and follow-up systems."
  }
];

const boundaries = [
  "We are not a traditional distributor.",
  "We are not an FDA consultant.",
  "We are not a legal advisor.",
  "We are not a clinical testing company.",
  "We do not guarantee purchase orders.",
  "We do not guarantee sales or distribution.",
  "We do not approve, certify, or clinically test products."
];

export const metadata: Metadata = {
  title: pageMeta.about.title,
  description: pageMeta.about.description,
  alternates: alternatesForPath(pageMeta.about.path),
  openGraph: openGraphForPage(pageMeta.about),
  twitter: twitterForPage(pageMeta.about)
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: pageMeta.about.path }])} />
      <Hero
        title="About Dental Market"
        subtitle="Dental Market is a U.S.-based dental supply sourcing group actively sourcing selected dental supplies from qualified manufacturers and supporting manufacturers with separate B2B marketing services."
        imageSrc="/images/team/about-hero-hussam-presentation-bw-1600.webp"
        imageAlt="Dental Market presentation on healthcare digital marketing"
        imageLabel="About Dental Market"
        imageCaption="A U.S. dental supply group with business, marketing, and dental-market perspective."
        titleSize="compact"
        primaryLabel="Work With Dental Market"
        primaryHref="/work-with-dental-market/"
        secondaryLabel="Request B2B Marketing Support"
        secondaryHref="/work-with-dental-market/"
      />
      <Breadcrumbs current="About" />

      <Section tone="white">
        <ImageFeature
          eyebrow="Who we are"
          title="A U.S. Dental Supply Group With Business, Marketing, and Dental Perspective"
          body="Dental Market brings together U.S. business, marketing, and dental professionals to review selected manufacturer supplies for the American dental market. Our team looks at product fit, packaging, buyer presentation, market potential, and cooperation opportunities."
          imageSrc="/images/dental-products/sterile-instrument-preparation-1600.webp"
          imageAlt="Gloved hand preparing sterile dental instruments"
          bullets={[
            "Supply sourcing review for selected dental supplies.",
            "Internal structured non-clinical dental-market feedback during selected buying reviews.",
            "Separate B2B marketing support for websites, SEO, sales materials, and follow-up systems."
          ]}
          ctaLabel="Submit Dental Supply for Buying Review"
          ctaHref="/work-with-dental-market/"
        />
      </Section>

      <Section tone="soft">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Why manufacturers work with us</p>
          <h2 className="section-heading mt-3">Why Manufacturers Work With Us</h2>
          <p className="mt-5 body-copy">
            Dental Market works with U.S. dental businesses in digital marketing and e-commerce solutions and has
            network visibility across more than 800 dental practices in the United States. That perspective helps us
            evaluate how manufacturer supplies may need to be presented before U.S. business conversations. Selected
            buying reviews may also use a 60+ U.S. dentist and dental-professional network for internal structured
            non-clinical market feedback.
          </p>
        </div>
        <FeatureGrid items={aboutCards} columns="four" />
      </Section>

      <Section tone="white">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Team</p>
          <h2 className="section-heading mt-3">Business, Operations, and Internal Product Review Perspective</h2>
          <p className="mt-5 body-copy">
            Hussam Hadi and Nawar Alsaad support business management and operations. Dental advisors may support
            internal structured non-clinical market feedback for selected buying reviews only. Dental advisors do not
            provide FDA review, product certification, clinical testing, or patient-use evaluation.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member) => (
            <article key={member.name} className="surface-card overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#050505]">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover grayscale transition duration-500 hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-[#050505]/10" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#050505]">{member.name}</h3>
                <p className="mt-2 text-sm font-semibold text-dental-blue">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="mint">
        <div className="surface-panel p-8 md:p-10">
          <p className="section-kicker">Platform direction</p>
          <h2 className="section-heading mt-3">Building a U.S. Dental Supply and Market-Development Platform</h2>
          <p className="mt-5 max-w-4xl body-copy">
            Dental Market is building a platform that connects qualified dental supply manufacturers with U.S. sourcing
            review, product-brand opportunities, and B2B marketing support. {site.legalNote}
          </p>
          <div className="mt-8">
            <ButtonLink href="/sell-dental-supplies/" variant="secondary">
              View Buying Review Process
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-kicker">Clear boundaries</p>
            <h2 className="section-heading mt-3">Clear Business Boundaries</h2>
            <p className="mt-5 body-copy">
              The website must be clear for manufacturers and safe from overpromising. Product review is a business
              evaluation path, not approval, certification, or a promise of sales.
            </p>
          </div>
          <FeatureGrid
            columns="three"
            items={boundaries.map((item) => ({
              title: item.replace(/\.$/, ""),
              body: "This boundary keeps Dental Market focused on business review, product sourcing readiness, and B2B marketing support."
            }))}
          />
        </div>
      </Section>

      <CTASection
        title="Work With Dental Market"
        body="Choose the right path: submit dental supplies for buying review or request separate B2B marketing support for U.S. buyer presentation."
        primaryLabel="Work With Dental Market"
        primaryHref="/work-with-dental-market/"
        secondaryLabel="Request B2B Marketing Support"
        secondaryHref="/work-with-dental-market/"
      />
    </>
  );
}
