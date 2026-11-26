import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "../../components/AddToCartButton";
import { products, formatPrice } from "../../data/products";

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export default async function ProductPage({ params }: { params: Promise<{ slug:string }> }) {
  const { slug } = await params; const product = products.find((item) => item.slug === slug); if (!product) notFound();
  return <main className="detail-page"><div className="detail-visual"><Image src={product.image} alt={product.name} fill priority sizes="(max-width:760px) 100vw, 56vw" /></div><div className="detail-content"><Link href="/catalogo" className="back-link">← Volver al catálogo</Link><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><div className="detail-price">{formatPrice(product.price)}</div><p className="detail-description">{product.detail}</p><div className="detail-specs"><div><span>Dimensiones</span><strong>{product.dimensions}</strong></div><div><span>Materiales</span><strong>{product.material}</strong></div><div><span>Entrega</span><strong>6–8 semanas</strong></div></div><AddToCartButton slug={product.slug}/></div></main>;
}
