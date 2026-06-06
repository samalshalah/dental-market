import Link from "next/link";

type RelatedLink = {
  href: string;
  title: string;
  body: string;
};

type RelatedLinksProps = {
  items: RelatedLink[];
};

export function RelatedLinks({ items }: RelatedLinksProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <article key={item.href} className="relative overflow-hidden border border-clinical-line bg-white p-7 transition hover:border-[#050505] hover:bg-surface-soft">
          <span className="pointer-events-none absolute -right-2 top-2 text-[5rem] font-bold leading-none text-[#050505]/[0.035]" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="relative text-xl font-medium leading-tight text-[#050505]">
            <Link href={item.href} className="hover:text-dental-blue">
              {item.title}
            </Link>
          </h3>
          <p className="mt-3 text-sm leading-6 text-clinical-muted">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
