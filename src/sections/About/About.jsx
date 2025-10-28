import "./About.css";
const About = ({ id }) => {
  const phoneNumber = "51916387047";
  const message = "Hola! Quería contratar a DJ Frey como DJ";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  return (
    <>
      <section id={id} className="about-section">
        <div className="about-container">
          <div className="about-title-container">
            {/* 1. USA 'font-title' para el título */}
            <h2>Acerca de mí</h2>
          </div>
          <div className="about-content">
            {/* --- COLUMNA DE IMAGEN --- */}
            <div className="about-image-column">
              <img
                src="/assets/img/about-me-photo.webp"
                alt="DJ Frey mezclando en un evento"
                className="about-image-main"
              />
            </div>

            {/* --- COLUMNA DE TEXTO --- */}
            {/* 2. USA 'font-text' para el párrafo */}
            <div className="about-text-column font-text">
              <p>
                Desde 2024, me he dedicado a perfeccionar el arte de la mezcla,
                con un objetivo claro: transformar cada evento en una
                experiencia sonora inolvidable. Como DJ y productor, mi estilo
                combina la energía de la música electrónica —Big Room, Bass
                House, Dubstep, Trap y Bangers— con la frescura de los ritmos
                latinos como la cumbia, salsa, merengue y reggaetón. Mi pasión
                nació en casa, practicando horas interminables con Virtual DJ
                durante la pandemia. Fue allí donde descubrí que mezclar no solo
                es sincronizar beats, sino crear emociones, atmósferas y
                momentos. Hoy, mi misión va más allá de poner música: diseño el
                soundtrack de cada noche, conectando culturas, géneros y
                generaciones. Porque, como me gusta decir:
              </p>
              <blockquote>“Si puedes imaginarlo, puedes mezclarlo.”</blockquote>
              <a
                className="about-button"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contáctame
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
