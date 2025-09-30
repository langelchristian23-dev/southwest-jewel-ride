import { Check, X, Shield, Bike, Users, Star, Plane, MapPin, Calendar, Hotel, Car, Utensils } from "lucide-react";
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
    <section className="py-12 sm:py-16 md:py-24 bg-road-black relative">
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

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Included Services */}
          <div className="bg-card rounded-xl md:rounded-2xl shadow-card overflow-hidden">
            <div className="bg-gradient-to-r from-neon-green to-green-500 p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                <Check className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
                Im Preis enthalten
              </h3>
            </div>
            
            <div className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-neon-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      {service.icon && (
                        <div className="flex items-center space-x-2 mb-1">
                          <service.icon className="w-4 h-4 sm:w-5 sm:h-5 text-sunset-orange" />
                          <span className="font-semibold text-foreground text-sm sm:text-base">{service.text}</span>
                        </div>
                      )}
                      {!service.icon && (
                        <span className="text-foreground text-sm sm:text-base">{service.text}</span>
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
          <div className="bg-card rounded-xl md:rounded-2xl shadow-card overflow-hidden">
            <div className="bg-gradient-to-r from-canyon-red to-red-600 p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
                <X className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
                Nicht im Preis enthalten
              </h3>
            </div>
            
            <div className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                {notIncluded.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-canyon-red rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground text-sm sm:text-base">{item}</span>
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
        <div className="mt-12 md:mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sunset-orange mb-3 md:mb-4">
              Zusätzliche Services auf Anfrage
            </h3>
            <p className="text-sm sm:text-base text-light-gray max-w-2xl mx-auto">
              Gestalte deine Reise noch individueller mit unseren optionalen Upgrade-Services
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Reiseplanung Services */}
            {[
              { icon: Plane, title: "Flugbuchung und -beratung", desc: "Beste Verbindungen zum optimalen Preis" },
              { icon: Calendar, title: "Verlängerungsoptionen", desc: "Mehr Zeit in den USA? Kein Problem!" },
              { icon: MapPin, title: "Individuelle Routenanpassungen", desc: "Deine persönlichen Wünsche zählen" },
              { icon: Hotel, title: "Premium-Hotelzimmer", desc: "Upgrade auf Luxus und Komfort" },
              { icon: Car, title: "Private Transfers", desc: "Exklusiver VIP-Transport" },
              { icon: Utensils, title: "Spezielle Dining-Erlebnisse", desc: "Kulinarische Highlights unterwegs" }
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-card rounded-xl p-4 sm:p-6 shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sunset-orange/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-sunset-orange/30 transition-colors">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-sunset-orange" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-pure-white text-sm sm:text-base mb-1">
                      {service.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-light-gray leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-xs sm:text-sm text-light-gray bg-card/30 rounded-lg p-3 sm:p-4 max-w-3xl mx-auto">
              <span className="text-sunset-orange font-semibold">💡 Tipp:</span> Alle zusätzlichen Services können flexibel hinzugebucht werden. Kontaktiere uns für ein individuelles Angebot!
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16 px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-sunset-orange mb-3 sm:mb-4">
              Fragen zu den Leistungen?
            </h3>
            <p className="text-sm sm:text-base text-foreground mb-4 sm:mb-6">
              Wir beraten dich gerne persönlich und erstellen dir ein individuelles Angebot 
              basierend auf deinen Wünschen und Bedürfnissen.
            </p>
            <WhatsAppButton 
              text="Detailberatung per WhatsApp"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}