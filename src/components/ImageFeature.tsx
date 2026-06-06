import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

type ImageFeatureProps = {
  eyebrow: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  reverse?: boolean;
};

export function ImageFeature({
  eyebrow,
  title,
  body,
  imageSrc,
  imageAlt,
  bullets = [],
  ctaLabel,
  ctaHref
}: ImageFeatureProps) {
  return (
    <div className="relative overflow-hidden border border-[#050505] bg-[#050505] p-8 text-white md:p-12 lg:p-16">
      <Image src={imageSrc} alt={imageAlt} fill sizes="100vw" className="object-cover opacity-[0.58] grayscale" />
      <div className="absolute inset-0 bg-[#050505]/30" />
      <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-blue-200">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-[2.55rem]">{title}</h2>
        </div>
        <div>
          <p className="text-lg leading-8 text-slate-200">{body}</p>
          {bullets.length > 0 ? (
            <div className="mt-8 grid gap-0 border-y border-white/15">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex gap-4 border-b border-white/15 py-4 text-sm font-semibold text-white last:border-b-0">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-200" aria-hidden="true" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          ) : null}
          {ctaLabel && ctaHref ? (
            <div className="mt-8">
              <ButtonLink href={ctaHref} variant="light">
                {ctaLabel}
              </ButtonLink>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
