import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "necessary");
    setShowBanner(false);
  };

  const handleEdit = () => {
    setShowSettings(!showSettings);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-card border-2 border-sunset-orange/30 rounded-xl shadow-epic backdrop-blur-sm">
        <div className="p-4 md:p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg md:text-xl font-bold text-foreground">
              Wir verwenden Cookies
            </h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleReject}
              className="h-8 w-8 -mt-1 -mr-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
            Wir setzen auf dieser Internetseite Cookies ein, wie in unserer{" "}
            <a
              href="mailto:info@amerika-heller.de?subject=Datenschutzerklärung"
              className="text-sunset-orange hover:text-sunset-orange/80 underline transition-colors"
            >
              Datenschutzerklärung
            </a>{" "}
            beschrieben. Einige sind technisch erforderlich (funktionale Cookies); andere nicht,
            sondern dienen der Analyse des Nutzungsverhaltens (Performance) oder der Ausführung
            von Marketingmaßnahmen (Marketing). Sie können diesen Cookie-Banner jederzeit aufrufen
            und Ihre Einwilligungserklärungen jederzeit modifizieren und damit auch jederzeit mit
            Wirkung für die Zukunft widerrufen.
          </p>

          {showSettings && (
            <div className="mb-6 p-4 bg-background/50 rounded-lg border border-border">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Funktionale Cookies</p>
                    <p className="text-sm text-muted-foreground">
                      Technisch erforderlich für die Grundfunktionen
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">Immer aktiv</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Performance Cookies</p>
                    <p className="text-sm text-muted-foreground">
                      Analyse des Nutzungsverhaltens
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Marketing Cookies</p>
                    <p className="text-sm text-muted-foreground">
                      Ausführung von Marketingmaßnahmen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <Button
              variant="outline"
              onClick={handleReject}
              className="w-full sm:w-auto border-border hover:bg-muted"
            >
              Ablehnen
            </Button>
            <Button
              variant="outline"
              onClick={handleEdit}
              className="w-full sm:w-auto border-sunset-orange/30 hover:bg-sunset-orange/10"
            >
              Bearbeiten
            </Button>
            <Button
              onClick={handleAcceptAll}
              className="w-full sm:w-auto bg-sunset-orange hover:bg-sunset-orange/90 text-white"
            >
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
