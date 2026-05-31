// Single source of truth for Maruf's contact links.
// WhatsApp is wired in. Replace the others when ready.

export const contact = {
  // Real number with country code. Used as https://wa.me/<digitsOnly>
  whatsappNumber: "+8801323121929",
  whatsappPrefilledMessage:
    "Hi Maruf, I'd like a free tracking audit for my website.",

  // TODO: Replace with your Calendly / Cal.com URL when ready.
  calendarUrl: "https://calendly.com/maruf-dewan/free-tracking-audit",

  // TODO: Replace with your real email and LinkedIn.
  email: "hello@marufdewan.com",
  linkedinUrl: "https://www.linkedin.com/in/maruf-dewan/",
} as const;

export const whatsappLink = () => {
  const digits = contact.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent(contact.whatsappPrefilledMessage);
  return `https://wa.me/${digits}?text=${text}`;
};
