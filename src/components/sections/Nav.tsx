import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "/#review", label: "Reviews" },
  { href: "/#service", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/price", label: "Pricing" },
  { href: "/#lead", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const resolve = (href: string) => {
    if (href.startsWith("/#") && pathname !== "/") return href;
    return href;
  };

  return (
    <header className="sticky top-0 z-40">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="h-7 w-7 rounded-lg bg-primary/15 ring-1 ring-primary/40 grid place-items-center">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
            </span>
            <span className="font-display font-bold text-lg text-foreground">Maruf Dewan</span>
          </Link>

          <ul className="hidden md:flex items-center gap-1 glass ring-1 ring-border rounded-full px-2 py-1.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={resolve(l.href)}
                  className="px-4 py-1.5 rounded-full text-sm text-foreground/75 hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="/#lead"
              className="hidden md:inline-flex items-center h-10 px-5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity glow-green"
            >
              Claim FREE Audit
            </a>
            <button
              className="md:hidden h-10 w-10 grid place-items-center rounded-full glass ring-1 ring-border"
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
                  href={resolve(l.href)}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-2xl font-display font-bold border-b border-border"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 mt-4">
            <a
              href="/#lead"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center h-12 rounded-full bg-primary text-primary-foreground font-semibold glow-green"
            >
              Claim FREE Audit
            </a>
          </div>
        </div>
      )}
    </header>
  );
};