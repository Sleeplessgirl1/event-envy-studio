import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brown-dark text-cream">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-light tracking-wider mb-4 lowercase">
              experiencia 013
            </h3>
            <p className="font-body text-cream/50 text-sm leading-relaxed">
              Renta de mobiliario, cristalería y mantelería para eventos inolvidables en Chihuahua, México.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-beige-warm/70 mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-cream/50">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="shrink-0 text-beige-warm/50" />
                Chihuahua, Chihuahua, México
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="shrink-0 text-beige-warm/50" />
                <a href="tel:6141017574" className="hover:text-cream transition-colors">614 101 75 74</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={14} className="shrink-0 text-beige-warm/50" />
                <a
                  href="https://www.instagram.com/experiencia.013?igsh=MXh1Z3ZwOGs2bnJ6Mw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  @experiencia.013
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-beige-warm/70 mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm text-cream/50">
              <li><a href="/" className="hover:text-cream transition-colors">Inicio</a></li>
              <li><a href="/catalogo" className="hover:text-cream transition-colors">Catálogo</a></li>
              <li><a href="/inspo" className="hover:text-cream transition-colors">Inspo</a></li>
              <li><a href="/contacto" className="hover:text-cream transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 text-center text-xs text-cream/30">
          © {new Date().getFullYear()} Experiencia 013. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
