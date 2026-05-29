import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { whatsappLink, contact } from "@/config/contact";

const links = [
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/price", label: "Pricing" },
  { href: "/#footer", label: "Contact" },
];

export const Nav = ({ onBook }: { onBook: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div
        className={`transition-all duration-300 ${
          scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2 group">
            <span className="font-display font-bold text-lg text-foreground">Maruf Dewan</span>
            <span className="hidden sm:inline font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              — Tracking &amp; Analytics
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1 bg-card/80 backdrop-blur ring-1 ring-border rounded-full px-2 py-1.5 shadow-card">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-1.5 rounded-full text-sm text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="hidden sm:inline-flex items-center justify-center h-10 w-10 rounded-full bg-card ring-1 ring-border hover:bg-secondary transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={contact.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 h-10 pl-5 pr-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-95 transition-opacity shadow-pop"
            >
              Book A Call
              <span className="grid place-items-center h-7 w-7 rounded-full bg-background/95 text-foreground">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <button
              className="md:hidden h-10 w-10 grid place-items-center rounded-full bg-card ring-1 ring-border"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background animate-fade-in md:hidden">
          <div className="flex items-center justify-between h-16 px-6 border-b border-border">
            <span className="font-display font-bold text-lg">Maruf Dewan</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 grid place-items-center rounded-full hover:bg-secondary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-col px-6 py-8 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-2xl font-display font-bold border-b border-border"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 mt-4 flex flex-col gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-card ring-1 ring-border font-medium"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <a
              href={contact.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="h-12 grid place-items-center rounded-full bg-primary text-primary-foreground font-semibold"
            >
              Book A Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};