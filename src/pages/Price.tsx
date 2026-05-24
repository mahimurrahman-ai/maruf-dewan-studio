import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Lead } from "@/components/sections/Lead";
import { Socials } from "@/components/sections/Socials";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";
import { contact } from "@/config/contact";

type Plan = {
  emoji: string;
  badge?: string;
  label: string;
  price: string;
  tagline: string;
  idealFor?: string;
  features: string[];
  cta: { text: string; href: string };
  featured?: boolean;
};

const oneTime: Plan[] = [
  {
    emoji: "🛠️",
    badge: "Foundational Tracking",
    label: "For Service Based Website",
    price: "Starting at €300",
    tagline:
      "Perfect for B2B, SaaS, and agencies to accurately measure pipeline value and lead quality.",
    features: [
      "Core Setup: Full GA4 & Google Ads workspace configuration optimized for high-intent actions.",
      "Conversion Mapping: Flawless tracking for contact forms, phone clicks, and calendar bookings (Calendly, HubSpot, etc.).",
      "Advanced Forms: Custom-coded solution to track complex multi-step or iframe lead forms.",
      "Add-ons: Meta CAPI (+€300) | Cookie Consent Mode v2 (+€300) | Extra Ad Platform (+€300).",
    ],
    cta: { text: "Go With This Plan", href: contact.tallyUrl },
  },
  {
    emoji: "🛒",
    label: "For E-commerce Funnel Setup",
    price: "Starting at €500",
    tagline:
      "Complete server-to-browser data layer tracking from first click to checkout.",
    features: [
      "Full-Funnel Tracking: Complete end-to-end data layer setups in GA4 & Google Ads (View to Purchase).",
      "Enhanced Conversions: Securely passes hashed first-party data to recover \"lost\" attribution.",
      "ROAS Accuracy: Precise data layer transmission for raw revenue, local currency, and item-level parameters.",
      "Add-ons: Meta Pixel & CAPI (+€400) | Custom Events (+€400) | Consent Mode v2 (+€300) | Extra Ad Platform (+€300).",
    ],
    cta: { text: "Go With This Plan", href: contact.tallyUrl },
    featured: true,
  },
  {
    emoji: "🎯",
    label: "Automation, OCT & AI Dashboards",
    price: "Contact for Custom Quote",
    tagline:
      "Scale backend data flows, safeguard automations, and launch AI reporting.",
    features: [
      "OCT with Premium CRMs: Seamlessly syncs hidden click IDs (GCLID/FBCLID) through your existing pipeline (HubSpot or Zoho) to automatically feed offline \"Closed-Won\" revenue back to Google and Meta ads.",
      "OCT without Paid CRMs: Don't have an expensive CRM setup? We build the exact same revenue-tracking loop using custom webhooks, automation tools, or Google Sheets.",
      "Workflow Automation & Monitoring: Connects your whole tech stack using Zapier, Make, or n8n, backed by live error-tracking.",
      "AI Reporting Dashboards: Streams your automated pipeline data straight into interactive, AI-powered sheets for instant, natural-language summaries of your actual ad ROI.",
    ],
    cta: { text: "Book a Strategy Call", href: contact.calendarUrl },
  },
];

const monthly: Plan[] = [
  {
    emoji: "📊",
    label: "Growth Protection",
    price: "€150 / month, per website",
    tagline: "Essential data protection and tracking maintenance for steady brands.",
    idealFor: "Brands spending €5k–€10k/mo on ads.",
    features: [
      "Updates: Up to 2 custom adjustments or new landing page tag setups per month.",
      "Monitoring: 24/7 tracking-loss alert triggers to catch broken pixels before ad budget is wasted.",
      "Turnaround: Guaranteed 48-hour response and resolution queue.",
    ],
    cta: { text: "Go With This Plan", href: contact.tallyUrl },
  },
  {
    emoji: "🚀",
    badge: "Most Popular",
    label: "Scale Protection",
    price: "€300 / month, per website",
    tagline: "Priority data management and server-side optimization for scaling funnels.",
    idealFor: "Brands spending €10k–€25k/mo on ads.",
    features: [
      "Updates: Up to 5 custom updates or tracking fixes per month to support active ad testing.",
      "Maintenance: Ongoing optimization for server-side APIs (Meta CAPI, TikTok) and Consent Mode v2.",
      "Turnaround: Priority client queue with a 24–48 hour turnaround guarantee.",
    ],
    cta: { text: "Go With This Plan", href: contact.tallyUrl },
    featured: true,
  },
  {
    emoji: "⚡",
    label: "Enterprise Protection",
    price: "€450 / month, per website",
    tagline: "Elite data governance and dedicated attribution protection for high spenders.",
    idealFor: "Brands spending €25k+/mo on ads.",
    features: [
      "Updates: Unlimited custom tracking requests, immediate technical bug fixes, and event deployments.",
      "Optimization: Bi-weekly programmatic deep dives engineered to maximize ad platform data match quality scores.",
      "Turnaround: VIP priority support with a guaranteed sub-24 hour execution window.",
    ],
    cta: { text: "Go With This Plan", href: contact.tallyUrl },
  },
];

