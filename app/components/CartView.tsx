"use client";
import Image from "next/image";
import Link from "next/link";
import { products, formatPrice } from "../data/products";
import { useCart } from "./CartProvider";

export default function CartView() {
  const { items, removeItem } = useCart();
  const entries = items.map((slug) => products.find((product) => product.slug === slug)).filter(Boolean);
  const total = entries.reduce((sum, product) => sum + (product?.price ?? 0), 0);
  if (!entries.length) return <div className="cart-shell empty-state"><p>Tu selección está vacía. Descubre una pieza que transforme tu espacio.</p><Link href="/catalogo" className="primary-button">Explorar catálogo</Link></div>;
  return <div className="cart-shell">{entries.map((product, index) => product && <div className="cart-row" key={`${product.slug}-${index}`}><div className="cart-thumb"><Image src={product.image} alt="" fill sizes="90px" /></div><div><h3>{product.name}</h3><p>{formatPrice(product.price)}</p></div><button className="remove-button" onClick={() => removeItem(product.slug)}>Eliminar</button></div>)}<div className="cart-total"><span>Total</span><strong>{formatPrice(total)}</strong></div><button className="primary-button" style={{ width:"100%" }}>Continuar con la compra</button></div>;
}
