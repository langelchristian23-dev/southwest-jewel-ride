import { HeroSection } from "@/components/HeroSection";
import { EmotionalStorySection } from "@/components/EmotionalStorySection";
import { AttractionsSection } from "@/components/AttractionsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { GuideSection } from "@/components/GuideSection";
import { InclusiveServicesSection } from "@/components/InclusiveServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalSection } from "@/components/FinalSection";

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
    </div>
  );
};

export default Index;
