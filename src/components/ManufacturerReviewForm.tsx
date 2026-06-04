"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type FormState = "idle" | "submitting" | "success" | "error";

const productCategories = [
  "Dental supplies",
  "Dental instruments",
  "Dental equipment",
  "Infection control",
  "Dental lab products",
  "Dental accessories",
  "Private label / OEM",
  "Other dental product category"
];

const marketStages = [
  "Not selling in the U.S. yet",
  "Exploring distributors or agents",
  "Attended trade shows / received U.S. interest",
  "Already selling limited volume in the U.S.",
  "Need digital launch, leads, or e-commerce planning"
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
      const response = await fetch("/api/enrollment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = (await response.json().catch(() => ({}))) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "The form could not be sent. Please email Dental Market directly.");
      }

      setState("success");
      setMessage(data.message || "Your manufacturer review request was sent. Dental Market will review your information.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "The form could not be sent. Please email Dental Market directly.");
    }
  }

  return (
    <section className="bg-white px-5 py-12 text-[#050505] sm:px-6 lg:px-8 lg:py-20" aria-label="Manufacturer review form">
      <div className="mx-auto grid max-w-[1750px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="surface-panel p-7 lg:sticky lg:top-32 lg:p-9">
          <p className="section-kicker">Native website form</p>
          <h2 className="mt-3 text-3xl font-medium leading-tight text-[#050505] md:text-4xl">
            Request a practical U.S. market review.
          </h2>
          <p className="mt-5 body-copy">
            Share the details a factory director, export manager, or brand owner would normally discuss before spending
            on U.S. distributors, inventory, warehousing, campaigns, or e-commerce.
          </p>
          <div className="mt-8 space-y-4 text-sm leading-6 text-clinical-muted">
            <div className="border-t border-clinical-line pt-4">
              <strong className="text-[#050505]">What we review:</strong> category, current U.S. activity, website
              readiness, buyer path, and possible validation or entry needs.
            </div>
            <div className="border-t border-clinical-line pt-4">
              <strong className="text-[#050505]">What happens next:</strong> qualified manufacturers may receive a
              recommendation for validation, entry planning, or a strategy conversation.
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
            Product category *
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
            What do you want to understand about the U.S. market? *
            <textarea
              name="goals"
              required
              rows={5}
              className="form-field resize-y"
              placeholder="Example: distributor readiness, U.S. buyer interest, pricing expectations, lead generation, e-commerce, private label, or product-market fit."
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-[#050505] md:col-span-2">
            Product notes or links
            <textarea
              name="productNotes"
              rows={4}
              className="form-field resize-y"
              placeholder="Share product lines, catalogs, certifications to review with qualified advisors, or current U.S. questions."
            />
          </label>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={state === "submitting"}
              className="inline-flex min-h-12 w-full items-center justify-center bg-dental-blue px-6 py-3.5 text-base font-semibold text-white transition hover:bg-dental-cyan hover:text-[#050505] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {state === "submitting" ? "Sending..." : "Send Review Request"}
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
              Dental Market provides market research, digital marketing, business development, and market-entry planning
              services. Dental Market does not provide legal, FDA, regulatory, clinical, customs, tax, import, product
              safety, or medical advice.
            </p>
            <p className="mt-3 text-xs leading-6 text-clinical-muted">
              Backup form:{" "}
              <a
                href="https://form.jotform.com/261436432834053"
                className="font-semibold text-dental-blue hover:text-dental-cyan"
                target="_blank"
                rel="noreferrer"
              >
                open the secure Jotform version
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
