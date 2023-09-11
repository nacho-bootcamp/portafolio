import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const WhatsAppButton = () => {
  const phoneNumber = "543884686043"; // Reemplaza con tu número de teléfono

  const handleWhatsAppClick = () => {
    // Construye el enlace de WhatsApp con el número de teléfono
    const whatsappLink = `https://web.whatsapp.com/send?phone=${phoneNumber}`;

    // Abre el enlace en una nueva ventana o pestaña del navegador
    window.open(whatsappLink);
  };

  return (
    <div className=" my-10">
      <button
        className="hover:-translate-y-1 text-sm text-[#52b94f] hover:bg-[#52b94f] hover:text-white border border-[#52b94f] hover:scale-110 duration-300 flex items-center justify-start gap-3 py-2 px-3 rounded-lg font-black   "
        onClick={handleWhatsAppClick}
      >
        <AiOutlineWhatsApp className="w-7 h-7" />
        Contactar por WhatsApp
      </button>
    </div>
  );
};

export default WhatsAppButton;
