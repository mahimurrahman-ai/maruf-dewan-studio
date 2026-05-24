import { ArrowRight } from "lucide-react";
import { contact } from "@/config/contact";

export const CallCTA = () => (
  <section className="py-16 lg:py-24">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
      <div className="relative rounded-[2rem] glass ring-1 ring-primary/30 p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(152_100%_50%/0.2),transparent_60%)] pointer-events-none" />
        <div className="relative">
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-5xl tracking-[-0.03em] leading-[1.1] max-w-3xl mx-auto">
            Book a Free 1:1 Call to See How Broken Tracking Is{" "}
            <span className="text-primary text-glow">Wasting Your Ad Spend</span>
          </h2>
          <p className="mt-5 text-foreground/65 max-w-2xl mx-auto text-sm sm:text-base">
            We'll review your current setup, identify tracking gaps, &amp; show
            you what needs to be fixed.
          </p>
          <a
            href={contact.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 h-14 pl-7 pr-2 rounded-full bg-primary text-primary-foreground font-semibold mt-8 hover:opacity-95 transition-opacity glow-green"
          >
            Book Your Free Audit Call
            <span className="grid place-items-center h-10 w-10 rounded-full bg-background/95 text-foreground transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
);