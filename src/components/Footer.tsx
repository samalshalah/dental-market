import Link from "next/link";
import { site } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-[#050505] bg-[#050505] px-5 py-12 text-white sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1750px]">
        <p className="mb-10 text-[13vw] font-bold leading-none text-white/5">Dental Market</p>
        <div className="grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <BrandLogo variant="footer" />
            <p className="mt-2 max-w-2xl text-sm text-blue-100">{site.tagline}</p>
            <p className="mt-4 text-sm text-blue-100">{site.legalNote}</p>
            <p className="mt-3 text-sm text-blue-100">{site.address.display}</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm font-semibold md:justify-end" aria-label="Footer navigation">
            <Link href="/privacy-policy/" className="hover:text-blue-200">
              Privacy Policy
            </Link>
            <Link href="/terms-disclaimer/" className="hover:text-blue-200">
              Terms / Disclaimer
            </Link>
            <Link href="/contact/" className="hover:text-blue-200">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
