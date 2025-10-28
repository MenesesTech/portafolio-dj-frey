import React from "react";
import "./Footer.css"; // Importamos nuestro nuevo CSS
import SocialBox from "../../components/SocialBox/SocialBox";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* --- Sección de Newsletter (Banner Azul) --- */}
      <div className="newsletter-section">
        <div className="newsletter-card">
          <div className="newsletter-grid">
            {/* Col 1: Logo */}
            <div className="newsletter-logo-container">
              <img src="/assets/img/logo-dj-frey.webp" alt="" srcset="" />
            </div>

            {/* Col 2: Formulario de Suscripción */}
            <div className="newsletter-content">
              <h2 className="newsletter-title">Suscríbete al Ritmo</h2>
              <p className="newsletter-description">
                Sé el primero en recibir mis nuevos mixes, remixes exclusivos y
                noticias de eventos. Únete a la comunidad y no te pierdas ningún
                beat 🔊
              </p>

              <form className="newsletter-form">
                <label htmlFor="email-newsletter" className="sr-only">
                  Ingresa tu correo electrónico
                </label>
                <input
                  type="email"
                  id="email-newsletter"
                  placeholder="Enter Your Email"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  Suscribirme
                </button>
              </form>

              <p className="newsletter-policy">
                By subscribing you agree to our{" "}
                <a href="#" className="newsletter-policy-link">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Sección Principal del Footer (Gris) --- */}
      <div className="footer-main">
        <div className="footer-main-container">
          <div className="footer-top-row">
            {/* Columnas de Links */}
            <div className="footer-links-grid">
              {/* Col 1 */}
              <div className="footer-links-column">
                <h3 className="footer-links-heading">Home</h3>
                <ul className="footer-links-list">
                  <li>
                    <a href="#">Inicio</a>
                  </li>
                  <li>
                    <a href="#">Acerca De Mí</a>
                  </li>
                  <li>
                    <a href="#">Servicios</a>
                  </li>
                  <li>
                    <a href="#">Mis Sets</a>
                  </li>
                </ul>
              </div>

              {/* Col 2 */}
              <div className="footer-links-column">
                <h3 className="footer-links-heading">Packs de DJs</h3>
                <ul className="footer-links-list">
                  <li>
                    <a href="#">Pack de Regalo</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Icono de Flecha (Solo en Desktop) */}
            <div className="footer-arrow-desktop">
              <a href="#">
                <i className="ri-arrow-up-right-line"></i>
              </a>
            </div>
          </div>

          {/* Fila Inferior: Redes Sociales y Flecha (Móvil) */}
          <div className="footer-bottom-row">
            <SocialBox />
          </div>
        </div>
        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} MenesesTech. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
