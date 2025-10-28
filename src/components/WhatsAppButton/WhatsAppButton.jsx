import React from "react";
import "./WhatsAppButton.css"; // <-- Importa su propio CSS

const WhatsAppButton = () => {
  const phoneNumber = "51916387047";
  const message = "Hola! Quería contratar a DJ Frey como DJ";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer noopener"
      className="whatsapp-button"
      aria-label="Contactar por WhatsApp"
    >
      {/* Efecto de "ping" o pulso */}
      <span className="whatsapp-ping"></span>

      {/* Icono de Remixicon */}
      <span className="whatsapp-icon">
        <i className="ri-whatsapp-line"></i>
      </span>
    </a>
  );
};

export default WhatsAppButton;
