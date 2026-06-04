import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ManufacturerReviewForm } from "@/components/ManufacturerReviewForm";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  title: pageMeta.enrollment.title,
  description: pageMeta.enrollment.description,
  alternates: { canonical: pageMeta.enrollment.path },
  openGraph: { title: pageMeta.enrollment.title, description: pageMeta.enrollment.description, url: pageMeta.enrollment.path }
};

export default function EnrollmentPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Enrollment", path: pageMeta.enrollment.path }])} />
      <section className="relative overflow-hidden bg-[#050505] pb-16 pt-32 text-white sm:pt-36 lg:pb-28 lg:pt-60">
        <div className="relative mx-auto w-full">
          <div className="mx-auto max-w-[1750px] px-5 pb-10 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-wide text-dental-cyan">Manufacturer Review</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
              Start with a practical U.S. market-readiness review.
            </h1>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <p className="max-w-4xl text-lg leading-8 text-slate-200">
                Complete the form so Dental Market can review your company, product category, current U.S. readiness,
                and best next step for market entry, validation, distributor readiness, e-commerce planning, or digital
                launch support.
              </p>
              <div className="border border-white/15 bg-white/10 p-5 text-sm leading-6 text-blue-100">
                After submission, our team reviews qualified manufacturer information and may contact you to schedule a
                strategy conversation. Dental Market does not guarantee distribution, sales, regulatory approval, or
                immediate buyer access.
              </div>
            </div>
          </div>
          <ManufacturerReviewForm />
        </div>
      </section>
    </>
  );
}
