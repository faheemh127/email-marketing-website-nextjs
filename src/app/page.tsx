import Navbar from "@/components/navbar";
// import HeroSection from "@/components/ui/hero-section";
import Hero from "@/components/ui/website-hero-section";
// import BrandsSection from "@/components/ui/website-brands-section";
import BrandsSection from "@/components/ui/website-brands-section-1";
import { FeatureTabs } from "@/components/ui/website-features-tab";
import PricingSection from "@/components/ui/website-pricing-section";
import FAQ from "@/components/ui/website-faq";
import Footer from "@/components/ui/website-footer";
import ComparisonTable from "@/components/ui/website-comparison-table";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandsSection />
      <FeatureTabs />
      <ComparisonTable />
      <PricingSection />
      <FAQ />
      <Footer />
    </>
  );
}
