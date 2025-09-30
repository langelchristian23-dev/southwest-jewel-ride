import { WhatsAppButton } from "./WhatsAppButton";
import { Star, Camera, Mountain, Route } from "lucide-react";
import grandCanyon from "@/assets/grand-canyon.jpg";
import monumentValley from "@/assets/monument-valley.jpg";
import archesDelicateArch from "@/assets/arches-delicate-arch.jpg";
import bryceCanyon from "@/assets/bryce-canyon.jpg";
import lakeMead from "@/assets/lake-mead.jpg";
import escalanteMountains from "@/assets/escalante-mountains.jpg";

const highlights = [
  {
    title: "Grand Canyon Nationalpark",
    icon: Mountain,
    image: grandCanyon,
    description: "Stehe am Rand einer der gewaltigsten Schluchten der Welt und spüre die Ehrfurcht vor der Natur.",
    features: ["Sonnenaufgang am South Rim", "Desert View Watchtower", "Hermit Road"]
  },
  {
    title: "Monument Valley",
    icon: Camera,
    image: monumentValley,
    description: "Fahre durch die ikonischste Wüstenlandschaft Amerikas, wo Hollywood-Geschichte geschrieben wurde.",
    features: ["17-Mile Scenic Drive", "Mittens Buttes", "John Ford's Point"]
  },
  {
    title: "Forrest Gump Point",
    icon: Route,
    image: monumentValley,
    description: "Der berühmteste Straßenabschnitt der Filmgeschichte – hier endete Forrest Gumps epischer Lauf.",
    features: ["Ikonischer Fotostopp", "Highway 163", "Monument Valley Kulisse"]
  },
  {
    title: "Bryce Canyon",
    icon: Star,
    image: bryceCanyon,
    description: "Ein natürliches Amphitheater aus Tausenden roter Steinnadeln, die bei Sonnenaufgang magisch leuchten.",
    features: ["Sunrise Point", "Hoodoo Formations", "Inspiration Point"]
  },
  {
    title: "Arches Nationalpark",
    icon: Mountain,
    image: archesDelicateArch,
    description: "Über 2.000 natürliche Steinbögen warten darauf, von dir entdeckt zu werden.",
    features: ["Delicate Arch", "Landscape Arch", "Fiery Furnace"]
  },
  {
    title: "Valley of Fire",
    icon: Camera,
    image: lakeMead,
    description: "Feuerrote Felsformationen, die bei Sonnenuntergang wie Flammen am Himmel brennen.",
    features: ["Fire Wave", "Elephant Rock", "White Domes"]
  }
];

export function HighlightsSection() {
  return (
    <section className="py-24 bg-road-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff4500' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-epic">
            <span className="text-sunset-orange">Unvergessliche</span>
            <span className="text-white"> Highlights</span>
          </h2>
          <p className="text-xl text-desert-sand max-w-3xl mx-auto">
            Diese Top-Stopps machen deine Süd-West Juwelen Reise zu einem einmaligen Erlebnis. 
            Jeder Ort erzählt seine eigene Geschichte und hinterlässt bleibende Eindrücke.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 bg-sunset-orange/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-sunset-orange" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {highlight.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-foreground mb-4 leading-relaxed">
                  {highlight.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {highlight.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Star className="w-4 h-4 text-sunset-orange mr-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-sunset-orange/10 to-canyon-red/10 rounded-2xl p-8 max-w-3xl mx-auto backdrop-blur-sm border border-sunset-orange/20">
            <h3 className="text-3xl font-bold text-sunset-orange mb-4">
              Erlebe alle Highlights auf einer Tour
            </h3>
            <p className="text-lg text-foreground mb-6">
              Statt einzelne Stopps zu planen, erlebst du alle diese spektakulären Orte 
              auf einer perfekt organisierten Route mit erfahrenen Guides.
            </p>
            <WhatsAppButton 
              text="Jetzt Tourinfos via WhatsApp sichern"
              size="lg"
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}