import React from "react";
import Foto from "../../assets/img/portfolio.png";
import CV from "../../Curriculum/CV-IgnacioCardozo.pdf";
import { FcCalendar } from "react-icons/fc";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="Inicio"
      className="min-h-[90vh] grid grid-cols-1 md:grid-cols-8 border-white  border-r-8 border-l-8 bg-gradient-to-r from-orange-100 to-blue-200"
    >
      {/* info */}
      <div className="  md:col-span-4 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-black text-center text-4xl xl:text-4xl text-gray-400 ">
            HOLA MI NOMBRE ES
          </h1>
          <h2 className="bg-gradient-to-r from-[#673F98] to-orange-400   text-transparent bg-clip-text text-center text-6xl xl:text-6xl font-black ">
            <TypeAnimation
              sequence={[
                "IGNACIO CARDOZO",
                1000,
                "WEB DEVELOPER",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="text-center text-2xl py-8 xl:text-lg xl:py-[40px] text-gray-400 font-black">
            Soy un desarrollador FullStack apasionado con la <br /> programacion
            y tengo 2 años de experiencia en <br />
            este increible mundo .
          </p>
          <div className="flex gap-8 justify-center">
            <a
              download
              href={CV}
              className=" transition ease-in-out delay-150 shadow-blue-500/50 bg-orange-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white pb-2 pt-[18px] px-8 rounded-xl tetx-xl font-black"
            >
              CURRICULUM
            </a>
            <a href="https://calendly.com/ignaciocardozoxd12">
              <button className="underline hover:-translate-y-1 text-[#544FB9] hover:scale-110 duration-300 flex items-center justify-start gap-4 py-2 px-8 rounded-xl font-black   ">
                <FcCalendar className="w-16 h-12" />
                AGENDAR UNA REUNION
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className=" md:col-span-4 flex items-center justify-center relative ">
        {/* foto */}
        <div className="z-10 flex justify-center items-center ">
          <img
            src={Foto}
            alt="foto"
            className="object-cover w-[500px] h-[600px] relative  mb-20 rounded-[100%] bg-gradient-to-r from-orange-100 to-blue-200 border border-white"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
