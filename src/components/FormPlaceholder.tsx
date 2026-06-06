import { ButtonLink } from "./ButtonLink";

type FormPlaceholderProps = {
  eyebrow: string;
  title: string;
  body: string;
  fields?: string[];
  note?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function FormPlaceholder({
  eyebrow,
  title,
  body,
  fields = [],
  note,
  ctaLabel,
  ctaHref
}: FormPlaceholderProps) {
  return (
    <div className="border border-[#050505] bg-white p-7 md:p-10">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-medium leading-tight text-[#050505]">{title}</h2>
      <p className="mt-5 max-w-3xl body-copy">{body}</p>
      {note ? (
        <p className="mt-5 max-w-3xl border-l-4 border-dental-blue bg-surface-soft p-4 text-sm font-semibold leading-6 text-[#050505]">
          {note}
        </p>
      ) : null}
      {fields.length > 0 ? (
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {fields.map((field) => (
            <div key={field} className="border border-clinical-line bg-surface-soft px-4 py-3 text-sm font-semibold text-[#050505]">
              {field}
            </div>
          ))}
        </div>
      ) : null}
      {ctaLabel && ctaHref ? (
        <div className="mt-8">
          <ButtonLink href={ctaHref} variant="secondary">
            {ctaLabel}
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}
