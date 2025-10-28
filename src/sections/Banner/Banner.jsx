import "./banner.css";
import Particles from "../../components/Particles/Particles";
import SocialBox from "../../components/SocialBox/SocialBox";

import { useEffect, useState, useMemo, use } from "react";
import LightRays from "../../components/LightRays/LightRays";

function Banner({ id }) {
  const [showLightRays, setShowLightRays] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowLightRays(window.scrollY <= 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showLightRays && <LightRays />}
      <div id={id} className="banner-containner">
        <Particles />
        {/* --- COLUMNA IZQUIERDA (Logo + Redes) --- */}
        <div className="banner-logo-containner">
          {/* 1. Tu logo */}
          <div className="banner-logo-img">
            <img src="/assets/img/logo-dj-frey.webp" alt="Logo DJ Frey" />
          </div>
          <SocialBox />
        </div>

        {/* --- COLUMNA DERECHA (Imagen) --- */}
        <div className="banner-image">
          <img src="/assets/img/banner-foto.webp" alt="DJ Frey mezclando" />
        </div>
      </div>
    </>
  );
}
export default Banner;
