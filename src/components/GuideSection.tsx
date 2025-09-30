import { WhatsAppButton } from "./WhatsAppButton";
import { Quote, Star, Users, Award, Map, Shield, Heart } from "lucide-react";
import reinerImage from "@/assets/reiner.png";

export function GuideSection() {
  return (
    <section className="py-24 hero-gradient relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-epic">
            <span className="text-gradient-desert">Dein Guide & Experte</span>
          </h2>
          <p className="text-xl text-desert-sand max-w-3xl mx-auto">
            Mit Reiner hast du nicht nur einen Guide, sondern einen echten USA-Experten und 
            leidenschaftlichen Motorradfahrer an deiner Seite.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Side */}
            <div className="relative px-6 sm:px-0">
              <div className="relative z-10">
                <img 
                  src={reinerImage}
                  alt="Reiner - Gründer von Amerika Heller"
                  className="w-full rounded-xl md:rounded-2xl shadow-epic"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl md:rounded-2xl"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 bg-sunset-orange rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-glow animate-float">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">20+</div>
                  <div className="text-white/90 text-xs sm:text-sm">Jahre Erfahrung</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-canyon-red rounded-xl md:rounded-2xl p-4 sm:p-6 shadow-glow animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
                  <div className="text-white/90 text-xs sm:text-sm">Zufriedene Gäste</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-sunset-orange mb-3 sm:mb-4">
                  Reiner - Gründer von Amerika Heller
                </h3>
                <p className="text-base sm:text-lg text-foreground leading-relaxed mb-4 sm:mb-6">
                  Mit über 20 Jahren Erfahrung in der Organisation von USA-Reisen kenne ich jeden 
                  Winkel des amerikanischen Südwestens. Als leidenschaftlicher Motorradfahrer und 
                  USA-Liebhaber bringe ich nicht nur das Know-how mit, sondern auch die Begeisterung, 
                  die diese Reisen so besonders macht.
                </p>
                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  Meine Philosophie ist einfach: Persönliche Betreuung und authentische Erlebnisse. 
                  Ich kenne jedes Hotel, jede Route und jeden versteckten Geheimtipp persönlich. 
                  Mein Ziel ist es, dir nicht nur eine Reise zu verkaufen, sondern eine 
                  lebensverändernde Erfahrung zu ermöglichen.
                </p>
              </div>

              {/* Expertise Points */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-sunset-orange mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Gründer von Amerika Heller</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Spezialist für Motorradreisen in die USA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-sunset-orange mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">20+ Jahre Erfahrung</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Tausende organisierte USA-Reisen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-sunset-orange mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Persönliche Betreuung</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Individuelle Beratung und Support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-sunset-orange mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Leidenschaft für Motorräder</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">Authentische Biker-Erfahrung</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-card/50 rounded-xl md:rounded-2xl p-4 sm:p-6 border-l-4 border-sunset-orange backdrop-blur-sm">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-sunset-orange mb-2 sm:mb-3" />
                <blockquote className="text-base sm:text-lg font-medium text-foreground italic mb-3 sm:mb-4">
                  Ich kenne jede Kurve, jedes Motel und jedes Highlight persönlich – 
                  meine Leidenschaft ist es, dir die Reise deines Lebens zu ermöglichen.
                </blockquote>
                <cite className="text-sunset-orange font-semibold text-sm sm:text-base">
                  - Reiner, Amerika Heller
                </cite>
              </div>

              {/* CTA */}
              <div className="pt-2 sm:pt-4">
                <WhatsAppButton 
                  text="Persönliche Beratung anfragen"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Why Amerika Heller Section */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-sunset-orange">Warum</span>
              <span className="text-white"> Amerika Heller?</span>
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-light-gray max-w-2xl mx-auto">
              Drei entscheidende Gründe, die uns von anderen unterscheiden
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Map,
                title: "Lokales Wissen",
                description: "Versteckte Juwelen und Geheimtipps, die du in keinem Reiseführer findest.",
                color: "text-sunset-orange",
                bgColor: "bg-sunset-orange/20"
              },
              {
                icon: Shield,
                title: "Sicherheit First",
                description: "Umfassende Versicherungen und professionelle Begleitung für deine Sicherheit.",
                color: "text-neon-green",
                bgColor: "bg-neon-green/20"
              },
              {
                icon: Heart,
                title: "Kleine Gruppen",
                description: "Maximal 12 Teilnehmer für ein persönliches und intensives Erlebnis.",
                color: "text-canyon-red",
                bgColor: "bg-canyon-red/20"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-card rounded-xl md:rounded-2xl p-6 md:p-8 shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 ${item.bgColor} rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${item.color}`} />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-pure-white mb-3 md:mb-4">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-light-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <div className="bg-card/30 rounded-xl p-4 sm:p-6 max-w-3xl mx-auto backdrop-blur-sm border border-sunset-orange/20">
              <p className="text-sm sm:text-base text-light-gray">
                <span className="text-sunset-orange font-semibold">💡 Unser Versprechen:</span> Jede Tour wird mit Leidenschaft und über 20 Jahren Erfahrung geplant. Du bekommst nicht nur eine Reise, sondern ein lebensveränderndes Erlebnis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}