import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

export type TemplateServiceItem = {
  title: string;
  eyebrow?: string;
  body: string;
  details?: string[];
  href?: string;
  ctaLabel?: string;
};

type TemplateServiceListProps = {
  eyebrow: string;
  title: string;
  intro: string;
  imageSrc: string;
  imageAlt: string;
  items: TemplateServiceItem[];
};

export function TemplateServiceList({ eyebrow, title, intro, imageSrc, imageAlt, items }: TemplateServiceListProps) {
  return (
    <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
      <div className="relative overflow-hidden border border-[#050505] bg-[#050505] p-8 text-white lg:sticky lg:top-28 lg:min-h-[36rem] lg:p-10">
        <Image src={imageSrc} alt={imageAlt} fill sizes="(min-width: 1024px) 36vw, 92vw" className="object-cover opacity-[0.58] grayscale" />
        <div className="absolute inset-0 bg-[#050505]/30" />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-200">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-[2.55rem]">{title}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">{intro}</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {items.map((item, index) => (
          <article key={item.title} className="border border-clinical-line bg-white p-8 transition hover:border-[#050505] hover:bg-surface-soft">
            <div className="mb-10 flex h-16 w-16 items-center justify-center border border-[#050505] bg-white text-sm font-bold text-[#050505]">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div>
              {item.eyebrow ? <p className="section-kicker">{item.eyebrow}</p> : null}
              <h3 className="text-2xl font-medium leading-tight text-[#050505]">{item.title}</h3>
              <p className="mt-5 leading-7 text-clinical-muted">{item.body}</p>
              {item.details?.length ? (
                <ul className="mt-7 grid gap-3 border-t border-clinical-line pt-5 text-sm leading-6 text-clinical-muted">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-dental-teal" aria-hidden="true" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {item.href && item.ctaLabel ? (
                <div className="mt-6">
                  <ButtonLink href={item.href} variant="secondary" size="sm">
                    {item.ctaLabel}
                  </ButtonLink>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
