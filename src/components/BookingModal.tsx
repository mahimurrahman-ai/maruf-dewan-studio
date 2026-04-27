import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { contact } from "@/config/contact";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const BookingModal = ({ open, onClose }: Props) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Book a free tracking audit"
    >
      <div
        className="relative w-full max-w-3xl h-[80vh] bg-background rounded-2xl shadow-2xl overflow-hidden border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div>
            <p className="font-mono-ui text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Free 1:1 Call
            </p>
            <h3 className="font-serif-display text-xl text-foreground">
              Book a tracking audit
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={contact.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Open in new tab <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="h-9 w-9 grid place-items-center rounded-full hover:bg-muted transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        <iframe
          src={contact.calendarUrl}
          title="Booking calendar"
          className="w-full h-[calc(80vh-73px)] border-0 bg-background"
        />
      </div>
    </div>
  );
};
