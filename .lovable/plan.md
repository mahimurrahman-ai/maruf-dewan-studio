## Maruf Dewan — Personal Portfolio (One-Page, Editorial Premium)

A high-end, single-page personal site positioning Maruf Dewan as a Conversion Tracking & Analytics Expert (GA4, GTM, Meta Pixel, Google Ads, server-side tracking). Aesthetic inspired by Stripe / Linear / Mariana Castilho — off-white canvas, large serif display headlines, generous whitespace, restrained but tasteful motion. No AI-slop gradients or generic SaaS clichés.

---

### Visual Language

- **Palette**: Warm off-white background (#F7F5F0), deep ink (#0E0E0C), accent ochre/burnt-orange for emphasis, soft sage for data ticks.
- **Type**: Large editorial serif for display (Fraunces or Instrument Serif), clean grotesque (Inter) for body, JetBrains Mono for stat labels.
- **Brand mark**: Typographic wordmark "Maruf Dewan" with a small mono caption "— Tracking & Analytics" — no icon.
- **Motion**: Subtle reveal-on-scroll, magnetic cursor on CTAs, marquee for trust logos, animated counters on stats, smooth scroll. Feels expensive, not flashy.

---

### Sections (top to bottom)

1. **Sticky nav** — wordmark left; links (Work, Services, Results, Testimonials, Book) center; WhatsApp pill right.
2. **Hero**
   - Eyebrow: "Conversion Tracking & Analytics Expert"
   - Headline (serif, oversized): "Stop wasting ad spend on broken tracking."
   - Sub: GA4, GTM, Meta Pixel, Google Ads, server-side, GDPR-compliant — set up properly so every conversion is captured.
   - Two CTAs: **Book a Free Audit** (opens calendar modal) · **Chat on WhatsApp** (opens WhatsApp directly).
   - Trust strip: "500+ Tracking Setups" with stacked avatars + 5 stars.
3. **Trusted-platforms marquee** — infinite-scroll row: Google Ads, GA4, GTM, Meta Pixel, Shopify, WordPress, Shogun, ClickFunnels, HubSpot, Zapier, Wix, Custom Code (monochrome SVG marks).
4. **Results band** — four animated counters:
   - +300% Revenue Growth
   - −35% Lower Cost per Conversion
   - 4.1× Average ROAS
   - 2.7× Tracking Accuracy
5. **Services / What I Fix** — 5 editorial cards with hover lift:
   1. Tracking & Analytics Setup
   2. Server-Side Tracking
   3. See Which Ads Actually Drive Results
   4. Google Ads Conversion Tracking
   5. Meta Pixel & Conversion API
   Plus chips: `</> Custom Event Tracking` · `▤ Form & Lead Tracking`.
6. **Implementation checklist** — two-column check-list (Google Ads, Meta CAPI, Server-side, GA4 events/funnels, all form types, offline conversions, custom GTM events, GDPR cookie consent).
7. **Ad-platform impact** — animated bar viz: Facebook Ads +34%, Google Ads +67%, TikTok Ads −42% CPA, Bing Ads −37% CPA.
8. **Testimonials** — 4-card grid (Adélaide De Vos, Dean Watson, David Friend, Lalita Sundari) with avatar + role + quote, plus a featured pull-quote.
9. **Booking CTA** — "Book a Free 1:1 Call to See How Broken Tracking Is Wasting Your Ad Spend." Primary "Book a Call" button opens a modal with embedded calendar.
10. **Footer** — wordmark, short bio, WhatsApp / Email / LinkedIn / Calendar links, copyright.

---

### Functional Behavior

- **WhatsApp button**: opens `https://wa.me/8801323121929?text=Hi%20Maruf%2C%20I%27d%20like%20a%20free%20tracking%20audit.` in a new tab (`target="_blank"`, `rel="noopener noreferrer"`). Works on desktop WhatsApp Web and the mobile app.
- **Book a Call**: opens a centered modal with an iframe embed of the calendar URL; includes a "Open in new tab" fallback link.
- **Email** & **LinkedIn**: standard `mailto:` and external links.
- **Single config file** `src/config/contact.ts` exporting `{ whatsappNumber, calendarUrl, email, linkedinUrl }` so you swap calendar/email/LinkedIn in one place later.
- Smooth anchor scrolling, fully responsive (mobile nav = slide-in sheet), accessible focus rings, respects `prefers-reduced-motion`.

---

### Technical Notes

- React + Vite + Tailwind; semantic HSL tokens added to `index.css` and `tailwind.config.ts`.
- Fonts via Google Fonts (Fraunces + Inter + JetBrains Mono).
- Motion via Framer Motion.
- Replaces `src/pages/Index.tsx`; adds composable section components under `src/components/sections/`.
- No backend (calendar = embed; WhatsApp/email = links).