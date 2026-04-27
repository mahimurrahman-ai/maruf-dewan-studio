import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adélaide De Vos",
    role: "3,922 followers · LinkedIn",
    quote:
      "Maruf exceeded my expectations. Professional, patient, clear in his explanations and committed to results. Highly recommend.",
    accent: "#C68A5B",
  },
  {
    name: "Dean Watson",
    role: "Founder",
    quote:
      "He set up our Google & Meta tracking and we got 20%+ more conversions on the same ad spend. He explains the why, not just the how.",
    accent: "#3F4A3C",
  },
  {
    name: "David Friend",
    role: "CEO, Profitable Sites",
    quote:
      "Accurate tracking that helped us scale ads fast and boost conversions by over 25%. Clear insight into which ads drive revenue.",
    accent: "#7A6A4F",
  },
  {
    name: "Lalita Sundari",
    role: "7,924 followers · LinkedIn",
    quote:
      "Strategic mindset and deep expertise in GTM, GA4, Pixel and server-side tracking. Invaluable. I highly recommend.",
    accent: "#B6452C",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Trusted by 500+ clients
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl mt-3 max-w-2xl tracking-[-0.02em]">
              Growth, in their words.
            </h2>
          </div>
        </div>

        {/* Featured pull quote */}
        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-border bg-background rounded-2xl p-8 lg:p-14 mb-10 relative"
        >
          <Quote className="absolute top-8 right-8 h-10 w-10 text-accent/30" />
          <blockquote className="font-serif-display text-2xl md:text-4xl leading-[1.15] tracking-[-0.01em] max-w-4xl">
            "Maruf set up accurate tracking that helped us scale ads fast and
            boost conversions by over <span className="text-accent">25%</span>.
            He gave us clear insight into which ads actually drive revenue."
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full" style={{ backgroundColor: "#7A6A4F" }} />
            <div>
              <div className="font-medium text-sm">David Friend</div>
              <div className="font-mono-ui text-[11px] text-muted-foreground uppercase tracking-[0.15em]">
                CEO · Profitable Sites
              </div>
            </div>
          </figcaption>
        </motion.figure>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-background border border-border rounded-2xl p-7"
            >
              <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
                <div className="h-9 w-9 rounded-full" style={{ backgroundColor: t.accent }} />
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="font-mono-ui text-[11px] text-muted-foreground uppercase tracking-[0.12em]">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
