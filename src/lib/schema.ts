import { pageMeta, site } from "./site";

function absoluteUrl(path: string) {
  return `${site.url}${path === "/" ? "/" : `/${path.replace(/^\/+/, "")}`}`;
}

function postalAddressSchema() {
  return {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description:
      "U.S.-based dental supply sourcing review and B2B marketing support for qualified dental supply manufacturers.",
    areaServed: "United States",
    address: postalAddressSchema(),
    sameAs: []
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    description:
      "Dental supply sourcing review, buying-readiness review, market-readiness support, and separate B2B marketing services for dental supply manufacturers.",
    areaServed: "United States",
    provider: {
      "@type": "Organization",
      name: site.name,
      legalName: site.legalName,
      address: postalAddressSchema()
    },
    address: postalAddressSchema(),
    serviceType: [
      "Dental supply sourcing review",
      "Dental supply buying-readiness review",
      "Dental supply manufacturer B2B marketing",
      "Dental supply market-readiness support",
      "Distributor and dealer marketing preparation"
    ]
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function serviceSchema({
  name,
  description,
  path
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    areaServed: "United States",
    url: absoluteUrl(path),
    provider: {
      "@type": "Organization",
      name: site.name,
      legalName: site.legalName,
      url: site.url
    },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "International dental supply manufacturers"
    }
  };
}

export function canonical(path: keyof typeof pageMeta) {
  return `${site.url}${pageMeta[path].path === "/" ? "" : pageMeta[path].path}`;
}
