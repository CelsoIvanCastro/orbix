"use client";
import { createContext, useContext, useEffect, useState } from "react";

type CartContextType = { items: string[]; addItem: (slug: string) => void; removeItem: (slug: string) => void };
const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try { const saved = localStorage.getItem("orbix-cart"); if (saved) setItems(JSON.parse(saved)); } catch { localStorage.removeItem("orbix-cart"); }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);
  const persist = (next: string[]) => { setItems(next); localStorage.setItem("orbix-cart", JSON.stringify(next)); };
  return <CartContext.Provider value={{ items, addItem: (slug) => persist([...items, slug]), removeItem: (slug) => { const index = items.indexOf(slug); if (index >= 0) persist(items.filter((_, i) => i !== index)); } }}>{children}</CartContext.Provider>;
}

export function useCart() { const context = useContext(CartContext); if (!context) throw new Error("useCart debe usarse dentro de CartProvider"); return context; }
