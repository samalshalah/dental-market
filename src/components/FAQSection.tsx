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
      <div className="mb-8 max-w-3xl">
        <h2 className="section-heading">{title}</h2>
        {intro ? <p className="mt-3 body-copy">{intro}</p> : null}
      </div>
      <div className="grid gap-4">
        {items.map((item) => (
          <article key={item.question} className="surface-card p-6">
            <h3 className="text-lg font-bold text-dental-navy">{item.question}</h3>
            <p className="mt-3 body-copy">{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
