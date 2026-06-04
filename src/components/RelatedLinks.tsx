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
      {items.map((item) => (
        <article key={item.href} className="surface-card p-6 transition hover:-translate-y-0.5 hover:shadow-lift">
          <h3 className="text-lg font-bold text-dental-navy">
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
