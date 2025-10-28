import React from "react";
import "./Mixes.css"; // Importamos los estilos

function Mixes() {
  return (
    <section id="mixes" className="mixes-section">
      <div className="mixes-container">
        <h2 className="mixes-title">Mixes & Edit's</h2>
        <p className="mixes-subtitle">
          Aquí puedes escuchar algunas de mis últimas sesiones y mixes.
        </p>

        <div className="mixes-grid">
          {/* --- MIX 1: SOUNDCLOUD--- */}
          <div className="mix-item mix-item-soundcloud">
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2104760975&color=%23f2bb13&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>

            {/* Atribución actualizada para la playlist */}
            <div className="soundcloud-attribution">
              <a
                href="https://soundcloud.com/djfreyofficial"
                title="DJ FREY"
                target="_blank"
                rel="noopener noreferrer"
              >
                DJ FREY
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/djfreyofficial/sets/dj-frey-mixes-edits"
                title="DJ FREY Mixes & Edit's"
                target="_blank"
                rel="noopener noreferrer"
              >
                DJ FREY Mixes & Edit's
              </a>
            </div>
          </div>

          {/* --- MIX 2: MIXCLOUD --- */}
          <div className="mix-item">
            <iframe
              width="100%"
              height="120"
              src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Ffrey-meneses-tineo%2Fdj-frey-retro-mix-vol-1%2F"
              frameborder="0"
              allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mixes;
