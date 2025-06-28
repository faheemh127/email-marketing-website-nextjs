import Navbar from "@/components/navbar";
// import HeroSection from "@/components/ui/hero-section";
import Hero from "@/components/ui/website-hero-section";
// import BrandsSection from "@/components/ui/website-brands-section";
import BrandsSection from "@/components/ui/website-brands-section-1";
import PricingSection from "@/components/ui/website-pricing-section";
import FAQ from "@/components/ui/website-faq";
import Footer from "@/components/ui/website-footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandsSection />
      <PricingSection />
      <FAQ />
      <Footer />
    </>
  );
}
