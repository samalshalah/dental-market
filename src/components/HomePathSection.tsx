import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

type HomePathSectionProps = {
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  reverse?: boolean;
};

export function HomePathSection({
  number,
  eyebrow,
  title,
  body,
  bullets,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
  reverse = false
}: HomePathSectionProps) {
  return (
    <div className="grid gap-0 border border-clinical-line bg-white lg:grid-cols-2">
      <div className={`relative overflow-hidden p-8 md:p-12 ${reverse ? "lg:order-2" : ""}`}>
        <span
          className="pointer-events-none absolute -right-4 top-4 text-[10rem] font-bold leading-none text-[#050505]/[0.035] md:text-[14rem]"
          aria-hidden="true"
        >
          {number}
        </span>
        <p className="section-kicker">{eyebrow}</p>
        <div className="mt-5 flex h-16 w-16 items-center justify-center border border-[#050505] text-lg font-bold text-[#050505]">
          {number}.
        </div>
        <h2 className="section-heading mt-8 max-w-2xl">{title}</h2>
        <p className="mt-5 max-w-2xl body-copy">{body}</p>
        <div className="mt-8 grid gap-0 border-y border-clinical-line">
          {bullets.map((bullet) => (
            <p key={bullet} className="border-b border-clinical-line py-4 text-sm font-semibold leading-6 text-[#050505] last:border-b-0">
              {bullet}
            </p>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href={ctaHref} variant="secondary" size="lg">
            {ctaLabel}
          </ButtonLink>
        </div>
      </div>

      <div className={`group relative min-h-[24rem] overflow-hidden bg-[#050505] ${reverse ? "lg:order-1" : ""}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover opacity-[0.66] grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-[0.78]"
        />
        <div className="absolute inset-0 bg-[#050505]/34 transition duration-500 group-hover:bg-[#050505]/24" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/72 via-[#050505]/20 to-[#050505]/5" />
        <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
          <p className="text-xs font-bold uppercase tracking-wide text-dental-cyan">Dental Market</p>
          <p className="mt-4 max-w-md text-2xl font-medium leading-tight">{title}</p>
        </div>
      </div>
    </div>
  );
}
