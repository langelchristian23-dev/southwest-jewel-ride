import { Calendar, MapPin, Camera } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import lasVegasStrip from "@/assets/las-vegas-strip.jpg";
import hooverDam from "@/assets/hoover-dam.jpg";
import grandCanyon from "@/assets/grand-canyon.jpg";
import monumentValley from "@/assets/monument-valley.jpg";
import archesDelicateArch from "@/assets/arches-delicate-arch.jpg";
import bryceCanyon from "@/assets/bryce-canyon.jpg";
import escalanteMountains from "@/assets/escalante-mountains.jpg";
import zionNationalPark from "@/assets/zion-national-park.jpg";
import valleyOfFire from "@/assets/valley-of-fire.jpg";
import forrestGumpPoint from "@/assets/forrest-gump-point.webp";

const timeline = [
  {
    day: "Tag 1",
    title: "Ankunft in Las Vegas",
    distance: "Orientierung",
    highlights: ["Hotelcheck-in", "Bike-Übernahme", "Vegas Strip erkunden"],
    image: lasVegasStrip,
    description: "Willkommen in der Stadt der Träume! Nach der Ankunft und dem Check-in in deinem komfortablen Hotel am Strip übernimmst du deine Maschine und machst dich mit ihr vertraut."
  },
  {
    day: "Tag 2", 
    title: "Las Vegas - Laughlin",
    distance: "350 km",
    highlights: ["Hoover Dam", "Oatman Historic Town", "Route 66"],
    image: hooverDam,
    description: "Die Tour beginnt! Erste Station ist der imposante Hoover Dam, dann führt dich die Route durch die Geisterstadt Oatman mit ihren wilden Eseln auf der legendären Route 66."
  },
  {
    day: "Tag 3",
    title: "Laughlin - Flagstaff", 
    distance: "420 km",
    highlights: ["Seligman Route 66", "Williams", "Landschaftswechsel"],
    image: grandCanyon,
    description: "Durch die historischen Route 66 Städte Seligman und Williams geht es in Richtung Flagstaff. Die Landschaft wechselt von Wüste zu Hochebene."
  },
  {
    day: "Tag 4",
    title: "Flagstaff - Monument Valley",
    distance: "380 km", 
    highlights: ["Grand Canyon Südrand", "Cameron", "Monument Valley"],
    image: monumentValley,
    description: "Höhepunkt des Tages: der Grand Canyon! Nach diesem überwältigenden Erlebnis führt die Route weiter zum ikonischen Monument Valley."
  },
  {
    day: "Tag 5",
    title: "Monument Valley - Moab",
    distance: "250 km",
    highlights: ["Forrest Gump Point", "Mexican Hat", "Landschaft pur"],
    image: forrestGumpPoint,
    description: "Am berühmten Forrest Gump Point machst du das obligatorische Foto, bevor es weiter nach Moab geht, dem Tor zu spektakulären Nationalparks."
  },
  {
    day: "Tag 6",
    title: "Moab - Capitol Reef",
    distance: "290 km",
    highlights: ["Arches National Park", "Delicate Arch", "Rote Felsen"],
    image: archesDelicateArch,
    description: "Erkunde den Arches National Park mit seinem berühmten Delicate Arch. Die kurvenreichen Straßen durch die roten Felsformationen sind ein Traum für jeden Biker."
  },
  {
    day: "Tag 7",
    title: "Capitol Reef - Bryce Canyon",
    distance: "200 km",
    highlights: ["Capitol Reef NP", "Scenic Drive", "Pioniergeschichte"],
    image: bryceCanyon,
    description: "Der weniger bekannte aber nicht minder spektakuläre Capitol Reef National Park zeigt dir eine andere Seite des amerikanischen Westens."
  },
  {
    day: "Tag 8",
    title: "Bryce Canyon - Zion",
    distance: "180 km",
    highlights: ["Bryce Canyon Amphitheater", "Hoodoos", "Sonnenaufgang"],
    image: bryceCanyon,
    description: "Früh aufstehen lohnt sich! Der Sonnenaufgang über den roten Hoodoos von Bryce Canyon ist eines der magischsten Erlebnisse der Tour."
  },
  {
    day: "Tag 9",
    title: "Zion - Las Vegas",
    distance: "320 km", 
    highlights: ["Zion National Park", "Valley of Fire", "Rückkehr"],
    image: valleyOfFire,
    description: "Letzte spektakuläre Eindrücke im Zion National Park und Valley of Fire, bevor du triumphierend nach Las Vegas zurückkehrst."
  },
  {
    day: "Tag 10",
    title: "Abreise Las Vegas",
    distance: "Abschied",
    highlights: ["Bike-Rückgabe", "Abschiedsfrühstück", "Heimreise"],
    image: lasVegasStrip,
    description: "Nach einem letzten gemeinsamen Frühstück heißt es Abschied nehmen von einer unvergesslichen Reise voller Abenteuer und neuer Freundschaften."
  }
];

export function TimelineSection() {
  return (
    <section className="py-24 hero-gradient relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-epic">
            <span className="text-canyon-red">10 Tage</span>
            <span className="text-pure-white"> pures Abenteuer</span>
          </h2>
          <p className="text-xl text-off-white max-w-3xl mx-auto">
            Tag für Tag führt dich diese einzigartige Route durch die spektakulärsten Landschaften 
            des amerikanischen Südwestens. Jede Etappe bietet neue Höhepunkte.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timeline.map((day, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < timeline.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-sunset-orange to-canyon-red"></div>
              )}

              <div className="grid md:grid-cols-12 gap-4 md:gap-6 mb-8 md:mb-12">
                {/* Day marker */}
                <div className="md:col-span-2 flex flex-col items-center md:items-start">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sunset-orange rounded-full flex items-center justify-center shadow-glow mb-2 relative z-10">
                    <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <span className="text-sunset-orange font-bold text-base sm:text-lg">{day.day}</span>
                </div>

                {/* Content */}
                <div className="md:col-span-10">
                  <div className="bg-card rounded-xl md:rounded-2xl shadow-card overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-auto">
                        <img 
                          src={day.image}
                          alt={day.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center text-white">
                            <MapPin className="w-5 h-5 mr-2" />
                            <span className="font-medium">{day.distance}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-sunset-orange mb-2 sm:mb-3">
                          {day.title}
                        </h3>
                        <p className="text-sm sm:text-base text-light-gray mb-3 sm:mb-4 leading-relaxed">
                          {day.description}
                        </p>
                        
                        <div className="mb-3 sm:mb-4">
                          <h4 className="font-semibold text-pure-white mb-2 flex items-center text-sm sm:text-base">
                            <Camera className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            Highlights:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {day.highlights.map((highlight, idx) => (
                              <span 
                                key={idx}
                                className="bg-sunset-orange/20 text-sunset-orange px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA every 2nd day */}
                        {(index + 1) % 2 === 0 && (
                          <WhatsAppButton text="Tourdetails anfragen" size="sm" className="w-full sm:w-auto" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-card/50 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-sunset-orange mb-4">
              Bereit für das Abenteuer deines Lebens?
            </h3>
            <p className="text-light-gray mb-6">
              Diese 10 Tage werden dich für immer verändern. Sichere dir jetzt deinen Platz 
              auf dieser einzigartigen Motorradreise durch den amerikanischen Südwesten.
            </p>
            <WhatsAppButton 
              text="Jetzt Reise buchen"
              size="lg"
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}