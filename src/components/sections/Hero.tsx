import { motion } from "framer-motion";
import { Check, MessageCircle, ArrowRight, Play, BadgeCheck } from "lucide-react";
import { whatsappLink } from "@/config/contact";

const ticks = [
  "Fast & Reliable Tracking Setup",
  "End-to-End Implementation",
  "Accurate Conversion Tracking",
  "24/7 Expert Support",
];

const avatars = [
  { i: "AD", c: "#A78BFA" },
  { i: "DW", c: "#60A5FA" },
  { i: "DF", c: "#34D399" },
  { i: "LS", c: "#FBBF24" },
];

const dashboardRows = [
  { label: "GA4 Events Firing", status: "Active" },
  { label: "Google Ads Conversion", status: "Active" },
  { label: "Meta Pixel + CAPI", status: "Active" },
  { label: "Server-Side Tracking", status: "Active" },
];

export const Hero = () => {
  return (
    <section id="top" className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute top-20 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -bottom-20 -right-24 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 h-8 pl-2 pr-4 rounded-full glass ring-1 ring-primary/30"
          >
            <span className="grid place-items-center h-5 w-5 rounded-full bg-primary/20 text-primary">
              <BadgeCheck className="h-3.5 w-3.5" />
            </span>
            <span className="text-xs font-medium text-foreground/85">
              Conversion Tracking &amp; Analytics Expert
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display font-bold mt-6 text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.02] tracking-[-0.035em]"
          >
            Is Your Ad Spend Being{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary text-glow">Wasted</span>
            </span>{" "}
            by Broken Tracking?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-foreground/65 text-base sm:text-lg leading-relaxed"
          >
            I fix &amp; set up GA4, GTM, Meta Pixel, and Google Ads tracking with
            GDPR-compliant, cookie consent, server-side, and custom event tracking
            for any CMS or custom-coded websites — so you capture every conversion
            and optimize ads with confidence.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3"
          >
            {ticks.map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm text-foreground/85">
                <span className="grid place-items-center h-5 w-5 rounded-full bg-primary text-primary-foreground shrink-0">
                  <Check className="h-3 w-3" strokeWidth={4} />
                </span>
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#lead"
              className="group inline-flex items-center gap-2 h-13 pl-6 pr-2 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-opacity glow-green text-sm sm:text-base"
            >
              Claim Your Free Tracking Audit
              <span className="grid place-items-center h-9 w-9 rounded-full bg-background/95 text-foreground transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-13 px-6 py-3 rounded-full glass ring-1 ring-border text-foreground font-medium hover:border-primary/40 transition-colors text-sm sm:text-base"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <p className="mt-5 text-xs text-foreground/55 max-w-md leading-relaxed">
            Capture every conversion. Improve ad performance. Get instant help
            with your tracking setup.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className="h-9 w-9 rounded-full ring-2 ring-background grid place-items-center text-[11px] font-bold text-background"
                  style={{ backgroundColor: a.c }}
                >
                  {a.i}
                </div>
              ))}
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-foreground">500+ Satisfied Clients</span>
              <span className="text-xs text-foreground/55">Across 30+ countries</span>
            </div>
          </div>
        </div>

        {/* RIGHT — dashboard widget + video card */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-3xl glass ring-1 ring-border p-5 sm:p-6 shadow-pop"
          >
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 -z-10 blur-xl" />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-foreground/50">Live</p>
                <h3 className="font-display font-bold text-lg mt-1">Tracking Status</h3>
              </div>
              <div className="flex items-center gap-2 text-xs text-foreground/70">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
                All Systems Operational
              </div>
            </div>

            <div className="mt-5 space-y-2.5">
              {dashboardRows.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                  className="flex items-center justify-between rounded-xl bg-secondary/60 ring-1 ring-border px-4 py-3"
                >
                  <span className="flex items-center gap-2.5 text-sm text-foreground/90">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px] shadow-primary" />
                    {r.label}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono-ui text-primary">
                    <Check className="h-3 w-3" strokeWidth={3.5} />
                    {r.status}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Video poster */}
            <div className="mt-5 relative rounded-2xl overflow-hidden ring-1 ring-border bg-gradient-to-br from-secondary/80 to-background aspect-video">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(152_100%_50%/0.18),transparent_60%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <button
                  aria-label="Play introduction"
                  className="group relative h-16 w-16 rounded-full bg-primary text-primary-foreground grid place-items-center hover:scale-105 transition-transform glow-green"
                >
                  <span className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                  <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
                </button>
              </div>
              <div className="absolute left-4 bottom-3 right-4 flex items-center justify-between text-foreground/80 text-[11px] font-mono-ui">
                <span>Watch: How I Fix Broken Tracking in 3 Hours</span>
                <span>00:00 / 02:14</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};