"use client";
import { useState } from "react";
import { useCart } from "./CartProvider";

export default function AddToCartButton({ slug }: { slug: string }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  return <button className="primary-button" onClick={() => { addItem(slug); setAdded(true); setTimeout(() => setAdded(false), 1800); }}>{added ? "Añadido al carrito ✓" : "Añadir al carrito"}</button>;
}
