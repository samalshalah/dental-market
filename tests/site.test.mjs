import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const file = (...parts) => join(root, ...parts);
const read = (...parts) => readFileSync(file(...parts), "utf8");

const activeSourceFiles = [
  "src/lib/site.ts",
  "src/lib/schema.ts",
  "src/components/Header.tsx",
  "src/components/Footer.tsx",
  "src/components/HomePathSection.tsx",
  "src/components/HomeTemplateHero.tsx",
  "src/components/Hero.tsx",
  "src/components/CTASection.tsx",
  "src/components/FormPlaceholder.tsx",
  "src/components/WorkWithJotformEmbed.tsx",
  "src/app/page.tsx",
  "src/app/sell-dental-supplies/page.tsx",
  "src/app/work-with-dental-market/page.tsx",
  "src/app/b2b-marketing/page.tsx",
  "src/app/about/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/faq/page.tsx",
  "src/app/privacy-policy/page.tsx",
  "src/app/terms-disclaimer/page.tsx"
];

function activeSource() {
  return activeSourceFiles.map((path) => read(path)).join("\n");
}

test("required static site files exist and retired public routes are removed", () => {
  [
    "next.config.mjs",
    "src/app/layout.tsx",
    "src/app/page.tsx",
    "src/app/sell-dental-supplies/page.tsx",
    "src/app/work-with-dental-market/page.tsx",
    "src/app/b2b-marketing/page.tsx",
    "src/app/about/page.tsx",
    "src/app/contact/page.tsx",
    "src/app/faq/page.tsx",
    "src/app/privacy-policy/page.tsx",
    "src/app/terms-disclaimer/page.tsx",
    "src/app/sitemap.ts",
    "src/app/robots.ts",
    "src/components/FormPlaceholder.tsx",
    "src/components/WorkWithJotformEmbed.tsx",
    "src/lib/schema.ts",
    "README.md"
  ].forEach((path) => assert.equal(existsSync(file(path)), true, `${path} should exist`));

  [
    "src/app/private-label/page.tsx",
    "src/app/dentist-feedback/page.tsx",
    "src/app/services/page.tsx",
    "src/app/enrollment/page.tsx",
    "src/app/submit-product/page.tsx",
    "src/app/sell-to-dental-market/page.tsx",
    "src/app/zh/page.tsx",
    "src/app/cn/page.tsx",
    "src/components/JotformEmbed.tsx",
    "src/lib/services.ts"
  ].forEach((path) => assert.equal(existsSync(file(path)), false, `${path} should not be a live public route now`));
});

