import { ArrowRight } from "lucide-react";
import { contact } from "@/config/contact";

export const BottomCTA = () => (
  <section className="py-16 lg:py-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-mono-ui uppercase tracking-[0.18em] mb-6">
        It's Free
      </span>
      <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] leading-[1.15] max-w-3xl mx-auto">
        Book a free 1:1 tracking consultation to audit your tracking setup and
        get a clear action plan to increase ROAS and improve your data accuracy
        up to <span className="text-primary">98%</span>.
      </p>
      <div className="mt-8 flex justify-center">
        <a
          href={contact.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 h-14 pl-7 pr-2 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-opacity"
        >
          Schedule a quick call
          <span className="grid place-items-center h-10 w-10 rounded-full bg-background text-foreground transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="h-4 w-4" />
          </span>
        </a>
      </div>
    </div>
  </section>
);