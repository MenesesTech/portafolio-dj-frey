import "./Services.css";

const Services = ({ id }) => {
  return (
    <section id={id} className="services-section">
      <div className="services-container">
        {/* --- TÍTULO DE LA SECCIÓN --- */}
        <div className="services-title-container">
          {/* 1. USA 'font-title' para el título */}
          <h2>Paquetes de Servicios</h2>
        </div>

        {/* --- CONTENEDOR DE LA GRIDS --- */}
        {/* Aquí es donde se aplica la magia de CSS Grid */}
        <div className="services-grid">
          {/* --- PAQUETE 1 (Tarjeta) --- */}
          <div className="service-card">
            <div className="card-header">
              <h3 className="font-title">Paquete Básico</h3>
              <span className="card-subtitle">
                Ideal para reuniones pequeñas
              </span>
            </div>
            <ul className="service-includes font-text">
              <li>DJ por 4 horas</li>
              <li>Cabina de DJ elegante</li>
              <li>Luces básicas de colores</li>
              <li>Movilidad Incluida</li>
            </ul>
            <div className="card-footer">
              <span className="service-price">S/300</span>
              <button className="service-button">Cotizar</button>
            </div>
          </div>

          {/* --- PAQUETE 2 (Tarjeta Destacada) --- */}
          {/* Añadí la clase "featured" para un estilo opcional */}
          <div className="service-card featured">
            <span
              className="featured-badge"
              style={{ fontFamily: "var(--font-bold-family)" }}
            >
              Más Popular
            </span>
            <div className="card-header">
              <h3 className="font-title">Paquete Estandar</h3>
              <span className="card-subtitle">Sonido envolvente</span>
            </div>
            <ul className="service-includes font-text">
              <li>DJ por 5 horas</li>
              <li>Cabina de DJ elegante</li>
              <li>1 Parlantes 1200W</li>
              <li>Luces básicas de colores</li>
              <li>Movilidad incluida</li>
            </ul>
            <div className="card-footer">
              <span className="service-price">S/550</span>
              <button className="service-button">Cotizar</button>
            </div>
          </div>

          {/* Puedes añadir más tarjetas aquí... */}
        </div>
      </div>
    </section>
  );
};

export default Services;
