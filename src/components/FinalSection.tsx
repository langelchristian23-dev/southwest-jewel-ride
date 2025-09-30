import { useState, useEffect } from "react";
import { Clock, Calendar, Star } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { Button } from "@/components/ui/button";
import monumentValleySunset from "@/assets/monument-valley.jpg";

export function FinalSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 6 months from now
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 6);
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${monumentValleySunset})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40"></div>
      
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
        <div className="w-full text-center">
          {/* Main Headline */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-epic">
              <span className="text-gradient-desert">Dieses Abenteuer</span>
              <br />
              <span className="text-white">gibt es nur einmal –</span>
              <br />
              <span className="text-sunset-orange">bist du dabei?</span>
            </h2>
            <p className="text-xl md:text-2xl text-desert-sand max-w-4xl mx-auto leading-relaxed">
              Die Süd-West Juwelen warten auf dich. Monument Valley, Grand Canyon, Route 66 – 
              diese legendären Orte werden dein Leben für immer verändern.
            </p>
          </div>

          {/* Countdown */}
          <div className="mb-12">
            <div className="bg-card/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-sunset-orange/20">
              <h3 className="text-2xl font-bold text-sunset-orange mb-6 flex items-center justify-center">
                <Calendar className="w-6 h-6 mr-3" />
                Nächste Tour startet in:
              </h3>
              
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Tage", value: timeLeft.days },
                  { label: "Stunden", value: timeLeft.hours },
                  { label: "Minuten", value: timeLeft.minutes },
                  { label: "Sekunden", value: timeLeft.seconds }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-sunset-orange rounded-lg p-4 mb-2">
                      <span className="text-2xl md:text-3xl font-bold text-white">
                        {item.value.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-sm text-desert-sand font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center text-yellow-400">
                <Clock className="w-5 h-5 mr-2" />
                <span className="text-sm">Die Zeit läuft! Sichere dir jetzt deinen Platz.</span>
              </div>
            </div>
          </div>

          {/* Epic Benefits */}
          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Star,
                  title: "Einmalige Erfahrung",
                  description: "Diese Reise wirst du dein Leben lang nicht vergessen"
                },
                {
                  icon: Clock,
                  title: "Begrenzte Plätze",
                  description: "Nur 12 Teilnehmer pro Tour für maximale Qualität"
                },
                {
                  icon: Calendar,
                  title: "Perfekte Zeit",
                  description: "Optimale Wetterbedingungen und Temperaturen"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-card/20 backdrop-blur-sm rounded-xl p-6">
                  <benefit.icon className="w-8 h-8 text-sunset-orange mx-auto mb-3" />
                  <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-sm text-desert-sand">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main CTA */}
          <div className="mb-12">
            <div className="space-y-6">
              <WhatsAppButton 
                text="🏍️ JETZT PLATZ SICHERN - WhatsApp"
                size="lg"
                className="text-xl px-12 py-6 shadow-epic hover:shadow-glow transform hover:scale-105 transition-all duration-300"
              />
              <p className="text-lg text-desert-sand">
                <strong className="text-sunset-orange">+1 702 277 1976</strong> – 
                Reiner antwortet persönlich binnen weniger Minuten
              </p>
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              className="px-8 py-4"
            >
              📞 Kostenloses Beratungsgespräch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white"
            >
              📧 Detaillierte Reiseunterlagen
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="bg-card/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-sunset-orange">500+</div>
                <div className="text-sm text-desert-sand">Begeisterte Teilnehmer</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sunset-orange">20+</div>
                <div className="text-sm text-desert-sand">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sunset-orange">4.9★</div>
                <div className="text-sm text-desert-sand">Bewertung</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sunset-orange">98%</div>
                <div className="text-sm text-desert-sand">Weiterempfehlung</div>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-lg text-foreground italic">
              "Der amerikanische Südwesten ruft dich. Monument Valley wartet. 
              Die Route 66 liegt vor dir. Dein Abenteuer beginnt mit einer WhatsApp-Nachricht."
            </p>
            <p className="text-sunset-orange font-semibold mt-4">
              – Reiner, Amerika Heller
            </p>
          </div>
        </div>
      </div>

      {/* Sticky WhatsApp Button */}
      <WhatsAppButton sticky={true} />
    </section>
  );
}