import { motion } from "framer-motion";
import { Activity, Server, Target, BarChart3, Layers, Code2, FileText, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Tracking & Analytics Setup for Your Website",
    body: "I set up accurate tracking across your website so you can measure conversions properly in GA4, Google Ads, Meta Pixel, and other marketing platforms.",
  },
  {
    icon: Server,
    title: "Server-Side Tracking for Better Data Accuracy",
    body: "Server-side tracking helps improve data quality, reduce data loss from browser restrictions, and create a more reliable foundation for ad optimization and reporting.",
  },
  {
    icon: Target,
    title: "See Which Ads Actually Drive Results",
    body: "I configure conversion tracking so you can identify which campaigns, platforms, and ad sets are generating real leads, sales, and profitable outcomes.",
  },
  {
    icon: BarChart3,
    title: "Google Ads Conversion Tracking Setup",
    body: "Set up Google Ads conversion tracking correctly to improve optimization, strengthen remarketing, and give your campaigns the data they need to perform better.",
  },
  {
    icon: Layers,
    title: "Meta Pixel & Conversion API Setup",
    body: "I implement Meta Pixel and Conversion API tracking to improve event accuracy, support better attribution, and help your Meta campaigns perform more efficiently.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Services
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-[-0.03em] leading-[1.05]">
            “Accurate Tracking for Better Ad Decisions”
          </h2>
          <p className="text-muted-foreground mt-5 text-base sm:text-lg">
            From GA4 and Google Ads to Meta Pixel and server-side tracking, I build reliable tracking systems that help you measure accurately and scale with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-card rounded-3xl p-7 ring-1 ring-border shadow-card hover:shadow-pop hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-mono-ui text-[11px] text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-display font-bold text-2xl mt-7 leading-snug tracking-[-0.02em]">
                  {s.title}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.body}</p>
                <ArrowUpRight className="absolute top-7 right-7 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.article>
            );
          })}

          {/* Plus chips card */}
          <div className="bg-card rounded-3xl p-7 ring-1 ring-border shadow-card flex flex-col justify-between">
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Plus
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-secondary text-sm">
                <Code2 className="h-3.5 w-3.5" /> Custom Event Tracking
              </span>
              <span className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-secondary text-sm">
                <FileText className="h-3.5 w-3.5" /> Form & Lead Tracking
              </span>
              <span className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-secondary text-sm">
                Offline Conversions
              </span>
              <span className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-secondary text-sm">
                GDPR Cookie Consent
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};