import React from "react";
import pi from "../../assets/img/PI.png";
import pi2 from "../../assets/img/PI(2).png";
import pf from "../../assets/img/pf.png";
import pf2 from "../../assets/img/pf(2).png";

import { SiExpress } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import {
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoCss3,
  BiLogoBootstrap,
} from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";

const Aplicaciones = () => {
  return (
    <div
      id="Aplicaciones"
      className="p-8 xl:p-20  border-white  border-r-8 border-l-8 bg-gradient-to-r from-blue-200 to-orange-100"
    >
      <div className="mb-8">
        <h1 className="text-center font-bold text-5xl text-one">
          Mis Aplicaciones <span className="text-orange-400"> Web</span>
        </h1>
      </div>
      {/* Proyectos */}
      <div className=" grid grid-cols-1 gap-8 justify-center items-center">
        <div>
          <h3 className="text-center text-one font-bold text-2xl">
            Proyecto <span className="text-[#544FB9]">Indivial </span>
          </h3>
          <a
            href="https://github.com/nacho-bootcamp/PI-Country"
            className="flex  justify-center"
          >
            <div className="flex justify-center items-center gap-7 py-7  transition duration-1000 ease-out transform hover:scale-105">
              <img src={pi} alt="" className="w-[500px] rounded-3xl" />
              <img src={pi2} alt="" className="w-[500px] rounded-3xl" />
            </div>
          </a>
          <div className="flex flex-col items-center justify-center ">
            <h4 className="text-center pb-5 text-one text-xl font-medium">
              Aplicacion para ver las actividades y la informacion de cada pais
            </h4>
            <div className="flex justify-center gap-5  ">
              <BiLogoReact className="w-12 h-12 text-[#00D8FF]" />
              <BiLogoCss3 className="w-12 h-12 text-[#3178C6]" />
              <RiJavascriptFill className="w-12 h-12 text-[#F7DF1E]" />
              <SiExpress className="w-12 h-12 text-black" />
              <BiLogoPostgresql className="w-12 h-12 text-[#38BDF8]" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-center text-one font-bold text-2xl">Market-X</h3>
          <a
            href="https://github.com/nacho-bootcamp/MarketX-2"
            className="flex  justify-center"
          >
            <div className="flex justify-center items-center gap-7 py-7  transition duration-1000 ease-out transform hover:scale-105 ">
              <img src={pf} alt="" className="w-[500px] rounded-3xl" />
              <img src={pf2} alt="" className="w-[500px] rounded-3xl" />
            </div>
          </a>
          <div className="flex flex-col items-center justify-center ">
            <h4 className="text-center pb-5 text-one text-xl font-medium">
              Aplicacion simulando un ecommerce para poder realizar compras
            </h4>
            <div className="flex justify-center gap-5  ">
              <SiNextdotjs className="w-12 h-12 text-[#000000] " />
              <BiLogoBootstrap className="w-12 h-12 text-[#9013FE]" />
              <RiJavascriptFill className="w-12 h-12 text-[#F7DF1E]" />
              <SiExpress className="w-12 h-12 text-black" />
              <BiLogoMongodb className="w-12 h-12 rounded-lg text-[#01EC64]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aplicaciones;