test("site uses dental-supply sourcing-first positioning with separated CTAs", () => {
  const site = read("src/lib/site.ts");
  const home = read("src/app/page.tsx");
  const header = read("src/components/Header.tsx");

  assert.match(site, /U\.S\. Dental Supply Sourcing Review & B2B Marketing for Manufacturers/);
  assert.match(home, /We Are Sourcing Dental Supplies for the U\.S\. Market/);
  assert.match(home, /A U\.S\. Buying Gateway for Dental Supply Manufacturers/);
  assert.match(home, /Separate Service: B2B Marketing for Dental Supply Manufacturers/);
  assert.match(home, /Have Dental Supplies for the U\.S\. Market\?/);
  assert.match(site, /primaryCta: "Work With Dental Market"/);
  assert.match(
    site,
    /label: "Home"[\s\S]*label: "Sell Dental Supplies"[\s\S]*label: "B2B Marketing"[\s\S]*label: "About"[\s\S]*label: "Contact"/
  );
  assert.match(header, /\/work-with-dental-market\//);
  assert.doesNotMatch(site, /label: "Private Label"|label: "Dentist Feedback"|label: "Services"|label: "Chinese"|label: "中文"|label: "Submit Product"/);
});

test("metadata uses supply-focused titles and canonical paths", () => {
  const site = read("src/lib/site.ts");
  const sitemap = read("src/app/sitemap.ts");

  assert.match(site, /Dental Market \| Sourcing Dental Supplies for the U\.S\. Market/);
  assert.match(site, /Sell Dental Supplies to Dental Market \| Buying Review/);
  assert.match(site, /B2B Marketing, Websites & SEO for Dental Supply Manufacturers \| Dental Market/);
  assert.match(site, /About Dental Market \| U\.S\. Dental Supply Sourcing Group/);
  assert.match(site, /Contact Dental Market \| Submit Dental Supplies or Request B2B Marketing/);
  assert.match(site, /FAQ for Dental Supply Manufacturers \| Dental Market/);
  assert.match(site, /path: "\/sell-dental-supplies\/"/);
  assert.match(site, /path: "\/work-with-dental-market\/"/);
  assert.match(site, /path: "\/faq\/"/);
  assert.doesNotMatch(sitemap, /privateLabel|dentistFeedback|services|enrollment/);
});

test("buying review page includes qualification, sample control, and outcome language", () => {
  const page = read("src/app/sell-dental-supplies/page.tsx");

  assert.match(page, /Sell Dental Supplies to Dental Market/);
  assert.match(page, /Who Should Submit Supplies\?/);
  assert.match(page, /Supplies We Are Interested In/);
  assert.match(page, /Buying Instructions for Manufacturers/);
  assert.match(page, /Manufacturers should not send samples until Dental Market confirms/);
  assert.match(page, /approximately 10 units per product/);
  assert.match(page, /Internal Dental-Market Feedback/);
  assert.match(page, /Review Outcomes/);
  assert.match(page, /Submit Dental Supply for Buying Review/);
  assert.match(page, /serviceSchema/);
});

test("FAQ content is dedicated and not duplicated on home", () => {
  const home = read("src/app/page.tsx");
  const faq = read("src/app/faq/page.tsx");

  assert.doesNotMatch(home, /FAQSection|faqSchema|Questions From/);
  assert.match(faq, /FAQ for Dental Supply Manufacturers/);
  assert.match(faq, /Questions From Dental Supply Manufacturers/);
  assert.match(faq, /faqSchema/);
  assert.match(faq, /buyingFaqItems/);
});

test("B2B marketing page is clearly separated from buying review", () => {
  const page = read("src/app/b2b-marketing/page.tsx");

  assert.match(page, /B2B Marketing for Dental Supply Manufacturers/);
  assert.match(page, /This service is separate from our dental supply buying review process/);
  assert.match(page, /Common B2B Marketing Problems/);
  assert.match(page, /Websites, SEO, Product Pages & Follow-Up Systems/);
  assert.match(page, /Websites Built for U\.S\. Dental Buyers/);
  assert.match(page, /Turn Exhibition Contacts Into Follow-Up Conversations/);
  assert.match(page, /Request B2B Marketing Support/);
});

test("work with page uses the Work With Dental Market Jotform and path choices", () => {
  const page = read("src/app/work-with-dental-market/page.tsx");
  const embed = read("src/components/WorkWithJotformEmbed.tsx");

  assert.match(page, /Work With Dental Market/);
  assert.match(page, /Submit dental supplies for buying review/);
  assert.match(page, /Request B2B marketing support/);
  assert.match(page, /Both/);
  assert.match(page, /Not sure/);
  assert.match(page, /Dental Market Inquiry Form/);
  assert.match(page, /WorkWithJotformEmbed/);
  assert.match(page, /Manufacturers[\s\S]*should not send samples until Dental Market confirms/);
  assert.match(embed, /JotFormIFrame-261561017615048/);
  assert.match(embed, /title="Work With Dental Market"/);
  assert.match(embed, /https:\/\/form\.jotform\.com\/261561017615048/);
  assert.match(embed, /jotformEmbedHandler/);
});

test("about and contact explain the company, team, and choose-path UX", () => {
  const about = read("src/app/about/page.tsx");
  const contact = read("src/app/contact/page.tsx");

  assert.match(about, /A U\.S\. Dental Supply Group With Business, Marketing, and Dental Perspective/);
  assert.match(about, /Hussam Hadi/);
  assert.match(about, /Nawar Alsaad/);
  assert.match(about, /Internal Product Review Advisor/);
  assert.match(about, /60\+ U\.S\. dentist and dental-professional network/);
  assert.match(about, /more than 800 dental practices/);
  assert.match(contact, /Choose the path that fits your goal/);
  assert.match(contact, /Submit Dental Supply for Buying Review/);
  assert.match(contact, /Request B2B Marketing Support/);
  assert.match(contact, /site\.email/);
  assert.match(contact, /site\.phoneDisplay/);
  assert.match(contact, /site\.wechat/);
});

test("Cloudflare redirects preserve retired URLs without keeping retired route files", () => {
  const redirects = read("public/_redirects");

  assert.match(redirects, /\/private-label \/sell-dental-supplies\/ 301/);
  assert.match(redirects, /\/dentist-feedback \/sell-dental-supplies\/ 301/);
  assert.match(redirects, /\/services \/sell-dental-supplies\/ 301/);
  assert.match(redirects, /\/sell-to-dental-market \/sell-dental-supplies\/ 301/);
  assert.match(redirects, /\/enrollment \/work-with-dental-market\/ 301/);
  assert.match(redirects, /\/submit-product \/work-with-dental-market\/ 301/);
});

test("restricted positioning phrases are absent from active source", () => {
  const combined = activeSource();

  [
    /Get a Dentist Feedback Report/i,
    /Dentist Feedback Reports/i,
    /dentist approved/i,
    /clinically approved/i,
    /FDA approved/i,
    /guaranteed distributors/i,
    /we buy all products/i,
    /we guarantee purchase/i,
    /send samples immediately/i,
    /official U\.S\. Agent/i,
    /direct-to-consumer/i,
    /e-commerce strategy as a main pillar/i,
    /generic digital growth/i,
    /vague market-entry/i,
    /Chinese Version/i,
    /中文/
  ].forEach((pattern) => assert.doesNotMatch(combined, pattern));

  assert.match(combined, /Product review does not guarantee purchase orders/);
  assert.match(combined, /structured non-clinical market feedback only/);
  assert.match(combined, /60\+ U\.S\. dentist and dental-professional network/);
  assert.match(combined, /Dental Market does not provide legal, FDA, regulatory/);
});

test("configuration supports static export and Cloudflare Pages", () => {
  const nextConfig = read("next.config.mjs");
  const readme = read("README.md");

  assert.match(nextConfig, /output:\s*["']export["']/);
  assert.match(readme, /Cloudflare Pages/);
  assert.match(readme, /npm run build/);
  assert.match(readme, /\/sell-dental-supplies\//);
  assert.match(readme, /\/work-with-dental-market\//);
});
