type ContentCardProps = {
  title: string;
  body: string;
  eyebrow?: string;
  children?: React.ReactNode;
};

export function ContentCard({ title, body, eyebrow, children }: ContentCardProps) {
  return (
    <article className="surface-card h-full p-8 transition hover:bg-surface-soft">
      {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
      <h3 className="mt-3 text-2xl font-medium leading-tight text-[#050505]">{title}</h3>
      <p className="mt-5 body-copy">{body}</p>
      {children ? <div className="mt-5">{children}</div> : null}
    </article>
  );
}
