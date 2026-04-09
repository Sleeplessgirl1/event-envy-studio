import { useState } from "react";
import Layout from "@/components/Layout";
import { categories } from "@/data/catalog";
import { Wine, UtensilsCrossed, CircleDot, Lamp, RectangleHorizontal, Shirt, Flower2, GlassWater, Armchair } from "lucide-react";
import heroImage from "@/assets/hero-event.jpg";

const categoryIcons: Record<string, React.ElementType> = {
  cristaleria: Wine,
  copas: GlassWater,
  cubiertos: UtensilsCrossed,
  "platos-base": CircleDot,
  mobiliario: Armchair,
  mesas: RectangleHorizontal,
  manteleria: Shirt,
  servilletas: Flower2,
  "backs-decoracion": Lamp,
};

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

const CatalogoPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const activeData = activeCategory ? categories.find((c) => c.id === activeCategory) : null;

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Catálogo - Experiencia 013"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brown-dark/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-hero text-4xl md:text-6xl lg:text-7xl font-light text-white uppercase tracking-[0.15em]">
            Catálogo
          </h1>
          <p className="font-body text-white/70 mt-3 text-sm md:text-base tracking-wide">
            Explora nuestra colección completa de renta para eventos
          </p>
        </div>
      </section>

      {/* Category Gallery or Product Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="w-16 h-0.5 mx-auto mb-10 bg-[#c1b6a4]" />

          {!activeCategory ? (
            <>
              <h2 className="font-display text-3xl md:text-4xl font-light text-center text-foreground mb-12">
                Explora por categoría
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {categories.map((cat, index) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-lg animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.08}s`, opacity: 0 }}
                  >
                    <img
                      src={categoryImages[cat.id] || "/placeholder.svg"}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-brown-dark/40 group-hover:bg-brown-dark/20 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="font-display text-lg md:text-2xl font-light text-white tracking-wide">
                        {cat.name}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setActiveCategory(null)}
                  className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                >
                  ← Todas las categorías
                </button>
                <h2 className="font-display text-2xl md:text-4xl font-light text-foreground">
                  {activeData?.name}
                </h2>
                <div className="w-[140px]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {activeData?.products.map((product, i) => (
                  <div
                    key={product.id}
                    className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-scale-in border border-border"
                    style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
                  >
                    <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="text-muted-foreground/30">
                          {(() => {
                            const Icon = categoryIcons[activeCategory] || Wine;
                            return <Icon size={48} />;
                          })()}
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="font-body text-base font-semibold text-foreground mb-1">{product.name}</h3>
                      {product.dimensions && (
                        <p className="font-body text-xs text-muted-foreground mb-1">{product.dimensions}</p>
                      )}
                      <p className="font-body text-lg font-bold text-foreground mb-2">
                        ${product.price.toLocaleString("es-MX")}.00 MXN
                        {product.priceNote && (
                          <span className="text-xs font-normal text-muted-foreground ml-1">
                            {product.priceNote}
                          </span>
                        )}
                      </p>

                      {product.colors && product.colors.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {product.colors.map((color) => (
                            <span
                              key={color}
                              className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-body"
                            >
                              {color}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CatalogoPage;