const platforms = [
  "Google Ads", "GA4", "Google Tag Manager", "Meta Pixel", "Conversions API",
  "Shopify", "WordPress", "Shogun", "ClickFunnels", "HubSpot", "Zapier", "Wix",
  "TikTok Ads", "Bing Ads", "Custom Code",
];

export const Marquee = () => {
  return (
    <section aria-label="Trusted partners and tools" className="py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 mb-5 text-center">
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Trusted partners and tools
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-ticker w-max">
          {[...platforms, ...platforms].map((p, i) => (
            <div key={i} className="flex items-center gap-3 px-7 shrink-0">
              <span className="h-2 w-2 rounded-full bg-primary/70" />
              <span className="font-display font-semibold text-xl md:text-2xl text-foreground/75 whitespace-nowrap">
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