import { motion } from "framer-motion";
import { ArrowRight, Check, MessageCircle, Star, Play } from "lucide-react";
import { whatsappLink, contact } from "@/config/contact";

const ticks = [
  "Fast & Reliable Tracking Setup",
  "End-to-End Implementation",
  "Accurate Conversion Tracking",
  "24/7 Expert Support",
];
const avatars = ["#FFB7A8", "#A6C4FF", "#FFD27A", "#C9B6FF", "#9CE0C2"];

export const Hero = ({ onBook }: { onBook: () => void }) => {
  return (
    <section id="top" className="relative pt-14 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Soft pastel blobs */}
      <div className="pointer-events-none absolute -top-20 -left-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-highlight/40 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-primary mb-5">
          Conversion Tracking &amp; Analytics Expert
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-foreground text-[clamp(1.875rem,6.2vw,4.5rem)] leading-[1.06] tracking-[-0.035em]"
        >
          Is Your Ad Spend Being Wasted by{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-primary">Broken Tracking?</span>
          </span>
        </motion.h1>

        <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
          I fix &amp; set up GA4, GTM, Meta Pixel, and Google Ads tracking with GDPR-compliant,
          cookie consent, server-side, and custom event tracking for any CMS or custom-coded
          websites so you capture every conversion and optimize ads with confidence.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-7 gap-y-2.5"
        >
          {ticks.map((t) => (
            <span key={t} className="inline-flex items-center gap-2 text-[13px] sm:text-base text-foreground/85 font-medium">
              <span className="grid place-items-center h-5 w-5 rounded-full bg-primary text-primary-foreground shadow-sm">
                <Check className="h-3 w-3" strokeWidth={4} />
              </span>
              {t}
            </span>
          ))}
        </motion.div>

        {/* Trust pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 inline-flex items-center gap-3 bg-card ring-1 ring-border rounded-full pl-2 pr-4 py-1.5 shadow-card"
        >
          <div className="flex -space-x-2">
            {avatars.map((c, i) => (
              <div key={i} className="h-7 w-7 rounded-full ring-2 ring-card" style={{ backgroundColor: c }} />
            ))}
          </div>
            <div className="flex flex-col items-start leading-tight">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-[12px] font-semibold text-foreground underline underline-offset-2 decoration-foreground/30">500+ Tracking</span>
            </div>
        </motion.div>

        {/* Video / poster card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-12 mx-auto max-w-3xl"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden ring-1 ring-border shadow-pop bg-gradient-to-br from-[#1b1b2e] via-[#2a1f4a] to-[#3b2a66]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(244_80%_60%/0.45),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(20_90%_60%/0.35),transparent_55%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <button
                onClick={onBook}
                aria-label="Play introduction"
                className="group relative h-20 w-20 rounded-full bg-background/95 grid place-items-center shadow-pop hover:scale-105 transition-transform"
              >
                <span className="absolute inset-0 rounded-full bg-background/30 animate-ping" />
                <Play className="h-7 w-7 text-foreground translate-x-0.5" fill="currentColor" />
              </button>
            </div>
            <div className="absolute left-5 bottom-4 right-5 flex items-center justify-between text-background/90 text-xs">
              <span className="font-medium">Your Video Is Playing</span>
              <span className="font-mono-ui">00:01 / 00:00</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 px-2"
        >
          <a
            href={contact.auditFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 h-14 pl-6 sm:pl-7 pr-2 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-opacity shadow-pop text-sm sm:text-base"
          >
            Claim Your Free Tracking Audit
            <span className="grid place-items-center h-10 w-10 rounded-full bg-background text-foreground transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-14 px-6 rounded-full bg-card ring-1 ring-border text-foreground font-medium hover:bg-secondary transition-colors text-sm sm:text-base"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};