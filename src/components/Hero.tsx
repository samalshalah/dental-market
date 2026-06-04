import { ButtonLink } from "./ButtonLink";
import { MarketValidationVisual } from "./MarketValidationVisual";
import { Section } from "./Section";
import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  trustLine?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageLabel?: string;
  imageCaption?: string;
  titleSize?: "default" | "compact";
};

export function Hero({
  title,
  subtitle,
  eyebrow,
  primaryLabel = "Start Manufacturer Review",
  primaryHref = "/enrollment/",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact/",
  trustLine,
  imageSrc,
  imageLabel = "Market entry planning",
  imageCaption = "Research, positioning, and validation before U.S. launch investment.",
  titleSize = "default"
}: HeroProps) {
  const trustItems = trustLine ? trustLine.split("|").map((item) => item.trim()).filter(Boolean) : [];
  const titleClass =
    titleSize === "compact"
      ? "text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl"
      : "text-hero-mobile font-medium text-white sm:text-6xl lg:text-hero";

  return (
    <Section className="relative overflow-hidden bg-[#050505] pt-32 text-white sm:pt-36 lg:pt-60">
      {imageSrc ? (
        <div className="absolute inset-0" aria-hidden="true">
          <Image src={imageSrc} alt="" fill priority sizes="100vw" className="object-cover opacity-70 grayscale" />
          <div className="absolute inset-0 bg-[#050505]/46" />
          <div className="absolute inset-0 bg-gradient-to-br from-dental-blue/18 via-[#050505]/26 to-dental-cyan/12" />
        </div>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-10 overflow-hidden whitespace-nowrap" aria-hidden="true">
        <div className="marquee-track flex w-max gap-10 text-[17vw] font-bold leading-none template-outline-title">
          <span>{imageLabel}</span>
          <span>Dental Market</span>
          <span>{imageLabel}</span>
          <span>Dental Market</span>
        </div>
      </div>
      <div className="relative mx-auto max-w-[1100px] pb-10 text-center lg:pb-20">
          {eyebrow ? <p className="mb-4 text-xs font-bold uppercase tracking-wide text-blue-200">{eyebrow}</p> : null}
          <h1 className={titleClass}>{title}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-200">{subtitle}</p>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-semibold uppercase tracking-wide text-blue-100">{imageCaption}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={primaryHref} size="lg">
              {primaryLabel}
            </ButtonLink>
            <ButtonLink href={secondaryHref} variant="light">
              {secondaryLabel}
            </ButtonLink>
          </div>
          {trustItems.length > 0 ? (
            <p className="mx-auto mt-8 max-w-3xl border-t border-white/20 pt-5 text-xs font-bold uppercase tracking-wide leading-6 text-blue-100">
              {trustItems.join(" | ")}
            </p>
          ) : null}
        {!imageSrc ? <MarketValidationVisual /> : null}
      </div>
    </Section>
  );
}
