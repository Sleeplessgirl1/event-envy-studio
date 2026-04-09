import { Link } from "react-router-dom";
import { Wine, ShieldCheck } from "lucide-react";
import ChatBubblesIcon from "@/components/icons/ChatBubblesIcon";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-event.jpg";
import copasIcon from "/68aadc0b-7029-4588-ab0d-92a360160fd8.png";
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
          <h1 className="font-hero text-4xl md:text-6xl lg:text-7xl font-light italic text-white mb-6 animate-fade-in uppercase tracking-[0.15em]">
            CREA EXPERIENCIAS INOLVIDABLES
          </h1>
          <p
            className="font-body text-white/80 text-base md:text-lg mb-10 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s", opacity: 0 }}
          >
            Renta de mobiliario, cristalería y mantelería para eventos que dejan huella en Chihuahua
          </p>
          <Link
            to="/catalogo"
            className="inline-block font-body text-xs tracking-[0.3em] uppercase px-10 py-4 bg-[#c1b6a4] text-white border border-white/30 transition-all duration-300 hover:bg-brown animate-fade-in"
            style={{ animationDelay: "0.4s", opacity: 0 }}
          >
            Ver Catálogo
          </Link>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="font-body text-muted-foreground text-sm tracking-widest uppercase mb-6">
            — Experiencia 013
          </p>
          <p className="font-display text-2xl md:text-3xl font-light text-foreground leading-relaxed">
            Creemos que cada evento merece ser extraordinario. Por eso, ponemos a tu disposición piezas
            cuidadosamente seleccionadas para que cada detalle cuente.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-[#c1b6a4]">
        <div className="container-custom py-0">
          <h2 className="font-display text-3xl md:text-6xl text-white mb-6 uppercase text-center font-light tracking-wide">
            ¿Cómo funciona?
          </h2>
          <div className="flex justify-center mb-12">
            <img src={copasIcon} alt="Dos copas brindando" loading="lazy" width={120} height={120} className="w-24 h-24 md:w-28 md:h-28 object-contain" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="animate-fade-in-up border border-white/30 rounded-2xl shadow-lg px-8 py-6" style={{ animationDelay: "0s", opacity: 0 }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/40 mb-6">
                <Wine size={28} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-light mb-3 text-white">
                Elige tus piezas
              </h3>
              <p className="font-body text-sm leading-relaxed text-white/80">
                Explora nuestro catálogo con cristalería, mobiliario, mantelería y más.
              </p>
            </div>
            <div className="animate-fade-in-up border border-white/30 rounded-2xl shadow-lg px-8 py-6" style={{ animationDelay: "0.15s", opacity: 0 }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/40 mb-6">
                <ChatBubblesIcon size={28} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-light mb-3 text-white">
                Personaliza tu evento
              </h3>
              <p className="font-body text-sm leading-relaxed text-white/80">
                Te asesoramos para crear la combinación perfecta que refleje tu visión.
              </p>
            </div>
            <div className="animate-fade-in-up border border-white/30 rounded-2xl shadow-lg px-8 py-6" style={{ animationDelay: "0.3s", opacity: 0 }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/40 mb-6">
                <ShieldCheck size={28} className="text-white" />
              </div>
              <h3 className="font-display text-xl font-light mb-3 text-white">
                Disfruta sin preocupaciones
              </h3>
              <p className="font-body text-sm leading-relaxed text-white/80">
                Nosotros nos encargamos de la logística para que tú disfrutes tu evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-light text-center text-foreground mb-4">
            Explora por categoría
          </h2>
          <div className="w-12 h-px bg-[#c1b6a4] mx-auto mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.slice(0, 3).map((category, index) => (
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
                <div className="absolute inset-0 transition-colors duration-500 mr-0 ml-0 bg-[#ebebeb]/[0.36] px-[37px] py-0 my-0 mt-0 mb-0" />
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pl-0 mt-[93px] mx-[89px] my-0 pr-0 pb-0 mr-[45px] ml-[10px] text-black">
                  <h3 className="font-display text-sm tracking-wide pl-0 mt-0 pr-0 text-left ml-[12px] text-black">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/catalogo"
              className="inline-block font-body text-xs tracking-[0.3em] uppercase px-8 py-3 bg-[#c1b6a4] text-white border border-[#c1b6a4] transition-all duration-300 hover:bg-brown"
            >
              Ver Todo
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="font-body text-lg md:text-2xl font-light leading-relaxed mb-6 text-foreground italic">
            "Experiencia 013 transformó nuestra celebración en algo mágico. Cada pieza fue perfecta
            y el servicio superó nuestras expectativas."
          </p>
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
            — Cliente Satisfecho
          </span>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background text-center">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-light mb-4 text-foreground">
            Sé el anfitrión perfecto
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto text-sm">
            Contáctanos y juntos diseñaremos cada detalle de tu celebración.
          </p>
          <Link
            to="/contacto"
            className="inline-block font-body text-xs tracking-[0.3em] uppercase px-10 py-4 bg-[#c1b6a4] text-white border border-[#c1b6a4] transition-all duration-300 hover:bg-brown"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;