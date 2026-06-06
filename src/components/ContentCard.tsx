type ContentCardProps = {
  title: string;
  body: string;
  eyebrow?: string;
  children?: React.ReactNode;
  number?: string;
};

export function ContentCard({ title, body, eyebrow, children, number }: ContentCardProps) {
  return (
    <article className="relative h-full overflow-hidden border border-clinical-line bg-white p-8 transition hover:border-[#050505] hover:bg-surface-soft">
      {number ? (
        <span className="pointer-events-none absolute -right-3 top-3 text-[7rem] font-bold leading-none text-[#050505]/[0.035]" aria-hidden="true">
          {number}
        </span>
      ) : null}
      {number ? (
        <div className="mb-8 flex h-14 w-14 items-center justify-center border border-[#050505] bg-white text-sm font-bold text-[#050505]">
          {number}
        </div>
      ) : null}
      {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
      <h3 className="mt-3 text-2xl font-medium leading-tight text-[#050505]">{title}</h3>
      <p className="mt-5 body-copy">{body}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}
