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
      { id: "mimosa", name: "Mimosa", price: 10, image: "/catalog/mimosa.webp" },
      { id: "vaso-highball", name: "Vaso Highball", price: 3, image: "/catalog/highball.png" },
      { id: "vaso-napa", name: "Vaso Napa", price: 4, image: "/catalog/napa.png" },
      { id: "vaso-malfi", name: "Vaso Malfi", price: 10, image: "/catalog/malfi.png" },
      { id: "taza-cafe", name: "Taza Café", price: 6, image: "/catalog/taza.jfif" },
      { id: "plato-sopa", name: "Plato Sopa", price: 5, image: "/catalog/bowl.JPG" },
      { id: "plato-pastelero", name: "Plato Pastelero", price: 6, image: "/catalog/plato postre blanco.PNG" },
      { id: "plato-trinche", name: "Plato Trinche", price: 8, image: "/catalog/plato trinche blanco.jpg" },
    ],
  },
  {
    id: "copas",
    name: "Copas",
    products: [
      { id: "copa-arandano", name: "Copa Arándano", price: 14, colors: ["Arándano"], image: "/catalog/libia arandano.jpg" },
      { id: "copa-verde-olivo", name: "Copa Verde Olivo", price: 14, colors: ["Verde Olivo"], image: "/catalog/copa libia verde.webp" },
      { id: "copa-oro", name: "Copa Oro", price: 14, colors: ["Oro"], image: "/catalog/libia oro.PNG" },
      { id: "copa-azul", name: "Copa Azul", price: 14, colors: ["Azul"], image: "/catalog/libia azul.png" },
      { id: "copa-lila", name: "Copa Lila", price: 14, colors: ["Lila"], image: "/catalog/lila libia.PNG" },
      { id: "copa-ocre", name: "Copa Ocre", price: 14, colors: ["Ocre"], image: "/catalog/ocre.png" },
      { id: "copa-rayas-humo", name: "Copa Rayas Humo", price: 14, colors: ["Humo"], image: "/catalog/copa humo.png" },
      { id: "copa-rayas-oro", name: "Copa Rayas Oro Tous", price: 14, colors: ["Oro Tous"], image: "/catalog/copa oro tous.png" },
      { id: "copa-rayas-verde", name: "Copa Rayas Verde Olivo", price: 14, colors: ["Verde Olivo"], image: "/catalog/rayas verde.png" },
      { id: "copa-rayas-transparente", name: "Copa Rayas Transparente", price: 14, colors: ["Transparente"], image: "/catalog/rayas transparente.png" },
      { id: "copa-mocha", name: "Copa Mocha", price: 14, image: "/catalog/copa vintage.jpg" },
    ],
  },
  {
    id: "cubiertos",
    name: "Cubiertos",
    products: [
      { id: "set-dorado", name: "Set Dorado", price: 6, priceNote: "c/uno", image: "/catalog/Set mesa dorada.png" },
      { id: "set-plateado", name: "Set Plateado", price: 4, priceNote: "c/uno", image: "/catalog/tenedor grande plata.png" },
    ],
  },
  {
    id: "platos-base",
    name: "Platos Base",
    products: [
      { id: "base-dorado", name: "Dorado", price: 15, image: "/catalog/melamina dorado.png" },
      { id: "base-plateado-brillante", name: "Plateado Brillante", price: 20, image: "/catalog/melamina plata brillante.png" },
      { id: "base-plateado-mate", name: "Plateado Mate", price: 20, image: "/catalog/melamina mate.png" },
      { id: "base-negro", name: "Negro", price: 20, image: "/catalog/plato_base_plastico_rojo_glam_33_1_1800x1800.png" },
      { id: "base-blanco-vintage", name: "Blanco Vintage", price: 20, image: "/catalog/Plato base blanco vintage.png" },
      { id: "base-linea-negra", name: "Línea Negra", price: 20, image: "/catalog/Linea negra.png" },
      { id: "base-linea-dorado", name: "Línea Dorado (Vidrio)", price: 30, image: "/catalog/melamina linea oro.png" },
      { id: "base-bolitas-dorado", name: "Bolitas Dorado (Vidrio)", price: 30, image: "/catalog/portaplatos.png" },
      { id: "base-mimbre", name: "Mimbre", price: 30, image: "/catalog/mimbre.png" },
      { id: "base-icaro", name: "Ícaro", price: 30, image: "/catalog/icaro.webp" },
    ],
  },
  {
    id: "mobiliario",
    name: "Mobiliario y Sillas",
    products: [
      { id: "silla-versalles", name: "Versalles", price: 35, image: "/catalog/cojin silla versalles.PNG" },
      { id: "silla-crossback", name: "Crossback", price: 70, image: "/catalog/silla crossback miel.PNG" },
      { id: "silla-smith-hueso", name: "Smith Cojín Hueso", price: 80, image: "/catalog/cojin ersalles blanca.png" },
      { id: "silla-smith-negro", name: "Smith Cojín Negro", price: 80, image: "/catalog/Cros-bar-miel.png" },
    ],
  },
  {
    id: "mesas",
    name: "Mesas",
    products: [
      { id: "mesa-circular", name: "Mesa Circular", price: 70, dimensions: "1.50 m diámetro", image: "/catalog/mesa circular.png" },
      { id: "mesa-circular-mantel", name: "Mesa Circular con Mantel", price: 190, dimensions: "1.50 m diámetro", image: "/catalog/mesa redonda.jpg" },
      { id: "mesa-rectangular", name: "Mesa Rectangular", price: 70, dimensions: "2.40m x 0.75m", image: "/catalog/mesa rectangular.jpg" },
      { id: "mesa-rectangular-mantel", name: "Mesa Rectangular con Mantel", price: 190, dimensions: "2.40m x 0.75m", image: "/catalog/mantel-blanco-rectangular.png" },
      { id: "mesa-madera-herreria", name: "Mesa de Madera con Base Herrería Dorada", price: 650, dimensions: "1.20 x 2.40 m", image: "/catalog/mesa de madera.png" },
    ],
  },
  {
    id: "manteleria",
    name: "Mantelería",
    products: [
      { id: "mantel-tergal-rect", name: "Mantel Tergal Rectangular", price: 100, dimensions: "Mesa 2.40 x 0.75 m", colors: ["Hueso", "Nude", "Café", "Gris", "Azul Marino", "Negro"], image: "/catalog/mantel tergal hueso 3x4.jpg" },
      { id: "mantel-tergal-circ", name: "Mantel Tergal Circular", price: 100, dimensions: "Mesa 1.5 m diámetro", colors: ["Hueso", "Nude", "Café", "Gris", "Azul Marino", "Negro"], image: "/catalog/nude circuar 1.50 diam.jpg" },
      { id: "mantel-tergal-grande", name: "Mantel Tergal Rectangular Grande", price: 180, dimensions: "3x4 m", colors: ["Hueso", "Nude", "Café", "Gris", "Azul Marino", "Negro"], image: "/catalog/mantel negro 3x4.jpg" },
      { id: "mantel-lino-circ", name: "Mantel Lino Circular", price: 220, dimensions: "Mesa 1.8 m diámetro", colors: ["Arena", "Beige", "Verde Aguacate"], image: "/catalog/lino arena.jpg" },
      { id: "mantel-lino-rect", name: "Mantel Lino Rectangular", price: 220, dimensions: "3x4 m", colors: ["Arena", "Beige", "Verde Aguacate"], image: "/catalog/lino beige.jpg" },
      { id: "camino-gasa", name: "Camino de Mesa (Gasa)", price: 45, colors: ["Blanca", "Rosa Claro", "Lila", "Verde Olivo", "Verde Esmeralda", "Naranja", "Azul", "Beige"], image: "/catalog/rosa gasa.jpg" },
    ],
  },
  {
    id: "servilletas",
    name: "Servilletas",
    products: [
      { id: "servilleta-tergal", name: "Servilleta Línea Tergal", price: 8, colors: ["Blanca", "Rosa Claro", "Verde Eucalipto", "Fucsia", "Naranja", "Azul", "Beige", "Amarilla", "Lila"], image: "/catalog/servilleta tergal blanca.webp" },
      { id: "servilleta-lino", name: "Servilleta Línea Lino", price: 14, colors: ["Arena", "Beige", "Verde Aguacate"], image: "/catalog/servilleta lino arena.jpg" },
    ],
  },
  {
    id: "backs-decoracion",
    name: "Backs y Decoración",
    products: [
      { id: "stand-donas", name: "Stand de Donas", price: 550, image: "/catalog/bases blancas para desniveles.jpg" },
      { id: "portaretratos", name: "Portaretratos de Madera con Impresión Personalizada", price: 120, image: "/catalog/Tiras bolotas de madera.JPG" },
      { id: "jarrones-velas", name: "Jarrones con Velas Flotantes", price: 95, image: "/catalog/velas cristal.jpg" },
      { id: "canastas", name: "Canastas", price: 120, image: "/catalog/canastas.jpg" },
      { id: "champinones", name: "Champiñones", price: 65, image: "/catalog/lisianthus marron.jpg" },
      { id: "tripie-regalos", name: "Tripié para Regalos", price: 150, image: "/catalog/TRIPIE.png" },
      { id: "base-pastel-vidrio", name: "Base para Pastel de Vidrio", price: 85, image: "/catalog/base para pastel blanco vintage.jpg" },
      { id: "dispensador-bebidas", name: "Dispensador de Bebidas (8L)", price: 150, image: "/catalog/cilindro blanco.jpg" },
      { id: "set-mesas-chico", name: "Set de Mesas (Chico)", price: 200, image: "/catalog/MESA-CUADRADA-CHICA.jpg" },
      { id: "set-mesas-mediano", name: "Set de Mesas (Mediano)", price: 300, image: "/catalog/mesa blanca.png" },
      { id: "set-mesas-lateral", name: "Set de Mesas (Lateral)", price: 150, image: "/catalog/lampara mesa mimbre.jpg" },
      { id: "bases-madera", name: "Bases de Madera", price: 85, priceNote: "desde", image: "/catalog/bases blancas para desniveles.jpg" },
      { id: "jarrones-blancos", name: "Jarrones Blancos", price: 35, priceNote: "desde", image: "/catalog/cilindro blanco.jpg" },
      { id: "espejo-1-vinil", name: "Espejo con 1 Vinil", price: 850, dimensions: "1.80 m x 0.75 m", image: "/catalog/Diseño sin título.png" },
      { id: "espejo-2-viniles", name: "Espejo con 2 Viniles", price: 1150, dimensions: "1.80 m x 0.75 m", image: "/catalog/Diseño sin título - copia.jpg" },
      { id: "estructura-manta-frase", name: 'Estructura con Manta (frase disponible)', price: 850, image: "/catalog/sombrilla beige.jpg" },
      { id: "estructura-manta-personalizada", name: "Estructura con Manta Personalizada", price: 1200, image: "/catalog/sombrilla beige.jpg" },
      { id: "caballete-letrero", name: "Caballete con Letrero Personalizado", price: 850, image: "/catalog/lampara vintage.JPG" },
    ],
  },
];