const pricingFAQ = [
  {
    q: "One-time setup or monthly plan — which do I need?",
    a: "Need tracking built from scratch? Choose a Foundational Deployment (one-time). Want ongoing fixes, new tags, and 24/7 pixel monitoring? Choose Attribution Protection (monthly).",
  },
  {
    q: "How do the AI Reporting Dashboards actually work?",
    a: "We stream your automated pipeline and ad spend data directly into a clean dashboard. Instead of digging through confusing charts, you can simply ask the built-in AI for instant, natural-language summaries of your actual ad ROI.",
  },
  {
    q: "Do I really need a paid CRM for Offline Conversion Tracking (OCT)?",
    a: "No. If you don't use HubSpot or Zoho, we build a custom automation loop using webhooks and Google Sheets to feed your offline sales revenue back to your ads without the software cost.",
  },
  {
    q: "Can I add Meta CAPI or Consent Mode v2 later?",
    a: "Yes. You can start with the baseline setup package today and add server-side CAPI or Consent Mode tracking whenever your ad budget expands.",
  },
  {
    q: "What happens if my tracking breaks on a monthly plan?",
    a: "Our 24/7 monitoring flags the error instantly. We step in and resolve the bug within 24–48 hours (or sub-24 hours for Enterprise) before it skews your ad data.",
  },
];

const PlanCard = ({ p }: { p: Plan }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5 }}
    className={`relative flex flex-col glass rounded-3xl p-7 sm:p-8 ring-1 transition-colors ${
      p.featured
        ? "ring-primary/50 shadow-pop glow-green"
        : "ring-border hover:border-primary/40"
    }`}
  >
    {p.badge && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center h-7 px-4 rounded-full bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider">
        {p.badge}
      </span>
    )}
    <div className="text-3xl">{p.emoji}</div>
    <h3 className="font-display font-bold text-xl mt-4 tracking-[-0.02em]">{p.label}</h3>
    <p className="mt-3 font-display font-bold text-2xl text-primary">{p.price}</p>
    <p className="mt-3 text-foreground/65 text-sm leading-relaxed">{p.tagline}</p>
    {p.idealFor && (
      <p className="mt-3 text-xs text-foreground/55 font-mono-ui">
        Ideal for: {p.idealFor}
      </p>
    )}
    <ul className="mt-6 space-y-3 flex-1">
      {p.features.map((f, i) => (
        <li key={i} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
          <span className="grid place-items-center h-5 w-5 rounded-full bg-primary/15 text-primary shrink-0 mt-0.5">
            <Check className="h-3 w-3" strokeWidth={3.5} />
          </span>
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <a
      href={p.cta.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-between gap-2 h-12 px-5 rounded-full bg-primary text-primary-foreground font-semibold mt-8 hover:opacity-95 transition-opacity"
    >
      {p.cta.text}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  </motion.div>
);

const Price = () => {
  const [tab, setTab] = useState<"one" | "monthly">("one");
  const plans = tab === "one" ? oneTime : monthly;

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav />
      <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <span className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-primary">
            pricing
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mt-4 tracking-[-0.035em] leading-[1.05]">
            Our Services
          </h1>

          <div className="inline-flex items-center mt-10 p-1.5 rounded-full glass ring-1 ring-border">
            <button
              onClick={() => setTab("one")}
              className={`px-5 sm:px-6 h-10 rounded-full text-sm font-semibold transition-colors ${
                tab === "one"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Tracking Setup
            </button>
            <button
              onClick={() => setTab("monthly")}
              className={`px-5 sm:px-6 h-10 rounded-full text-sm font-semibold transition-colors ${
                tab === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Monthly Management
            </button>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <PlanCard key={`${tab}-${i}`} p={p} />
          ))}
        </div>
      </section>

      <Testimonials />
      <FAQ items={[...pricingFAQ]} />
      <Lead />
      <Socials />
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </main>
  );
};

export default Price;