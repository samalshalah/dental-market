import { ButtonLink } from "./ButtonLink";
import { Section } from "./Section";

type CTASectionProps = {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  eyebrow?: string;
};

export function CTASection({
  title = "Have dental supplies for the U.S. market?",
  body = "Submit your product information first. If your supply item fits our current sourcing goals, Dental Market may invite you to send samples and continue through the buying review process.",
  primaryLabel = "Work With Dental Market",
  primaryHref = "/work-with-dental-market/",
  secondaryLabel = "Contact Dental Market",
  secondaryHref = "/contact/",
  eyebrow = "Start with supply submission"
}: CTASectionProps) {
  return (
    <Section className="relative overflow-hidden bg-[#050505] text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-8 overflow-hidden whitespace-nowrap"
        aria-hidden="true"
      >
        <div className="marquee-track flex w-max gap-10 text-[16vw] font-bold leading-none template-outline-title">
          <span>Dental Market</span>
          <span>Submit Supplies</span>
          <span>Dental Market</span>
        </div>
      </div>
      <div className="relative border border-dental-cyan/35 bg-white/5 p-8 backdrop-blur md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-dental-cyan">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-normal md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-2xl text-blue-100">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref} variant="light">
              {primaryLabel}
            </ButtonLink>
            <ButtonLink href={secondaryHref} variant="light">
              {secondaryLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
