import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

type MarketValidationSectionProps = {
  validationLine: string;
};

const validationPoints = [
  "Review supply presentation, packaging, instructions, and English buyer materials.",
  "Use internal non-clinical dental-market feedback for selected supplies.",
  "Clarify buying fit, buyer objections, supplier readiness, and possible cooperation paths."
];

export function MarketValidationSection({ validationLine }: MarketValidationSectionProps) {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative min-h-[34rem]">
          <div className="absolute left-0 top-0 h-[82%] w-[82%] overflow-hidden border border-[#050505] bg-[#050505]">
            <Image
              src="/images/dental-products/sterile-instrument-preparation-1200.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="object-cover opacity-[0.66] grayscale"
            />
            <div className="absolute inset-0 bg-[#050505]/38" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/64 via-[#050505]/16 to-[#050505]/5" />
          </div>

          <div className="absolute bottom-0 right-0 h-[58%] w-[56%] overflow-hidden border-[10px] border-white bg-[#050505] shadow-lift">
            <Image
              src="/images/dental-products/dental-lab-production-components-1200.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 26vw, 62vw"
              className="object-cover opacity-[0.62] grayscale"
            />
            <div className="absolute inset-0 bg-[#050505]/40" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0875ff]/16 via-[#050505]/24 to-[#050505]/60" />
          </div>

          <div className="absolute right-8 top-10 flex h-36 w-36 items-center justify-center rounded-full border border-dental-cyan/50 bg-white/95 p-4 text-center text-xs font-bold uppercase leading-5 tracking-wide text-[#050505] shadow-lift backdrop-blur">
            Review before samples
          </div>
        </div>

        <div>
          <p className="section-kicker">Buying review before investment</p>
          <h2 className="section-heading mt-4">Do not send samples or expect orders before qualification.</h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-clinical-muted">
            <p className="font-semibold text-[#050505]">{validationLine}</p>
            <p>
              Many international dental supply manufacturers spend heavily on trade shows, distributors, inventory, or
              warehousing before they understand supply fit, buyer expectations, packaging questions, and supplier
              readiness. Dental Market starts with a controlled buying review.
            </p>
          </div>
          <div className="mt-8 grid gap-0 border-y border-clinical-line">
            {validationPoints.map((point) => (
              <div key={point} className="flex gap-4 border-b border-clinical-line py-4 text-sm font-semibold text-clinical-ink last:border-b-0">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-dental-teal" aria-hidden="true" />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/work-with-dental-market/" size="lg">
              Submit Dental Supply for Buying Review
            </ButtonLink>
            <ButtonLink href="/sell-dental-supplies/" variant="secondary" size="lg">
              View Buying Instructions
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
