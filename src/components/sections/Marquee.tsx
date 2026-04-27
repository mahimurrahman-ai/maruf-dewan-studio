const platforms = [
  "Google Ads", "GA4", "Google Tag Manager", "Meta Pixel", "Conversions API",
  "Shopify", "WordPress", "Shogun", "ClickFunnels", "HubSpot", "Zapier", "Wix",
  "TikTok Ads", "Bing Ads", "Custom Code",
];

export const Marquee = () => {
  return (
    <section aria-label="Trusted platforms" className="border-y border-border py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-6">
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Platforms & tools I work with
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-marquee w-max">
          {[...platforms, ...platforms].map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-8 shrink-0"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
              <span className="font-serif-display text-2xl md:text-3xl text-foreground/80 whitespace-nowrap">
                {p}
              </span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};
