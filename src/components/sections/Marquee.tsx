const items = [
  "Google Ads Conversion Tracking Setup",
  "Meta Pixel & Conversion API (CAPI) Integration",
  "First-Party Server-Side Tracking Implementation",
  "Google Analytics 4 Event & Funnel Tracking",
  "All Types of Form Tracking (Lead, Contact, Checkout)",
  "Offline Conversion Tracking for Ad Platforms",
  "Custom Event Tracking via Google Tag Manager",
  "GDPR-Compliant Cookie Consent Integration",
];

export const Marquee = () => (
  <section aria-label="Services overview" className="py-8 border-y border-border bg-secondary/30">
    <div className="relative overflow-hidden">
      <div className="flex animate-ticker w-max">
        {[...items, ...items].map((p, i) => (
          <div key={i} className="flex items-center gap-3 px-6 shrink-0">
            <span className="text-primary text-lg">✓</span>
            <span className="font-display font-medium text-base md:text-lg text-foreground/80 whitespace-nowrap">
              {p}
            </span>
            <span className="h-1 w-1 rounded-full bg-primary/60 ml-3" />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  </section>
);