import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand";

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);
  return (
    <header className="header">
      <nav className="container navigation" aria-label="Navegación principal">
        <Brand />
        <button
          className="mobile-toggle"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <div
          className={`nav-links ${open ? "is-open" : ""}`}
          id="nav-links"
          onClick={() => setOpen(false)}
        >
          <a href="#menu">Nuestro menú</a>
          <a href="#nosotros">La historia</a>
          <a href="#opiniones">La comunidad</a>
          <a className="button button-small" href="#visitanos">
            Vení a visitarnos <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}
