import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type BrandLogoProps = {
  variant?: "header" | "footer";
};

export function BrandLogo({ variant = "header" }: BrandLogoProps) {
  if (variant === "footer") {
    return (
      <Link href="/" className="inline-flex items-center gap-3" aria-label="Dental Market home">
        <Image
          src="/brand/dental-market-icon-192.png"
          alt=""
          width={44}
          height={44}
          className="h-11 w-11 rounded-md bg-white p-1"
        />
        <span className="text-xl font-bold text-white">{site.name}</span>
      </Link>
    );
  }

  return (
    <Link href="/" className="inline-flex" aria-label="Dental Market home">
      <Image
        src="/brand/dental-market-logo-horizontal.png"
        alt="Dental Market"
        width={320}
        height={38}
        priority
        className="h-auto w-56 sm:w-64"
      />
    </Link>
  );
}
