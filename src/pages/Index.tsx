import { Link } from "react-router-dom";
import { Wine, ShieldCheck } from "lucide-react";
import ChatBubblesIcon from "@/components/icons/ChatBubblesIcon";
import ColorCirclesIcon from "@/components/icons/ColorCirclesIcon";
import ChairsIcon from "@/components/icons/ChairsIcon";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-event.jpg";
import { categories } from "@/data/catalog";

const categoryImages: Record<string, string> = {
  cristaleria: "/catalog/vino-tinto.png",
  copas: "/catalog/libia arandano.jpg",
  cubiertos: "/catalog/Set mesa dorada.png",
  "platos-base": "/catalog/melamina dorado.png",
  mobiliario: "/catalog/silla crossback miel.PNG",
  mesas: "/catalog/mesa de madera.png",
  manteleria: "/catalog/lino arena.jpg",
  servilletas: "/catalog/servilleta lino arena.jpg",
  "backs-decoracion": "/catalog/velas cristal.jpg",
};

const Index = () => {
  return (
    <Layout>
      {/* Hero — Full Bleed */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Mesa elegante ambientada para evento"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-brown-dark/40" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-cream mb-6 animate-fade-in lowercase">
            el arte de ambientar
          </h1>
          <p
            className="font-body text-cream/80 text-base md:text-lg mb-10 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            renta de mobiliario, cristalería y mantelería para eventos que dejan huella en Chihuahua
          </p>
          <Link
            to="/catalogo"
            className="inline-block font-body text-xs tracking-[0.3em] uppercase px-10 py-4 border border-cream/60 text-cream hover:bg-cream/10 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Ver Catálogo
          </Link>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="font-body text-cream/70 text-sm tracking-widest uppercase mb-6">
            Experiencia 013
          </p>
          <p className="font-display text-2xl md:text-3xl font-light text-cream leading-relaxed">
            Creemos que cada evento merece ser extraordinario. Por eso, ponemos a tu disposición piezas
            cuidadosamente seleccionadas para que cada detalle cuente.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-brown-dark/40">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in-up" style={{ animationDelay: "0s", opacity: 0 }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-beige-warm/30 text-beige-warm mb-6">
                <Wine size={28} />
              </div>
              <h3 className="font-display text-xl font-light text-cream mb-3 lowercase">
                elige tus piezas
              </h3>
              <p className="font-body text-sm text-cream/60 leading-relaxed">
                Explora nuestro catálogo con cristalería, mobiliario, mantelería y más.
              </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.15s", opacity: 0 }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-beige-warm/30 text-beige-warm mb-6">
                <ChatBubblesIcon size={28} />
              </div>
              <h3 className="font-display text-xl font-light text-cream mb-3 lowercase">
                personaliza tu evento
              </h3>
              <p className="font-body text-sm text-cream/60 leading-relaxed">
                Te asesoramos para crear la combinación perfecta que refleje tu visión.
              </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-beige-warm/30 text-beige-warm mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="font-display text-xl font-light text-cream mb-3 lowercase">
                disfruta sin preocupaciones
              </h3>
              <p className="font-body text-sm text-cream/60 leading-relaxed">
                Nosotros nos encargamos de la logística para que tú disfrutes tu evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-light text-center text-cream mb-4 lowercase">
            explora por categoría
          </h2>
          <div className="w-12 h-px bg-beige-warm/40 mx-auto mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.slice(0, 8).map((category, index) => (
              <Link
                key={category.id}
                to={`/catalogo#${category.id}`}
                className="group relative aspect-square overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s`, opacity: 0 }}
              >
                <img
                  src={categoryImages[category.id] || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brown-dark/50 group-hover:bg-brown-dark/30 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end p-4">
                  <h3 className="font-body text-xs tracking-[0.2em] uppercase text-cream">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/catalogo"
              className="inline-block font-body text-xs tracking-[0.3em] uppercase px-8 py-3 border border-cream/40 text-cream hover:bg-cream/10 transition-all duration-300"
            >
              Ver Todo
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="section-padding bg-brown-dark/40">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="font-display text-xl md:text-2xl font-light text-cream/90 italic leading-relaxed mb-6">
            "Experiencia 013 transformó nuestra celebración en algo mágico. Cada pieza fue perfecta
            y el servicio superó nuestras expectativas."
          </p>
          <span className="font-body text-xs tracking-widest uppercase text-beige-warm/70">
            — Cliente Satisfecho
          </span>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-secondary-foreground text-center">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-light mb-4 lowercase">
            sé el anfitrión perfecto
          </h2>
          <p className="font-body text-secondary-foreground/70 mb-8 max-w-xl mx-auto text-sm">
            Contáctanos y juntos diseñaremos cada detalle de tu celebración.
          </p>
          <Link
            to="/contacto"
            className="inline-block font-body text-xs tracking-[0.3em] uppercase px-10 py-4 border border-secondary-foreground/60 text-secondary-foreground hover:bg-secondary-foreground/10 transition-all duration-300"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
