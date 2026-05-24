import { motion } from "framer-motion";
import { Check, ArrowRight, Code2, FileText } from "lucide-react";

const included = [
  "GA4 Setup & Configuration",
  "Google Ads Conversion Tracking",
  "Meta Pixel & CAPI Integration",
  "Server-Side Tracking",
  "Cookie Consent Mode v2",
  "Offline Conversion Tracking",
];

const bars = [
  { label: "Facebook Ads", value: 34, dir: "up" as const },
  { label: "Google Ads", value: 67, dir: "up" as const },
  { label: "TikTok Ads", value: 42, dir: "down" as const },
  { label: "Bing Ads", value: 37, dir: "down" as const },
];

export const AdPerformance = () => (
  <section className="py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* BOX 1 — Checklist */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-3xl p-7 ring-1 ring-border"
      >
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-primary">
          What's Included
        </p>
        <h3 className="font-display font-bold text-2xl mt-3 tracking-[-0.02em]">
          Everything wired up, end to end.
        </h3>
        <ul className="mt-7 space-y-3">
          {included.map((it) => (
            <li key={it} className="flex items-center gap-3 text-sm text-foreground/90">
              <span className="grid place-items-center h-6 w-6 rounded-full bg-primary/15 text-primary shrink-0">
                <Check className="h-3.5 w-3.5" strokeWidth={3.5} />
              </span>
              {it}
            </li>
          ))}
          <li className="flex items-center gap-3 text-sm text-foreground/90">
            <span className="grid place-items-center h-6 w-6 rounded-full bg-primary/15 text-primary shrink-0">
              <Code2 className="h-3.5 w-3.5" />
            </span>
            Custom Event Tracking
          </li>
          <li className="flex items-center gap-3 text-sm text-foreground/90">
            <span className="grid place-items-center h-6 w-6 rounded-full bg-primary/15 text-primary shrink-0">
              <FileText className="h-3.5 w-3.5" />
            </span>
            Form &amp; Lead Tracking
          </li>
        </ul>
      </motion.div>

      {/* BOX 2 — Server-side flow */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative glass rounded-3xl p-7 ring-1 ring-primary/30 shadow-pop overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(152_100%_50%/0.18),transparent_60%)] pointer-events-none" />
        <div className="relative">
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-primary">
            Server-Side Tracking
          </p>
          <h3 className="font-display font-bold text-2xl mt-3 tracking-[-0.02em]">
            100% data accuracy
          </h3>
          <p className="text-foreground/65 text-sm mt-3 leading-relaxed">
            Bypasses ad blockers, iOS limits, and extends cookie lifetime for
            maximum data accuracy.
          </p>

          <div className="mt-8 space-y-3">
            {["Browser", "GTM Server Container", "GA4 / Google Ads / Meta CAPI"].map((node, i) => (
              <div key={node} className="space-y-3">
                <div className="flex items-center gap-3 rounded-xl bg-secondary/70 ring-1 ring-border px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px] shadow-primary" />
                  <span className="text-sm font-medium">{node}</span>
                </div>
                {i < 2 && (
                  <div className="flex justify-center">
                    <ArrowRight className="h-4 w-4 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* BOX 3 — Platform performance bars */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass rounded-3xl p-7 ring-1 ring-border"
      >
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-primary">
          Which ads generate revenue
        </p>
        <h3 className="font-display font-bold text-2xl mt-3 tracking-[-0.02em]">
          Identify campaigns that profit.
        </h3>
        <p className="text-foreground/60 text-xs mt-2 leading-relaxed">
          Setup conversion tracking correctly to identify which campaign generates profit.
        </p>

        <div className="mt-7 space-y-5">
          {bars.map((b, i) => (
            <div key={b.label}>
              <div className="flex items-center justify-between mb-2 text-sm">
                <span className="text-foreground/85 font-medium">{b.label}</span>
                <span
                  className={`font-mono-ui font-semibold ${
                    b.dir === "up" ? "text-primary" : "text-[hsl(0_85%_65%)]"
                  }`}
                >
                  {b.dir === "up" ? "+" : "-"}
                  {b.value}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(b.value + 20, 90)}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  className={`h-full rounded-full ${
                    b.dir === "up" ? "bg-primary" : "bg-[hsl(0_85%_60%)]"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          <span className="inline-flex items-center h-8 px-3 rounded-full bg-secondary ring-1 ring-border text-xs text-foreground/80">
            Google Ads Tracking
          </span>
          <span className="inline-flex items-center h-8 px-3 rounded-full bg-secondary ring-1 ring-border text-xs text-foreground/80">
            Custom Event Tracking
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);