import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/contact";

export const FloatingWhatsApp = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Maruf on WhatsApp"
    className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 h-14 px-5 rounded-full bg-foreground text-background shadow-2xl hover:bg-accent hover:text-accent-foreground transition-all hover:scale-[1.04]"
  >
    <MessageCircle className="h-5 w-5" />
    <span className="hidden sm:inline font-medium text-sm">WhatsApp</span>
  </a>
);
