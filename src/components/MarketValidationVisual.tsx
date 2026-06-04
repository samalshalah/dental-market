import Image from "next/image";

export function MarketValidationVisual() {
  return (
    <div className="surface-panel relative overflow-hidden p-6 lg:p-8">
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-dental-mint blur-3xl" aria-hidden="true" />
      <div className="relative flex items-center gap-4">
        <Image
          src="/brand/dental-market-icon-192.png"
          alt=""
          width={64}
          height={64}
          className="h-16 w-16 rounded-2xl bg-white p-2 shadow-card"
        />
        <div>
          <p className="section-kicker">Market validation before investment</p>
          <p className="mt-2 text-2xl font-bold leading-tight text-dental-navy">One clear path before U.S. investment</p>
        </div>
      </div>
      <div className="relative mt-8 space-y-5">
        {[
          ["Research", "Understand demand, competitors, and buyer expectations."],
          ["Position", "Clarify the product story for U.S. decision makers."],
          ["Validate", "Test interest before inventory, warehousing, or distributor commitments."],
          ["Decide", "Choose a practical launch, partner, or direct-growth path."]
        ].map(([label, body], index) => (
          <div key={label} className="grid grid-cols-[2rem_1fr] gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-dental-blue text-sm font-bold text-white">
                {index + 1}
              </span>
              {index < 3 ? <span className="mt-2 h-full w-px bg-clinical-line" aria-hidden="true" /> : null}
            </div>
            <div className="pb-2">
              <p className="font-bold text-clinical-ink">{label}</p>
              <p className="mt-1 text-sm leading-6 text-clinical-muted">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
