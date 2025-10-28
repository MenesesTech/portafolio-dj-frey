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
                con el objetivo de llevar cada evento al siguiente nivel. Como
                DJ y productor, mi especialidad es una vibrante fusión de los
                ritmos electrónicos más potentes con los éxitos latinos y
                urbanos que dominan el mundo.
              </p>
              <blockquote>
                "Mi misión no es solo poner música, es crear el soundtrack de
                una noche inolvidable."
              </blockquote>
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
