import { motion } from "framer-motion";
import { Search, Settings2, LineChart } from "lucide-react";

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
  },
  {
    icon: LineChart,
    title: "Reporting & TAAS",
    body: "We validate the data and provide clear reporting so you can measure performance and scale confidently.",
  },
];

export const Process = () => (
  <section id="process" className="py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-primary">
          Tracking Made Easy
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-[-0.03em] leading-[1.05]">
          The Simplest Process You'll Ever Experience
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative bg-card rounded-3xl p-8 ring-1 ring-border shadow-card"
            >
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 grid place-items-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono-ui text-xs text-muted-foreground">
                  STEP 0{i + 1}
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl mt-7 tracking-[-0.02em]">
                {s.title}
              </h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);