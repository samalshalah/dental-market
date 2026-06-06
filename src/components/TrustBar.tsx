type TrustBarProps = {
  items: string[];
};

export function TrustBar({ items }: TrustBarProps) {
  return (
    <div className="grid gap-4 border border-clinical-line bg-white p-5 sm:grid-cols-2 lg:grid-cols-4" aria-label="Trust indicators">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-3 border border-clinical-line bg-surface-soft p-4">
          <span className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-dental-teal" aria-hidden="true" />
          <span className="text-sm font-semibold leading-6 text-clinical-ink">{item}</span>
        </div>
      ))}
    </div>
  );
}
