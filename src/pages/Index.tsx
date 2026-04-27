import { useState } from "react";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Results } from "@/components/sections/Results";
import { Services } from "@/components/sections/Services";
import { Implementation } from "@/components/sections/Implementation";
import { Testimonials } from "@/components/sections/Testimonials";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";
import { BookingModal } from "@/components/BookingModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Nav onBook={openBooking} />
      <Hero onBook={openBooking} />
      <Marquee />
      <Results />
      <Services />
      <Implementation />
      <Testimonials />
      <Booking onBook={openBooking} />
      <Footer onBook={openBooking} />
      <FloatingWhatsApp />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Maruf Dewan",
            jobTitle: "Conversion Tracking & Analytics Expert",
            url: "/",
            sameAs: ["https://www.linkedin.com/in/maruf-dewan/"],
            knowsAbout: [
              "Google Analytics 4",
              "Google Tag Manager",
              "Meta Pixel",
              "Google Ads Conversion Tracking",
              "Server-Side Tracking",
              "GDPR Cookie Consent",
            ],
          }),
        }}
      />
    </main>
  );
};

export default Index;
