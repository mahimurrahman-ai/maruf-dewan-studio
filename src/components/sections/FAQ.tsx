import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FaqItem = { q: string; a: string };

const defaultFaqs: FaqItem[] = [
  {
    q: "Why is tracking important for me?",
    a: "Without proper tracking, you may waste money on ads that don't convert. With accurate tracking, you get clear data, lower acquisition costs, and better marketing decisions.",
  },
  {
    q: "Tell me about your service?",
    a: "I set up and fix tracking for GA4, Google Ads, Meta Pixel, Conversion API, custom event tracking, and server-side tracking so your data is accurate, reliable, and actionable.",
  },
  {
    q: "Tell me about your workflow?",
    a: "I audit your entire website funnel and current tracking setup to identify gaps, errors, and opportunities for improvement. You simply provide access, I handle the rest.",
  },
  {
    q: "How long does it take?",
    a: "Most setups are completed within 3–6 hours depending on your website and requirements. More complex server-side tracking setups may take up to 2 working days.",
  },
  {
    q: "What do you need from me?",
    a: "I just need access to your website, Google Tag Manager, GA4, and ad accounts. After that, I handle everything else.",
  },
  {
    q: "How do I know the tracking is working correctly?",
    a: "After setup, I test all events using tools like GA4 DebugView, Tag Assistant, and browser tracking tools to ensure every conversion and event is firing correctly.",
  },
];

export const FAQ = ({
  title = "Any questions you have",
  eyebrow = "Questions you may Ask",
  items = defaultFaqs,
}: {
  title?: string;
  eyebrow?: string;
  items?: FaqItem[];
}) => (
  <section id="faq" className="py-20 lg:py-28">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="text-center mb-12">
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-primary">
          {eyebrow}
        </p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 tracking-[-0.03em] leading-[1.05]">
          {title}
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {items.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="bg-card border border-border rounded-2xl px-5 sm:px-6"
          >
            <AccordionTrigger className="text-left font-display font-semibold text-base sm:text-lg hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);