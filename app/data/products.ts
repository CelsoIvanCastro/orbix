export type Product = { slug: string; name: string; category: string; description: string; detail: string; price: number; image: string; dimensions: string; material: string };

export const products: Product[] = [
  { slug: "sillon-atelier", name: "Sillón Atelier", category: "Asientos", description: "Volúmenes suaves, presencia escultórica.", detail: "Un sillón de proporciones generosas diseñado para sostener el cuerpo con naturalidad. Su silueta limpia combina artesanía contemporánea y confort duradero.", price: 32900, image: "/products/atelier-chair.jpg", dimensions: "84 × 78 × 72 cm", material: "Bouclé italiano · Roble macizo" },
  { slug: "butaca-sienna", name: "Butaca Sienna", category: "Asientos", description: "Calidez precisa en una forma esencial.", detail: "Diseñada como un refugio individual, Sienna equilibra líneas arquitectónicas y tacto envolvente. Cada pieza se termina a mano.", price: 28400, image: "/products/sienna-lounge.jpg", dimensions: "76 × 82 × 74 cm", material: "Piel plena flor · Acero pavonado" },
  { slug: "sillon-nube", name: "Sillón Nube", category: "Colección suave", description: "Una pausa ligera para espacios serenos.", detail: "Nube traduce la sensación de ligereza a una pieza cotidiana. Su asiento profundo y tejido natural invitan a permanecer.", price: 24600, image: "/products/nube-armchair.jpg", dimensions: "79 × 86 × 76 cm", material: "Lino lavado · Fresno natural" },
  { slug: "sofa-linea", name: "Sofá Línea", category: "Sala", description: "Arquitectura doméstica, calma absoluta.", detail: "Una composición modular de perfil bajo que ordena el espacio sin dominarlo. Los respaldos y asientos se construyen para uso diario.", price: 58900, image: "/products/linea-sofa.jpg", dimensions: "224 × 94 × 70 cm", material: "Lana texturizada · Nogal" },
];

export const formatPrice = (price: number) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(price);
