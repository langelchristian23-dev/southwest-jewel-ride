import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./WhatsAppButton";
import { CheckCircle } from "lucide-react";
import valleyOfFire from "@/assets/valley-of-fire.jpg";
import zionNationalPark from "@/assets/zion-national-park.jpg";
import logoWhite from "@/assets/logo-white.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${valleyOfFire})` }}
      ></div>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Logo - Mobile Only */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 md:hidden">
        <img 
          src={logoWhite}
          alt="Amerika Heller Logo"
          className="h-12 w-auto"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center animate-slide-up py-8 sm:py-12 mt-16 sm:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-epic leading-tight px-4">
              <span className="text-pure-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Süd-West Juwelen</span>
              <br />
              <span className="text-pure-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Auf zwei Rädern durch</span>
              <br />
              <span className="text-canyon-red drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">Amerikas Naturwunder</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-off-white leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] max-w-3xl mx-auto px-4">
              Von den glitzernden Lichtern von Las Vegas bis zu den endlosen Weiten des Monument Valley – 
              erlebe die schönsten Nationalparks des Südwestens auf deiner Traum-Motorradreise.
            </p>

            {/* USP Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              {[
                "Geführte Tour mit 2 Guides",
                "Komfortable Hotels & Casino-Nächte in Las Vegas",
                "Route 66 Highlights & Naturwunder",
                "Kleingruppen & VIP-Service"
              ].map((usp, index) => (
                <div key={index} className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0" />
                  <span className="text-pure-white font-medium text-sm md:text-base">{usp}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <WhatsAppButton 
                text="Jetzt Infos sichern"
                size="lg"
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 w-full sm:w-auto"
              />
            </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-float hidden md:block">
        <div className="w-1 h-12 bg-gradient-to-b from-sunset-orange to-transparent rounded-full"></div>
      </div>
    </section>
  );
}