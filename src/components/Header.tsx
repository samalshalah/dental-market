"use client";

import Link from "next/link";
import { navItems, site } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-40 -mb-[80px] px-4 pt-3 text-white sm:px-6">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 border border-white/10 bg-black/45 px-5 py-4 backdrop-blur-md sm:px-6 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8 lg:bg-black/55">
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
              className="absolute right-0 top-14 w-[min(22rem,calc(100vw-2.5rem))] border border-white/15 bg-[#050505]/90 p-4 backdrop-blur-md"
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
                <ButtonLink href="/work-with-dental-market/" size="sm">
                  {site.primaryCta}
                </ButtonLink>
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
          <ButtonLink href="/work-with-dental-market/" size="sm">
            {site.primaryCta}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
