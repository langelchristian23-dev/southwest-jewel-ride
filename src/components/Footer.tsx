import { WhatsAppButton } from "./WhatsAppButton";
import amerikaHellerLogo from "@/assets/amerika-heller-logo.png";

export function Footer() {
  return (
    <footer className="bg-black/95 py-12 sm:py-16 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <img 
              src={amerikaHellerLogo} 
              alt="Amerika Heller Logo" 
              className="h-10 sm:h-12 mb-3 sm:mb-4 mx-auto sm:mx-0"
            />
            <p className="text-sm sm:text-base text-light-gray leading-relaxed">
              Ihr USA Motorradreisen Spezialist seit über 20 Jahren.<br />
              Authentische Route 66 Erlebnisse mit persönlicher Betreuung.
            </p>
          </div>

          {/* Legal Section */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-pure-white mb-3 sm:mb-4">Rechtliches</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
              <li><a href="https://amerika-heller.de/impressum/" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-pure-white transition-colors">Impressum</a></li>
              <li><a href="https://amerika-heller.de/kontakt/" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-pure-white transition-colors">Kontakt</a></li>
              <li><a href="https://amerika-heller.de/agbs/" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-pure-white transition-colors">AGBs</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-pure-white mb-3 sm:mb-4">Kontakt</h4>
            <div className="text-sm sm:text-base text-light-gray space-y-2">
              <div>
                <p className="font-medium text-pure-white">JH AMERIKA HELLER</p>
                <p>Krähenwinkel 5</p>
                <p>95326 Kulmbach, Deutschland</p>
              </div>
              <div className="mt-3 sm:mt-4">
                <p><span className="text-pure-white">Tel:</span> +49 171 714 7878</p>
                <p className="text-xs sm:text-sm">täglich 16.30–24 Uhr MEZ</p>
              </div>
              <div className="mt-2">
                <p><span className="text-pure-white">USA:</span> +1 702-277-1976</p>
                <p className="text-xs sm:text-sm">täglich 16.30–24 Uhr MEZ</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Contact Section */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-pure-white mb-3 sm:mb-4">Direkter Kontakt</h4>
            <p className="text-sm sm:text-base text-light-gray mb-3 sm:mb-4">WhatsApp Sofortige Antwort</p>
            <WhatsAppButton 
              text="Jetzt Infos per WhatsApp sichern"
              size="sm"
              className="mx-auto sm:mx-0 w-auto"
              showIcon={false}
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-muted mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-light-gray">
            Copyright © 2025 Amerika Heller
          </p>
        </div>
      </div>
    </footer>
  );
}