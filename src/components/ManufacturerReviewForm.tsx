"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type FormState = "idle" | "submitting" | "success" | "error";

const productCategories = [
  "Dental consumables",
  "Disposable dental supplies",
  "Infection control",
  "Dental accessories",
  "Oral-care supplies",
  "Clinic organization supplies",
  "Preventive-care supplies",
  "Packaging-ready dental supplies",
  "OEM / private-label dental supply products",
  "Selected small instruments or supply-related products"
];

const marketStages = [
  "Not selling in the U.S. yet",
  "Exploring U.S. buyers or partners",
  "Attended trade shows / received U.S. interest",
  "Already selling limited volume in the U.S.",
  "Need B2B website, SEO, or trade-show follow-up support"
];

export function ManufacturerReviewForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/product-submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = (await response.json().catch(() => ({}))) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "The form could not be sent. Please email Dental Market directly.");
      }

      setState("success");
      setMessage(data.message || "Your product submission was sent. Dental Market will review your information.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "The form could not be sent. Please email Dental Market directly.");
    }
  }

  return (
    <section className="bg-white px-5 py-12 text-[#050505] sm:px-6 lg:px-8 lg:py-20" aria-label="Manufacturer review form">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="surface-panel p-7 lg:sticky lg:top-32 lg:p-9">
          <p className="section-kicker">Native product submission form</p>
          <h2 className="mt-3 text-3xl font-medium leading-tight text-[#050505] md:text-4xl">
            Submit dental supply information before sending samples.
          </h2>
          <p className="mt-5 body-copy">
            Share the details a factory director, export manager, or brand owner would normally discuss before sending
            samples, preparing U.S. buyer materials, or expecting brand cooperation.
          </p>
          <div className="mt-8 space-y-4 text-sm leading-6 text-clinical-muted">
            <div className="border-t border-clinical-line pt-4">
              <strong className="text-[#050505]">What we review:</strong> supply category, current U.S. activity, sample
              availability, packaging readiness, supplier readiness, and possible buying-review fit.
            </div>
            <div className="border-t border-clinical-line pt-4">
              <strong className="text-[#050505]">What happens next:</strong> qualified manufacturers may receive
              next-step instructions. Do not send samples until Dental Market confirms that the product is qualified for review.
            </div>
            <div className="border-t border-clinical-line pt-4">
              <strong className="text-[#050505]">Direct email:</strong>{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-dental-blue hover:text-dental-cyan">
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={submitForm} className="surface-card grid gap-5 p-6 md:grid-cols-2 md:p-8">
          <input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <label className="grid gap-2 text-sm font-semibold text-[#050505]">
            Company name *
            <input name="companyName" required className="form-field" placeholder="Company or factory name" />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-[#050505]">
            Country *
            <input name="country" required className="form-field" placeholder="Country" />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-[#050505]">
            Contact name *
            <input name="contactName" required className="form-field" placeholder="Your name" />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-[#050505]">
            Work email *
            <input name="email" type="email" required className="form-field" placeholder="name@company.com" />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-[#050505]">
            Phone / WhatsApp / WeChat
            <input name="messagingContact" className="form-field" placeholder="+ country code and number or WeChat ID" />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-[#050505]">
            Website
            <input name="website" type="url" className="form-field" placeholder="https://example.com" />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-[#050505]">
            Dental supply category *
            <select name="productCategory" required className="form-field">
              <option value="">Select category</option>
              {productCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-[#050505]">
            Current U.S. stage *
            <select name="marketStage" required className="form-field">
              <option value="">Select stage</option>
              {marketStages.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-[#050505] md:col-span-2">
            What supply item do you want Dental Market to review? *
            <textarea
              name="goals"
              required
              rows={5}
              className="form-field resize-y"
              placeholder="Example: supply category, sample availability, packaging, pricing logic, U.S. buyer interest, B2B website/SEO, or trade-show follow-up."
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-[#050505] md:col-span-2">
            Supply notes or links
            <textarea
              name="productNotes"
              rows={4}
              className="form-field resize-y"
              placeholder="Share supply lines, catalogs, sample details, packaging options, or current U.S. questions."
            />
          </label>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={state === "submitting"}
              className="inline-flex min-h-12 w-full items-center justify-center bg-dental-blue px-6 py-3.5 text-base font-semibold text-white transition hover:bg-dental-cyan hover:text-[#050505] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {state === "submitting" ? "Sending..." : "Send Supply Submission"}
            </button>
            {message ? (
              <p
                className={`mt-4 border p-4 text-sm leading-6 ${
                  state === "success"
                    ? "border-dental-cyan/40 bg-dental-cyan/10 text-[#050505]"
                    : "border-amber-200 bg-amber-50 text-[#050505]"
                }`}
                role="status"
              >
                {message}
              </p>
            ) : null}
            <p className="mt-5 text-xs leading-6 text-clinical-muted">
              Dental Market provides dental supply sourcing review, buying-readiness review, market-readiness support, B2B
              marketing, website, SEO, sales-material, trade-show follow-up, and business development support. Dental Market does not provide
              legal, FDA, regulatory, clinical, customs, tax, import, product-safety, or medical advice.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
