"use client";

import { useEffect, useMemo, useState } from "react";

const CALENDLY_URL = "https://calendly.com/globalstaffingpartners-work/30min";

/**
 * Robust Calendly inline embed using a direct iframe.
 *
 * Why iframe instead of the widget.js script:
 * - Loads eagerly (no dependency on lazy script injection)
 * - Remounts via `key={attempt}` if the user clicks "Reload"
 * - Shows a loading state with a retry button if the iframe stays blank
 * - Works reliably across Next.js client-side navigations
 */
export function CalendlyEmbed() {
  const [attempt, setAttempt] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showRetry, setShowRetry] = useState(false);

  // Build the iframe src with cache-busting attempt param
  const src = useMemo(() => {
    const params = new URLSearchParams({
      hide_gdpr_banner: "1",
      embed_domain: "gsp-staffing.vercel.app",
      embed_type: "Inline",
      attempt: String(attempt),
    });
    return `${CALENDLY_URL}?${params.toString()}`;
  }, [attempt]);

  // Reset state and start a timeout when the iframe remounts
  useEffect(() => {
    setLoaded(false);
    setShowRetry(false);

    const timer = window.setTimeout(() => {
      if (!loaded) {
        setShowRetry(true);
      }
    }, 7000);

    return () => window.clearTimeout(timer);
  }, [attempt, loaded]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border bg-white shadow-sm">
      {/* Loading / retry overlay */}
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
          <div className="text-center">
            <p className="text-sm font-medium text-gsp-navy">
              Loading booking calendar...
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              This usually takes a few seconds.
            </p>

            {showRetry && (
              <button
                type="button"
                onClick={() => setAttempt((value) => value + 1)}
                className="mt-4 rounded-md bg-gsp-navy px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gsp-navy/90"
              >
                Reload calendar
              </button>
            )}
          </div>
        </div>
      )}

      <iframe
        key={attempt}
        src={src}
        title="Book a Discovery Call with Global Staffing Partners"
        className="h-[850px] w-full border-0"
        loading="eager"
        onLoad={() => setLoaded(true)}
      />

      {/* Fallback text link — visible only if the user needs it */}
      <div className="border-t border-border bg-muted/30 px-4 py-3 text-center">
        <p className="text-xs text-muted-foreground">
          Having trouble loading?{" "}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gsp-terracotta underline hover:no-underline"
          >
            Open the booking page in a new tab
          </a>
        </p>
      </div>
    </div>
  );
}
