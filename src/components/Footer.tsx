import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold tracking-wider mb-4">EXPERIENCIA 013</h3>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
              Renta de mobiliario, cristalería y mantelería para eventos inolvidables en Chihuahua, México.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0" />
                Chihuahua, Chihuahua, México
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:6141017574" className="hover:text-primary-foreground transition-colors">614 101 75 74</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} className="shrink-0" />
                <a
                  href="https://www.instagram.com/experiencia.013?igsh=MXh1Z3ZwOGs2bnJ6Mw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  @experiencia.013
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="/" className="hover:text-primary-foreground transition-colors">Inicio</a></li>
              <li><a href="/catalogo" className="hover:text-primary-foreground transition-colors">Catálogo</a></li>
              <li><a href="/inspo" className="hover:text-primary-foreground transition-colors">Inspo</a></li>
              <li><a href="/contacto" className="hover:text-primary-foreground transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Experiencia 013. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
