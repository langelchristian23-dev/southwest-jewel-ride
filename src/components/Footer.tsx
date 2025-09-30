import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="bg-black/95 py-16 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-pure-white mb-4">Amerika Heller</h3>
            <p className="text-light-gray leading-relaxed">
              Ihr USA Motorradreisen Spezialist seit über 20 Jahren.<br />
              Authentische Route 66 Erlebnisse mit persönlicher Betreuung.
            </p>
          </div>

          {/* Legal Section */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-pure-white mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><a href="#impressum" className="text-light-gray hover:text-pure-white transition-colors">Impressum</a></li>
              <li><a href="#kontakt" className="text-light-gray hover:text-pure-white transition-colors">Kontakt</a></li>
              <li><a href="#agb" className="text-light-gray hover:text-pure-white transition-colors">AGBs</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-pure-white mb-4">Kontakt</h4>
            <div className="text-light-gray space-y-2">
              <div>
                <p className="font-medium text-pure-white">JH AMERIKA HELLER</p>
                <p>Krähenwinkel 5</p>
                <p>95326 Kulmbach, Deutschland</p>
              </div>
              <div className="mt-4">
                <p><span className="text-pure-white">Tel:</span> +49 171 714 7878</p>
                <p className="text-sm">täglich 16.30–24 Uhr MEZ</p>
              </div>
              <div className="mt-2">
                <p><span className="text-pure-white">USA:</span> +1 702-277-1976</p>
                <p className="text-sm">täglich 16.30–24 Uhr MEZ</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Contact Section */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-pure-white mb-4">Direkter Kontakt</h4>
            <div className="space-y-4">
              <div>
                <p className="text-light-gray mb-3">💬 WhatsApp Sofortige Antwort</p>
                <WhatsAppButton 
                  text="Jetzt WhatsApp Chat"
                  size="sm"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-muted mt-12 pt-8 text-center">
          <p className="text-light-gray">
            Copyright © 2025 Amerika Heller
          </p>
        </div>
      </div>
    </footer>
  );
}