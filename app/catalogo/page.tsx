import Image from "next/image";
import Link from "next/link";
import { products, formatPrice } from "../data/products";

export const metadata = { title: "Catálogo" };
export default function CatalogPage() {
  return <main className="inner-page"><div className="page-intro"><div><p className="eyebrow">Colección 01</p><h1 className="page-title">Catálogo</h1></div><p>Piezas diseñadas para convivir con la arquitectura y envejecer con elegancia. Hechas bajo pedido en México.</p></div><div className="product-grid">{products.map((product,index) => <Link href={`/producto/${product.slug}`} className="product-card" key={product.slug}><div className="product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width:760px) 100vw, 50vw"/><span className="product-number">0{index+1}</span><span className="view-product">Ver pieza <b>↗</b></span></div><div className="product-copy"><div><h3>{product.name}</h3><p>{product.description}</p></div><strong>{formatPrice(product.price)}</strong></div></Link>)}</div></main>;
}
