import { WhatsAppButton } from "./WhatsAppButton";
import { Quote, Star, Users, Award } from "lucide-react";
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={reinerImage}
                  alt="Reiner - Gründer von Amerika Heller"
                  className="w-full rounded-2xl shadow-epic"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-sunset-orange rounded-2xl p-6 shadow-glow animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-white/90 text-sm">Jahre Erfahrung</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-canyon-red rounded-2xl p-6 shadow-glow animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-white/90 text-sm">Zufriedene Gäste</div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-sunset-orange mb-4">
                  Reiner - Gründer von Amerika Heller
                </h3>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Mit über 20 Jahren Erfahrung in der Organisation von USA-Reisen kenne ich jeden 
                  Winkel des amerikanischen Südwestens. Als leidenschaftlicher Motorradfahrer und 
                  USA-Liebhaber bringe ich nicht nur das Know-how mit, sondern auch die Begeisterung, 
                  die diese Reisen so besonders macht.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Meine Philosophie ist einfach: Persönliche Betreuung und authentische Erlebnisse. 
                  Ich kenne jedes Hotel, jede Route und jeden versteckten Geheimtipp persönlich. 
                  Mein Ziel ist es, dir nicht nur eine Reise zu verkaufen, sondern eine 
                  lebensverändernde Erfahrung zu ermöglichen.
                </p>
              </div>

              {/* Expertise Points */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-sunset-orange mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Gründer von Amerika Heller</h4>
                    <p className="text-muted-foreground text-sm">Spezialist für Motorradreisen in die USA</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-sunset-orange mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">20+ Jahre Erfahrung</h4>
                    <p className="text-muted-foreground text-sm">Tausende organisierte USA-Reisen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-sunset-orange mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Persönliche Betreuung</h4>
                    <p className="text-muted-foreground text-sm">Individuelle Beratung und Support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Quote className="w-6 h-6 text-sunset-orange mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Leidenschaft für Motorräder</h4>
                    <p className="text-muted-foreground text-sm">Authentische Biker-Erfahrung</p>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="bg-card/50 rounded-2xl p-6 border-l-4 border-sunset-orange backdrop-blur-sm">
                <Quote className="w-8 h-8 text-sunset-orange mb-3" />
                <blockquote className="text-lg font-medium text-foreground italic mb-4">
                  "Ich kenne jede Kurve, jedes Motel und jedes Highlight persönlich – 
                  meine Leidenschaft ist es, dir die Reise deines Lebens zu ermöglichen."
                </blockquote>
                <cite className="text-sunset-orange font-semibold">
                  - Reiner, Amerika Heller
                </cite>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <WhatsAppButton 
                  text="Persönliche Beratung anfragen"
                  size="lg"
                  className="text-lg px-8 py-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card/30 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-sunset-orange mb-4">
              Warum Amerika Heller?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-white mb-2">Lokales Wissen</h4>
                <p className="text-muted-foreground text-sm">
                  Versteckte Juwelen und Geheimtipps, die du in keinem Reiseführer findest.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Sicherheit First</h4>
                <p className="text-muted-foreground text-sm">
                  Umfassende Versicherungen und professionelle Begleitung für deine Sicherheit.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Kleine Gruppen</h4>
                <p className="text-muted-foreground text-sm">
                  Maximal 12 Teilnehmer für ein persönliches und intensives Erlebnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}