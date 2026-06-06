type CardGridProps = {
  items: string[];
};

export function CardGrid({ items }: CardGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <div key={item} className="relative overflow-hidden border border-clinical-line bg-white p-6 transition hover:border-[#050505] hover:bg-surface-soft">
          <span className="pointer-events-none absolute -right-2 top-2 text-[5rem] font-bold leading-none text-[#050505]/[0.035]" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="relative text-base font-semibold leading-6 text-[#050505]">{item}</h3>
        </div>
      ))}
    </div>
  );
}
