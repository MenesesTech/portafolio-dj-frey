import React from "react";
import "./Footer.css";
import SocialBox from "../../components/SocialBox/SocialBox";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = ({ lenis }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSmartLinkClick = (e, targetId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const section = document.getElementById(targetId);
      if (section && lenis.current) {
        lenis.current.scrollTo(section);
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  return (
    <footer className="footer-container">
      <div className="newsletter-section">{/* ... */}</div>

      <div className="footer-main">
        <div className="footer-main-container">
          <div className="footer-top-row">
            <div className="footer-links-grid">
              <div className="footer-links-column">
                <h3 className="footer-links-heading">Home</h3>
                <ul className="footer-links-list">
                  <li>
                    {/* 🔹 4. Usa el nuevo manejador de clics */}
                    <a
                      href="#banner"
                      onClick={(e) => handleSmartLinkClick(e, "banner")}
                    >
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => handleSmartLinkClick(e, "about")}
                    >
                      Acerca De Mí
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      onClick={(e) => handleSmartLinkClick(e, "services")}
                    >
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#videos"
                      onClick={(e) => handleSmartLinkClick(e, "videos")}
                    >
                      Mis Sets
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-links-column">
                <h3 className="footer-links-heading">Packs de DJs</h3>
                <ul className="footer-links-list">
                  <li>
                    <a href="#">Pack de Regalo</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-arrow-desktop">
              <a href="#banner" onClick={(e) => handleLenisScroll(e, "banner")}>
                <i className="ri-arrow-up-right-line"></i>
              </a>
            </div>
          </div>

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
