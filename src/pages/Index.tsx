import { Link } from "react-router-dom";
import { Wine, ShieldCheck } from "lucide-react";
import ChatBubblesIcon from "@/components/icons/ChatBubblesIcon";
import ColorCirclesIcon from "@/components/icons/ColorCirclesIcon";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-event.jpg";

const features = [
  {
    icon: Wine,
    title: "Calidad Premium",
    description: "Piezas seleccionadas con los más altos estándares para tu evento.",
  },
  {
    icon: ColorCirclesIcon,
    title: "Variedad de Estilos",
    description: "Desde clásico hasta contemporáneo, tenemos lo que tu evento necesita.",
  },
  {
    icon: ChatBubblesIcon,
    title: "Atención Personalizada",
    description: "Te acompañamos en cada detalle para hacer realidad tu visión.",
  },
  {
    icon: ShieldCheck,
    title: "Confianza",
    description: "Años de experiencia respaldando eventos memorables en Chihuahua.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Mesa elegante ambientada para evento"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 animate-fade-in">
            Crea experiencias inolvidables
          </h1>
          <p className="font-body text-background/90 text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Renta de mobiliario, cristalería y mantelería para eventos que dejan huella en Chihuahua.
          </p>
          <Link
            to="/catalogo"
            className="inline-block font-body text-sm tracking-widest uppercase px-8 py-4 bg-secondary text-secondary-foreground rounded-sm transition-all duration-300 hover:bg-garnet animate-fade-in"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Ver Catálogo
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-4">
            ¿Por qué elegir Experiencia 013?
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-6 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted text-secondary mb-4">
                  <feature.icon size={28} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground text-center">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para crear tu evento soñado?
          </h2>
          <p className="font-body text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Contáctanos y juntos diseñaremos cada detalle de tu celebración.
          </p>
          <Link
            to="/contacto"
            className="inline-block font-body text-sm tracking-widest uppercase px-8 py-4 bg-background text-foreground rounded-sm transition-all duration-300 hover:bg-muted"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
