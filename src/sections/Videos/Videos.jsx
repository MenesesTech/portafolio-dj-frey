import React, { useState } from "react";
import "./Videos.css";

const videosData = [
  {
    id: "1C0WaAa5MAg",
    title:
      "MIX VARIADO PARA FIESTAS 2025 |  Cumbia, Reggaetón, Salsa, Merengue y Más",
    description:
      "Revive uno de los sets con más energía y variedad musical. Perfecto para animar cualquier evento con los mejores ritmos latinos.",
  },
  {
    id: "DQbWkEXRXAE",
    title: "RETRO MIX Vol. 2 | Clásicos de los 80s y 90s",
    description:
      "Un set grabado en vivo desde mi casa, donde mezclo los mejores éxitos de los 80s y 90s para una experiencia nostálgica.",
  },
  {
    id: "62B-OS_udfc",
    title: "RETRO MIX Vol. 3 | Hits de los 80s, 90s y 2000s",
    description:
      "Música para seguir la fiesta. Este set se centra en los grandes éxitos de los 80s, 90s y 2000s que todos aman.",
  },
];

const Videos = () => {
  const [currentVideo, setCurrentVideo] = useState(videosData[0]);

  return (
    <section className="videos-section">
      <div className="videos-container">
        {/* --- TÍTULO DE LA SECCIÓN --- */}
        <div className="videos-title-container">
          <h2 className="font-title">Mis Sets</h2>
        </div>

        {/* --- GRID PRINCIPAL (Video + Info + Thumbnails) --- */}
        <div className="videos-layout-grid">
          {/* --- 1. REPRODUCTOR DESTACADO --- */}
          <div className="video-featured">
            {/* Este div mantiene la proporción 16:9 */}
            <div className="video-responsive-embed">
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.id}`}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* --- 2. INFORMACIÓN DEL VIDEO DESTACADO --- */}
          <div className="video-featured-info font-text">
            <span className="video-subtitle">Set Destacado</span>
            <h3 className="font-title">{currentVideo.title}</h3>
            <p>{currentVideo.description}</p>
          </div>

          {/* --- 3. GRID DE VIDEOS PEQUEÑOS (THUMBNAILS) --- */}
          <div className="video-thumbnail-grid">
            {videosData.map((video) => (
              <div
                key={video.id}
                // Si el video está seleccionado, le añade la clase "active"
                className={`video-thumbnail ${
                  currentVideo.id === video.id ? "active" : ""
                }`}
                // Al hacer clic, cambia el video destacado
                onClick={() => setCurrentVideo(video)}
              >
                <img
                  // Usamos el thumbnail oficial de YouTube
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                />
                <h4 className="font-title">{video.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
