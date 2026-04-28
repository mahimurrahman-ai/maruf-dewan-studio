import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Adélaide De Vos",
    role: "3,922 followers · LinkedIn",
    quote:
      "Maruf exceeded my expectations. Professional, patient, clear in his explanations and committed to results. Highly recommend.",
    accent: "#FFB7A8",
  },
  {
    name: "Dean Watson",
    role: "Founder",
    quote:
      "He set up our Google & Meta tracking and we got 20%+ more conversions on the same ad spend. He explains the why, not just the how.",
    accent: "#A6C4FF",
  },
  {
    name: "David Friend",
    role: "CEO, Profitable Sites",
    quote:
      "Accurate tracking that helped us scale ads fast and boost conversions by over 25%. Clear insight into which ads drive revenue.",
    accent: "#C9B6FF",
  },
  {
    name: "Lalita Sundari",
    role: "7,924 followers · LinkedIn",
    quote:
      "Strategic mindset and deep expertise in GTM, GA4, Pixel and server-side tracking. Invaluable. I highly recommend.",
    accent: "#9CE0C2",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Trusted by 500+ satisfied clients
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl mt-3 tracking-[-0.03em] leading-[1.05]">
            Growth, in their words.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Discover how we’ve driven growth and innovation.
          </p>
        </div>

        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 lg:p-14 mb-6 ring-1 ring-border shadow-card relative"
        >
          <Quote className="absolute top-8 right-8 h-10 w-10 text-primary/25" />
          <blockquote className="font-display font-bold text-2xl md:text-4xl leading-[1.15] tracking-[-0.02em] max-w-4xl">
            "Maruf set up accurate tracking that helped us scale ads fast and
            boost conversions by over <span className="text-primary">25%</span>.
            He gave us clear insight into which ads actually drive revenue."
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full" style={{ backgroundColor: "#C9B6FF" }} />
            <div>
              <div className="font-semibold text-sm">David Friend</div>
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
              className="bg-card rounded-3xl p-7 ring-1 ring-border shadow-card hover:shadow-pop transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-highlight text-highlight" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <figcaption className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
                <div className="h-9 w-9 rounded-full" style={{ backgroundColor: t.accent }} />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
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