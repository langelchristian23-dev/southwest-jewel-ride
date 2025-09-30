import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./WhatsAppButton";
import { CheckCircle } from "lucide-react";
import valleyOfFire from "@/assets/valley-of-fire.jpg";
import zionNationalPark from "@/assets/zion-national-park.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Hero Images */}
      <div className="absolute inset-0 grid md:grid-cols-2 gap-0">
        <div 
          className="bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${valleyOfFire})` }}
        ></div>
        <div 
          className="bg-cover bg-center opacity-80 hidden md:block"
          style={{ backgroundImage: `url(${zionNationalPark})` }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          {/* Left side - empty for image showcase on desktop */}
          <div className="hidden md:block"></div>
          
          {/* Right side - Content */}
          <div className="md:pl-8 text-center md:text-left animate-slide-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-epic leading-tight">
              <span className="text-pure-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Süd-West Juwelen</span>
              <br />
              <span className="text-pure-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Auf zwei Rädern durch</span>
              <br />
              <span className="text-canyon-red drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Amerikas Naturwunder</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-off-white leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              Von den glitzernden Lichtern von Las Vegas bis zu den endlosen Weiten des Monument Valley – 
              erlebe die schönsten Nationalparks des Südwestens auf deiner Traum-Motorradreise.
            </p>

            {/* USP Bullet Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Geführte Tour mit 2 Guides",
                "Komfortable Hotels & Casino-Nächte in Las Vegas",
                "Route 66 Highlights & Naturwunder",
                "Kleingruppen & VIP-Service"
              ].map((usp, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-neon-green flex-shrink-0" />
                  <span className="text-pure-white font-medium">{usp}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <WhatsAppButton 
                text="Jetzt Infos per WhatsApp sichern"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-float">
        <div className="w-1 h-16 bg-gradient-to-b from-sunset-orange to-transparent rounded-full"></div>
      </div>
    </section>
  );
}