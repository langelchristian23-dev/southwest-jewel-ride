import { Star, Quote } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import testimonialMarcus from "@/assets/testimonial-marcus.jpg";
import testimonialSandraThomas from "@/assets/testimonial-sandra-thomas.jpg";
import testimonialFrank from "@/assets/testimonial-frank.jpg";
import testimonialPetra from "@/assets/testimonial-petra.jpg";
import testimonialJuergenKlaus from "@/assets/testimonial-juergen-klaus.jpg";
import testimonialMichael from "@/assets/testimonial-michael.jpg";

const testimonials = [
  {
    name: "Marcus K.",
    location: "Hamburg",
    image: testimonialMarcus,
    rating: 5,
    text: "Ich habe mich wie in einem Western gefühlt – nur live! Die Fahrt durch das Monument Valley mit meiner Harley war ein Kindheitstraum, der endlich wahr wurde. Reiners Expertise und die perfekte Organisation haben diese Reise unvergesslich gemacht.",
    highlight: "Monument Valley Erlebnis"
  },
  {
    name: "Sandra & Thomas M.",
    location: "München",
    image: testimonialSandraThomas,
    rating: 5,
    text: "Als Ehepaar waren wir skeptisch, ob so eine Motorradtour das Richtige für uns ist. Aber die Gruppe war fantastisch, die Hotels komfortabel und die Landschaften einfach atemberaubend. Der Sonnenaufgang am Grand Canyon – unbeschreiblich!",
    highlight: "Perfekt für Paare"
  },
  {
    name: "Frank R.",
    location: "Köln",
    image: testimonialFrank,
    rating: 5,
    text: "20 Jahre lang habe ich von einer USA-Motorradtour geträumt. Diese Reise hat alle meine Erwartungen übertroffen. Die Route 66, die Nationalparks, die Kameradschaft – ein Lebenstraum wurde wahr. Danke, Reiner!",
    highlight: "Lebenstraum erfüllt"
  },
  {
    name: "Petra W.",
    location: "Berlin",
    image: testimonialPetra,
    rating: 5,
    text: "Als Solo-Bikerin war ich anfangs nervös. Aber die Gruppe hat mich sofort aufgenommen und Reiner hatte immer ein offenes Ohr. Die Sicherheit stand immer an erster Stelle. Eine Erfahrung, die ich nie vergessen werde!",
    highlight: "Solo-Bikerin sicher unterwegs"
  },
  {
    name: "Jürgen & Klaus B.",
    location: "Stuttgart",
    image: testimonialJuergenKlaus,
    rating: 5,
    text: "Zwei alte Freunde auf dem Trip ihres Lebens! Die Mischung aus spektakulären Landschaften, perfekter Organisation und echtem Biker-Spirit war genau das, was wir gesucht haben. Las Vegas als Finale war das i-Tüpfelchen!",
    highlight: "Freunde-Abenteuer"
  },
  {
    name: "Michael S.",
    location: "Frankfurt",
    image: testimonialMichael,
    rating: 5,
    text: "Mit 35 Jahren endlich meine erste große USA-Tour – und was für eine! Die Gruppe war super, die Bikes top und die Strecken einfach genial. Besonders beeindruckt hat mich der Arches Nationalpark. Ich komme definitiv wieder!",
    highlight: "Erste USA-Tour"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 hero-gradient relative overflow-hidden">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-105"
              >
                {/* Image Header */}
                <div className="relative h-48 sm:h-56">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} - Amerika Heller Teilnehmer`}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white">{testimonial.name}</h3>
                        <p className="text-xs sm:text-sm text-desert-sand">{testimonial.location}</p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-sunset-orange fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4">
                    <span className="bg-sunset-orange/20 text-sunset-orange px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.highlight}
                    </span>
                  </div>
                  
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-sunset-orange mb-2 sm:mb-3" />
                  <blockquote className="text-sm sm:text-base text-foreground italic leading-relaxed">
                    {testimonial.text}
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16 px-4">
            {[
              { number: "500+", label: "Zufriedene Gäste" },
              { number: "20+", label: "Jahre Erfahrung" },
              { number: "4.9/5", label: "Bewertung" },
              { number: "98%", label: "Weiterempfehlung" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-sunset-orange mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-desert-sand font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center px-4">
            <div className="bg-card/30 rounded-xl md:rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-bold text-sunset-orange mb-3 sm:mb-4">
                Werde Teil unserer Abenteurer-Community
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-foreground mb-4 sm:mb-6">
                Schließe dich über 500 begeisterten Motorradfahrern an, die bereits 
                ihre Traumreise durch den amerikanischen Südwesten erlebt haben.
              </p>
              <WhatsAppButton 
                text="Jetzt Teil der Community werden"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
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