import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink, contact } from "@/config/contact";

export const Booking = ({ onBook }: { onBook: () => void }) => {
  return (
    <section id="book" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative rounded-[1.75rem] sm:rounded-[2rem] bg-card p-7 sm:p-10 lg:p-20 overflow-hidden ring-1 ring-border shadow-pop">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-blob" />

          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-mono-ui uppercase tracking-[0.18em]">
            It's Free
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl mt-4 max-w-4xl tracking-[-0.03em] leading-[1.05]">
            Book a Free 1:1 Call to See How Broken Tracking Is{" "}
            <span className="text-primary">Wasting Your Ad Spend</span>
          </h2>
          <p className="mt-5 sm:mt-6 max-w-2xl text-muted-foreground text-base sm:text-lg">
            We'll review your current setup, identify tracking gaps, &amp; show
            you what needs to be fixed.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 relative">
            <a
              href={contact.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 h-14 pl-7 pr-2 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-opacity"
            >
              Schedule a Quick Call
              <span className="grid place-items-center h-10 w-10 rounded-full bg-background text-foreground transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-14 px-7 rounded-full ring-1 ring-border text-foreground font-medium hover:bg-secondary transition-colors"
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