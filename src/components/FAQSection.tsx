type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  items: FAQItem[];
  title?: string;
  intro?: string;
};

export function FAQSection({ items, title = "Frequently Asked Questions", intro }: FAQSectionProps) {
  return (
    <div>
      <div className="mb-10 max-w-4xl">
        <p className="section-kicker">Manufacturer questions</p>
        <h2 className="section-heading">{title}</h2>
        {intro ? <p className="mt-5 body-copy">{intro}</p> : null}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <article key={item.question} className="relative overflow-hidden border border-clinical-line bg-white p-7 transition hover:border-[#050505] hover:bg-surface-soft">
            <span className="pointer-events-none absolute -right-3 top-2 text-[7rem] font-bold leading-none text-[#050505]/[0.035]" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="mb-7 flex h-14 w-14 items-center justify-center border border-[#050505] bg-white text-sm font-bold text-[#050505]">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-xl font-medium leading-tight text-[#050505]">{item.question}</h3>
            <p className="mt-4 body-copy">{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
