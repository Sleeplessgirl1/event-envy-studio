import { useState } from "react";
import Layout from "@/components/Layout";
import { categories } from "@/data/catalog";
import { Wine, UtensilsCrossed, CircleDot, Lamp, RectangleHorizontal, Shirt, Flower2, GlassWater, Armchair } from "lucide-react";

const WHATSAPP_NUMBER = "6141017574";

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

const CatalogoPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const activeData = categories.find((c) => c.id === activeCategory)!;

  const handleQuote = (productName: string) => {
    const msg = encodeURIComponent(
      `Hola Experiencia 013, me interesa solicitar una cotización para: ${productName}. ¿Podrían darme más información?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <Layout>
      {/* Hero Banner */}
      <section
        className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/catalog/hero-banner.png')", backgroundSize: "100% auto" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight font-display">​CATÁLOGO</h1>
          <p className="font-body text-foreground/70 mt-3 text-sm md:text-base tracking-wide font-medium">
            Explora nuestra colección completa de renta para eventos
          </p>
        </div>
      </section>

      <section className="section-padding border-popover-foreground text-card-foreground">
        <div className="container-custom">
          <div className="w-16 h-0.5 mx-auto mb-10 bg-[#c1b6a4]" />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Wine;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-body tracking-wide transition-all duration-300 border ${
                    activeCategory === cat.id
                      ? "text-neutral-50 bg-[#c2bcad] border-card-foreground"
                      : "bg-background text-muted-foreground border-border hover:border-secondary hover:text-secondary"
                  }`}
                >
                  <Icon size={16} />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activeData.products.map((product, i) => (
              <div
                key={product.id}
                className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 animate-scale-in border border-border"
                style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
              >
                {/* Product image */}
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
                  <h3 className="font-display text-base font-semibold mb-1">{product.name}</h3>
                  {product.dimensions && (
                    <p className="text-xs text-muted-foreground mb-1">{product.dimensions}</p>
                  )}
                  <p className="font-body text-lg font-bold mb-2 text-sidebar-primary">
                    ${product.price.toLocaleString("es-MX")}.00 MXN
                    {product.priceNote && (
                      <span className="text-xs font-normal text-muted-foreground ml-1">
                        {product.priceNote}
                      </span>
                    )}
                  </p>

                  {product.colors && product.colors.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => handleQuote(product.name)}
                    className="w-full mt-2 font-body text-xs tracking-widest uppercase py-2.5 bg-foreground text-background rounded-sm transition-colors duration-300 hover:bg-secondary"
                  >
                    Solicitar Cotización
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CatalogoPage;
