import { motion } from "framer-motion";
import { Check, TrendingUp, TrendingDown } from "lucide-react";

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
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Implementation
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-[-0.03em] leading-[1.05]">
            Everything wired up, end to end.
          </h2>
          <ul className="mt-8 sm:mt-10 space-y-3">
            {items.map((it, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex items-center gap-3 bg-card rounded-2xl px-4 py-3 ring-1 ring-border shadow-card"
              >
                <span className="h-7 w-7 rounded-full bg-[hsl(28_95%_55%)] text-white grid place-items-center shrink-0 shadow-sm">
                  <Check className="h-4 w-4" strokeWidth={3.5} />
                </span>
                <span className="text-foreground/90 font-medium text-sm sm:text-base">{it}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Ad-platform impact viz — sticky note style */}
        <div className="lg:sticky lg:top-28">
          <div className="relative bg-card rounded-3xl p-6 sm:p-8 lg:p-10 ring-1 ring-border shadow-note">
            <span className="pushpin -top-3 left-10 z-10" />
            <div className="flex items-center justify-between">
              <p className="font-mono-ui text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Ad-platform impact
              </p>
              <span className="font-mono-ui text-[11px] text-muted-foreground">
                avg. across 30 clients
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl mt-3 tracking-[-0.02em]">
              Performance shifts after proper tracking.
            </h3>

            <div className="mt-9 space-y-6">
              {bars.map((b, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground/90 inline-flex items-center gap-2">
                      {b.dir === "up" ? (
                        <TrendingUp className="h-3.5 w-3.5 text-sage" />
                      ) : (
                        <TrendingDown className="h-3.5 w-3.5 text-primary" />
                      )}
                      {b.label}
                    </span>
                    <span
                      className={`font-mono-ui text-sm font-semibold ${
                        b.dir === "up" ? "text-sage" : "text-primary"
                      }`}
                    >
                      {b.dir === "up" ? "+" : "−"}
                      {b.value}%
                    </span>
                  </div>
                  <div className="relative h-2.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(b.value, 80)}%` }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                      className={`h-full rounded-full ${b.dir === "up" ? "bg-sage" : "bg-primary"}`}
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
      </div>
    </section>
  );
};