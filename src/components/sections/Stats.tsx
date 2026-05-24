import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const stats = [
  { value: 300, suffix: "%", label: "Ad Revenue", dir: "up" as const, decimals: 0 },
  { value: 35, suffix: "%", label: "Lower Cost per Conversion", dir: "down" as const, decimals: 0 },
  { value: 4.1, suffix: "x", label: "Average ROAS", dir: "up" as const, decimals: 1 },
  { value: 2.7, suffix: "x", label: "Tracking Accuracy", dir: "up" as const, decimals: 1 },
];

const Counter = ({ to, decimals = 0 }: { to: number; decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => v.toFixed(decimals));
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(mv, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
    return ctrl.stop;
  }, [inView, to, mv]);
  return <motion.span ref={ref}>{text}</motion.span>;
};

export const Stats = () => (
  <section className="py-16 lg:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="relative rounded-2xl glass ring-1 ring-border p-5 sm:p-7 hover:border-primary/40 transition-colors"
        >
          <div className="flex items-baseline gap-1.5">
            <p className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-foreground">
              <Counter to={s.value} decimals={s.decimals} />
              <span className="text-primary">{s.suffix}</span>
            </p>
            {s.dir === "up" ? (
              <TrendingUp className="h-5 w-5 text-primary shrink-0" />
            ) : (
              <TrendingDown className="h-5 w-5 text-primary shrink-0" />
            )}
          </div>
          <p className="mt-3 text-xs sm:text-sm text-foreground/55 uppercase tracking-wider font-mono-ui">
            {s.label}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);