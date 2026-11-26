"use client";
import Link from "next/link";
import { useCart } from "./CartProvider";
import OrbixLogo from "./OrbixLogo";

export default function Navbar() {
  const { items } = useCart();
  return <header className="site-header">
    <Link href="/" className="nav-brand" aria-label="Orbix, inicio"><OrbixLogo compact /></Link>
    <nav className="nav-links" aria-label="Navegación principal">
      <Link href="/#feng-shui">Feng Shui</Link><Link href="/#servicios">Servicios</Link><Link href="/#ia">Modelo IA</Link><Link href="/catalogo">Catálogo</Link><Link href="/login">Ingresar</Link>
      <Link href="/carrito" className="cart-link" aria-label={`Carrito, ${items.length} artículos`}>Carrito <span>{String(items.length).padStart(2, "0")}</span></Link>
    </nav>
  </header>;
}
