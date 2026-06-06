"use client";

import Link from "next/link";
import { navItems, site } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";
import { ButtonLink } from "./ButtonLink";

const workLinks = [
  { label: "Submit Dental Supply for Buying Review", href: "/work-with-dental-market/" },
  { label: "Request B2B Marketing Support", href: "/work-with-dental-market/" },
  { label: "Work With Dental Market", href: "/work-with-dental-market/" }
];

export function Footer() {
  const contactDetails = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "WhatsApp", value: site.phoneDisplay, href: site.whatsappUrl },
    { label: "WeChat", value: site.wechat },
    { label: "Address", value: site.address.display }
  ];

  return (
    <footer className="border-t border-[#050505] bg-[#050505] px-5 py-12 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 border-b border-white/15 pb-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <BrandLogo variant="footer" />
            <p className="mt-6 max-w-3xl text-xl leading-8 text-blue-100">
              Dental Market is a U.S.-based dental supply sourcing group actively sourcing selected dental supplies
              from qualified manufacturers. We also provide separate B2B marketing services for dental supply
              manufacturers.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <ButtonLink href="/work-with-dental-market/" variant="light" size="sm">
              Work With Dental Market
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-10 py-10 md:grid-cols-3">
          <nav className="grid content-start gap-3 text-sm font-semibold" aria-label="Footer Dental Market navigation">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-dental-cyan">Dental Market</p>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-blue-200">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy-policy/" className="hover:text-blue-200">
              Privacy Policy
            </Link>
            <Link href="/terms-disclaimer/" className="hover:text-blue-200">
              Terms / Disclaimer
            </Link>
          </nav>

          <nav className="grid content-start gap-3 text-sm font-semibold" aria-label="Footer work with us navigation">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-dental-cyan">Work With Us</p>
            {workLinks.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-blue-200">
                {item.label}
              </Link>
            ))}
          </nav>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-wide text-dental-cyan">Contact</p>
            <div className="grid gap-4 text-sm font-semibold text-blue-100">
              {contactDetails.map((item) => (
                <div key={item.label}>
                  <p className="text-[0.68rem] uppercase tracking-wide text-white/45">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block break-words hover:text-blue-200">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 break-words">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6">
          <p className="max-w-5xl text-xs leading-6 text-blue-100/75">
            Dental Market provides sourcing review, buying-readiness review, market-readiness support, and B2B
            marketing services. {site.compliance} {site.legalNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
