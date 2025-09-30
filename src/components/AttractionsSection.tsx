import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./WhatsAppButton";
import hooverDam from "@/assets/hoover-dam.jpg";
import grandCanyon from "@/assets/grand-canyon.jpg";
import monumentValley from "@/assets/monument-valley.jpg";
import archesDelicateArch from "@/assets/arches-delicate-arch.jpg";
import capitolReef from "@/assets/capitol-reef.jpg";
import bryceCanyon from "@/assets/bryce-canyon.jpg";
import escalanteMountains from "@/assets/escalante-mountains.jpg";
import lakeMead from "@/assets/lake-mead.jpg";
import lasVegasStrip from "@/assets/las-vegas-strip.jpg";
import route66 from "@/assets/route66.jpg";
import valleyOfFire from "@/assets/valley-of-fire.jpg";
import zionNationalPark from "@/assets/zion-national-park.jpg";
import forrestGumpPoint from "@/assets/forrest-gump-point.webp";

const attractions = [
  {
    name: "Hoover Dam",
    image: hooverDam,
    story: "Ein Meisterwerk der Ingenieurskunst – dieser gewaltige Damm zwischen Nevada und Arizona ist ein Symbol menschlicher Schaffenskraft. Die Fahrt dorthin ist bereits ein Erlebnis für sich."
  },
  {
    name: "Oatman & Seligman Route 66",
    image: route66,
    story: "Die legendäre Route 66! In Seligman und Oatman spürst du die authentische Atmosphäre vergangener Zeiten. Wilde Esel wandeln frei durch die Straßen dieser historischen Städte."
  },
  {
    name: "Grand Canyon Nationalpark",
    image: grandCanyon,
    story: "Eines der sieben Naturwunder der Welt. Wenn du am Rand dieser gewaltigen Schlucht stehst, verstehst du, warum Millionen von Menschen hierher pilgern."
  },
  {
    name: "Monument Valley",
    image: monumentValley,
    story: "Die ikonischste Wüstenlandschaft Amerikas. Hier wurden unzählige Western gedreht – du fühlst dich wie ein Cowboy in deinem eigenen Film."
  },
  {
    name: "Forrest Gump Point",
    image: forrestGumpPoint,
    story: "Der berühmteste Straßenabschnitt der Filmgeschichte. Hier endete Forrest Gumps epischer Lauf – und hier beginnt dein unvergessliches Abenteuer."
  },
  {
    name: "Arches Nationalpark",
    image: archesDelicateArch,
    story: "Über 2.000 natürliche Steinbögen warten darauf, von dir entdeckt zu werden. Der berühmte Delicate Arch ist das Wahrzeichen von Utah."
  },
  {
    name: "Capitol Reef",
    image: capitolReef,
    story: "Eine versteckte Oase mit spektakulären roten Felsformationen und einer reichen Geschichte der Pioniere."
  },
  {
    name: "Bryce Canyon",
    image: bryceCanyon,
    story: "Ein Amphitheater aus roten Felsnadeln, die 'Hoodoos' genannt werden. Bei Sonnenaufgang erstrahlt alles in einem magischen Licht."
  },
  {
    name: "Zion Nationalpark", 
    image: zionNationalPark,
    story: "Majestätische Sandstein-Klippen und kurvenreiche Straßen schaffen eine Oase in der Wüste Utahs. Die Fahrt durch diesen Park ist pure Motorrad-Magie."
  },
  {
    name: "Valley of Fire",
    image: valleyOfFire,
    story: "Feuerrote Felsformationen, die bei Sonnenuntergang wie Flammen leuchten. Die Straße durch diesen Park ist ein Traum für jeden Biker."
  },
  {
    name: "Las Vegas Strip",
    image: lasVegasStrip,
    story: "Die Stadt, die niemals schläft. Nach Tagen in der Wildnis empfängst du die Neonlichter wie ein König der Straße."
  }
];

export function AttractionsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % attractions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + attractions.length) % attractions.length);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-road-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-epic">
            <span className="text-sunset-orange">Legendäre</span>
            <span className="text-white"> Sehenswürdigkeiten</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-desert-sand max-w-3xl mx-auto px-4">
            Jeder Stopp erzählt seine eigene Geschichte – entdecke die Highlights, 
            die deine Süd-West Juwelen Reise unvergesslich machen.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-epic">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {attractions.map((attraction, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-0 min-h-[400px] sm:min-h-[500px]">
                    <div className="relative h-48 sm:h-64 md:h-auto">
                      <img 
                        src={attraction.image}
                        alt={attraction.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                    </div>
                    <div className="bg-card p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-sunset-orange mr-2 sm:mr-3 flex-shrink-0" />
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-sunset-orange">
                          {attraction.name}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed mb-4 sm:mb-6">
                        {attraction.story}
                      </p>
                      <WhatsAppButton text="Mehr über diese Tour erfahren" className="w-full sm:w-auto" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation - Hidden on mobile, shown on md+ */}
          <Button
            onClick={prevSlide}
            variant="epic"
            size="icon"
            className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="epic"
            size="icon"
            className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {attractions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-sunset-orange shadow-glow' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-14 md:mt-16 px-4">
          <WhatsAppButton 
            text="Jetzt Tourinfos via WhatsApp sichern"
            size="lg"
            className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
}