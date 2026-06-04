import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

type HomeTemplateHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  trustLine: string;
};

export function HomeTemplateHero({ eyebrow, title, subtitle, trustLine }: HomeTemplateHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-5 pb-16 pt-32 text-white sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-60">
      <div className="absolute inset-0 opacity-[0.62]" aria-hidden="true">
        <Image
          src="/images/dental-products/hero-dental-instruments-blue-1600.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-[#050505]/44" />
        <div className="absolute inset-0 bg-gradient-to-br from-dental-blue/16 via-[#050505]/24 to-dental-cyan/10" />
      </div>

      <div className="relative mx-auto max-w-[1750px]">
        <div className="hidden overflow-hidden whitespace-nowrap border-y border-white/15 py-5 sm:block" aria-hidden="true">
          <div className="marquee-track flex w-max gap-10">
            {["Dental", "Market", "Validation", "Entry", "Growth", "Dental", "Market", "Validation", "Entry", "Growth"].map(
              (item, index) => (
                <span key={`${item}-${index}`} className="text-[15vw] font-bold leading-none text-white/10 lg:text-[9vw]">
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div className="mt-4 grid gap-10 sm:mt-14 lg:grid-cols-[1fr_24rem] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-dental-cyan">{eyebrow}</p>
            <h1 className="mt-5 max-w-6xl text-hero-mobile font-medium text-white sm:text-5xl lg:text-[5rem] lg:leading-none">
              {title}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-200">{subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/enrollment/" variant="light" size="lg">
                Start Manufacturer Review
              </ButtonLink>
              <ButtonLink href="/contact/" variant="light" size="lg">
                Contact Us
              </ButtonLink>
            </div>
          </div>

          <aside className="border border-white/20 bg-white/10 p-7 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-wide text-dental-cyan">Expertise advice for manufacturers</p>
            <p className="mt-5 text-2xl font-medium leading-tight">
              Validate demand before U.S. distributors, inventory, or warehousing.
            </p>
          </aside>
        </div>

        <p className="mt-10 border-t border-white/15 pt-5 text-xs font-bold uppercase tracking-wide leading-6 text-blue-100">
          {trustLine}
        </p>
      </div>
    </section>
  );
}
