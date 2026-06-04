import { ButtonLink } from "./ButtonLink";
import { Section } from "./Section";

type CTASectionProps = {
  title?: string;
  body?: string;
};

export function CTASection({
  title = "Ready to explore the U.S. dental market?",
  body = "Use manufacturer enrollment to share your product category, current U.S. activity, and goals. Dental Market will review the information and recommend the most practical next step for clarity, validation, or launch planning."
}: CTASectionProps) {
  return (
    <Section className="relative overflow-hidden bg-[#050505] text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-8 overflow-hidden whitespace-nowrap"
        aria-hidden="true"
      >
        <div className="marquee-track flex w-max gap-10 text-[16vw] font-bold leading-none template-outline-title">
          <span>Validate First</span>
          <span>Validate First</span>
          <span>Validate First</span>
        </div>
      </div>
      <div className="relative border border-dental-cyan/35 bg-white/5 p-8 backdrop-blur md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-dental-cyan">Validate before you scale</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-medium leading-tight tracking-normal md:text-6xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-blue-100">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/enrollment/" variant="light">
            Start Manufacturer Review
          </ButtonLink>
          <ButtonLink href="/contact/" variant="light">
            Contact Us
          </ButtonLink>
        </div>
        </div>
      </div>
    </Section>
  );
}
