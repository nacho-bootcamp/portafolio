import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import figma from "../../assets/img/figma.png";
import spring from "../../assets/img/spring.png"
import spoon from "../../assets/img/spoon.png"
import docker from "../../assets/img/docker.png"
import odoo from "../../assets/img/odoo.png"

import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill, RiHtml5Fill } from "react-icons/ri";
import {
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoRedux,
  BiLogoTypescript,
  BiLogoJava,
  BiLogoCss3,
  BiLogoBootstrap,
  BiLogoReact,
  BiLogoTrello,
} from "react-icons/bi";

const InfiniteCarousel = () => {
  const settings = {
    dots: true, // Muestra los puntos indicadores de las diapositivas
    infinite: true, // Habilita el carrusel infinito
    speed: 1000, // Velocidad de transición en milisegundos
    slidesToShow: 4, // Número de elementos visibles a la vez
    slidesToScroll: 4, // Número de elementos para desplazarse en cada cambio
    autoplay: false, // Reproducción automática
    autoplaySpeed: 3000, // Intervalo de tiempo entre transiciones automáticas en milisegundos
  };

  return (
    <div className="w-3/4 mx-auto my-10 pl-5 " id="tecnologia">
      <h1 className="text-center text-4xl mb-1 font-bold bg-gradient-to-r from-[#673F98] to-orange-400   text-transparent bg-clip-text pb-6">
        Mis Tecnologias
      </h1>
      <Slider {...settings} className="py-4">
        <div>
          <BiLogoTypescript className="w-32 h-32 ml-28 text-[#3178C6] flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl mt-6 text-center">
            Typescript
          </h1>
        </div>
        <div>
          <BiLogoJava className="w-32 h-32 ml-32  text-[#0074BD] flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl pl-10 mt-6 text-center ">
            Java
          </h1>
        </div>
        <div>
          <RiJavascriptFill className="w-32 h-32 rounded-2xl ml-[120px] text-[#F7DF1E] flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl pl-3 mt-6 text-center">
            Javascript
          </h1>
        </div>
        <div className="text-[#E14E1D]">
          <RiHtml5Fill className="w-32 h-32 ml-28 flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl mt-6 text-center">HTML</h1>
        </div>
        <div>
          <BiLogoCss3 className="w-32 h-32  ml-28 mb-4 flex flex-col items-center justify-center gap-y-5 text-[#3178C6]" />
          <h1 className="font-bold text-one text-2xl text-center ">CSS</h1>
        </div>
        <div>
          <BiLogoBootstrap className="w-32 h-32 ml-28 rounded-lg mb-4 text-[#9013FE] flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl text-center">Bootstrap</h1>
        </div>
        <div>
          <BiLogoTailwindCss className="w-36 h-36 text-[#38BDF8] ml-28 flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl text-center">Tailwind</h1>
        </div>
        <div>
          <BiLogoReact className="w-32 h-32 ml-28 mb-4 text-[#00D8FF] flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl text-center">React</h1>
        </div>
        <div >
          <SiExpress className="w-32 h-32  ml-28 mb-4 text-black flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl text-center">Express</h1>
        </div>
        <div>
          <img src={spring} alt="Spring" className="w-28 h-28 mt-3 mb-5  ml-[120px] flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl text-center">Spring</h1>
        </div>
        <div>
          <img src={spoon} alt="spoon" className=" h-32  ml-15 mb-4 flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl text-center">ETLs</h1>
        </div>
        <div>
          <img src={odoo} alt="odoo" className="w-48  h-16  ml-20 mb-3 mt-6 flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl text-center mt-14">Odoo</h1>
        </div>
        <div>
          <img src={docker} alt="docker" className=" h-32  ml-24 mb-4" />
          <h1 className="font-bold text-one text-2xl text-center flex justify-center items-center">Docker</h1>
        </div>
        <div>
          <BiLogoMongodb className="w-36 h-36 text-[#01EC64] ml-24 flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl text-center">MongoDB</h1>
        </div>

        <div>
          <BiLogoPostgresql className="w-36 h-36 text-[#336791] ml-24  flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl text-center">
            PostgresSQL
          </h1>
        </div>
        <div>
          <img src={figma} alt="figma" className="w-32 h-32  ml-32 mb-3 flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl text-center">Figma</h1>
        </div>
        <div >
          <FaGitAlt className="w-36 h-36 ml-28 mb-4 text-[#F34F29] flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl text-center">Git</h1>
        </div>
        <div>
          <BiLogoRedux className="w-36 h-36  text-[#764ABC] ml-24 mb-4 flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl text-center">Redux</h1>
        </div>
        <div>
          <BiLogoTrello className="w-32 h-32  bg-white ml-28 mb-7 text-[#3178C6] flex justify-center items-center" />
          <h1 className="font-bold text-one text-2xl text-center">Trello</h1>
        </div>
      </Slider>
    </div>
  );
};

export default InfiniteCarousel;
