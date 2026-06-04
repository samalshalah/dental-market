type TextMarqueeProps = {
  items: string[];
};

export function TextMarquee({ items }: TextMarqueeProps) {
  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-clinical-line bg-white py-5" aria-label={items.join(", ")}>
      <div className="marquee-track flex w-max items-center gap-8">
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8 text-sm font-bold uppercase tracking-wide text-dental-navy">
            {item}
            <span className="h-2 w-2 rounded-full bg-dental-blue" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
