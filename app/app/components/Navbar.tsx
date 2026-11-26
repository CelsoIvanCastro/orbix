import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-6 border-b">
      
      <h1 className="text-xl tracking-widest">ORBIX</h1>

      <div className="flex gap-8 text-sm text-gray-600">
        <Link href="/">Inicio</Link>
        <Link href="/catalogo">Catálogo</Link>
        <a href="#">Personalizar</a>
      </div>

    </nav>
  );
}
