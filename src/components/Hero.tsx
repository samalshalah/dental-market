import { ButtonLink } from "./ButtonLink";
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
  variant?: "page" | "home";
};

export function Hero({
  title,
  subtitle,
  eyebrow,
  primaryLabel = "Work With Dental Market",
  primaryHref = "/work-with-dental-market/",
  secondaryLabel = "Contact Dental Market",
  secondaryHref = "/contact/",
  trustLine,
  imageSrc,
  imageLabel = "Buying review",
  imageCaption = "Structured product sourcing review and separate B2B marketing support for dental manufacturers.",
  titleSize = "default",
  variant = "page"
}: HeroProps) {
  const trustItems = trustLine ? trustLine.split("|").map((item) => item.trim()).filter(Boolean) : [];
  const titleClass =
    titleSize === "compact"
      ? "text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-[2.85rem]"
      : "text-hero-mobile font-medium text-white sm:text-5xl lg:text-hero";
  const heroSizeClass =
    variant === "home"
      ? "min-h-[640px] pt-28 sm:pt-32 lg:pt-40"
      : "min-h-[560px] pt-24 sm:min-h-[600px] sm:pt-28 lg:pt-32";
  const contentSpacingClass = variant === "home" ? "pb-10 lg:pb-16" : "pb-8 lg:pb-12";

  return (
    <Section className={`relative overflow-hidden bg-[#050505] text-white ${heroSizeClass}`}>
      {imageSrc ? (
        <div className="absolute inset-0" aria-hidden="true">
          <Image src={imageSrc} alt="" fill priority sizes="100vw" className="object-cover opacity-[0.68] grayscale" />
          <div className="absolute inset-0 bg-[#050505]/42" />
          <div className="absolute inset-0 bg-gradient-to-br from-dental-blue/18 via-[#050505]/28 to-dental-cyan/12" />
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
      <div className={`relative max-w-[980px] ${contentSpacingClass}`}>
          {eyebrow ? <p className="mb-4 text-xs font-bold uppercase tracking-wide text-dental-cyan">{eyebrow}</p> : null}
          <h1 className={titleClass}>{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{subtitle}</p>
          <p className="mt-5 hidden max-w-2xl text-sm font-semibold uppercase tracking-wide text-blue-100 sm:block">{imageCaption}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref} size="lg">
              {primaryLabel}
            </ButtonLink>
            <ButtonLink href={secondaryHref} variant="light">
              {secondaryLabel}
            </ButtonLink>
          </div>
          {trustItems.length > 0 ? (
            <p className="mt-8 max-w-3xl border-t border-white/20 pt-5 text-xs font-bold uppercase tracking-wide leading-6 text-blue-100">
              {trustItems.join(" | ")}
            </p>
          ) : null}
      </div>
    </Section>
  );
}
