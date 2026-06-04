import { services } from "./site";

export type ServiceDetail = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  image: string;
  imageAlt: string;
  meaning: string;
  matters: string;
  receive: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  benefits: string[];
  process: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const detailMap: Record<string, Omit<ServiceDetail, "title" | "meaning" | "matters" | "receive">> = {
  "Market Research & Competitive Analysis": {
    slug: "market-research-competitive-analysis",
    seoTitle: "Dental Product Market Research USA | Dental Market",
    metaDescription:
      "U.S. dental product market research and competitive analysis for international dental manufacturers evaluating demand, pricing, positioning, and buyer readiness.",
    intro:
      "Dental Market helps international dental manufacturers understand the visible U.S. market before committing to inventory, warehousing, distributors, or broad sales activity.",
    image: "/images/dental-products/dental-lab-production-components-1600.webp",
    imageAlt: "Dental lab production components arranged in rows",
    primaryKeyword: "dental product market research USA",
    secondaryKeywords: ["U.S. dental market research", "dental competitor analysis USA", "dental supplier market validation"],
    benefits: [
      "Clarifies whether the product category has visible U.S. demand signals.",
      "Identifies competitor positioning, pricing signals, and buyer language.",
      "Helps manufacturers decide whether to move into planning, validation, or repositioning."
    ],
    process: [
      "Review product category, current website, and target buyer assumptions.",
      "Map visible competitors, search behavior, category language, and product proof points.",
      "Summarize readiness gaps, market risks, and recommended next steps."
    ],
    faqs: [
      {
        question: "Is this a full regulatory or FDA review?",
        answer:
          "No. This service focuses on market research and competitive positioning. Dental Market does not provide FDA, legal, import, clinical, or product safety advice."
      },
      {
        question: "What does the research help a manufacturer decide?",
        answer:
          "It helps determine whether the U.S. category deserves deeper validation, whether positioning needs adjustment, and what sales or digital path appears most practical."
      }
    ]
  },
  "Digital Launch Planning": {
    slug: "digital-launch-planning",
    seoTitle: "Dental Product Launch USA Strategy | Dental Market",
    metaDescription:
      "Digital launch planning for dental manufacturers entering the U.S. market, including positioning, landing pages, campaign direction, and launch priorities.",
    intro:
      "A U.S. dental product launch needs clear buyer messaging, focused digital assets, and a practical sequence before sales activity begins.",
    image: "/images/dental-products/hero-dental-instruments-blue-1600.webp",
    imageAlt: "Dental instruments arranged on a blue sterile surface",
    primaryKeyword: "dental product launch USA",
    secondaryKeywords: ["dental manufacturer marketing USA", "dental digital launch strategy", "U.S. dental market entry"],
    benefits: [
      "Turns product strengths into a launch message U.S. buyers can understand.",
      "Prioritizes website, landing page, campaign, and sales enablement needs.",
      "Reduces scattered launch activity by defining a 60 to 90 day path."
    ],
    process: [
      "Review products, buyer segments, proof points, and current digital assets.",
      "Define positioning, landing page structure, lead path, and channel direction.",
      "Create a launch roadmap with practical priorities and readiness gaps."
    ],
    faqs: [
      {
        question: "Is this for manufacturers that already sell in the United States?",
        answer:
          "It can support both new entrants and manufacturers with limited U.S. activity that need clearer digital positioning and launch priorities."
      },
      {
        question: "Does this include campaign management?",
        answer:
          "Digital launch planning can prepare the roadmap. Campaign execution or management can be scoped separately after the assessment."
      }
    ]
  },
  "Lead Generation Strategy": {
    slug: "lead-generation-strategy",
    seoTitle: "U.S. Dental Lead Generation for Manufacturers | Dental Market",
    metaDescription:
      "Lead generation strategy for international dental manufacturers testing U.S. buyer interest through landing pages, campaigns, outreach, and lead tracking.",
    intro:
      "Lead generation strategy helps dental manufacturers test whether U.S. buyers respond before investing heavily in inventory, sales teams, or distribution.",
    image: "/images/dental-products/orthodontic-bands-instruments-1600.webp",
    imageAlt: "Colorful orthodontic bands and dental instruments on a clean surface",
    primaryKeyword: "U.S. dental lead generation",
    secondaryKeywords: ["dental B2B marketing USA", "dental manufacturer lead generation", "dental supplier demand validation"],
    benefits: [
      "Defines buyer segments and lead qualification criteria before traffic starts.",
      "Connects campaign planning with landing pages, forms, and follow-up logic.",
      "Uses market response to guide the next U.S. investment decision."
    ],
    process: [
      "Clarify buyer groups, offer structure, and campaign assumptions.",
      "Plan landing page, lead capture, tracking, and follow-up requirements.",
      "Review early response signals and recommend next steps."
    ],
    faqs: [
      {
        question: "Can Dental Market guarantee leads or sales?",
        answer:
          "No. Dental Market does not guarantee results. The goal is to create a structured validation path and measure market response."
      },
      {
        question: "Who can be targeted?",
        answer:
          "Potential audiences may include dealers, labs, clinics, group practices, DSOs, procurement teams, private label buyers, or category-specific buyers depending on the product."
      }
    ]
  },
  "Website & SEO Strategy": {
    slug: "website-seo-strategy",
    seoTitle: "Dental Supply Manufacturer Website & SEO Strategy USA",
    metaDescription:
      "Website and SEO strategy for international dental manufacturers preparing U.S.-focused pages, keyword direction, conversion paths, and buyer trust signals.",
    intro:
      "A manufacturer’s website often shapes the first U.S. buyer impression. Dental Market helps align site structure, SEO, and conversion paths with U.S. market expectations.",
    image: "/images/dental-products/restorative-dental-supplies-1600.webp",
    imageAlt: "Restorative dental supplies and shade tabs in a dental office",
    primaryKeyword: "dental supply manufacturer digital marketing",
    secondaryKeywords: ["dental manufacturer SEO USA", "dental product website strategy", "dental manufacturer marketing USA"],
    benefits: [
      "Improves clarity for buyers who need to understand products quickly.",
      "Creates SEO themes around product categories, use cases, and buyer intent.",
      "Builds stronger conversion paths for lead capture and distributor conversations."
    ],
    process: [
      "Review existing website structure, content, trust signals, and conversion paths.",
      "Map keyword themes, page priorities, and U.S.-focused messaging needs.",
      "Recommend content, landing page, and technical SEO improvements."
    ],
    faqs: [
      {
        question: "Do manufacturers need a separate U.S. website?",
        answer:
          "Not always. Some need a U.S.-focused landing page or section first. The right approach depends on product category, market stage, and existing website quality."
      },
      {
        question: "Is SEO enough for market entry?",
        answer:
          "SEO is useful, but it is usually one part of a broader launch plan that may include research, paid campaigns, outreach, and distributor-readiness work."
      }
    ]
  },
  "Google Ads & Campaign Planning": {
    slug: "google-ads-campaign-planning",
    seoTitle: "Google Ads Planning for Dental Manufacturers USA",
    metaDescription:
      "Google Ads and campaign planning for dental manufacturers testing U.S. demand, buyer intent, landing page messaging, and lead capture strategy.",
    intro:
      "Paid search and campaign planning can help manufacturers test demand faster, but only when the message, landing page, tracking, and buyer path are clear.",
    image: "/images/dental-products/dental-accessories-assortment-1600.webp",
    imageAlt: "Dental accessories, brushes, model jaw, and tools on a table",
    primaryKeyword: "dental manufacturer marketing USA",
    secondaryKeywords: ["Google Ads dental manufacturers", "dental lead generation USA", "dental campaign planning"],
    benefits: [
      "Tests buyer intent and product messaging faster than waiting for organic traffic.",
      "Connects paid traffic to landing pages and measurable lead capture.",
      "Helps avoid wasted spend from unclear targeting or weak conversion paths."
    ],
    process: [
      "Review product category, landing page readiness, and campaign goals.",
      "Map keyword themes, audience logic, conversion tracking, and budget assumptions.",
      "Create a launch roadmap for campaign testing and response analysis."
    ],
    faqs: [
      {
        question: "Should manufacturers start with Google Ads immediately?",
        answer:
          "Usually not until the product positioning, landing page, lead tracking, and compliance-safe claims are reviewed."
      },
      {
        question: "Does Dental Market manage ad accounts?",
        answer:
          "Campaign setup guidance and management can be scoped based on readiness, product category, and validation goals."
      }
    ]
  },
  "Distributor Readiness": {
    slug: "distributor-readiness",
    seoTitle: "Dental Distributor Readiness for Manufacturers USA",
    metaDescription:
      "Distributor-readiness planning for international dental manufacturers preparing U.S. positioning, proof points, buyer objections, and channel strategy.",
    intro:
      "Distributor conversations are stronger when the manufacturer can show market logic, positioning, digital proof, and a practical channel story.",
    image: "/images/dental-products/sterile-metal-instruments-1600.webp",
    imageAlt: "Sterile metal dental instruments in clinical storage",
    primaryKeyword: "dental distributor readiness",
    secondaryKeywords: ["international dental manufacturer U.S. partner", "dental export to USA strategy", "dental equipment manufacturer USA strategy"],
    benefits: [
      "Clarifies the story distributors need before serious conversations.",
      "Identifies missing materials, buyer objections, and digital trust gaps.",
      "Helps manufacturers approach channel partners with better preparation."
    ],
    process: [
      "Review product line, U.S. positioning, and current distributor materials.",
      "Identify market proof, objections, channel fit, and digital readiness gaps.",
      "Prepare recommendations for distributor, dealer, direct, or hybrid paths."
    ],
    faqs: [
      {
        question: "Is Dental Market a distributor?",
        answer:
          "Dental Market is not claiming to be an immediate distributor. The company helps manufacturers prepare for distributor or partner conversations."
      },
      {
        question: "What materials may be needed?",
        answer:
          "Manufacturers may need clearer product pages, category positioning, sales sheets, pricing logic, lead data, compliance review by qualified advisors, and follow-up systems."
      }
    ]
  },
  "E-Commerce & Fulfillment Planning": {
    slug: "ecommerce-fulfillment-planning",
    seoTitle: "Dental Manufacturer E-Commerce Strategy USA",
    metaDescription:
      "E-commerce and fulfillment planning for dental manufacturers evaluating direct sales, distributors, marketplaces, and U.S. fulfillment paths.",
    intro:
      "Some dental manufacturers can test direct or hybrid sales, but e-commerce decisions should be connected to category fit, fulfillment reality, and buyer expectations.",
    image: "/images/dental-products/orthodontic-supplies-tray-1600.webp",
    imageAlt: "Orthodontic bands and dental instruments on a tray",
    primaryKeyword: "dental manufacturer e-commerce strategy",
    secondaryKeywords: ["dental supply ecommerce USA", "dental fulfillment planning", "dental product launch USA"],
    benefits: [
      "Compares direct, distributor, marketplace, and hybrid options before setup costs.",
      "Highlights fulfillment and buyer support questions that affect feasibility.",
      "Connects website, checkout, lead capture, and sales model decisions."
    ],
    process: [
      "Review product category, order complexity, buyer type, and fulfillment assumptions.",
      "Compare direct, marketplace, distributor, or hybrid model fit.",
      "Recommend practical website, lead capture, checkout, and fulfillment planning steps."
    ],
    faqs: [
      {
        question: "Should every manufacturer sell directly online?",
        answer:
          "No. Some products require distributor support, quote-based selling, technical education, or regulatory review before direct e-commerce makes sense."
      },
      {
        question: "Can this include warehouse planning?",
        answer:
          "Dental Market can help evaluate planning questions, but manufacturers should use qualified logistics, import, tax, and legal advisors for operational decisions."
      }
    ]
  },
  "Private Label Opportunity Review": {
    slug: "private-label-opportunity-review",
    seoTitle: "Dental Private Label Opportunity Review USA",
    metaDescription:
      "Private label and OEM opportunity review for dental manufacturers evaluating U.S. brand partnership, buyer fit, positioning, and outreach strategy.",
    intro:
      "Some dental factories may enter the U.S. market more effectively through private label, OEM, or brand partnership conversations instead of launching their own brand first.",
    image: "/images/dental-products/dental-polishing-burs-1600.webp",
    imageAlt: "Multi-colored dental buffing and polishing burs",
    primaryKeyword: "private label dental product companies",
    secondaryKeywords: ["dental OEM USA", "dental private label manufacturer", "international dental manufacturer U.S. partner"],
    benefits: [
      "Evaluates whether private label or OEM positioning may fit the product category.",
      "Clarifies buyer segments and proof points for partnership conversations.",
      "Helps avoid forcing a direct brand launch when partnership may be more practical."
    ],
    process: [
      "Review manufacturing capabilities, product category, and current sales materials.",
      "Assess potential private label, OEM, or U.S. brand partner fit.",
      "Recommend positioning, outreach themes, and preparation priorities."
    ],
    faqs: [
      {
        question: "Is private label always easier than launching a brand?",
        answer:
          "No. It depends on product quality, category demand, capacity, pricing, documentation, buyer fit, and the manufacturer’s ability to support U.S. expectations."
      },
      {
        question: "Does Dental Market find buyers directly?",
        answer:
          "Dental Market can help plan positioning, outreach, and validation. Any direct buyer development would be scoped separately based on readiness and category fit."
      }
    ]
  }
};

export const serviceDetails: ServiceDetail[] = services.map((service) => ({
  ...detailMap[service.title],
  title: service.title,
  meaning: service.meaning,
  matters: service.matters,
  receive: service.receive
}));
