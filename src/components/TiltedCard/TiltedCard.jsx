import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import "./TiltedCard.css";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

// --- MODIFICADO ---
// Eliminamos las props de imagen (imageSrc, altText, overlayContent, etc.)
// y añadimos "children" para que pueda recibir contenido.
export default function TiltedCard({
  children,
  containerHeight = "100%", // Lo cambiamos para que sea flexible
  containerWidth = "100%",
  scaleOnHover = 1.05, // Un efecto más sutil para tarjetas de contenido
  rotateAmplitude = 10, // Un efecto más sutil
  showMobileWarning = false, // Lo desactivamos, tu tarjeta ya es responsive
  showTooltip = false, // Lo desactivamos, no es necesario
}) {
  const ref = useRef(null);

  const x = useMotionValue();
  const y = useMotionValue();
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    rotateX.set(rotationX);
    rotateY.set(rotationY);
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="tilted-card-figure"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="tilted-card-mobile-alert">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      {/* --- MODIFICADO --- */}
      {/* En lugar de la imagen y el overlay,
        renderizamos los "children" (tu .service-card)
        dentro del div de moción.
      */}
      <motion.div
        className="tilted-card-inner"
        style={{
          width: "100%",
          height: "100%", // Hacemos que ocupe todo el espacio
          rotateX,
          rotateY,
          scale,
        }}
      >
        {children} {/* Aquí se renderizará tu .service-card */}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="tilted-card-caption"
          style={{ x, y, opacity, rotate: rotateFigcaption }}
        >
          {/* El 'captionText' ya no existe, pero dejamos la lógica */}
        </motion.figcaption>
      )}
    </figure>
  );
}
