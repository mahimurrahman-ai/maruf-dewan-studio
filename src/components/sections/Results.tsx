import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 300, suffix: "%", prefix: "+", label: "Revenue Growth" },
  { value: 35, suffix: "%", prefix: "−", label: "Lower Cost per Conversion" },
  { value: 4.1, suffix: "×", prefix: "", label: "Average ROAS", decimals: 1 },
  { value: 2.7, suffix: "×", prefix: "", label: "Tracking Accuracy", decimals: 1 },
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
    <section id="results" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Results
            </p>
            <h2 className="font-serif-display text-4xl md:text-5xl mt-3 max-w-2xl tracking-[-0.02em]">
              Full-funnel tracking that scales profitably.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Outcomes from recent client engagements across DTC, SaaS and lead-gen.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-border">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`py-10 ${i < stats.length ? "lg:border-r" : ""} ${
                i % 2 === 0 ? "border-r" : ""
              } lg:border-r border-border last:lg:border-r-0 px-4 lg:px-8`}
            >
              <p className="font-serif-display text-5xl md:text-6xl tracking-[-0.03em] text-foreground">
                {s.prefix}
                <Counter to={s.value} decimals={s.decimals ?? 0} />
                <span className="text-accent">{s.suffix}</span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
