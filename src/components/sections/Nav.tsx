import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/contact";

const links = [
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#book", label: "Book" },
];

export const Nav = ({ onBook }: { onBook: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-serif-display text-xl text-foreground">Maruf Dewan</span>
          <span className="hidden sm:inline font-mono-ui text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            — Tracking & Analytics
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
            className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded-full border border-foreground/15 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <button
            onClick={onBook}
            className="hidden md:inline-flex h-9 px-4 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Book a call
          </button>
          <button
            className="md:hidden h-10 w-10 grid place-items-center rounded-full hover:bg-muted"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-background animate-fade-in md:hidden">
          <div className="flex items-center justify-between h-16 px-6 border-b border-border">
            <span className="font-serif-display text-xl">Maruf Dewan</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 grid place-items-center rounded-full hover:bg-muted"
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
                  className="block py-4 text-2xl font-serif-display border-b border-border"
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
              className="inline-flex items-center justify-center gap-2 h-12 rounded-full border border-foreground/15 font-medium"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
            <button
              onClick={() => {
                setOpen(false);
                onBook();
              }}
              className="h-12 rounded-full bg-foreground text-background font-medium"
            >
              Book a free call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
