import { motion } from "framer-motion";
import { Search, Settings2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Audit Website & Funnel",
    body: "We review your current setup to identify gaps, errors, and opportunities to improve tracking accuracy.",
  },
  {
    icon: Settings2,
    title: "Tracking Setup",
    body: "We implement a reliable tracking system using GTM, GA4, Google Ads, Meta Pixel, and server-side tracking where needed.",
    code: true,
  },
  {
    icon: TrendingUp,
    title: "Reporting & TAAS",
    body: "We validate the data and provide clear reporting so you can measure performance and scale confidently.",
  },
];

export const Process = () => (
  <section id="process" className="py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-primary">Process</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-[-0.03em] leading-[1.05]">
          Tracking Made Easy
        </h2>
        <p className="text-foreground/65 mt-4 text-base sm:text-lg">
          The Simplest Process You'll Ever Experience
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px border-t border-dashed border-primary/30" />
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative glass rounded-3xl p-7 ring-1 ring-border text-center"
            >
              <div className="relative mx-auto h-16 w-16 rounded-2xl bg-background ring-1 ring-primary/40 grid place-items-center glow-green">
                <Icon className="h-7 w-7 text-primary" />
                <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary text-primary-foreground font-mono-ui text-xs font-bold grid place-items-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl mt-6 tracking-[-0.02em]">{s.title}</h3>
              <p className="text-foreground/65 mt-3 text-sm leading-relaxed">{s.body}</p>
              {s.code && (
                <pre className="mt-5 text-left text-[11px] font-mono-ui bg-background/60 ring-1 ring-border rounded-xl p-4 text-foreground/70 overflow-hidden">
                  <code>{`window.dataLayer = window.dataLayer || [];
dataLayer.push({
  event: 'purchase',
  value: 249.00,
  currency: 'USD'
});`}</code>
                </pre>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);