import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/contact";

export const Booking = ({ onBook }: { onBook: () => void }) => {
  return (
    <section id="book" className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative rounded-3xl bg-foreground text-background p-10 lg:p-20 overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 -bottom-20 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />

          <p className="font-mono-ui text-[11px] uppercase tracking-[0.24em] text-background/60">
            Book — Free 1:1 call
          </p>
          <h2 className="font-serif-display text-4xl md:text-6xl mt-4 max-w-4xl tracking-[-0.02em] leading-[1.02]">
            See exactly how broken tracking is wasting your{" "}
            <span className="italic text-accent">ad spend.</span>
          </h2>
          <p className="mt-6 max-w-xl text-background/70 text-lg">
            We'll review your current setup, identify tracking gaps, and show
            you what needs to be fixed — no obligation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={onBook}
              className="group inline-flex items-center gap-2 h-14 px-8 rounded-full bg-background text-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Book a free call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full border border-background/30 text-background font-medium hover:bg-background hover:text-foreground transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Or message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
