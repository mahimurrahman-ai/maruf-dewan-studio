import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { AdPerformance } from "@/components/sections/AdPerformance";
import { CallCTA } from "@/components/sections/CallCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Lead } from "@/components/sections/Lead";
import { Socials } from "@/components/sections/Socials";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => (
  <main className="bg-background text-foreground min-h-screen">
    <Nav />
    <Hero />
    <Marquee />
    <Stats />
    <Services />
    <AdPerformance />
    <CallCTA />
    <Testimonials />
    <Process />
    <FAQ />
    <Lead />
    <Socials />
    <Footer />
    <FloatingWhatsApp />
    <ScrollToTop />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Maruf Ahmed Dewan",
          jobTitle: "Conversion Tracking & Analytics Expert",
          url: "/",
          sameAs: ["https://www.linkedin.com/in/marufahmeddewan/"],
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

export default Index;