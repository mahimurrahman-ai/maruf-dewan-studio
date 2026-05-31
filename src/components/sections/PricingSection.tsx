import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Layers, BarChart3, Rocket, Zap, Target, ShoppingCart, Wrench } from "lucide-react";
import { tallyPlanLink } from "@/config/contact";

type Plan = {
  icon: typeof Layers;
  eyebrow: string;
  title: string;
  price: string;
  priceSuffix?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
};

const setupPlans: Plan[] = [
  {
    icon: Wrench,
    eyebrow: "Foundational Tracking",
    title: "For Service Based Website",
    price: "€300",
    priceSuffix: "starting at",
    description:
      "Perfect for B2B, SaaS, and agencies to accurately measure pipeline value and lead quality.",
    features: [
      "Full GA4 & Google Ads workspace setup",
      "Forms, phone clicks & calendar bookings",
      "Custom multi-step & iframe lead forms",
      "Add-on: Meta CAPI (+€300)",
      "Add-on: Cookie Consent Mode v2 (+€300)",
    ],
    cta: "Go with this plan",
    ctaHref: tallyPlanLink("Foundational Tracking — Service Website"),
  },
  {
    icon: ShoppingCart,
    eyebrow: "E-commerce Funnel",
    title: "For E-commerce Website",
    price: "€500",
    priceSuffix: "starting at",
    description:
      "Complete server-to-browser data layer tracking from first click to checkout.",
    features: [
      "Full-funnel GA4 & Google Ads (View → Purchase)",
      "Enhanced Conversions for lost attribution",
      "Accurate revenue, currency & item params",
      "Add-on: Meta Pixel & CAPI (+€400)",
      "Add-on: Custom Events (+€400)",
    ],
    cta: "Go with this plan",
    ctaHref: tallyPlanLink("E-commerce Funnel Setup"),
  },
  {
    icon: Target,
    eyebrow: "Automation & OCT",
    title: "OCT & Claude AI Dashboards",
    price: "Custom",
    priceSuffix: "contact for quote",
    description:
      "Scale backend data flows, safeguard automations, and launch AI reporting.",
    features: [
      "OCT with HubSpot or Zoho CRMs",
      "OCT without paid CRMs (webhooks/Sheets)",
      "Workflow automation: Zapier, Make, n8n",
      "Claude AI reporting dashboards",
    ],
    cta: "Book a strategy call",
    ctaHref: "#",
  },
];

const monthlyPlans: Plan[] = [
  {
    icon: BarChart3,
    eyebrow: "Growth Protection",
    title: "Essential data protection",
    price: "€150",
    priceSuffix: "/ month, per website",
    description: "Tracking maintenance for steady brands spending €5k–€10k/mo on ads.",
    features: [
      "Up to 2 custom adjustments per month",
      "24/7 tracking-loss alert monitoring",
      "48-hour response & resolution",
      "New landing-page tag setups included",
    ],
    cta: "Go with this plan",
    ctaHref: tallyPlanLink("Growth Protection — Monthly"),
  },
  {
    icon: Rocket,
    eyebrow: "Scale Protection",
    title: "Priority data management",
    price: "€300",
    priceSuffix: "/ month, per website",
    description: "Server-side optimization for scaling funnels spending €10k–€25k/mo.",
    features: [
      "Up to 5 custom updates or fixes per month",
      "Ongoing Meta CAPI & TikTok server-side",
      "Consent Mode v2 maintenance",
      "Priority 24–48 hour turnaround",
    ],
    cta: "Go with this plan",
    ctaHref: tallyPlanLink("Scale Protection — Monthly"),
  },
  {
    icon: Zap,
    eyebrow: "Enterprise Protection",
    title: "Elite data governance",
    price: "€450",
    priceSuffix: "/ month, per website",
    description: "Dedicated attribution protection for brands spending €25k+/mo.",
    features: [
      "Unlimited custom tracking requests",
      "Immediate bug fixes & event deployments",
      "Bi-weekly programmatic deep dives",
      "VIP sub-24 hour execution window",
    ],
    cta: "Go with this plan",
    ctaHref: tallyPlanLink("Enterprise Protection — Monthly"),
  },
];

const PlanCard = ({ plan, i }: { plan: Plan; i: number }) => {
  const Icon = plan.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      className="bg-card rounded-3xl p-7 sm:p-8 ring-1 ring-border shadow-card flex flex-col"
    >
      <div className="flex items-center gap-2.5">
        <span className="h-9 w-9 rounded-xl grid place-items-center bg-secondary text-foreground">
          <Icon className="h-4.5 w-4.5" />
        </span>
        <span className="font-mono-ui text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {plan.eyebrow}
        </span>
      </div>

      <h3 className="font-display font-semibold text-xl mt-5 tracking-[-0.01em]">
        {plan.title}
      </h3>

      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-display font-bold text-5xl tracking-[-0.03em]">
          {plan.price}
        </span>
        {plan.priceSuffix && (
          <span className="text-sm text-muted-foreground">{plan.priceSuffix}</span>
        )}
      </div>

      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
        {plan.description}
      </p>

      <a
        href={plan.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition-opacity shadow-pop"
      >
        {plan.cta}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>

      <ul className="mt-7 space-y-3 pt-5 border-t border-border">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
            <span className="mt-0.5 h-4.5 w-4.5 rounded-full bg-primary/10 grid place-items-center shrink-0">
              <Check className="h-3 w-3 text-primary" strokeWidth={3.5} />
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
};

export const PricingSection = () => {
  const [tab, setTab] = useState<"setup" | "monthly">("setup");
  const plans = tab === "setup" ? setupPlans : monthlyPlans;

  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-72 w-[680px] rounded-full bg-primary/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-card ring-1 ring-border px-3.5 py-1 font-mono-ui text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          Pricing
        </span>
        <h1 className="font-display font-bold text-foreground text-[clamp(2rem,6vw,4.5rem)] mt-5 leading-[1.05] tracking-[-0.035em]">
          Our services
        </h1>
        <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg">
          Transparent pricing for one-time tracking deployments and ongoing
          attribution protection. Pick the plan that fits how you grow.
        </p>

        {/* Tabs */}
        <div className="mt-10 inline-flex items-center bg-card ring-1 ring-border rounded-full p-1.5 shadow-card">
          <button
            onClick={() => setTab("setup")}
            className={`px-5 sm:px-6 h-10 rounded-full text-sm font-semibold transition-colors ${
              tab === "setup"
                ? "bg-primary text-primary-foreground shadow-pop"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            Tracking Setup
          </button>
          <button
            onClick={() => setTab("monthly")}
            className={`px-5 sm:px-6 h-10 rounded-full text-sm font-semibold transition-colors ${
              tab === "monthly"
                ? "bg-primary text-primary-foreground shadow-pop"
                : "text-foreground/70 hover:text-foreground"
            }`}
          >
            Monthly Management
          </button>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {plans.map((p, i) => (
            <PlanCard key={`${tab}-${p.title}`} plan={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};