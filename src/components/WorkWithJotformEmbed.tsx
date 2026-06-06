"use client";

import Script from "next/script";
import { ButtonLink } from "./ButtonLink";

declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, baseUrl: string) => void;
  }
}

const formUrl = "https://form.jotform.com/261561017615048";
const formBaseUrl = "https://form.jotform.com/";
const iframeSelector = "iframe[id='JotFormIFrame-261561017615048']";

function initializeJotformEmbed() {
  window.jotformEmbedHandler?.(iframeSelector, formBaseUrl);
}

export function WorkWithJotformEmbed() {
  return (
    <div className="surface-card overflow-hidden p-4 md:p-6">
      <iframe
        id="JotFormIFrame-261561017615048"
        title="Work With Dental Market"
        onLoad={() => window.parent.scrollTo(0, 0)}
        allowTransparency
        allow="geolocation; microphone; camera; fullscreen; payment"
        src={formUrl}
        frameBorder="0"
        style={{ minWidth: "100%", maxWidth: "100%", height: "539px", border: "none" }}
        scrolling="no"
      />
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"
        strategy="afterInteractive"
        onLoad={initializeJotformEmbed}
        onReady={initializeJotformEmbed}
      />
      <div className="border-t border-clinical-line px-2 py-5">
        <p className="max-w-3xl text-sm leading-6 text-clinical-muted">
          If the embedded form does not load, open the secure form directly.
        </p>
        <div className="mt-4">
          <ButtonLink href={formUrl} variant="secondary" size="sm">
            Open Work With Dental Market Form
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
