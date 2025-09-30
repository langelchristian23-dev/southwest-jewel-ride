import { Check, X, Shield, Bike, Users, Star } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const includedServices = [
  { icon: Users, text: "2 erfahrene Guides für perfekte Betreuung" },
  { icon: Bike, text: "Top-ausgestattete Harley-Davidson Motorräder" },
  { icon: Star, text: "Komfortable Hotels & Casino-Nächte in Las Vegas" },
  { icon: Shield, text: "Umfassende Motorrad- und Reiseversicherung" },
  { text: "Professioneller Gepäcktransport zwischen Hotels" },
  { text: "VIP-Zusatzversicherung für extra Sicherheit" },
  { text: "Exklusive Amerika Heller Kundengeschenke" },
  { text: "Detaillierte Tourenbriefings und Karten" },
  { text: "Notfall-Hotline 24/7 während der Reise" },
  { text: "Gruppenfoto und Erinnerungsurkunde" }
];

const notIncluded = [
  "Flüge nach Las Vegas (gerne organisieren wir diese für dich)",
  "Benzin für die Motorräder (ca. $200-300 pro Person)",
  "Nationalpark-Eintritte (ca. $80 pro Person)",
  "Trinkgelder für Guides und Hotelpersonal",
  "Persönliche Ausgaben und Souvenirs",
  "Alkoholische Getränke und spezielle Mahlzeiten"
];

export function InclusiveServicesSection() {
  return (
    <section className="py-24 bg-road-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-epic">
            <span className="text-sunset-orange">Was ist</span>
            <span className="text-white"> enthalten?</span>
          </h2>
          <p className="text-xl text-desert-sand max-w-3xl mx-auto">
            Wir kümmern uns um alle wichtigen Details, damit du dich voll und ganz 
            auf das Erlebnis konzentrieren kannst. Transparenz ist uns wichtig.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Included Services */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            <div className="bg-gradient-to-r from-neon-green to-green-500 p-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Check className="w-8 h-8 mr-3" />
                Im Preis enthalten
              </h3>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-neon-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      {service.icon && (
                        <div className="flex items-center space-x-2 mb-1">
                          <service.icon className="w-5 h-5 text-sunset-orange" />
                          <span className="font-semibold text-foreground">{service.text}</span>
                        </div>
                      )}
                      {!service.icon && (
                        <span className="text-foreground">{service.text}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-neon-green/10 rounded-lg border border-neon-green/20">
                <h4 className="font-bold text-neon-green mb-2">Unser Versprechen:</h4>
                <p className="text-sm text-foreground">
                  Kompletter Service ohne versteckte Kosten. Du erhältst genau das, 
                  was wir versprechen – und oft noch mehr durch unsere persönliche Betreuung.
                </p>
              </div>
            </div>
          </div>

          {/* Not Included */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            <div className="bg-gradient-to-r from-canyon-red to-red-600 p-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <X className="w-8 h-8 mr-3" />
                Nicht im Preis enthalten
              </h3>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {notIncluded.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-canyon-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-vegas-gold/10 rounded-lg border border-vegas-gold/20">
                <h4 className="font-bold text-vegas-gold mb-2">Kostentransparenz:</h4>
                <p className="text-sm text-foreground">
                  Alle zusätzlichen Kosten sind kalkulierbar. Gerne helfen wir dir bei der 
                  Flugbuchung und geben dir eine realistische Kostenübersicht für deine Planung.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-sunset-orange mb-6 text-center">
              Zusätzliche Services auf Anfrage
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Reiseplanung:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Flugbuchung und -beratung</li>
                  <li>• Verlängerungsoptionen</li>
                  <li>• Individuelle Routenanpassungen</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Comfort-Upgrades:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Premium-Hotelzimmer</li>
                  <li>• Private Transfers</li>
                  <li>• Spezielle Dining-Erlebnisse</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-sunset-orange mb-4">
              Fragen zu den Leistungen?
            </h3>
            <p className="text-foreground mb-6">
              Wir beraten dich gerne persönlich und erstellen dir ein individuelles Angebot 
              basierend auf deinen Wünschen und Bedürfnissen.
            </p>
            <WhatsAppButton 
              text="Detailberatung per WhatsApp"
              size="lg"
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}