// Single source of truth for Maruf's contact links.
// WhatsApp is wired in. Replace the others when ready.

export const contact = {
  // Real number with country code. Used as https://wa.me/<digitsOnly>
  whatsappNumber: "+8801323121929",
  whatsappPrefilledMessage:
    "Hi Maruf, I'd like a free tracking audit for my website.",

  calendarUrl: "https://calendly.com/marufdewan2025/tracking-audit-consultation",
  tallyUrl: "https://tally.so/r/PdvqVB",
  email: "im.marufdewan@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/marufahmeddewan/",
} as const;

export const whatsappLink = () => {
  const digits = contact.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent(contact.whatsappPrefilledMessage);
  return `https://wa.me/${digits}?text=${text}`;
};

export const tallyPlanLink = (plan: string) =>
  `${contact.tallyUrl}?plan=${encodeURIComponent(plan)}`;
