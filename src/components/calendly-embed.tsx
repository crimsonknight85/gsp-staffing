"use client";

import Script from "next/script";

export function CalendlyEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-white shadow-sm">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/globalstaffingpartners-work/30min"
        style={{
          minWidth: "320px",
          height: "820px",
        }}
      />
    </div>
  );
}
