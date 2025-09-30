import { Euro, Users, Heart, Star } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: "Fahrer + Sozia",
    subtitle: "Gemeinsam das Abenteuer erleben",
    price: "5.964",
    icon: Heart,
    popular: true,
    features: [
      "Ein Motorrad für zwei Personen",
      "Doppelzimmer in allen Hotels",
      "Komplette Ausrüstung für beide",
      "Gepäcktransport für zwei",
      "Versicherung für Fahrer und Beifahrer",
      "Romantische Momente zu zweit"
    ],
    highlight: "Beliebteste Option"
  },
  {
    title: "Fahrer (1/2 DZ)",
    subtitle: "Zimmer teilen, Kosten sparen",
    price: "4.069",
    icon: Users,
    popular: false,
    features: [
      "Eigenes Motorrad",
      "Geteiltes Doppelzimmer",
      "Komplette Ausrüstung",
      "Persönlicher Gepäcktransport",
      "Vollversicherung",
      "Neue Freundschaften knüpfen"
    ],
    highlight: "Beste Preis-Leistung"
  },
  {
    title: "Fahrer (EZ)",
    subtitle: "Maximale Privatsphäre",
    price: "4.799",
    icon: Star,
    popular: false,
    features: [
      "Eigenes Motorrad",
      "Privates Einzelzimmer",
      "Komplette Ausrüstung",
      "Persönlicher Gepäcktransport",
      "Vollversicherung",
      "Absolute Privatsphäre"
    ],
    highlight: "Premium Komfort"
  }
];

export function PricingSection() {
  return (
    <section className="py-24 bg-road-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ff7f50' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
               backgroundSize: '100px 100px'
             }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-epic">
            <span className="text-sunset-orange">Preise &</span>
            <span className="text-white"> Buchung</span>
          </h2>
          <p className="text-xl text-desert-sand max-w-3xl mx-auto">
            Transparente Preise ohne versteckte Kosten. Wähle die Option, 
            die am besten zu dir und deinen Reiseplänen passt.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`
                relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105
                ${plan.popular ? 'ring-2 ring-sunset-orange' : ''}
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-sunset-orange text-white px-6 py-2 rounded-full text-sm font-bold">
                    {plan.highlight}
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-sunset-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-sunset-orange" />
                  </div>
                  <h3 className="text-2xl font-bold text-sunset-orange mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {plan.subtitle}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <Euro className="w-6 h-6 text-vegas-gold mr-1" />
                    <span className="text-4xl font-bold text-vegas-gold">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">pro Person</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-neon-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-foreground text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <WhatsAppButton 
                    text="Per WhatsApp reservieren"
                    className="w-full"
                  />
                  <Button 
                    variant="outline" 
                    className="w-full border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white"
                  >
                    Detailinfos anfordern
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Payment Options */}
            <div className="bg-card/50 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-sunset-orange mb-4">
                Flexible Zahlungsoptionen
              </h3>
              <ul className="space-y-2 text-foreground">
                <li>• Anzahlung: nur 500€ bei Buchung</li>
                <li>• Restzahlung: 4 Wochen vor Abreise</li>
                <li>• Ratenzahlung auf Anfrage möglich</li>
                <li>• Sichere Online-Zahlung oder Überweisung</li>
              </ul>
            </div>

            {/* Included Benefits */}
            <div className="bg-card/50 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-sunset-orange mb-4">
                Kostenlose Extras inklusive
              </h3>
              <ul className="space-y-2 text-foreground">
                <li>• Umfassende Reiseberatung</li>
                <li>• Detaillierte Routenplanung</li>
                <li>• 24/7 Notfall-Hotline</li>
                <li>• Amerika Heller Erinnerungsgeschenke</li>
              </ul>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-sunset-orange/10 to-canyon-red/10 rounded-2xl p-8 backdrop-blur-sm border border-sunset-orange/20">
              <h3 className="text-3xl font-bold text-sunset-orange mb-4">
                Sichere dir jetzt deinen Platz!
              </h3>
              <p className="text-lg text-foreground mb-6">
                Die Plätze sind begrenzt und die Nachfrage ist hoch. 
                Kontaktiere uns noch heute für deine Traumreise durch den amerikanischen Südwesten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton 
                  text="Jetzt per WhatsApp reservieren"
                  size="lg"
                  className="text-lg px-8 py-4"
                />
                <Button 
                  variant="hero" 
                  size="lg"
                  className="px-8 py-4"
                >
                  Kostenlose Beratung
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}