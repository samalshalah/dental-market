import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

type HomeTemplateHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function HomeTemplateHero({
  eyebrow,
  title,
  subtitle,
  primaryLabel = "Work With Dental Market",
  primaryHref = "/work-with-dental-market/",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact/"
}: HomeTemplateHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#050505] pb-16 pt-32 text-white sm:pt-32 lg:pb-16 lg:pt-40">
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

      <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-6 lg:px-10 xl:px-12">
        <div className="max-w-[1180px]">
          <p className="text-xs font-bold uppercase tracking-wide text-dental-cyan">{eyebrow}</p>
          <h1 className="mt-4 text-[1.95rem] font-medium leading-[1.08] text-white sm:text-[2.55rem] lg:text-[3.45rem] lg:leading-[1.04] xl:text-[3.95rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-[820px] text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">{subtitle}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref} variant="light" size="lg">
              {primaryLabel}
            </ButtonLink>
            <ButtonLink href={secondaryHref} variant="light" size="lg">
              {secondaryLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
