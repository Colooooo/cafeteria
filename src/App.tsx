import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  MapPin,
  Coffee,
  Bean,
  Heart,
  ArrowRight,
} from "lucide-react";
import Brand, { AuroraSun } from "./components/Brand";
import Header from "./components/Header";
import MenuSection from "./components/MenuSection";
import LocationMap from "./components/LocationMap";

const directions =
  "https://www.google.com/maps/dir/?api=1&destination=Rinc%C3%B3n+651+Montevideo+Uruguay";

export default function App() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <section
          className="hero container"
          id="inicio"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="tiny-sun">✳</span> DESDE 2008 · MONTEVIDEO,
              URUGUAY
            </span>
            <h1 id="hero-title">
              Tu pausa,
              <br />
              nuestro{" "}
              <span className="coffee-word">
                café
                <svg viewBox="0 0 300 20" aria-hidden="true">
                  <path d="M3 14Q125-4 295 9M32 19Q171 4 275 14" />
                </svg>
              </span>
              .
            </h1>
            <p>
              Hay días que empiezan mejor con un buen café.
              <br className="desktop-break" /> Y lugares que te invitan a
              quedarte.
            </p>
            <div className="hero-actions">
              <a className="button" href="#menu">
                Descubrí el menú <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#nosotros">
                Conocé Aurora <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-location">
              <MapPin size={17} />
              <span>Un rincón en Ciudad Vieja, hecho para vos.</span>
            </div>
          </div>
          <div className="hero-visual">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=90"
              alt="Café servido con arte latte sobre una mesa de madera"
              width="1200"
              height="1300"
              fetchPriority="high"
            />
            <div className="photo-shade" />
            <div className="round-stamp">
              <span>BUEN CAFÉ</span>
              <AuroraSun />
              <span>BUENOS MOMENTOS</span>
            </div>
            <div className="hero-photo-caption">
              <span>EL RITUAL DE CADA DÍA</span>
              <p>
                Algo simple.
                <br />
                Extraordinariamente bueno.
              </p>
            </div>
            <a
              className="photo-arrow"
              href="#menu"
              aria-label="Explorar el menú"
            >
              <ArrowDown size={24} />
            </a>
          </div>
        </section>
        <div className="values-strip">
          <div className="container values">
            <span>
              <Bean /> Granos seleccionados
            </span>
            <span className="value-star">✳</span>
            <span>
              <Coffee /> Tostado diario
            </span>
            <span className="value-star">✳</span>
            <span>
              <Heart /> Experiencia artesanal
            </span>
            <span className="value-star">✳</span>
            <span>De Montevideo, con amor</span>
          </div>
        </div>
        <MenuSection />
        <section
          className="story-section"
          id="nosotros"
          aria-labelledby="story-title"
        >
          <div className="container story-grid">
            <div className="story-photo">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1100&q=85"
                alt="Una taza de café acompañada de granos tostados"
                loading="lazy"
                width="1100"
                height="1000"
              />
              <div className="story-year">
                <strong>2008</strong>
                <span>EL COMIENZO DE UN RITUAL</span>
              </div>
            </div>
            <div className="story-copy">
              <span className="eyebrow">NUESTRA HISTORIA</span>
              <h2 id="story-title">
                Más que café.
                <br />
                Un lugar al que
                <br />
                <span className="accent">siempre volver.</span>
              </h2>
              <p>
                Desde 2008 tostamos café de origen único, con una idea simple:
                que cada taza tenga identidad propia.
              </p>
              <p>
                Supimos ser el primer café de especialidad en Montevideo. Hoy
                seguimos siendo ese recoveco de la ciudad donde hacerle culto al
                café y disfrutar de lo mejor que tiene para ofrecer.
              </p>
              <p>
                Una charla, un libro, una pausa. El café lo ponemos nosotros.
              </p>
              <a href="#visitanos" className="text-link">
                Te esperamos en Aurora <ArrowUpRight size={18} />
              </a>
              <div className="story-signature">
                <AuroraSun />
                <span>Buen café. Buena compañía.</span>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section container testimonials"
          id="opiniones"
          aria-labelledby="reviews-title"
        >
          <span className="eyebrow">LO MEJOR DE AURORA, ES QUIEN VUELVE</span>
          <h2 id="reviews-title">
            Se dice entre tazas<span className="accent">.</span>
          </h2>
          <div className="review-grid">
            {[
              "El mejor café de Montevideo.",
              "El ambiente está re copado.",
              "El mocha es el mejor de toda la ciudad.",
            ].map((quote, i) => (
              <figure className="review" key={quote}>
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <blockquote>{quote}</blockquote>
                <figcaption>
                  <span className="review-line" />
                  {["Por el café", "Por el lugar", "Por ese favorito"][i]}
                  <span>— Un cliente de Aurora</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        <section
          className="visit-section"
          id="visitanos"
          aria-labelledby="visit-title"
        >
          <div className="container visit-grid">
            <div className="visit-copy">
              <span className="eyebrow">NOS VEMOS EN CIUDAD VIEJA</span>
              <h2 id="visit-title">
                Tu próxima pausa
                <br />
                queda por acá<span>.</span>
              </h2>
              <p>Pasá por un café. Quedate por todo lo demás.</p>
              <div className="visit-detail">
                <MapPin size={21} />
                <div>
                  <strong>Rincón 651 esq. Bartolomé Mitre</strong>
                  <span>Ciudad Vieja · Montevideo, Uruguay</span>
                </div>
              </div>
              <div className="visit-detail">
                <Clock3 size={21} />
                <div>
                  <strong>De 08:00 a 17:00</strong>
                  <span>Tu momento Aurora te espera.</span>
                </div>
              </div>
              <a
                className="button button-cream"
                href={directions}
                target="_blank"
                rel="noreferrer"
              >
                Cómo llegar <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="map-wrap">
              <LocationMap />
              <a
                className="map-label"
                href={directions}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <strong>Nos encontrás acá</strong>Rincón 651, Montevideo
                </span>
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer" id="contact">
        <div className="footer-main">
          <Brand />
          <p>Un buen café cambia el día.</p>
          <a className="text-link" href="#inicio">
            Volver arriba <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Café Aurora. Todos los derechos
            reservados.
          </span>
          <span>
            Hecho con calma, en Montevideo. <AuroraSun />
          </span>
        </div>
      </footer>
    </>
  );
}
