import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6141017574";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Experiencia 013, me interesa conocer más sobre sus servicios de renta de mobiliario y cristalería para eventos. ¿Podrían enviarme información sobre disponibilidad y precios?"
);

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="text-background" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
