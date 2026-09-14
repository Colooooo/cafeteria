import { useState } from "react";
import { ArrowDown, Coffee } from "lucide-react";
import { categories, menu } from "../data/menu";
import type { Category } from "../data/menu";

export default function MenuSection() {
  const [category, setCategory] = useState<Category>("Todos");
  const [expanded, setExpanded] = useState(false);
  const filtered = menu.filter(
    (item) => category === "Todos" || item.category === category,
  );
  const visible = expanded ? filtered : filtered.slice(0, 3);
  return (
    <section
      className="section container"
      id="menu"
      aria-labelledby="menu-title"
    >
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            HECHO CON TIEMPO. DISFRUTADO SIN APURO.
          </span>
          <h2 id="menu-title">
            Encontrá tu favorito<span className="accent">.</span>
          </h2>
        </div>
        <p>
          Para los de siempre y para los que se animan.
          <br />
          Una buena taza es un buen comienzo.
        </p>
      </div>
      <div className="menu-toolbar">
        <div className="filters" aria-label="Filtrar menú">
          {categories.map((item) => (
            <button
              key={item}
              aria-pressed={category === item}
              className={category === item ? "selected" : ""}
              onClick={() => {
                setCategory(item);
                setExpanded(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <span className="currency-note">Precios en pesos uruguayos</span>
      </div>
      <p className="sr-only" role="status">
        {filtered.length} productos en {category}. Mostrando {visible.length}.
      </p>
      <div className="menu-grid">
        {visible.map((item) => (
          <article className="menu-card" key={item.name}>
            <div className="product-photo">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                width="800"
                height="700"
              />
              {item.tag && <span className="product-tag">{item.tag}</span>}
              <span className="product-icon">
                <Coffee size={18} />
              </span>
            </div>
            <div className="product-title">
              <h3>{item.name}</h3>
              <span>${item.price}</span>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      {filtered.length > 3 && (
        <div className="menu-more">
          <button
            className="button button-outline"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Ver menos" : "Explorar todo el menú"}
            <ArrowDown size={17} className={expanded ? "rotate" : ""} />
          </button>
        </div>
      )}
    </section>
  );
}
