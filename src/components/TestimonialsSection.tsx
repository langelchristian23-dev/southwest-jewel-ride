import { Star, Quote } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import grandCanyon from "@/assets/grand-canyon.jpg";
import monumentValley from "@/assets/monument-valley.jpg";
import archesDelicateArch from "@/assets/arches-delicate-arch.jpg";

const testimonials = [
  {
    name: "Marcus K.",
    location: "Hamburg",
    image: grandCanyon,
    rating: 5,
    text: "Ich habe mich wie in einem Western gefühlt – nur live! Die Fahrt durch das Monument Valley mit meiner Harley war ein Kindheitstraum, der endlich wahr wurde. Reiners Expertise und die perfekte Organisation haben diese Reise unvergesslich gemacht.",
    highlight: "Monument Valley Erlebnis"
  },
  {
    name: "Sandra & Thomas M.",
    location: "München",
    image: archesDelicateArch,
    rating: 5,
    text: "Als Ehepaar waren wir skeptisch, ob so eine Motorradtour das Richtige für uns ist. Aber die Gruppe war fantastisch, die Hotels komfortabel und die Landschaften einfach atemberaubend. Der Sonnenaufgang am Grand Canyon – unbeschreiblich!",
    highlight: "Perfekt für Paare"
  },
  {
    name: "Frank R.",
    location: "Köln",
    image: monumentValley,
    rating: 5,
    text: "20 Jahre lang habe ich von einer USA-Motorradtour geträumt. Diese Reise hat alle meine Erwartungen übertroffen. Die Route 66, die Nationalparks, die Kameradschaft – ein Lebenstraum wurde wahr. Danke, Reiner!",
    highlight: "Lebenstraum erfüllt"
  },
  {
    name: "Petra W.",
    location: "Berlin",
    image: grandCanyon,
    rating: 5,
    text: "Als Solo-Bikerin war ich anfangs nervös. Aber die Gruppe hat mich sofort aufgenommen und Reiner hatte immer ein offenes Ohr. Die Sicherheit stand immer an erster Stelle. Eine Erfahrung, die ich nie vergessen werde!",
    highlight: "Solo-Bikerin sicher unterwegs"
  },
  {
    name: "Jürgen & Klaus",
    location: "Stuttgart",
    image: archesDelicateArch,
    rating: 5,
    text: "Zwei alte Freunde auf dem Trip ihres Lebens! Die Mischung aus spektakulären Landschaften, perfekter Organisation und echtem Biker-Spirit war genau das, was wir gesucht haben. Las Vegas als Finale war das i-Tüpfelchen!",
    highlight: "Freunde-Abenteuer"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sunset-orange rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-canyon-red rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-epic">
            <span className="text-gradient-desert">Was unsere</span>
            <span className="text-white"> Abenteurer sagen</span>
          </h2>
          <p className="text-xl text-desert-sand max-w-3xl mx-auto">
            Über 500 zufriedene Gäste haben bereits ihre Traumreise durch den amerikanischen 
            Südwesten erlebt. Hier sind ihre echten Erfahrungen.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105"
              >
                {/* Image Header */}
                <div className="relative h-48">
                  <img 
                    src={testimonial.image}
                    alt={`Erlebnis von ${testimonial.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-desert-sand">{testimonial.location}</p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-sunset-orange fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <span className="bg-sunset-orange/20 text-sunset-orange px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.highlight}
                    </span>
                  </div>
                  
                  <Quote className="w-6 h-6 text-sunset-orange mb-3" />
                  <blockquote className="text-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: "500+", label: "Zufriedene Gäste" },
              { number: "20+", label: "Jahre Erfahrung" },
              { number: "4.9/5", label: "Bewertung" },
              { number: "98%", label: "Weiterempfehlung" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sunset-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-desert-sand font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-card/30 rounded-2xl p-8 max-w-3xl mx-auto backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-sunset-orange mb-4">
                Werde Teil unserer Abenteurer-Community
              </h3>
              <p className="text-lg text-foreground mb-6">
                Schließe dich über 500 begeisterten Motorradfahrern an, die bereits 
                ihre Traumreise durch den amerikanischen Südwesten erlebt haben.
              </p>
              <WhatsAppButton 
                text="Jetzt Teil der Community werden"
                size="lg"
                className="text-lg px-8 py-4"
              />
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-sunset-orange" />
              <span className="text-sm text-foreground">TrustPilot Bewertung: Ausgezeichnet</span>
            </div>
            <div className="flex items-center space-x-2">
              <Quote className="w-5 h-5 text-sunset-orange" />
              <span className="text-sm text-foreground">Über 200 Google-Bewertungen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}