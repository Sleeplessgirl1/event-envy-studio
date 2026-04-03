import { useState } from "react";
import Layout from "@/components/Layout";
import { X } from "lucide-react";

const eventTypes = ["Todos", "Bodas", "Baby Shower", "Cumpleaños", "Corporativo", "Quinceaños", "Aniversarios"];

// Placeholder images - in production these would be real event photos
const inspoItems = [
  { id: 1, type: "Bodas", description: "Mesa principal con cristalería dorada y flores blancas" },
  { id: 2, type: "Bodas", description: "Recepción elegante con mantelería de lino" },
  { id: 3, type: "Baby Shower", description: "Decoración pastel con vajilla vintage" },
  { id: 4, type: "Baby Shower", description: "Mesa de dulces con stand de donas" },
  { id: 5, type: "Cumpleaños", description: "Celebración con copas de colores" },
  { id: 6, type: "Corporativo", description: "Evento corporativo con montaje formal" },
  { id: 7, type: "Quinceaños", description: "Mesa de honor con platos base dorados" },
  { id: 8, type: "Aniversarios", description: "Cena íntima con velas flotantes" },
  { id: 9, type: "Bodas", description: "Banquete al aire libre con sillas Crossback" },
  { id: 10, type: "Cumpleaños", description: "Fiesta temática con mantelería colorida" },
  { id: 11, type: "Corporativo", description: "Cóctel con cristalería premium" },
  { id: 12, type: "Quinceaños", description: "Montaje completo en tonos rosa y dorado" },
];

const WHATSAPP_NUMBER = "6141017574";

const InspoPage = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState<(typeof inspoItems)[0] | null>(null);

  const filtered = activeFilter === "Todos" ? inspoItems : inspoItems.filter((i) => i.type === activeFilter);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">Inspiración</h1>
          <p className="text-center text-muted-foreground font-body mb-8">
            Descubre cómo nuestros productos transforman eventos
          </p>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-10" />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-body tracking-wide transition-all duration-300 border ${
                  activeFilter === type
                    ? "bg-secondary text-secondary-foreground border-secondary"
                    : "bg-background text-muted-foreground border-border hover:border-secondary hover:text-secondary"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-square bg-muted rounded-lg overflow-hidden cursor-pointer animate-scale-in"
                style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                  <span className="font-display text-sm text-foreground/50">{item.type}</span>
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                  <p className="p-3 text-background text-xs font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-card rounded-lg p-8 md:p-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              ¿Quieres crear tu evento así?
            </h2>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Experiencia 013, vi su galería de inspiración y me gustaría crear algo similar para mi evento. ¿Podrían asesorarme?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body text-sm tracking-widest uppercase px-8 py-4 bg-secondary text-secondary-foreground rounded-sm transition-all duration-300 hover:bg-garnet"
            >
              Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative bg-background rounded-lg max-w-2xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-foreground/50 text-background hover:bg-foreground/70 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="font-display text-2xl text-muted-foreground/40">{selectedItem.type}</span>
            </div>
            <div className="p-6">
              <span className="text-xs font-body tracking-widest uppercase text-secondary">{selectedItem.type}</span>
              <p className="font-display text-lg mt-1">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default InspoPage;
