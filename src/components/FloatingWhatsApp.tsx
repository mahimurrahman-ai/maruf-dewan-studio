import { whatsappLink } from "@/config/contact";

export const FloatingWhatsApp = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Maruf on WhatsApp"
    className="fixed bottom-6 right-6 z-30 group inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-pop hover:scale-110 transition-transform"
  >
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.21c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.95.93-.95 2.26 0 1.33.97 2.61 1.11 2.79.13.18 1.91 2.92 4.63 4.09.65.28 1.16.45 1.55.58.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.06-.11-.25-.18-.52-.32zM16.01 4C9.39 4 4 9.39 4 16c0 2.11.55 4.16 1.6 5.98L4 28l6.18-1.62A11.95 11.95 0 0 0 16.01 28C22.62 28 28 22.62 28 16S22.62 4 16.01 4zm0 21.86c-1.86 0-3.69-.5-5.28-1.45l-.38-.22-3.67.96.98-3.58-.25-.37A9.89 9.89 0 0 1 6.14 16C6.14 10.57 10.58 6.13 16.01 6.13c2.63 0 5.11 1.02 6.97 2.88a9.81 9.81 0 0 1 2.89 6.99c0 5.43-4.43 9.86-9.86 9.86z"/>
    </svg>
    <span className="pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-full bg-card ring-1 ring-border text-foreground text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
      Chat Now
    </span>
  </a>
);