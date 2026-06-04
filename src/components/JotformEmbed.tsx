"use client";

import { useCallback } from "react";
import Script from "next/script";

export function JotformEmbed() {
  const resizeJotform = useCallback(() => {
    const jotformWindow = window as typeof window & {
      jotformEmbedHandler?: (selector: string, domain: string) => void;
    };

    jotformWindow.jotformEmbedHandler?.("iframe[id='JotFormIFrame-261436432834053']", "https://form.jotform.com/");
  }, []);

  return (
    <section className="bg-white shadow-lift" aria-label="Dental Manufacturer Enrollment Form">
      <div className="overflow-hidden bg-white">
        <iframe
          id="JotFormIFrame-261436432834053"
          title="Dental Manufacturer Enrollment Form"
          onLoad={resizeJotform}
          allowTransparency
          allow="geolocation; microphone; camera; fullscreen; payment"
          src="https://form.jotform.com/261436432834053"
          frameBorder="0"
          style={{ minWidth: "100%", maxWidth: "100%", width: "100%", height: "5600px", minHeight: "5600px", border: "none" }}
          scrolling="no"
        />
      </div>
      <p className="mx-auto mt-5 max-w-[1750px] rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-ink">
        Dental Market provides market research, digital marketing, business development, and market-entry planning
        services. Dental Market does not provide legal, FDA, regulatory, clinical, customs, tax, import, product safety,
        or medical advice.
      </p>
      <Script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js" strategy="afterInteractive" onLoad={resizeJotform} />
      <Script id="jotform-embed-handler-261436432834053" strategy="afterInteractive">
        {`if (window.jotformEmbedHandler) window.jotformEmbedHandler("iframe[id='JotFormIFrame-261436432834053']", "https://form.jotform.com/")`}
      </Script>
    </section>
  );
}
