import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

const panels = [
  {
    number: "01",
    title: "Qualify",
    image: "/images/dental-products/sterile-instrument-preparation-1200.webp",
    body: "Review product category, supplier fit, sample availability, and whether the product matches current sourcing goals."
  },
  {
    number: "02",
    title: "Review",
    image: "/images/dental-products/restorative-dental-supplies-1200.webp",
    body: "Evaluate product presentation, packaging, pricing logic, U.S. buyer fit, and internal non-clinical market feedback."
  },
  {
    number: "03",
    title: "Decide",
    image: "/images/dental-products/dental-lab-production-components-1200.webp",
    body: "Decide whether the product may move toward purchase discussion, brand cooperation, supplier partnership, improvement, or no fit."
  }
];

type HomePanelShowcaseProps = {
  validationLine: string;
};

export function HomePanelShowcase({ validationLine }: HomePanelShowcaseProps) {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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
          <p className="section-kicker">Buying review clarity</p>
          <h2 className="section-heading mt-4">Submit product information before samples or order discussion.</h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-clinical-muted">
            <p className="font-semibold text-[#050505]">
              {validationLine}
            </p>
            <p>
              Many manufacturers want to sell in the U.S. but need a clear buying path first. Dental Market starts with
              product qualification, sample control, business review, and practical market-readiness feedback before any
              purchase or cooperation discussion.
            </p>
          </div>
          <div className="mt-9">
            <ButtonLink href="/work-with-dental-market/">Submit Dental Supply for Buying Review</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
