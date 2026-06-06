import Link from "next/link";

type BreadcrumbsProps = {
  current: string;
  items?: Array<{ href: string; label: string }>;
};

export function Breadcrumbs({ current, items = [] }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="px-5 pt-8 text-sm sm:px-6 lg:px-8">
      <ol className="mx-auto flex max-w-[1200px] flex-wrap gap-2 text-steel">
        <li>
          <Link href="/" className="font-semibold text-ocean hover:text-navy">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.href} className="contents">
            <span aria-hidden="true">/</span>
            <Link href={item.href} className="font-semibold text-ocean hover:text-navy">
              {item.label}
            </Link>
          </li>
        ))}
        <li aria-hidden="true">/</li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}
