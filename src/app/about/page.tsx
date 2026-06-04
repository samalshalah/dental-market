import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ImageFeature } from "@/components/ImageFeature";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/site";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
  alt?: string;
  initials?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Hussam Hadi",
    role: "General Manager",
    image: "/images/team/hussam-hadi-900.webp",
    alt: "Hussam Hadi, general manager at Dental Market"
  },
  {
    name: "Nawar Alsaad",
    role: "Operations Manager",
    image: "/images/team/nawar-alsaad-900.webp",
    alt: "Nawar Alsaad, operations manager at Dental Market"
  },
  {
    name: "Dr Ali Aldouri",
    role: "Dentist / Advisor",
    image: "/images/team/dr-ali-aldouri-900.webp",
    alt: "Dr Ali Aldouri, dentist and advisor at Dental Market"
  },
  {
    name: "Dr Ahmed Al Attar",
    role: "Dentist / Advisor",
    image: "/images/team/dr-ahmed-al-attar-900.webp",
    alt: "Dr Ahmed Al Attar, dentist and advisor at Dental Market"
  },
  {
    name: "Dr Humam Alathari",
    role: "Dentist / Advisor",
    image: "/images/team/dr-humam-alathari-900.webp",
    alt: "Dr Humam Alathari, dentist and advisor at Dental Market"
  }
];

const collaborationFocus = [
  {
    title: "Dental business owners",
    body:
      "Dental Market supports conversations with dental business owners and managers who understand practice operations, purchasing behavior, patient demand, online growth, and the realities of running dental businesses in the United States."
  },
  {
    title: "Dental advisors",
    body:
      "The company brings dental business advisors into market-entry and growth discussions so manufacturers can better understand product positioning, digital demand, e-commerce potential, buyer expectations, and practical U.S. readiness."
  },
  {
    title: "International dental companies",
    body:
      "Dental Market helps international manufacturers and dental companies understand how their products, positioning, digital assets, and market-entry plans may fit U.S. buyer expectations before larger commitments."
  }
];

export const metadata: Metadata = {
  title: pageMeta.about.title,
  description: pageMeta.about.description,
  alternates: { canonical: pageMeta.about.path },
  openGraph: { title: pageMeta.about.title, description: pageMeta.about.description, url: pageMeta.about.path }
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: pageMeta.about.path }])} />
      <Hero
        title="About Dental Market"
        subtitle="Dental Market is a U.S.-based advisory and service platform connecting dental marketing, e-commerce strategy, dental business operations, and U.S. market-entry planning for international dental manufacturers."
        imageSrc="/images/team/about-hero-hussam-presentation-bw-1600.webp"
        imageAlt="Dental Market presentation on healthcare digital marketing"
        imageLabel="Dental market advisory"
        imageCaption="A practical bridge between U.S. dental business experience and international dental manufacturers."
      />
      <Breadcrumbs current="About" />

      <Section tone="white">
        <ImageFeature
          eyebrow="Why Dental Market exists"
          title="A cooperation platform built around U.S. dental business access"
          body="Dental Market was created to help organize practical advisory support between dental business managers, dentists, digital-growth operators, and international dental companies evaluating the United States. Through related digital marketing and e-commerce work with U.S. dentists, our group has access to more than 800 dental practices across the country, which helps inform practical conversations about buyer behavior, digital demand, product positioning, and market readiness."
          imageSrc="/images/dental-products/dental-lab-production-components-1200.webp"
          imageAlt="Dental lab production components arranged in rows"
          bullets={[
            "Support cooperation between dental business managers, dentists, and market-entry advisors.",
            "Use U.S. dental marketing and e-commerce experience to inform market-entry planning.",
            "Connect product discussions to a broad network of more than 800 U.S. dental practices.",
            "Keep clear boundaries: no legal, FDA, clinical, or product safety advice."
          ]}
          ctaLabel="Start Manufacturer Review"
          ctaHref="/enrollment/"
          reverse
        />
      </Section>

      <Section tone="soft">
        <div className="mb-8 max-w-4xl">
          <p className="section-kicker">Collaboration focus</p>
          <h2 className="section-heading mt-3">Where Dental Market creates practical alignment</h2>
          <p className="mt-5 body-copy">
            Dental Market focuses on the business side of U.S. dental opportunity: market validation, digital readiness,
            e-commerce planning, buyer positioning, advisory conversations, and practical next steps. The company works
            with U.S. dentists in digital marketing and e-commerce solutions and uses that business exposure to help
            manufacturers think more clearly before entering the market. Dental Market does not present itself as a
            clinical advisor, FDA consultant, legal advisor, importer, or immediate distributor.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {collaborationFocus.map((item) => (
            <ContentCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <Section tone="white">
        <div className="mb-8 max-w-4xl">
          <p className="section-kicker">Team</p>
          <h2 className="section-heading mt-3">Dental Market team</h2>
          <p className="mt-5 body-copy">
            Dental Market brings together business managers, dentists, dental market advisors, and digital-growth
            operators to support structured service conversations with companies exploring U.S. dental market entry.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member) => (
            <article key={member.name} className="group surface-card overflow-hidden p-0">
              <div className="relative aspect-[4/5] bg-[#050505]">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.alt ?? `${member.name}, ${member.role} at Dental Market`}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-5xl font-semibold text-white/80">
                    {member.initials ?? member.name.charAt(0)}
                  </div>
                )}
                <div
                  className="absolute inset-0 bg-[#050505]/10 transition duration-500 group-hover:bg-[#050505]/0"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-[#050505]/6 to-transparent transition duration-500 group-hover:from-[#050505]/34 group-hover:via-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium leading-tight text-[#050505]">{member.name}</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-wide text-dental-blue">{member.role}</p>
                <p className="mt-4 text-sm leading-6 text-clinical-muted">
                  Part of the Dental Market advisory team supporting U.S. dental business and market-entry service
                  conversations.
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-6 lg:grid-cols-3">
          <ContentCard
            eyebrow="Business identity"
            title="Dental Market"
            body="Dental Market is an assumed business name / DBA of Magic Carpet Media LLC."
          />
          <ContentCard
            eyebrow="Founder positioning"
            title="Dental digital growth and e-commerce experience"
            body="Dental Market includes digital marketing, website development, SEO, Google Ads, CRM, e-commerce strategy, and U.S. dental practice marketing experience, with access to more than 800 dental practices across the United States through related business relationships."
          />
          <ContentCard
            eyebrow="Scope"
            title="Business collaboration, not clinical consulting"
            body="Dental Market focuses on market research, digital positioning, advisory market-entry review, lead generation, and business development planning. It does not provide legal, FDA, regulatory, clinical, or product safety advice."
          />
        </div>
      </Section>
      <CTASection title="Explore U.S. dental market opportunities with the Dental Market team." />
    </>
  );
}
