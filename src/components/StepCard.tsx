type StepCardProps = {
  number: string;
  title: string;
  body: string;
  eyebrow?: string;
};

export function StepCard({ number, title, body, eyebrow }: StepCardProps) {
  return (
    <article className="relative h-full overflow-hidden border border-clinical-line bg-white p-7 transition hover:border-[#050505] hover:bg-surface-soft">
      <span className="pointer-events-none absolute -right-3 top-3 text-[7rem] font-bold leading-none text-[#050505]/[0.035]" aria-hidden="true">
        {number}
      </span>
      <div className="relative">
        <div className="flex h-14 w-14 items-center justify-center border border-[#050505] bg-white text-sm font-bold text-[#050505]">
          {number}
        </div>
        {eyebrow ? <p className="section-kicker mt-8">{eyebrow}</p> : null}
        <h3 className="mt-5 text-2xl font-medium leading-tight text-[#050505]">{title}</h3>
        <p className="mt-5 body-copy">{body}</p>
      </div>
    </article>
  );
}
