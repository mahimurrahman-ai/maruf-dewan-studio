import { motion } from "framer-motion";
import { Check } from "lucide-react";

const items = [
  "Google Ads Conversion Tracking Setup",
  "Meta Pixel & Conversion API (CAPI) Integration",
  "First-Party Server-Side Tracking",
  "Google Analytics 4 Event & Funnel Tracking",
  "All Form Tracking (Lead, Contact, Checkout)",
  "Offline Conversion Tracking for Ad Platforms",
  "Custom Event Tracking via Google Tag Manager",
  "GDPR-Compliant Cookie Consent Integration",
];

const bars = [
  { label: "Facebook Ads", value: 34, dir: "up" as const },
  { label: "Google Ads", value: 67, dir: "up" as const },
  { label: "TikTok Ads CPA", value: 42, dir: "down" as const },
  { label: "Bing Ads CPA", value: 37, dir: "down" as const },
];

export const Implementation = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Checklist */}
        <div>
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Implementation — 02
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl mt-3 tracking-[-0.02em]">
            Everything wired up, end to end.
          </h2>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {items.map((it, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-center gap-4 py-4"
              >
                <span className="h-6 w-6 rounded-full bg-foreground text-background grid place-items-center shrink-0">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-foreground/90">{it}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Ad-platform impact viz */}
        <div className="lg:sticky lg:top-28 bg-card border border-border rounded-2xl p-8 lg:p-10">
          <div className="flex items-center justify-between">
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Ad-platform impact
            </p>
            <span className="font-mono-ui text-[11px] text-muted-foreground">
              avg. across 30 clients
            </span>
          </div>
          <h3 className="font-serif-display text-2xl mt-3">
            Performance shifts after proper tracking.
          </h3>

          <div className="mt-10 space-y-7">
            {bars.map((b, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-sm text-foreground/90">{b.label}</span>
                  <span
                    className={`font-mono-ui text-sm ${
                      b.dir === "up" ? "text-sage" : "text-accent"
                    }`}
                  >
                    {b.dir === "up" ? "+" : "−"}
                    {b.value}%
                  </span>
                </div>
                <div className="relative h-2 rounded-full bg-foreground/[0.06] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(b.value, 80)}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                    className={`h-full rounded-full ${
                      b.dir === "up" ? "bg-sage" : "bg-accent"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-8 leading-relaxed">
            Up = revenue & conversions captured. Down = cost-per-acquisition reduced.
          </p>
        </div>
      </div>
    </section>
  );
};
