import { MessageCircle, Mail, Linkedin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { contact, whatsappLink } from "@/config/contact";

export const Footer = ({ onBook }: { onBook: () => void }) => {
  return (
    <footer id="footer" className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display font-bold text-2xl">Maruf Dewan</span>
            <span className="font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              — Tracking &amp; Analytics
            </span>
          </div>
          <p className="text-muted-foreground text-sm mt-4 max-w-sm leading-relaxed">
            Want to get in touch with me? Here are my socials.
          </p>
        </div>

        <div>
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Get in touch
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp ({contact.whatsappNumber})
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={contact.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Calendar className="h-4 w-4" />
                Book a free call
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono-ui text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Navigate
          </p>
          <ul className="space-y-3 text-foreground">
            <li><a href="/#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="/#process" className="hover:text-primary transition-colors">Process</a></li>
            <li><a href="/#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
            <li><Link to="/price" className="hover:text-primary transition-colors">Pricing</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-14 pt-6 border-t border-border flex items-center justify-between flex-wrap gap-3">
        <p className="font-mono-ui text-[11px] text-muted-foreground uppercase tracking-[0.18em]">
          © 2025 Maruf Ahmed Dewan. All rights reserved.
        </p>
        <p className="font-mono-ui text-[11px] text-muted-foreground uppercase tracking-[0.18em]">
          Conversion Tracking & Analytics
        </p>
      </div>
    </footer>
  );
};
