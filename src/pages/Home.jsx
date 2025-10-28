import React, { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";
import loadingGif from "../../public/assets/img/loader.gif";
import Banner from "../sections/Banner/Banner";
import About from "../sections/About/About";
import Services from "../sections/Services/Services";
import Videos from "../sections/Videos/Videos";
import Footer from "../sections/Footer/Footer";
import { useLocation } from "react-router-dom";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const lenis = new Lenis({
        duration: 1.6,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      lenisRef.current = lenis; // 🔹 Guardamos la instancia

      if (location.hash) {
        const targetId = location.hash.substring(1); // quita el '#'
        const section = document.getElementById(targetId);
        if (section) {
          // Usamos un pequeño timeout para asegurar que todo esté renderizado
          setTimeout(() => {
            lenis.scrollTo(section);
          }, 100); // 100ms de espera
        }
      }

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => lenis.destroy();
    }
  }, [isLoading, location.hash]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="preloader-overlay"
            style={{ zIndex: 10000 }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={loadingGif}
              alt="Cargando..."
              style={{ width: "600px", height: "600px", objectFit: "contain" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Banner id="banner" />
          <About id="about" />
          <Services id="services" />
          <Videos id="videos" />
          <Footer lenis={lenisRef} />
        </>
      )}
    </>
  );
}

export default Home;
