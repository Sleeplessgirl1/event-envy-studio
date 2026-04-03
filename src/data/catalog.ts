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
      { id: "vino-tinto", name: "Vino Tinto", price: 10 },
      { id: "mimosa", name: "Mimosa", price: 10 },
      { id: "vaso-highball", name: "Vaso Highball", price: 3 },
      { id: "vaso-napa", name: "Vaso Napa", price: 4 },
      { id: "vaso-malfi", name: "Vaso Malfi", price: 10 },
      { id: "taza-cafe", name: "Taza Café", price: 6 },
      { id: "plato-sopa", name: "Plato Sopa", price: 5 },
      { id: "plato-pastelero", name: "Plato Pastelero", price: 6 },
      { id: "plato-trinche", name: "Plato Trinche", price: 8 },
    ],
  },
  {
    id: "copas",
    name: "Copas",
    products: [
      { id: "copa-arandano", name: "Copa Arándano", price: 14, colors: ["Arándano"] },
      { id: "copa-verde-olivo", name: "Copa Verde Olivo", price: 14, colors: ["Verde Olivo"] },
      { id: "copa-oro", name: "Copa Oro", price: 14, colors: ["Oro"] },
      { id: "copa-azul", name: "Copa Azul", price: 14, colors: ["Azul"] },
      { id: "copa-lila", name: "Copa Lila", price: 14, colors: ["Lila"] },
      { id: "copa-ocre", name: "Copa Ocre", price: 14, colors: ["Ocre"] },
      { id: "copa-rayas-humo", name: "Copa Rayas Humo", price: 14, colors: ["Humo"] },
      { id: "copa-rayas-oro", name: "Copa Rayas Oro Tous", price: 14, colors: ["Oro Tous"] },
      { id: "copa-rayas-verde", name: "Copa Rayas Verde Olivo", price: 14, colors: ["Verde Olivo"] },
      { id: "copa-rayas-transparente", name: "Copa Rayas Transparente", price: 14, colors: ["Transparente"] },
      { id: "copa-mocha", name: "Copa Mocha", price: 14 },
    ],
  },
  {
    id: "cubiertos",
    name: "Cubiertos",
    products: [
      { id: "set-dorado", name: "Set Dorado", price: 6, priceNote: "c/uno" },
      { id: "set-plateado", name: "Set Plateado", price: 4, priceNote: "c/uno" },
    ],
  },
  {
    id: "platos-base",
    name: "Platos Base",
    products: [
      { id: "base-dorado", name: "Dorado", price: 15 },
      { id: "base-plateado-brillante", name: "Plateado Brillante", price: 20 },
      { id: "base-plateado-mate", name: "Plateado Mate", price: 20 },
      { id: "base-negro", name: "Negro", price: 20 },
      { id: "base-blanco-vintage", name: "Blanco Vintage", price: 20 },
      { id: "base-linea-negra", name: "Línea Negra", price: 20 },
      { id: "base-linea-dorado", name: "Línea Dorado (Vidrio)", price: 30 },
      { id: "base-bolitas-dorado", name: "Bolitas Dorado (Vidrio)", price: 30 },
      { id: "base-mimbre", name: "Mimbre", price: 30 },
      { id: "base-icaro", name: "Ícaro", price: 30 },
    ],
  },
  {
    id: "mobiliario",
    name: "Mobiliario y Sillas",
    products: [
      { id: "silla-versalles", name: "Versalles", price: 35 },
      { id: "silla-crossback", name: "Crossback", price: 70 },
      { id: "silla-smith-hueso", name: "Smith Cojín Hueso", price: 80 },
      { id: "silla-smith-negro", name: "Smith Cojín Negro", price: 80 },
    ],
  },
  {
    id: "mesas",
    name: "Mesas",
    products: [
      { id: "mesa-circular", name: "Mesa Circular", price: 70, dimensions: "1.50 m diámetro" },
      { id: "mesa-circular-mantel", name: "Mesa Circular con Mantel", price: 190, dimensions: "1.50 m diámetro" },
      { id: "mesa-rectangular", name: "Mesa Rectangular", price: 70, dimensions: "2.40m x 0.75m" },
      { id: "mesa-rectangular-mantel", name: "Mesa Rectangular con Mantel", price: 190, dimensions: "2.40m x 0.75m" },
      { id: "mesa-madera-herreria", name: "Mesa de Madera con Base Herrería Dorada", price: 650, dimensions: "1.20 x 2.40 m" },
    ],
  },
  {
    id: "manteleria",
    name: "Mantelería",
    products: [
      { id: "mantel-tergal-rect", name: "Mantel Tergal Rectangular", price: 100, dimensions: "Mesa 2.40 x 0.75 m", colors: ["Hueso", "Nude", "Café", "Gris", "Azul Marino", "Negro"] },
      { id: "mantel-tergal-circ", name: "Mantel Tergal Circular", price: 100, dimensions: "Mesa 1.5 m diámetro", colors: ["Hueso", "Nude", "Café", "Gris", "Azul Marino", "Negro"] },
      { id: "mantel-tergal-grande", name: "Mantel Tergal Rectangular Grande", price: 180, dimensions: "3x4 m", colors: ["Hueso", "Nude", "Café", "Gris", "Azul Marino", "Negro"] },
      { id: "mantel-lino-circ", name: "Mantel Lino Circular", price: 220, dimensions: "Mesa 1.8 m diámetro", colors: ["Arena", "Beige", "Verde Aguacate"] },
      { id: "mantel-lino-rect", name: "Mantel Lino Rectangular", price: 220, dimensions: "3x4 m", colors: ["Arena", "Beige", "Verde Aguacate"] },
      { id: "camino-gasa", name: "Camino de Mesa (Gasa)", price: 45, colors: ["Blanca", "Rosa Claro", "Lila", "Verde Olivo", "Verde Esmeralda", "Naranja", "Azul", "Beige"] },
    ],
  },
  {
    id: "servilletas",
    name: "Servilletas",
    products: [
      { id: "servilleta-tergal", name: "Servilleta Línea Tergal", price: 8, colors: ["Blanca", "Rosa Claro", "Verde Eucalipto", "Fucsia", "Naranja", "Azul", "Beige", "Amarilla", "Lila"] },
      { id: "servilleta-lino", name: "Servilleta Línea Lino", price: 14, colors: ["Arena", "Beige", "Verde Aguacate"] },
    ],
  },
  {
    id: "backs-decoracion",
    name: "Backs y Decoración",
    products: [
      { id: "stand-donas", name: "Stand de Donas", price: 550 },
      { id: "portaretratos", name: "Portaretratos de Madera con Impresión Personalizada", price: 120 },
      { id: "jarrones-velas", name: "Jarrones con Velas Flotantes", price: 95 },
      { id: "canastas", name: "Canastas", price: 120 },
      { id: "champinones", name: "Champiñones", price: 65 },
      { id: "tripie-regalos", name: "Tripié para Regalos", price: 150 },
      { id: "base-pastel-vidrio", name: "Base para Pastel de Vidrio", price: 85 },
      { id: "dispensador-bebidas", name: "Dispensador de Bebidas (8L)", price: 150 },
      { id: "set-mesas-chico", name: "Set de Mesas (Chico)", price: 200 },
      { id: "set-mesas-mediano", name: "Set de Mesas (Mediano)", price: 300 },
      { id: "set-mesas-lateral", name: "Set de Mesas (Lateral)", price: 150 },
      { id: "bases-madera", name: "Bases de Madera", price: 85, priceNote: "desde" },
      { id: "jarrones-blancos", name: "Jarrones Blancos", price: 35, priceNote: "desde" },
      { id: "espejo-1-vinil", name: "Espejo con 1 Vinil", price: 850, dimensions: "1.80 m x 0.75 m" },
      { id: "espejo-2-viniles", name: "Espejo con 2 Viniles", price: 1150, dimensions: "1.80 m x 0.75 m" },
      { id: "estructura-manta-frase", name: 'Estructura con Manta (frase disponible)', price: 850 },
      { id: "estructura-manta-personalizada", name: "Estructura con Manta Personalizada", price: 1200 },
      { id: "caballete-letrero", name: "Caballete con Letrero Personalizado", price: 850 },
    ],
  },
];
