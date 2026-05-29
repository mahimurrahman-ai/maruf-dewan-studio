import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const stats = [
  { value: 300, suffix: "%", prefix: "+", label: "Revenue Growth" },
  { value: 35, suffix: "%", prefix: "−", label: "Lower Cost per Conversion" },
  { value: 4.1, suffix: "×", prefix: "", label: "Average ROAS", decimals: 1 },
  { value: 2.7, suffix: "×", prefix: "", label: "Tracking Accuracy", decimals: 1 },
];

const checklist = [
  "Google Ads Conversion Tracking",
  "Facebook Pixel & Conversion API",
  "First-Party Server-Side Tracking",
  "Google Analytics 4 Funnel Track",
  "Offline Conversion Setup for Ads",
];

const Counter = ({ to, decimals = 0 }: { to: number; decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(mv, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    return ctrl.stop;
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{text}</motion.span>;
};

export const Results = () => {
  return (
    <section id="results" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Results
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-[-0.03em] leading-[1.05]">
            Full-Funnel Tracking to Scale Profitably
          </h2>

          <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-card rounded-2xl p-4 sm:p-6 ring-1 ring-border shadow-card"
              >
                <p className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em]">
                  {s.prefix}
                  <Counter to={s.value} decimals={s.decimals ?? 0} />
                  <span className="text-primary">{s.suffix}</span>
                </p>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sticky-note checklist with red pushpin */}
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1.4 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <span className="pushpin -top-3 right-10 z-10" />
          <div className="relative bg-card rounded-3xl p-6 sm:p-8 ring-1 ring-border shadow-note">
            <ul className="space-y-5">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="grid place-items-center h-7 w-7 rounded-full bg-[hsl(28_95%_55%)] text-white shrink-0 shadow-sm">
                    <Check className="h-4 w-4" strokeWidth={3.5} />
                  </span>
                  <span className="font-display font-semibold text-base sm:text-lg md:text-xl text-foreground leading-tight">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};