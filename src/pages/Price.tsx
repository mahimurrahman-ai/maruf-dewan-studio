import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ, type FaqItem } from "@/components/sections/FAQ";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { BookingModal } from "@/components/BookingModal";
import { contact } from "@/config/contact";

type Plan = {
  emoji: string;
  title: string;
  price: string;
  description: string;
  features: { label: string; body: string }[];
  cta: { label: string; href: string };
};

const setupPlans: Plan[] = [
  {
    emoji: "🛠️",
    title: "For Service Based Website",
    price: "Starting at €300",
    description:
      "Perfect for B2B, SaaS, and agencies to accurately measure pipeline value and lead quality.",
    features: [
      { label: "Core Setup", body: "Full GA4 & Google Ads workspace configuration optimized for high-intent actions." },
      { label: "Conversion Mapping", body: "Flawless tracking for contact forms, phone clicks, and calendar bookings (Calendly, HubSpot, etc.)." },
      { label: "Advanced Forms", body: "Custom-coded solution to track complex multi-step or iframe lead forms." },
      { label: "Add-ons", body: "Meta CAPI (+€300) | Cookie Consent Mode v2 (+€300) | Extra Ad Platform (+€300)." },
    ],
    cta: { label: "Go With This Plan", href: contact.auditFormUrl },
  },
  {
    emoji: "🛒",
    title: "For E-commerce Website",
    price: "Starting at €500",
    description:
      "Complete server-to-browser data layer tracking from first click to checkout.",
    features: [
      { label: "Full-Funnel Tracking", body: "Complete end-to-end data layer setups in GA4 & Google Ads (View to Purchase)." },
      { label: "Enhanced Conversions", body: "Securely passes hashed first-party data to recover \"lost\" attribution." },
      { label: "ROAS Accuracy", body: "Precise data layer transmission for raw revenue, local currency, and item-level parameters." },
      { label: "Add-ons", body: "Meta Pixel & CAPI (+€400) | Custom Events (+€400) | Consent Mode v2 (+€300) | Extra Ad Platform (+€300)." },
    ],
    cta: { label: "Go With This Plan", href: contact.auditFormUrl },
  },
  {
    emoji: "🎯",
    title: "Automation, OCT & AI Dashboards",
    price: "Contact for Custom Quote",
    description:
      "Scale backend data flows, safeguard automations, and launch AI reporting.",
    features: [
      { label: "OCT with Premium CRMs", body: "Seamlessly syncs hidden click IDs (GCLID/FBCLID) through HubSpot or Zoho to feed offline \"Closed-Won\" revenue back to Google and Meta ads." },
      { label: "OCT without Paid CRMs", body: "Build the same revenue-tracking loop using custom webhooks, automation tools, or Google Sheets to completely bypass costly software upgrades." },
      { label: "Workflow Automation & Monitoring", body: "Connects your whole tech stack using Zapier, Make, or n8n, backed by live error-tracking to catch broken data flows instantly." },
      { label: "AI Reporting Dashboards", body: "Streams your automated pipeline data into interactive, AI-powered sheets for instant, natural-language summaries of your actual ad ROI." },
    ],
    cta: { label: "Book a Strategy Call", href: contact.calendarUrl },
  },
];

