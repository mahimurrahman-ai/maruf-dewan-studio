import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "One-time setup or monthly plan — which do I need?",
    a: "Need tracking built from scratch? Choose a Foundational Deployment (one-time). Want ongoing fixes, new tags, and 24/7 pixel monitoring? Choose Attribution Protection (monthly).",
  },
  {
    q: "How do the Claude AI Reporting Dashboards actually work?",
    a: "We stream your automated pipeline and ad spend data directly into a clean dashboard. Instead of digging through confusing charts, you can ask the built-in Claude AI for instant, natural-language summaries of your actual ad ROI.",
  },
  {
    q: "Do I really need a paid CRM for Offline Conversion Tracking (OCT)?",
    a: "No. If you don’t use HubSpot or Zoho, we build a custom automation loop using webhooks and Google Sheets to feed your offline sales revenue back to your ads — without the software cost.",
  },
  {
    q: "Can I add Meta CAPI or Consent Mode v2 later?",
    a: "Yes. You can start with the baseline setup package today and add server-side CAPI or Consent Mode tracking whenever your ad budget expands.",
  },
  {
    q: "What happens if my tracking breaks on a monthly plan?",
    a: "Our 24/7 monitoring flags the error instantly. We step in and resolve the bug within 24 to 48 hours — sub-24 hours for Enterprise — before it skews your ad data.",
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            FAQs
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-[-0.03em] leading-[1.05]">
            Questions you may ask
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="bg-card rounded-2xl ring-1 ring-border shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base sm:text-lg tracking-[-0.01em]">
                    {f.q}
                  </span>
                  <span
                    className={`grid place-items-center h-8 w-8 rounded-full bg-secondary text-foreground shrink-0 transition-transform ${
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
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <p className="px-5 sm:px-7 pb-6 text-muted-foreground leading-relaxed">
                        {f.a}
                      </p>
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