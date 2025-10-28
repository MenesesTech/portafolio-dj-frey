import React, { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";
import loadingGif from "../../public/assets/img/loader.gif";
import Banner from "../sections/Banner/Banner";
import About from "../sections/About/About";
import Services from "../sections/Services/Services";
import Videos from "../sections/Videos/Videos";
import Footer from "../sections/Footer/Footer";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Preloader simulado
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll suave con Lenis
  useEffect(() => {
    if (!isLoading) {
      const lenis = new Lenis({
        duration: 1.6,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => lenis.destroy();
    }
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="preloader-overlay"
            style={{ zIndex: 10000 }}
            initial={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(16px)", scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.img
              src={loadingGif}
              alt="Cargando..."
              style={{
                width: "600px",
                height: "600px",
                objectFit: "contain",
              }}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Banner />
          <About />
          <Services />
          <Videos />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
