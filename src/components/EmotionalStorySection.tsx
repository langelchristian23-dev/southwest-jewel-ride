import { WhatsAppButton } from "./WhatsAppButton";
import archesDelicateArch from "@/assets/arches-delicate-arch.jpg";
import bryceCanyon from "@/assets/bryce-canyon.jpg";
import escalanteMountains from "@/assets/escalante-mountains.jpg";
import lakeMead from "@/assets/lake-mead.jpg";

export function EmotionalStorySection() {
  return (
    <section className="py-24 road-gradient relative overflow-hidden">
      {/* Epic background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat-x" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff7f50' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-epic">
            <span className="text-gradient-desert">Freiheit pur</span> – 
            <span className="text-white"> Dein Roadmovie wird Realität</span>
          </h2>
          <p className="text-xl md:text-2xl text-desert-sand max-w-4xl mx-auto leading-relaxed">
            Stell dir vor: Der Wind peitscht dir ins Gesicht, der Motor deiner Harley brummt kraftvoll unter dir, 
            während sich die unendliche Weite des amerikanischen Südwestens vor dir ausbreitet. 
            Dies ist nicht nur eine Reise – es ist das Abenteuer deines Lebens.
          </p>
        </div>

        {/* Storytelling Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-sunset-orange">
              Staub, Neonlichter und Naturgewalten
            </h3>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Von den blinkenden Casino-Lichtern von Las Vegas führt dich deine Route durch karge Wüstenlandschaften, 
              vorbei an imposanten roten Felsen und durch Schluchten, die Millionen von Jahren Geschichte erzählen. 
              Jeder Kilometer auf der legendären Route 66 ist ein Stück amerikanischer Freiheit.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Du wirst Orte sehen, die Hollywood-Filme berühmt gemacht haben, Panoramen erleben, 
              die dich sprachlos machen, und Momente sammeln, die ein Leben lang in deiner Erinnerung bleiben.
            </p>
            <WhatsAppButton text="Diese Erfahrung jetzt sichern" className="w-full sm:w-auto" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={archesDelicateArch} 
              alt="Delicate Arch im Sonnenuntergang" 
              className="rounded-lg shadow-card hover:shadow-glow transition-all duration-300"
            />
            <img 
              src={bryceCanyon} 
              alt="Bryce Canyon Hoodoos" 
              className="rounded-lg shadow-card hover:shadow-glow transition-all duration-300 mt-8"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 order-2 md:order-1">
            <img 
              src={escalanteMountains} 
              alt="Kurvenreiche Straße durch rote Felsen" 
              className="rounded-lg shadow-card hover:shadow-glow transition-all duration-300"
            />
            <img 
              src={lakeMead} 
              alt="Lake Mead Panorama" 
              className="rounded-lg shadow-card hover:shadow-glow transition-all duration-300 mt-6 sm:mt-8"
            />
          </div>
          <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-canyon-red">
              Jede Kurve eine neue Überraschung
            </h3>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Morgens wachst du in einem komfortablen Hotel auf, nachmittags stehst du am Rand des Grand Canyon 
              und abends genießt du ein kühles Bier in einer historischen Route 66 Taverne. 
              Diese Reise bietet dir die perfekte Mischung aus Abenteuer und Komfort.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              Mit erfahrenen Guides an deiner Seite entdeckst du versteckte Juwelen abseits der Touristenpfade 
              und erlebst den wahren Spirit des amerikanischen Westens.
            </p>
            <WhatsAppButton text="Jetzt Traumreise planen" className="w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}