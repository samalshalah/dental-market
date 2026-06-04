import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

type MarketValidationSectionProps = {
  validationLine: string;
};

const validationPoints = [
  "Review category demand and competitor positioning before U.S. launch spend.",
  "Clarify pricing signals, buyer language, and digital readiness gaps.",
  "Test lead capture and buyer interest before inventory, warehousing, or distributor commitments."
];

export function MarketValidationSection({ validationLine }: MarketValidationSectionProps) {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1750px] gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
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
            Validate before U.S. investment
          </div>
        </div>

        <div>
          <p className="section-kicker">Market validation before investment</p>
          <h2 className="section-heading mt-4">Do not enter the U.S. market blindly.</h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-clinical-muted">
            <p className="font-semibold text-[#050505]">{validationLine}</p>
            <p>
              Many international dental manufacturers spend heavily on trade shows, distributors, inventory, or
              warehousing before they understand U.S. demand, buyer expectations, category language, pricing pressure,
              and digital readiness. Dental Market helps manufacturers test and plan first.
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
            <ButtonLink href="/enrollment/" size="lg">
              Start Manufacturer Review
            </ButtonLink>
            <ButtonLink href="/us-dental-market-research/" variant="secondary" size="lg">
              View Market Research
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
