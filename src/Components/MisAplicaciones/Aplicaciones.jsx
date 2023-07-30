import React from "react";
import pi from "../../assets/img/PI.png";
import pi2 from "../../assets/img/PI(2).png";
import pf from "../../assets/img/pf.png";
import pf2 from "../../assets/img/pf(2).png";
import react from "../../assets/img/reactIcono.png";
import css from "../../assets/img/css.png";
import js from "../../assets/img/js.png";
import express from "../../assets/img/express.png";
import bootstrap from "../../assets/img/bootstrap.png";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

const Aplicaciones = () => {
  return (
    <div id="Aplicaciones" className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-center font-bold text-5xl text-one">
          Mis <span className="text-two">Aplicaciones Web</span>
        </h1>
      </div>
      {/* Proyectos */}
      <div className=" grid grid-cols-1 gap-8 justify-center items-center">
        <div>
          <h3 className="text-center text-one font-bold text-2xl">
            Proyecto Indivial
          </h3>
          <div className="flex justify-center items-center gap-7 py-7 ">
            <img src={pi} alt="" className="w-[500px] rounded-3xl" />
            <img src={pi2} alt="" className="w-[500px] rounded-3xl" />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <h4 className="text-center pb-5 text-one text-xl font-medium">
              Aplicacion para ver las actividades y la informacion de cada pais
            </h4>
            <div className="flex justify-center gap-5  ">
              <img src={react} alt="react" className="w-12" />
              <img src={css} alt="css" className="w-12" />
              <img src={js} alt="js" className="w-12" />
              <img src={express} alt="express" className="w-12" />
              <BiLogoPostgresql className="w-12 h-12 text-[#38BDF8]" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center text-one font-bold text-2xl">Market-X</h3>
          <div className="flex justify-center items-center gap-7 py-7 ">
            <img src={pf} alt="" className="w-[500px] rounded-3xl" />
            <img src={pf2} alt="" className="w-[500px] rounded-3xl" />
          </div>
          <div className="flex flex-col items-center justify-center ">
            <h4 className="text-center pb-5 text-one text-xl font-medium">
              Aplicacion simulando un ecommerce para poder realizar compras
            </h4>
            <div className="flex justify-center gap-5  ">
              <SiNextdotjs className="w-12 h-12 text-[#000000] " />
              <img src={bootstrap} alt="bootstrap" className="w-12" />
              <img src={js} alt="js" className="w-12" />
              <img src={express} alt="express" className="w-12" />
              <BiLogoMongodb className="w-12 h-12 rounded-lg text-[#01EC64]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aplicaciones;
