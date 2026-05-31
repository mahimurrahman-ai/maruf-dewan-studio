import { useState } from "react";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { Nav } from "@/components/sections/Nav";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQ } from "@/components/sections/FAQ";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";
import { BookingModal } from "@/components/BookingModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Pricing = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <AnnouncementBar />
      <Nav onBook={openBooking} />
      <PricingSection />
      <FAQ />
      <Booking onBook={openBooking} />
      <Footer onBook={openBooking} />
      <FloatingWhatsApp />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </main>
  );
};

export default Pricing;