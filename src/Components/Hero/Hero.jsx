import React from "react";
import Foto from "../../assets/img/fotopotafolio.png";
import react from "../../assets/img/react.jpg";
import javascript from "../../assets/img/js.png";
import nodejs from "../../assets/img/nodejs.png";
import java from "../../assets/img/java.jpg";
import CV from "../../Curriculum/CV.Progrmacion.pdf";

import { Fondo } from "../Fondo/Fondo";

import { FcCalendar } from "react-icons/fc";

function Hero() {
  return (
    <section
      id="Inicio"
      className="min-h-[90vh] grid grid-cols-1 md:grid-cols-8 mt-24"
    >
      <div className=" md:col-span-3 flex items-center justify-center relative ">
        {/* foto */}
        <div className="z-10 flex justify-center ">
          <img
            src={Foto}
            alt="foto"
            className="object-cover  h-[700px]  mr-[50px] relative right-6 pb-4  "
          />
          <div className=" flex  absolute bg-white justify-center items-center  w-[315px] rounded-lg h-32  bottom-14  shadow-2xl ">
            <h1 className="animate-rotate-y font-medium text-center text-4xl xl:text-3xl text-one">
              BIENVENIDOS
            </h1>
          </div>
        </div>
        {/* Circulo */}
        <Fondo className=" absolute w-[640px] rounded-lg  mt-24 " />

        {/* logos */}
        <img
          src={javascript}
          alt="react"
          className="w-20 h-20 object-cover  rounded-full absolute left-[90%] 
          top-[10%]"
        />
        <img
          src={nodejs}
          alt="react"
          className="w-20 h-20 object-cover    rounded-full absolute left-[15%] 
          top-[1%]"
        />
        <img
          src={react}
          alt="react"
          className="w-20 h-20 object-cover   border-l-6  border-gray-600 rounded-full absolute left-[97%] 
          top-[52%]"
        />
        <img
          src={java}
          alt="react"
          className="w-20 h-20 object-cover    rounded-full absolute right-[85%] rotate-12  duration-75
          bottom-[10%]"
        />
      </div>
      {/* info */}
      <div className="  md:col-span-5 flex items-center justify-center">
        <div>
          <h1 className=" animate-rotate-y font-black text-center text-4xl xl:text-4xl text-one">
            HOLA MI NOMBRE ES{" "}
          </h1>
          <h2 className="text-center text-6xl xl:text-6xl text-two font-black">
            IGNACIO CARDOZO
          </h2>
          <h3 className="text-center text-4xl xl:text-2xl text-one font-black">
            Soy FullStack Developer
          </h3>
          <p className="text-center text-2xl py-8 xl:text-lg xl:py-[50px] text-one font-black">
            Soy un desarrollador FullStack apasionado con la <br /> programacion
            y tengo 2 años de experiencia en <br />
            este increible mundo .
          </p>
          <div className="flex gap-8 justify-center">
            <a
              download
              href={CV}
              className=" transition ease-in-out delay-150 shadow-blue-500/50 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white pb-2 pt-[18px] px-8 rounded-xl tetx-xl font-black"
            >
              Curriculum
            </a>
            <a href="https://calendly.com/ignaciocardozoxd12">
              <button
                className="  transition ease-in-out delay-150 shadow-blue-600/50 bg-blue-500 hover:-translate-y-1
        hover:scale-110 hover:bg-indigo-500 duration-300 flex items-center justify-start gap-4 py-2 px-8 rounded-xl font-black text-white  "
              >
                <FcCalendar className="w-16 h-12" />
                Agendar un Horario
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
