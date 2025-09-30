import { Euro, Users, Heart, Star, CreditCard, Calendar, DollarSign, Shield, Phone, FileText, Gift, Headphones } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

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
    <section className="py-12 sm:py-16 md:py-24 bg-road-black relative overflow-hidden">
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
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`
                relative bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105
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

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-sunset-orange/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <plan.icon className="w-6 h-6 sm:w-8 sm:h-8 text-sunset-orange" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-sunset-orange mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                    {plan.subtitle}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <Euro className="w-5 h-5 sm:w-6 sm:h-6 text-vegas-gold mr-1" />
                    <span className="text-3xl sm:text-4xl font-bold text-vegas-gold">
                      {plan.price}
                    </span>
                    <span className="text-sm sm:text-base text-muted-foreground ml-2">pro Person</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-neon-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-foreground text-xs sm:text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <WhatsAppButton 
                  text="Per WhatsApp reservieren"
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-16">
          {/* Payment Options */}
          <div className="mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
              <span className="text-sunset-orange">💳 Flexible</span>
              <span className="text-white"> Zahlungsoptionen</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: DollarSign,
                  title: "Individuelle Anzahlung",
                  desc: "Höhe wird bei Buchung festgelegt"
                },
                {
                  icon: Calendar,
                  title: "Restzahlung vor Abreise",
                  desc: "Üblicherweise ca. 4 Wochen vor Start"
                },
                {
                  icon: CreditCard,
                  title: "Ratenzahlung auf Anfrage",
                  desc: "Nach Absprache möglich"
                },
                {
                  icon: Shield,
                  title: "Sichere Zahlungsarten",
                  desc: "Überweiung oder Online-Zahlung nach Vereinbarung"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group bg-card rounded-xl p-4 sm:p-6 shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sunset-orange/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-sunset-orange/30 transition-colors">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-sunset-orange" />
                  </div>
                  <h4 className="font-semibold text-pure-white text-sm sm:text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-light-gray leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Included Benefits */}
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">
              <span className="text-sunset-orange">🎁 Inklusive</span>
              <span className="text-white"> Extras</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: Phone,
                  title: "Persönliche Reiseberatung",
                  desc: "Kompetente Unterstützung von Anfang an"
                },
                {
                  icon: FileText,
                  title: "Detaillierte Tourinformationen",
                  desc: "Alle wichtigen Infos vorab"
                },
                {
                  icon: Headphones,
                  title: "24/7 Ansprechpartner",
                  desc: "Notfall-Hotline während der Reise"
                },
                {
                  icon: Gift,
                  title: "Exklusive Erinnerungen",
                  desc: "Kleines Geschenk von Amerika Heller"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="group bg-card rounded-xl p-4 sm:p-6 shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-neon-green/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-neon-green/30 transition-colors">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-neon-green" />
                  </div>
                  <h4 className="font-semibold text-pure-white text-sm sm:text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-light-gray leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center px-4">
          <div className="bg-gradient-to-r from-sunset-orange/10 to-canyon-red/10 rounded-xl md:rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-sunset-orange/20 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-sunset-orange mb-3 sm:mb-4">
              Sichere dir jetzt deinen Platz!
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-foreground mb-4 sm:mb-6">
              Die Plätze sind begrenzt und die Nachfrage ist hoch. 
              Kontaktiere uns noch heute für deine Traumreise durch den amerikanischen Südwesten.
            </p>
            <WhatsAppButton 
              text="Jetzt per WhatsApp reservieren"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}