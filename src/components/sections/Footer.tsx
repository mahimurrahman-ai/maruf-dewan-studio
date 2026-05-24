import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap items-center justify-between gap-4 text-sm">
      <p className="font-mono-ui text-xs text-foreground/55">
        © {new Date().getFullYear()} Maruf Ahmed Dewan
      </p>
      <nav className="flex items-center gap-5 text-foreground/70">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <Link to="/price" className="hover:text-primary transition-colors">Pricing</Link>
        <a href="/#lead" className="hover:text-primary transition-colors">Contact</a>
      </nav>
      <p className="font-mono-ui text-xs text-foreground/55">Tracking Specialist</p>
    </div>
  </footer>
);