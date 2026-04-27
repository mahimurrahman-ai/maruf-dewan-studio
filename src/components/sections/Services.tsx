import { motion } from "framer-motion";
import { Activity, Server, Target, BarChart3, Layers, Code2, FileText } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Tracking & Analytics Setup",
    body: "Accurate tracking across your site so you measure conversions properly in GA4, Google Ads, Meta Pixel and other platforms.",
  },
  {
    icon: Server,
    title: "Server-Side Tracking",
    body: "Improve data quality, reduce loss from browser restrictions, and create a more reliable foundation for ad optimization.",
  },
  {
    icon: Target,
    title: "See Which Ads Actually Drive Results",
    body: "Conversion tracking configured so you can identify the campaigns, platforms and ad sets generating real revenue.",
  },
  {
    icon: BarChart3,
    title: "Google Ads Conversion Tracking",
    body: "Set up Google Ads conversion tracking correctly to strengthen optimization and remarketing performance.",
  },
  {
    icon: Layers,
    title: "Meta Pixel & Conversion API",
    body: "Implement Pixel + CAPI to improve event accuracy, attribution, and overall Meta campaign efficiency.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Services — 01
          </p>
          <h2 className="font-serif-display text-4xl md:text-5xl mt-3 tracking-[-0.02em]">
            Accurate tracking for better ad decisions.
          </h2>
          <p className="text-muted-foreground mt-5 text-lg">
            From GA4 and Google Ads to Meta Pixel and server-side tracking — I
            build reliable systems that help you measure accurately and scale
            with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-background p-8 lg:p-10 hover:bg-card transition-colors relative"
              >
                <div className="flex items-start justify-between">
                  <div className="h-11 w-11 rounded-xl bg-foreground/[0.04] grid place-items-center group-hover:bg-accent/10 transition-colors">
                    <Icon className="h-5 w-5 text-foreground/80 group-hover:text-accent transition-colors" />
                  </div>
                  <span className="font-mono-ui text-[11px] text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif-display text-2xl mt-8 leading-tight tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {s.body}
                </p>
              </motion.article>
            );
          })}

          {/* Chips card */}
          <div className="bg-background p-8 lg:p-10 flex flex-col justify-between">
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Plus
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-flex items-center gap-2 h-9 px-4 rounded-full border border-border text-sm">
                <Code2 className="h-3.5 w-3.5" /> Custom Event Tracking
              </span>
              <span className="inline-flex items-center gap-2 h-9 px-4 rounded-full border border-border text-sm">
                <FileText className="h-3.5 w-3.5" /> Form & Lead Tracking
              </span>
              <span className="inline-flex items-center gap-2 h-9 px-4 rounded-full border border-border text-sm">
                Offline Conversions
              </span>
              <span className="inline-flex items-center gap-2 h-9 px-4 rounded-full border border-border text-sm">
                GDPR Cookie Consent
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
