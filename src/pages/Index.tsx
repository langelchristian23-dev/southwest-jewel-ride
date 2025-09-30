import { HeroSection } from "@/components/HeroSection";
import { EmotionalStorySection } from "@/components/EmotionalStorySection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AttractionsSection } from "@/components/AttractionsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { GuideSection } from "@/components/GuideSection";
import { InclusiveServicesSection } from "@/components/InclusiveServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalSection } from "@/components/FinalSection";
import { CookieBanner } from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <EmotionalStorySection />
      <AttractionsSection />
      <TimelineSection />
      <HighlightsSection />
      <GuideSection />
      <InclusiveServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalSection />
      <Footer />

      {/* Sticky WhatsApp Button */}
      <WhatsAppButton sticky />
      
      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
};

export default Index;
