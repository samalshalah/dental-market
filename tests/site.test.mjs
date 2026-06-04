import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();
const file = (...parts) => join(root, ...parts);
const read = (...parts) => readFileSync(file(...parts), "utf8");

test("required static site files exist", () => {
  [
    "next.config.mjs",
    "src/app/layout.tsx",
    "src/app/page.tsx",
    "src/app/services/page.tsx",
    "src/app/us-market-entry-packages/page.tsx",
    "src/app/enrollment/page.tsx",
    "src/app/about/page.tsx",
    "src/app/contact/page.tsx",
    "src/app/us-dental-market-research/page.tsx",
    "src/app/privacy-policy/page.tsx",
    "src/app/terms-disclaimer/page.tsx",
    "src/app/sitemap.ts",
    "src/app/robots.ts",
    "src/components/JotformEmbed.tsx",
    "src/lib/schema.ts",
    "README.md"
  ].forEach((path) => assert.equal(existsSync(file(path)), true, `${path} should exist`));
});

test("U.S. dental market research page is SEO-complete", () => {
  const pagePath = "src/app/us-dental-market-research/page.tsx";
  assert.equal(existsSync(file(pagePath)), true, `${pagePath} should exist`);

  const page = read(pagePath);
  const visibleText = page
    .replace(/<[^>]+>/g, " ")
    .replace(/[{}()[\]`"'.,;:!?/\\|&<>+=_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = visibleText.split(" ").filter(Boolean).length;

  assert.match(page, /U\.S\. Dental Market Research for International Manufacturers/);
  assert.doesNotMatch(page, /FAQSection/);
  assert.doesNotMatch(page, /faqSchema/);
  assert.match(page, /serviceSchema/);
  assert.match(page, /\/services\//);
  assert.match(page, /\/services\/#market-entry-program/);
  assert.match(page, /\/enrollment\//);
  assert.ok(wordCount >= 1000, `expected at least 1000 words, found ${wordCount}`);
});

test("site includes core positioning, legal, and compliance language", () => {
  const home = read("src/app/page.tsx");
  const about = read("src/app/about/page.tsx");
  const terms = read("src/app/terms-disclaimer/page.tsx");
  const site = read("src/lib/site.ts");

  assert.match(home, /Helping Dental Manufacturers Understand and Enter the U\.S\. Market/);
  assert.match(home, /Before investing in U\.S\. inventory, distributors, or warehousing, validate the market first\./);
  assert.match(site, /U\.S\. Market Entry & Digital Growth for Dental Manufacturers/);
  assert.match(about, /assumed business name \/ DBA of Magic Carpet Media LLC/);
  assert.match(terms, /does not provide legal, medical, clinical, FDA, regulatory, import, customs, tax, or product safety advice/);
});

test("configuration supports static export and Cloudflare Pages", () => {
  const nextConfig = read("next.config.mjs");
  const readme = read("README.md");

  assert.match(nextConfig, /output:\s*["']export["']/);
  assert.match(readme, /Cloudflare Pages/);
  assert.match(readme, /npm run build/);
});

test("modern dental design system tokens and reusable components exist", () => {
  const tailwind = read("tailwind.config.ts");
  const globals = read("src/app/globals.css");
  const home = read("src/app/page.tsx");
  const hero = read("src/components/Hero.tsx");

  [
    "src/components/ContentCard.tsx",
    "src/components/TrustBar.tsx",
    "src/components/MarketValidationVisual.tsx"
  ].forEach((path) => assert.equal(existsSync(file(path)), true, `${path} should exist`));

  assert.match(tailwind, /dental/);
  assert.match(tailwind, /surface/);
  assert.match(tailwind, /clinical/);
  assert.match(tailwind, /card/);
  assert.match(globals, /\.surface-card/);
  assert.match(globals, /\.section-kicker/);
  assert.match(hero, /MarketValidationVisual/);
  assert.match(home, /ContentCard/);
});

test("homepage includes enhanced conversion, process, and internal links", () => {
  const home = read("src/app/page.tsx");

  assert.match(home, /How Dental Market Helps Manufacturers Validate the U\.S\. Market/);
  assert.match(home, /Start with a manufacturer review before choosing a package/);
  assert.match(home, /What happens after enrollment/);
  assert.match(home, /Get clarity before you choose a U\.S\. path/);
  assert.doesNotMatch(home, /Frequently Asked Questions/);
  assert.doesNotMatch(home, /FAQSection/);
  assert.match(home, /RelatedLinks/);
  assert.match(home, /\/us-dental-market-research\//);
  assert.match(home, /\/services\/#market-entry-program/);
  assert.match(home, /\/services\/#engagement-options/);
  assert.match(home, /\/us-market-entry-packages\//);
  assert.match(home, /\/enrollment\//);
});

test("package landing page explains the two-path offer", () => {
  const pagePath = "src/app/us-market-entry-packages/page.tsx";
  assert.equal(existsSync(file(pagePath)), true, `${pagePath} should exist`);

  const page = read(pagePath);
  const site = read("src/lib/site.ts");

  assert.match(site, /packages:/);
  assert.match(page, /Choose the Right U\.S\. Market Path for Your Dental Products/);
  assert.match(page, /U\.S\. Market Validation/);
  assert.match(page, /U\.S\. Market Entry/);
  assert.match(page, /Start Manufacturer Review/);
  assert.doesNotMatch(page, /faqSchema/);
  assert.match(page, /serviceSchema/);
  assert.match(page, /does not provide legal, FDA, regulatory, clinical, customs, tax, import, product safety, or medical/);
});

test("services page includes custom engagement options instead of public pricing", () => {
  const site = read("src/lib/site.ts");
  const page = read("src/app/services/page.tsx");

  assert.doesNotMatch(site, /\$|Starting at|\/month|2,500|5,000|7,500/);
  assert.match(site, /U\.S\. Market Validation/);
  assert.match(site, /U\.S\. Market Entry/);
  assert.doesNotMatch(site, /90-Day U\.S\. Digital Launch Pilot/);
  assert.match(page, /Start Manufacturer Review/);
  assert.match(page, /Two simple packages: validate first, then enter with clarity/);
  assert.match(page, /\/us-market-entry-packages\//);
  assert.match(page, /Every engagement is scoped after reviewing/);
  assert.match(page, /Dental Market Access Program/);
});

test("homepage uses a simplified executive presentation instead of dense card grids", () => {
  const home = read("src/app/page.tsx");
  const hero = read("src/components/Hero.tsx");
  const visual = read("src/components/MarketValidationVisual.tsx");

  assert.doesNotMatch(home, /CardGrid/);
  assert.doesNotMatch(home, /TrustBar/);
  assert.match(hero, /MarketValidationVisual/);
  assert.match(visual, /One clear path before U\.S\. investment/);
  assert.match(home, /Market Research/);
  assert.match(home, /Digital Positioning/);
  assert.match(home, /Lead Generation Test/);
  assert.match(home, /Distributor Readiness/);
});
