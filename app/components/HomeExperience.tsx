"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, formatPrice } from "../data/products";
import OrbixLogo from "./OrbixLogo";

function ScrollCue({ label, href }: { label: string; href: string }) {
  return <a className="scroll-cue" href={href}><span>{label}</span><span className="chevrons" aria-hidden="true"><i /><i /></span></a>;
}

export default function HomeExperience() {
  const [progress, setProgress] = useState(0);
  useEffect(() => { const onScroll = () => setProgress(Math.min(window.scrollY / (window.innerHeight * 0.72), 1)); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <main>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
      <div className="hero-content" style={{ opacity: 1 - progress, transform: `translateY(${-progress * 70}px) scale(${1 - progress * 0.16})` }}>
        <p className="eyebrow">Real Estate &amp; Design · Est. 2026</p><h1 id="hero-title" className="sr-only">Orbix Real Estate &amp; Design</h1><OrbixLogo className="hero-logo" /><p className="hero-note">Espacios que se sienten bien<br />antes de saber por qué.</p>
      </div>
      <ScrollCue label="Feng Shui" href="#feng-shui" />
    </section>
    <section className="feng-section" id="feng-shui">
      <div className="section-index">01 / Armonía</div>
      <div className="statement-layout"><p className="eyebrow">Diseño que comienza en cómo quieres sentirte</p><h2>Tu espacio<br />también <em>te habita.</em></h2><div className="statement-copy"><p className="lead-copy">No solo entras a una habitación. La habitación entra en ti: en tu ritmo, tu atención y la forma en que descansas.</p><p>Aplicamos principios de Feng Shui junto con criterios contemporáneos de luz, circulación, proporción y naturaleza para retirar el ruido invisible del espacio. El resultado no promete magia: ofrece algo más valioso, un hogar que se siente claro, sereno y profundamente tuyo.</p><a href="#servicios" className="inline-cta">Descubrir el método <span>↘</span></a></div></div>
      <ScrollCue label="Nuestros servicios" href="#servicios" />
    </section>
    <section className="services-section" id="servicios">
      <div className="section-index">02 / Transformamos</div>
      <div className="services-grid"><div className="service-title"><p className="eyebrow">Decoración &amp; remodelación</p><h2>No cambies de casa.<br /><em>Haz que vuelva a elegirte.</em></h2></div><div className="service-offer"><p className="lead-copy">Ese espacio que hoy toleras puede convertirse en el lugar al que siempre quieras volver.</p><p>Escuchamos cómo vives, detectamos lo que tu espacio todavía no resuelve y lo transformamos con una visión completa: distribución, atmósfera, materiales, mobiliario y ejecución. Una sola dirección creativa, de la primera idea al último detalle, para que no cargues con decisiones interminables ni resultados improvisados.</p><div className="service-list"><span>Interiorismo</span><span>Remodelación integral</span><span>Diseño de mobiliario</span><span>Consultoría Feng Shui</span></div><a href="#contacto" className="primary-button light-button">Quiero transformar mi espacio</a></div></div>
      <div className="contact-strip" id="contacto"><span>Agenda una conversación privada</span><div><span>Teléfono · Próximamente</span><span>Correo · Próximamente</span></div></div>
      <ScrollCue label="Modelo de IA" href="#ia" />
    </section>
    <section className="ai-section" id="ia">
      <div className="section-index">03 / Diseña</div>
      <div className="ai-grid"><div><p className="eyebrow">Imagina una pieza única</p><h2>IA</h2></div>
        <form className="prompt-panel" onSubmit={(event) => event.preventDefault()}><p>Nuestro modelo interpreta tu espacio, necesidades y sensibilidad para iniciar una propuesta a tu medida.</p><label htmlFor="furniture-prompt">Tu idea</label><div className="prompt-input-wrap"><input id="furniture-prompt" placeholder="Describe tu mueble ideal" /><button type="submit" aria-label="Crear propuesta">↗</button></div><div className="prompt-meta"><span>01 Describe</span><span>02 Refinamos</span><span>03 Fabricamos</span></div></form>
      </div><ScrollCue label="Catálogo" href="#catalogo" />
    </section>
    <section className="catalog-section" id="catalogo">
      <div className="catalog-heading"><div><p className="eyebrow">04 / Selección Orbix</p><h2>Piezas con<br /><em>presencia.</em></h2></div><p>Una colección serena de materiales honestos, proporciones precisas y detalles que se descubren con el tiempo.</p></div>
      <div className="product-grid">{products.map((product, index) => <Link href={`/producto/${product.slug}`} className="product-card" key={product.slug}><div className="product-image"><Image src={product.image} alt={product.name} fill sizes="(max-width: 760px) 100vw, 50vw" /><span className="product-number">0{index + 1}</span><span className="view-product">Ver pieza <b>↗</b></span></div><div className="product-copy"><div><h3>{product.name}</h3><p>{product.description}</p></div><strong>{formatPrice(product.price)}</strong></div></Link>)}</div>
      <Link href="/catalogo" className="text-link">Explorar colección completa <span>↗</span></Link>
    </section>
  </main>;
}
