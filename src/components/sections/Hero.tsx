import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Star } from "lucide-react";
import { whatsappLink } from "@/config/contact";

export const Hero = ({ onBook }: { onBook: () => void }) => {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Editorial background lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "100% 56px",
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-muted-foreground flex items-center gap-3"
        >
          <span className="h-px w-8 bg-foreground/30" />
          Conversion Tracking & Analytics Expert
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-serif-display mt-6 text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.98] tracking-[-0.02em] text-foreground max-w-5xl"
        >
          Stop wasting ad spend on{" "}
          <span className="italic text-accent">broken tracking.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          I set up GA4, GTM, Meta Pixel, Google Ads and server-side tracking —
          GDPR-compliant, cookie-consent ready, on any CMS or custom code — so
          you capture every conversion and scale ads with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={onBook}
            className="group inline-flex items-center gap-2 h-14 px-7 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all hover:scale-[1.02]"
          >
            Book a free tracking audit
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 h-14 px-7 rounded-full border border-foreground/20 text-foreground font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex items-center gap-5 flex-wrap"
        >
          <div className="flex -space-x-2">
            {["#C68A5B", "#3F4A3C", "#7A6A4F", "#B6452C", "#1F1F1D"].map((c, i) => (
              <div
                key={i}
                className="h-9 w-9 rounded-full border-2 border-background"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">500+</span> tracking setups delivered
          </p>
        </motion.div>
      </div>
    </section>
  );
};
