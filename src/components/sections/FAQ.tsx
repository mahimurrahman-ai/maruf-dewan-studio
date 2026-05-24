import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQItem { q: string; a: string }

const defaults: FAQItem[] = [
  {
    q: "Why is tracking important for me?",
    a: "Without proper tracking, you may waste money on ads that don't convert. With accurate tracking, you get clear data, lower acquisition costs, and better marketing decisions.",
  },
  {
    q: "Tell me about your service?",
    a: "I set up and fix tracking for GA4, Google Ads, Meta Pixel, Conversion API, custom event tracking, and server-side tracking so your data is accurate, reliable, and actionable.",
  },
  {
    q: "Tell me about your workflow?",
    a: "I audit your entire website funnel and current tracking setup to identify gaps, errors, and opportunities for improvement. You simply provide access, I handle the rest.",
  },
  {
    q: "How long does it take?",
    a: "Most setups are completed within 3–6 hours depending on your website and requirements. More complex server-side tracking setups may take up to 2 working days.",
  },
  {
    q: "What do you need from me?",
    a: "I just need access to your website, Google Tag Manager, GA4, and ad accounts. After that, I handle everything else.",
  },
  {
    q: "How do I know the tracking is working correctly?",
    a: "After setup, I test all events using tools like GA4 DebugView, Tag Assistant, and browser tracking tools to ensure every conversion and event is firing correctly.",
  },
];

export const FAQ = ({ items = defaults }: { items?: FAQItem[] }) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-primary">FAQ</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-[-0.03em] leading-[1.05]">
            Questions You May Ask
          </h2>
          <p className="text-foreground/65 mt-4">Any questions you have</p>
        </div>

        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`glass rounded-2xl ring-1 transition-colors ${
                  isOpen ? "ring-primary/40" : "ring-border"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base sm:text-lg">{it.q}</span>
                  <span
                    className={`grid place-items-center h-8 w-8 rounded-full bg-primary/15 text-primary shrink-0 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-foreground/70 leading-relaxed text-sm">{it.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};