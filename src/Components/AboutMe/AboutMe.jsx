import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import WhatsAppButton from "../whatsapp";
import Avatar from "../../assets/img/aboutmy.png";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8   py-24  ">
      <div className=" md:col-span-4">
        <div className="flex gap-2 items-center pl-[180px]">
          <h3 className="text-indigo-500 font-medium text-base">About Me</h3>
          <BsFillPersonFill className="text-indigo-500 " />
        </div>
        <div className="pl-[180px]">
          <h2 className="font-bold text-4xl pb-8">
            ¿Por que deberias
            <span className="text-orange-400"> contratarme </span> <br />
            para tu<span className="text-indigo-500"> empresa?</span>
          </h2>

          <p className="text-gray-400 font-black ">
            Deberían considerarme para su empresa porque soy una persona altamente comprometida y autodidacta. <br />
            Siempre estoy buscando maneras de mejorar y aprender, y eso se refleja en mi trabajo diario.<br />
            Por ejemplo, recientemente me propuse aprender un nuevo lenguaje de programación por mi cuenta y luego lo apliqué con éxito <br />
            en un proyecto que mejoró significativamente la eficiencia del equipo. Además, me enorgullece ser un compañero de equipo colaborativo <br />
            y amistoso. Estoy siempre dispuesto a ayudar a mis colegas y trabajar juntos para alcanzar nuestros objetivos comunes. <br />
            Creo que mis valores de compromiso, aprendizaje continuo y colaboración encajan bien con la cultura de su empresa,<br />
            y estoy emocionado de tener la oportunidad de contribuir a su equipo.
          </p>

          <WhatsAppButton />
        </div>
      </div>
      <div className=" md:col-span-4 flex justify-center">
        <img
          className="h-[530px] w-[600px] rounded-lg "
          src={Avatar}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default AboutMe;