const monthlyPlans: Plan[] = [
  {
    emoji: "📊",
    title: "Growth Protection",
    price: "€150 / month, per website",
    description:
      "Essential data protection and tracking maintenance for steady brands. Ideal for brands spending €5k–€10k/mo on ads.",
    features: [
      { label: "Updates", body: "Up to 2 custom adjustments or new landing page tag setups per month." },
      { label: "Monitoring", body: "24/7 tracking-loss alert triggers to catch broken pixels before ad budget is wasted." },
      { label: "Turnaround", body: "Guaranteed 48-hour response and resolution queue." },
    ],
    cta: { label: "Go With This Plan", href: contact.auditFormUrl },
  },
  {
    emoji: "🚀",
    title: "Scale Protection",
    price: "€300 / month, per website",
    description:
      "Priority data management and server-side optimization for scaling funnels. Ideal for brands spending €10k–€25k/mo on ads.",
    features: [
      { label: "Updates", body: "Up to 5 custom updates or tracking fixes per month to support active ad testing." },
      { label: "Maintenance", body: "Ongoing optimization for server-side APIs (Meta CAPI, TikTok) and Consent Mode v2." },
      { label: "Turnaround", body: "Priority client queue with a 24–48 hour turnaround guarantee." },
    ],
    cta: { label: "Go With This Plan", href: contact.auditFormUrl },
  },
  {
    emoji: "⚡",
    title: "Enterprise Protection",
    price: "€450 / month, per website",
    description:
      "Elite data governance and dedicated attribution protection for high spenders. Ideal for brands spending €25k+/mo on ads.",
    features: [
      { label: "Updates", body: "Unlimited custom tracking requests, immediate technical bug fixes, and event deployments." },
      { label: "Optimization", body: "Bi-weekly programmatic deep dives engineered to maximize ad platform data match quality scores." },
      { label: "Turnaround", body: "VIP priority support with a guaranteed sub-24 hour execution window." },
    ],
    cta: { label: "Go With This Plan", href: contact.auditFormUrl },
  },
];

const pricingFaqs: FaqItem[] = [
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
    a: "Our 24/7 monitoring flags the error instantly. We step in and resolve the bug within 24 to 48 hours (or sub-24 hours for Enterprise) before it skews your ad data.",
  },
];

const PlanCard = ({ plan }: { plan: Plan }) => (
  <article className="flex flex-col bg-card rounded-3xl p-7 ring-1 ring-border shadow-card hover:shadow-pop transition-shadow">
    <div className="text-3xl">{plan.emoji}</div>
    <h3 className="font-display font-bold text-xl sm:text-2xl mt-3 tracking-[-0.02em] leading-snug">
      {plan.title}
    </h3>
    <p className="font-display text-primary font-bold text-2xl mt-4">{plan.price}</p>
    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{plan.description}</p>

    <ul className="mt-6 space-y-3 flex-1">
      {plan.features.map((f, i) => (
        <li key={i} className="flex gap-3">
          <span className="grid place-items-center h-5 w-5 rounded-full bg-primary text-primary-foreground shrink-0 mt-0.5">
            <Check className="h-3 w-3" strokeWidth={4} />
          </span>
          <span className="text-sm text-foreground/90 leading-relaxed">
            <strong className="font-semibold">{f.label}:</strong>{" "}
            <span className="text-muted-foreground">{f.body}</span>
          </span>
        </li>
      ))}
    </ul>

    <a
      href={plan.cta.href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-flex items-center justify-center gap-2 h-12 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-opacity"
    >
      {plan.cta.label} <ArrowUpRight className="h-4 w-4" />
    </a>
  </article>
);

const Price = () => {
  const [tab, setTab] = useState<"setup" | "monthly">("setup");
  const [bookingOpen, setBookingOpen] = useState(false);
  const plans = tab === "setup" ? setupPlans : monthlyPlans;

  return (
    <main className="bg-background text-foreground min-h-screen">
      <AnnouncementBar />
      <Nav onBook={() => setBookingOpen(true)} />

      <section className="pt-14 pb-10 lg:pt-20 lg:pb-14 text-center">
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-primary">
          pricing
        </p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl mt-4 tracking-[-0.035em]">
          our services
        </h1>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-card ring-1 ring-border rounded-full p-1.5 shadow-card">
              {[
                { id: "setup", label: "Tracking Setup" },
                { id: "monthly", label: "Monthly Management" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id as "setup" | "monthly")}
                  className={`px-5 sm:px-7 h-11 rounded-full text-sm font-semibold transition-colors ${
                    tab === t.id
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/75 hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {plans.map((p, i) => (
              <PlanCard key={p.title + i} plan={p} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ title="Frequently Asked Questions" eyebrow="Pricing FAQ" items={pricingFaqs} />
      <BottomCTA />
      <Footer onBook={() => setBookingOpen(true)} />
      <FloatingWhatsApp />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
};

export default Price;