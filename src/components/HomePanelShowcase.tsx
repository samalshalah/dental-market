import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

const panels = [
  {
    number: "01",
    title: "Assess",
    image: "/images/dental-products/sterile-instrument-preparation-1200.webp",
    body: "Review product category, digital readiness, buyer fit, and obvious U.S. market barriers."
  },
  {
    number: "02",
    title: "Position",
    image: "/images/dental-products/restorative-dental-supplies-1200.webp",
    body: "Translate product strengths into U.S.-ready messaging, landing pages, and sales materials."
  },
  {
    number: "03",
    title: "Validate",
    image: "/images/dental-products/dental-lab-production-components-1200.webp",
    body: "Test market response before larger commitments to inventory, warehousing, or channel contracts."
  }
];

type HomePanelShowcaseProps = {
  validationLine: string;
};

export function HomePanelShowcase({ validationLine }: HomePanelShowcaseProps) {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1750px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="grid gap-4 md:grid-cols-3">
          {panels.map((panel) => (
            <article key={panel.title} className="group relative min-h-[30rem] overflow-hidden border border-[#050505] bg-[#050505]">
              <Image src={panel.image} alt="" fill sizes="(min-width: 1024px) 24vw, 92vw" className="object-cover opacity-[0.62] grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-[0.72]" />
              <div className="absolute inset-0 bg-[#050505]/36 transition duration-500 group-hover:bg-[#050505]/24" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-[#050505]/24 to-[#050505]/8" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-7xl font-bold text-white/15">{panel.number}</p>
                <h3 className="mt-3 text-3xl font-medium">{panel.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-200">{panel.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div>
          <p className="section-kicker">Market-entry clarity</p>
          <h2 className="section-heading mt-4">Do not enter the U.S. market blindly.</h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-clinical-muted">
            <p className="font-semibold text-[#050505]">
              {validationLine}
            </p>
            <p>
              Many manufacturers invest in trade shows, distributors, inventory, or warehouses before validating U.S.
              demand, pricing, messaging, and buyer interest. Dental Market helps manufacturers test and plan first with
              market research, digital positioning, lead capture, campaign planning, and practical market-entry
              recommendations.
            </p>
          </div>
          <div className="mt-9">
            <ButtonLink href="/enrollment/">Start Manufacturer Review</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
