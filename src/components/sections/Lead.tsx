import { Calendar, FileText, Check } from "lucide-react";
import { contact } from "@/config/contact";

export const Lead = () => (
  <section id="lead" className="py-20 lg:py-28">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
      <span className="inline-flex items-center gap-2 h-8 px-4 rounded-full glass ring-1 ring-primary/30 text-xs font-medium text-primary">
        <Check className="h-3.5 w-3.5" /> Its Free
      </span>
      <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl mt-6 tracking-[-0.03em] leading-[1.05]">
        Let's Fix Your Website{" "}
        <span className="text-primary text-glow">Tracking Issues</span>
      </h2>
      <p className="text-foreground/65 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
        Book a free 1:1 tracking consultation to audit your tracking setup and
        get a clear action plan to increase ROAS and improve your data accuracy
        up to 98%.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a
          href={contact.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-14 px-7 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-95 transition-opacity glow-green"
        >
          <Calendar className="h-4 w-4" />
          Schedule a Quick Call
        </a>
        <a
          href={contact.tallyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-14 px-7 rounded-full glass ring-1 ring-border text-foreground font-medium hover:border-primary/40 transition-colors"
        >
          <FileText className="h-4 w-4" />
          Fill Audit Form
        </a>
      </div>
    </div>
  </section>
);