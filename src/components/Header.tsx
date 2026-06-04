import Link from "next/link";
import { navItems, site } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-40 -mb-[77px] text-white lg:-mb-[124px]">
      <div className="hidden border-b border-white/15 bg-black/60 backdrop-blur-md lg:block">
        <div className="mx-auto flex max-w-[1750px] flex-col gap-2 px-5 py-3 text-[0.72rem] font-bold uppercase tracking-wide text-white/80 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="text-dental-cyan">{site.domain}</span>
            <a href={`mailto:${site.email}`} className="transition hover:text-dental-cyan">
              {site.email}
            </a>
            <a href={`tel:${site.phone}`} className="transition hover:text-dental-cyan">
              {site.phoneDisplay}
            </a>
            <a href={site.whatsappUrl} className="transition hover:text-dental-cyan">
              WhatsApp
            </a>
            <span>WeChat: {site.wechat}</span>
          </div>
          <p className="hidden text-white/70 lg:block">{site.address.display}</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1750px] flex-col gap-4 border-b border-white/10 bg-black/45 px-5 py-4 backdrop-blur-md sm:px-6 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8 lg:bg-black/55 lg:px-8">
        <div className="flex items-center justify-between">
          <BrandLogo variant="footer" />
          <details className="group relative lg:hidden">
            <summary className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-white/30 bg-[#050505]/35 text-white backdrop-blur transition hover:border-dental-cyan hover:text-dental-cyan [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5" aria-hidden="true">
                <span className="h-0.5 w-5 bg-current transition group-open:translate-y-2 group-open:rotate-45" />
                <span className="h-0.5 w-5 bg-current transition group-open:opacity-0" />
                <span className="h-0.5 w-5 bg-current transition group-open:-translate-y-2 group-open:-rotate-45" />
              </span>
            </summary>
            <div
              id="mobile-navigation"
              className="absolute right-0 top-14 w-[min(20rem,calc(100vw-2.5rem))] border border-white/15 bg-[#050505]/88 p-4 shadow-lift backdrop-blur-md"
            >
              <nav aria-label="Mobile navigation" className="grid gap-1 text-sm font-bold uppercase tracking-wide">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border-b border-white/10 px-1 py-3 transition last:border-b-0 hover:text-dental-cyan"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-4">
                <ButtonLink href="/enrollment/" size="sm">
                  Start Manufacturer Review
                </ButtonLink>
              </div>
              <div className="mt-5 border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-wide text-white/75">
                <p className="text-dental-cyan">{site.domain}</p>
                <div className="mt-3 grid gap-2">
                  <a href={`tel:${site.phone}`} className="transition hover:text-dental-cyan">
                    {site.phoneDisplay}
                  </a>
                  <a href={site.whatsappUrl} className="transition hover:text-dental-cyan">
                    WhatsApp
                  </a>
                  <a href={`mailto:${site.email}`} className="break-all transition hover:text-dental-cyan">
                    {site.email}
                  </a>
                  <span>WeChat: {site.wechat}</span>
                </div>
              </div>
            </div>
          </details>
        </div>
        <nav
          aria-label="Main navigation"
          className="hidden gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-wide text-white lg:flex lg:flex-wrap lg:justify-center"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-dental-cyan">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex lg:justify-end">
          <ButtonLink href="/enrollment/" size="sm">
            Start Manufacturer Review
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
