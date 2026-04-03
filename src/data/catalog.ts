export interface Product {
  id: string;
  name: string;
  price: number;
  priceNote?: string;
  colors?: string[];
  dimensions?: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "cristaleria",
    name: "Cristalería y Vajilla",
    products: [
      { id: "vino-tinto", name: "Vino Tinto", price: 10, image: "/catalog/vino-tinto.png" },
      { id: "mimosa", name: "Mimosa", price: 10, image: "/catalog/mimosa.png" },
      { id: "vaso-highball", name: "Vaso Highball", price: 3, image: "/catalog/vaso-highball.png" },
      { id: "vaso-napa", name: "Vaso Napa", price: 4, image: "/catalog/vaso-napa.png" },
      { id: "vaso-malfi", name: "Vaso Malfi", price: 10, image: "/catalog/vaso-malfi.png" },
      { id: "taza-cafe", name: "Taza Café", price: 6, image: "/catalog/vajilla.png" },
      { id: "plato-sopa", name: "Plato Sopa", price: 5, image: "/catalog/vajilla.png" },
      { id: "plato-pastelero", name: "Plato Pastelero", price: 6, image: "/catalog/vajilla.png" },
      { id: "plato-trinche", name: "Plato Trinche", price: 8, image: "/catalog/vajilla.png" },
    ],
  },
  {
    id: "copas",
    name: "Copas",
    products: [
      { id: "copa-arandano", name: "Copa Arándano", price: 14, colors: ["Arándano"], image: "/catalog/copa-arandano.png" },
      { id: "copa-verde-olivo", name: "Copa Verde Olivo", price: 14, colors: ["Verde Olivo"], image: "/catalog/copa-verde-olivo.png" },
      { id: "copa-oro", name: "Copa Oro", price: 14, colors: ["Oro"], image: "/catalog/copa-oro.png" },
      { id: "copa-azul", name: "Copa Azul", price: 14, colors: ["Azul"], image: "/catalog/copa-azul.png" },
      { id: "copa-lila", name: "Copa Lila", price: 14, colors: ["Lila"], image: "/catalog/copa-lila.png" },
      { id: "copa-ocre", name: "Copa Ocre", price: 14, colors: ["Ocre"], image: "/catalog/copa-ocre.jpg" },
      { id: "copa-rayas-humo", name: "Copa Rayas Humo", price: 14, colors: ["Humo"], image: "/catalog/copa-humo.png" },
      { id: "copa-rayas-oro", name: "Copa Rayas Oro Tous", price: 14, colors: ["Oro Tous"], image: "/catalog/copa-rayas-oro.png" },
      { id: "copa-rayas-verde", name: "Copa Rayas Verde Olivo", price: 14, colors: ["Verde Olivo"], image: "/catalog/copa-rayas-verde.png" },
      { id: "copa-rayas-transparente", name: "Copa Rayas Transparente", price: 14, colors: ["Transparente"], image: "/catalog/copa-rayas-transparente.png" },
      { id: "copa-mocha", name: "Copa Mocha", price: 14, image: "/catalog/copa-mocha.jpg" },
    ],
  },
  {
    id: "cubiertos",
    name: "Cubiertos",
    products: [
      { id: "set-dorado", name: "Set Dorado", price: 6, priceNote: "c/uno", image: "/catalog/set-dorado.png" },
      { id: "set-plateado", name: "Set Plateado", price: 4, priceNote: "c/uno", image: "/catalog/set-plateado.png" },
    ],
  },
  {
    id: "platos-base",
    name: "Platos Base",
    products: [
      { id: "base-dorado", name: "Dorado", price: 15, image: "/catalog/base-dorado.png" },
      { id: "base-plateado-brillante", name: "Plateado Brillante", price: 20, image: "/catalog/base-plateado-brillante.png" },
      { id: "base-plateado-mate", name: "Plateado Mate", price: 20, image: "/catalog/base-plateado-mate.png" },
      { id: "base-negro", name: "Negro", price: 20, image: "/catalog/base-negro.png" },
      { id: "base-blanco-vintage", name: "Blanco Vintage", price: 20, image: "/catalog/base-blanco-vintage.png" },
      { id: "base-linea-negra", name: "Línea Negra", price: 20, image: "/catalog/base-linea-negra.png" },
      { id: "base-linea-dorado", name: "Línea Dorado (Vidrio)", price: 30, image: "/catalog/base-linea-dorado.png" },
      { id: "base-bolitas-dorado", name: "Bolitas Dorado (Vidrio)", price: 30, image: "/catalog/base-bolitas-dorado.png" },
      { id: "base-mimbre", name: "Mimbre", price: 30, image: "/catalog/base-mimbre.png" },
      { id: "base-icaro", name: "Ícaro", price: 30, image: "/catalog/base-icaro.jpg" },
    ],
  },
  {
    id: "mobiliario",
    name: "Mobiliario y Sillas",
    products: [
      { id: "silla-versalles", name: "Versalles", price: 35, image: "/catalog/silla-versalles.jpg" },
      { id: "silla-crossback", name: "Crossback", price: 70, image: "/catalog/silla-crossback.jpg" },
      { id: "silla-smith-hueso", name: "Smith Cojín Hueso", price: 80, image: "/catalog/silla-smith-hueso.jpg" },
      { id: "silla-smith-negro", name: "Smith Cojín Negro", price: 80, image: "/catalog/silla-smith-negro.jpg" },
    ],
  },
  {
    id: "mesas",
    name: "Mesas",
    products: [
      { id: "mesa-circular", name: "Mesa Circular", price: 70, dimensions: "1.50 m diámetro", image: "/catalog/mesa-circular.png" },
      { id: "mesa-circular-mantel", name: "Mesa Circular con Mantel", price: 190, dimensions: "1.50 m diámetro", image: "/catalog/mesa-circular.png" },
      { id: "mesa-rectangular", name: "Mesa Rectangular", price: 70, dimensions: "2.40m x 0.75m", image: "/catalog/mesa-rectangular.png" },
      { id: "mesa-rectangular-mantel", name: "Mesa Rectangular con Mantel", price: 190, dimensions: "2.40m x 0.75m", image: "/catalog/mesa-rectangular.png" },
      { id: "mesa-madera-herreria", name: "Mesa de Madera con Base Herrería Dorada", price: 650, dimensions: "1.20 x 2.40 m", image: "/catalog/mesa-madera-herreria.jpg" },
    ],
  },
  {
    id: "manteleria",
    name: "Mantelería",
    products: [
      { id: "mantel-tergal-rect", name: "Mantel Tergal Rectangular", price: 100, dimensions: "Mesa 2.40 x 0.75 m", colors: ["Hueso", "Nude", "Café", "Gris", "Azul Marino", "Negro"], image: "/catalog/mantel-tergal.jpg" },
      { id: "mantel-tergal-circ", name: "Mantel Tergal Circular", price: 100, dimensions: "Mesa 1.5 m diámetro", colors: ["Hueso", "Nude", "Café", "Gris", "Azul Marino", "Negro"], image: "/catalog/mantel-tergal.jpg" },
      { id: "mantel-tergal-grande", name: "Mantel Tergal Rectangular Grande", price: 180, dimensions: "3x4 m", colors: ["Hueso", "Nude", "Café", "Gris", "Azul Marino", "Negro"], image: "/catalog/mantel-tergal.jpg" },
      { id: "mantel-lino-circ", name: "Mantel Lino Circular", price: 220, dimensions: "Mesa 1.8 m diámetro", colors: ["Arena", "Beige", "Verde Aguacate"], image: "/catalog/mantel-lino.jpg" },
      { id: "mantel-lino-rect", name: "Mantel Lino Rectangular", price: 220, dimensions: "3x4 m", colors: ["Arena", "Beige", "Verde Aguacate"], image: "/catalog/mantel-lino.jpg" },
      { id: "camino-gasa", name: "Camino de Mesa (Gasa)", price: 45, colors: ["Blanca", "Rosa Claro", "Lila", "Verde Olivo", "Verde Esmeralda", "Naranja", "Azul", "Beige"], image: "/catalog/camino-gasa.jpg" },
    ],
  },
  {
    id: "servilletas",
    name: "Servilletas",
    products: [
      { id: "servilleta-tergal", name: "Servilleta Línea Tergal", price: 8, colors: ["Blanca", "Rosa Claro", "Verde Eucalipto", "Fucsia", "Naranja", "Azul", "Beige", "Amarilla", "Lila"], image: "/catalog/servilleta-tergal.jpg" },
      { id: "servilleta-lino", name: "Servilleta Línea Lino", price: 14, colors: ["Arena", "Beige", "Verde Aguacate"], image: "/catalog/servilleta-lino.jpg" },
    ],
  },
  {
    id: "backs-decoracion",
    name: "Backs y Decoración",
    products: [
      { id: "stand-donas", name: "Stand de Donas", price: 550, image: "/catalog/stand-donas.jpg" },
      { id: "portaretratos", name: "Portaretratos de Madera con Impresión Personalizada", price: 120, image: "/catalog/portaretratos.png" },
      { id: "jarrones-velas", name: "Jarrones con Velas Flotantes", price: 95, image: "/catalog/jarrones-velas.jpg" },
      { id: "canastas", name: "Canastas", price: 120, image: "/catalog/canastas.jpg" },
      { id: "champinones", name: "Champiñones", price: 65, image: "/catalog/champinones.jpg" },
      { id: "tripie-regalos", name: "Tripié para Regalos", price: 150, image: "/catalog/tripie-regalos.png" },
      { id: "base-pastel-vidrio", name: "Base para Pastel de Vidrio", price: 85, image: "/catalog/base-pastel-vidrio.png" },
      { id: "dispensador-bebidas", name: "Dispensador de Bebidas (8L)", price: 150, image: "/catalog/dispensador-bebidas.png" },
      { id: "set-mesas-chico", name: "Set de Mesas (Chico)", price: 200, image: "/catalog/set-mesas.png" },
      { id: "set-mesas-mediano", name: "Set de Mesas (Mediano)", price: 300, image: "/catalog/set-mesas.png" },
      { id: "set-mesas-lateral", name: "Set de Mesas (Lateral)", price: 150, image: "/catalog/set-mesas.png" },
      { id: "bases-madera", name: "Bases de Madera", price: 85, priceNote: "desde", image: "/catalog/bases-madera.jpg" },
      { id: "jarrones-blancos", name: "Jarrones Blancos", price: 35, priceNote: "desde", image: "/catalog/jarrones-blancos.jpg" },
      { id: "espejo-1-vinil", name: "Espejo con 1 Vinil", price: 850, dimensions: "1.80 m x 0.75 m", image: "/catalog/espejo-vinil.png" },
      { id: "espejo-2-viniles", name: "Espejo con 2 Viniles", price: 1150, dimensions: "1.80 m x 0.75 m", image: "/catalog/espejo-vinil-real.jpg" },
      { id: "estructura-manta-frase", name: 'Estructura con Manta (frase disponible)', price: 850, image: "/catalog/estructura-manta.jpg" },
      { id: "estructura-manta-personalizada", name: "Estructura con Manta Personalizada", price: 1200, image: "/catalog/estructura-manta.jpg" },
      { id: "caballete-letrero", name: "Caballete con Letrero Personalizado", price: 850, image: "/catalog/caballete-letrero.jpg" },
    ],
  },
];
