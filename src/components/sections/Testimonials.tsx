import { motion } from "framer-motion";
import { Star, Linkedin } from "lucide-react";

const testimonials = [
  {
    initials: "AD",
    name: "Adélaïde De Vos",
    meta: "3,922 followers",
    quote:
      "I had the pleasure to work with Maruf and he exceeded my expectations. Professional, patient, and clear in his explanations. Highly recommend!",
    accent: "#A78BFA",
  },
  {
    initials: "DW",
    name: "Dean Watson",
    meta: "1,030 followers",
    quote:
      "Maruf set up our tracking for Google Ads and Meta Ads — 20%+ more conversions on the same ad spend. Skilled, reliable, and committed to real results.",
    accent: "#60A5FA",
  },
  {
    initials: "DF",
    name: "David Friend",
    meta: "CEO · Profitable Sites",
    quote:
      "Accurate tracking helped us scale ads fast and boost conversions by over 25%. Clear insight into which ads drive revenue.",
    accent: "#34D399",
  },
  {
    initials: "LS",
    name: "Lalita Sundari",
    meta: "7,924 followers",
    quote:
      "Maruf's strategic mindset and expertise in GTM, GA4, Pixel & Server-Side Tracking are invaluable! Highly recommend!",
    accent: "#FBBF24",
  },
];

export const Testimonials = () => (
  <section id="review" className="py-20 lg:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-primary">
          Trusted by 500+ satisfied clients
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-[-0.03em] leading-[1.05]">
          Growth, in their words.
        </h2>
        <p className="text-foreground/65 mt-4 text-base sm:text-lg">
          Discover how we've driven growth and innovation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass rounded-3xl p-7 ring-1 ring-border hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <Linkedin className="h-4 w-4 text-[#0a66c2]" />
            </div>
            <p className="text-foreground/85 leading-relaxed text-[15px]">"{t.quote}"</p>
            <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
              <div
                className="h-10 w-10 rounded-full grid place-items-center font-bold text-sm text-background"
                style={{ backgroundColor: t.accent }}
              >
                {t.initials}
              </div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="font-mono-ui text-[11px] text-foreground/55 uppercase tracking-[0.12em]">
                  {t.meta}
                </div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);