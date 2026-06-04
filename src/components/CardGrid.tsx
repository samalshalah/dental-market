type CardGridProps = {
  items: string[];
};

export function CardGrid({ items }: CardGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item} className="surface-card p-5">
          <h3 className="text-base font-bold text-dental-navy">{item}</h3>
        </div>
      ))}
    </div>
  );
}
