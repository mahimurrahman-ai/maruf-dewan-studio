import { Linkedin, MessageCircle, Mail, Calendar } from "lucide-react";
import { contact, whatsappLink } from "@/config/contact";

const items = [
  { icon: Linkedin, label: "LinkedIn", href: contact.linkedinUrl, external: true },
  { icon: MessageCircle, label: "WhatsApp", href: whatsappLink(), external: true },
  { icon: Mail, label: "Email", href: `mailto:${contact.email}` },
  { icon: Calendar, label: "Calendar", href: contact.calendarUrl, external: true },
];

export const Socials = () => (
  <section className="pb-20 lg:pb-28">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
      <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-[-0.03em]">
        Want to get in touch with me? Here are my socials
      </h2>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        {items.map(({ icon: Icon, label, href, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group inline-flex items-center gap-2 h-12 px-5 rounded-full glass ring-1 ring-border hover:border-primary/40 transition-colors"
          >
            <span className="grid place-items-center h-7 w-7 rounded-full bg-primary/15 text-primary">
              <Icon className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-medium">{label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);