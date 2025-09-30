import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  size?: "default" | "sm" | "lg";
  sticky?: boolean;
  showIcon?: boolean;
}

export function WhatsAppButton({ 
  text = "Jetzt per WhatsApp kontaktieren", 
  className = "",
  size = "default",
  sticky = false,
  showIcon = true
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const phone = "+17022771976";
    const message = encodeURIComponent("Hallo! Ich interessiere mich für die Süd-West Juwelen Motorradreise und möchte gerne mehr Informationen.");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="whatsapp"
      size={size}
      className={`
        ${sticky ? 'fixed bottom-6 right-6 z-50 rounded-full w-auto' : ''}
        ${className}
      `}
    >
      {showIcon && <MessageCircle className="w-5 h-5 hidden sm:inline-block" />}
      {!sticky && <span className="truncate">{text}</span>}
    </Button>
  );
}