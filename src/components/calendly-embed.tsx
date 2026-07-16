const CALENDLY_URL = "https://calendly.com/globalstaffingpartners-work/30min";

export function CalendlyEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-white shadow-sm">
      <iframe
        src={`${CALENDLY_URL}?hide_gdpr_banner=1`}
        title="Book a Discovery Call with Global Staffing Partners"
        className="h-[900px] w-full border-0"
        loading="eager"
      />
    </div>
  );
}
