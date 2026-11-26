import CartView from "../components/CartView";
export const metadata = { title:"Carrito" };
export default function CartPage() { return <main className="inner-page"><div className="page-intro"><div><p className="eyebrow">Tu selección</p><h1 className="page-title">Carrito</h1></div><p>Cada pieza se prepara bajo pedido. Confirmaremos materiales, acabados y entrega contigo.</p></div><CartView /></main>; }
