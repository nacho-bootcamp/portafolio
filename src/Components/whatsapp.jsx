import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const WhatsAppButton = () => {
  const phoneNumber = "543885967267"; // Reemplaza con tu número de teléfono

  const handleWhatsAppClick = () => {
    // Construye el enlace de WhatsApp con el número de teléfono
    const whatsappLink = `https://web.whatsapp.com/send?phone=${phoneNumber}`;

    // Abre el enlace en una nueva ventana o pestaña del navegador
    window.open(whatsappLink);
  };

  return (
    <div className=" flex items-center pt-9 gap-4">
      <AiOutlineWhatsApp />
      <button onClick={handleWhatsAppClick}>Contactar por WhatsApp</button>
    </div>
  );
};

export default WhatsAppButton;
