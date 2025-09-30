import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const faqs = [
  {
    question: "Brauche ich ein eigenes Motorrad?",
    answer: "Nein! Wir stellen dir eine top-ausgestattete Harley-Davidson zur Verfügung. Die Motorräder sind perfekt gewartet, vollversichert und für die Strecke optimiert. Du musst nur deinen gültigen Motorradführerschein mitbringen."
  },
  {
    question: "Wie groß sind die Gruppen?",
    answer: "Unsere Gruppen bestehen aus maximal 12 Teilnehmern. Dies gewährleistet eine persönliche Betreuung, Flexibilität bei der Routengestaltung und ein intensives Gemeinschaftserlebnis. Mit 2 erfahrenen Guides bist du immer bestens betreut."
  },
  {
    question: "Welche Kosten kommen zusätzlich auf mich zu?",
    answer: "Zusätzlich zu den Reisekosten solltest du etwa 600-800€ einplanen für: Flüge nach Las Vegas (300-500€), Benzin (200-300€), Nationalpark-Eintritte (80€), Trinkgelder und persönliche Ausgaben. Wir helfen gerne bei der Flugbuchung."
  },
  {
    question: "Welche Motorräder gibt es?",
    answer: "Wir fahren ausschließlich mit Harley-Davidson Touring-Modellen wie Street Glide, Road King oder Electra Glide. Alle Maschinen sind aktuell, perfekt gewartet und mit Koffern ausgestattet. Auf Wunsch können wir auch andere HD-Modelle organisieren."
  },
  {
    question: "Brauche ich eine Kreditkarte?",
    answer: "Ja, eine Kreditkarte ist für die Motorradmiete, Hotels und viele Restaurants in den USA unerlässlich. Sie dient auch als Kaution für das Motorrad. Wir empfehlen eine Karte ohne Auslandseinsatzgebühren."
  },
  {
    question: "Wie sicher ist die Tour?",
    answer: "Sicherheit steht bei uns an erster Stelle. Alle Teilnehmer erhalten eine ausführliche Einweisung, wir fahren in der Gruppe mit erfahrenen Guides, haben 24/7-Notfallbetreuung und umfassende Versicherungen. Die Routen sind bikertauglich und bewährt."
  },
  {
    question: "Was ist mit der Unterkunft?",
    answer: "Du übernachtest in komfortablen 3-4* Hotels und erlebst echtes Las Vegas Casino-Flair am Strip. Alle Zimmer haben amerikanischen Standard mit Bad/Dusche, Klimaanlage und WLAN. Einzelzimmer gegen Aufpreis verfügbar."
  },
  {
    question: "Kann ich die Tour verlängern?",
    answer: "Absolut! Viele Gäste hängen noch ein paar Tage in Las Vegas oder Los Angeles dran. Wir helfen gerne bei der Planung von Verlängerungsoptionen, zusätzlichen Stopps oder Anschlussreisen."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 hero-gradient relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-epic">
            <span className="text-gradient-desert">Häufig gestellte</span>
            <span className="text-white"> Fragen</span>
          </h2>
          <p className="text-xl text-desert-sand max-w-3xl mx-auto">
            Hier findest du Antworten auf die wichtigsten Fragen rund um deine 
            Süd-West Juwelen Motorradreise. Für alles andere sind wir persönlich da.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card rounded-2xl shadow-card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/10 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-sunset-orange/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-sunset-orange" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-sunset-orange" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-sunset-orange" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <p className="text-foreground leading-relaxed mb-4">
                        {faq.answer}
                      </p>
                      <WhatsAppButton 
                        text="Weitere Fragen stellen"
                        size="sm"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions section */}
          <div className="text-center">
            <div className="bg-card/50 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-sunset-orange mb-4">
                Noch Fragen offen?
              </h3>
              <p className="text-foreground mb-6">
                Wir beraten dich gerne persönlich und ausführlich. Jede Frage ist wichtig für die 
                perfekte Planung deiner Traumreise. Kontaktiere uns einfach per WhatsApp!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton 
                  text="Persönliche Beratung per WhatsApp"
                  size="lg"
                  className="text-lg px-8 py-4"
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">WhatsApp</h4>
                <p className="text-muted-foreground">+1 702 277 1976</p>
                <p className="text-sm text-muted-foreground">Sofortige Antwort</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">Persönlich</h4>
                <p className="text-muted-foreground">Reiner - Amerika Heller</p>
                <p className="text-sm text-muted-foreground">20+ Jahre Erfahrung</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2">Verfügbarkeit</h4>
                <p className="text-muted-foreground">7 Tage die Woche</p>
                <p className="text-sm text-muted-foreground">Schnelle Antwortzeit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}