import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import figma from "../../assets/img/figma.png";

import { SiNestjs, SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill, RiHtml5Fill } from "react-icons/ri";
import {
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoRedux,
  BiLogoAngular,
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
    autoplay: true, // Reproducción automática
    autoplaySpeed: 3000, // Intervalo de tiempo entre transiciones automáticas en milisegundos
  };

  return (
    <div className="w-3/4 mx-auto my-10 pl-5 ">
      <h1 className="text-center text-4xl mb-1 font-bold bg-gradient-to-r from-[#673F98] to-orange-400   text-transparent bg-clip-text pb-6">
        Mis Tecnologias
      </h1>
      <Slider {...settings} className="py-4">
        <div>
          <BiLogoTypescript className="w-32 h-32 ml-28 text-[#3178C6]" />
          <h1 className="font-bold text-one text-2xl mt-6 text-center">
            Typescript
          </h1>
        </div>
        <div>
          <BiLogoJava className="w-32 h-32 ml-32  text-[#0074BD]" />
          <h1 className="font-bold text-one text-2xl pl-10 mt-6 text-center ">
            Java
          </h1>
        </div>
        <div>
          <RiJavascriptFill className="w-32 h-32 rounded-2xl ml-[120px] text-[#F7DF1E]" />
          <h1 className="font-bold text-one text-2xl pl-3 mt-6 text-center">
            Javascript
          </h1>
        </div>
        <div className=" flex flex-col items-center justify-center  gap-y-5 text-[#E14E1D]">
          <RiHtml5Fill className="w-32 h-32 ml-28" />
          <h1 className="font-bold text-one text-2xl mt-6 text-center">HTML</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5 text-[#3178C6]">
          <BiLogoCss3 className="w-32 h-32  ml-28 mb-4" />
          <h1 className="font-bold text-one text-2xl text-center ">CSS</h1>
        </div>
        <div className=" flex flex-col  gap-y-5">
          <BiLogoBootstrap className="w-32 h-32 ml-28 rounded-lg mb-4 text-[#9013FE]" />
          <h1 className="font-bold text-one text-2xl text-center">Bootstrap</h1>
        </div>
        <div className=" flex flex-col  gap-y-5 ">
          <BiLogoTailwindCss className="w-36 h-36 text-[#38BDF8] ml-28" />
          <h1 className="font-bold text-one text-2xl text-center">Tailwind</h1>
        </div>
        <div className=" flex flex-col  gap-y-5">
          <SiExpress className="w-32 h-32  ml-28 mb-4 text-black" />
          <h1 className="font-bold text-one text-2xl text-center">Express</h1>
        </div>
        <div className=" flex flex-col gap-y-5">
          <BiLogoReact className="w-32 h-32 ml-28 mb-4 text-[#00D8FF]" />
          <h1 className="font-bold text-one text-2xl text-center">React</h1>
        </div>
        <div className=" flex flex-col  gap-y-5">
          <BiLogoAngular className="w-36 h-36 text-[#E0234E] ml-[105px]" />
          <h1 className="font-bold text-one text-2xl text-center">Angular</h1>
        </div>
        <div className=" flex flex-col gap-y-5">
          <SiNestjs className="w-32 h-32 text-[#E0234E] ml-20 mb-4" />
          <h1 className="font-bold text-one text-2xl text-center">NestJS</h1>
        </div>
        <div className=" flex flex-col  gap-y-5">
          <BiLogoMongodb className="w-36 h-36 text-[#01EC64] ml-24" />
          <h1 className="font-bold text-one text-2xl text-center">MongoDB</h1>
        </div>

        <div className=" flex flex-col gap-y-5">
          <BiLogoPostgresql className="w-36 h-36 text-[#336791] ml-24 mb-4" />
          <h1 className="font-bold text-one text-2xl text-center">
            PostgresSQL
          </h1>
        </div>
        <div className=" flex flex-col">
          <img src={figma} alt="figma" className="w-32 h-32  ml-32 mb-7" />
          <h1 className="font-bold text-one text-2xl text-center">Figma</h1>
        </div>
        <div className=" flex flex-col gap-y-5">
          <FaGitAlt className="w-36 h-36 ml-28 mb-4 text-[#F34F29] " />
          <h1 className="font-bold text-one text-2xl text-center">Git</h1>
        </div>
        <div className=" flex flex-col gap-y-5">
          <BiLogoRedux className="w-36 h-36  text-[#764ABC] ml-24 mb-4" />
          <h1 className="font-bold text-one text-2xl text-center">Redux</h1>
        </div>
        <div className=" flex flex-col  gap-y-5">
          <BiLogoTrello className="w-32 h-32  bg-white ml-28 mb-7 text-[#3178C6]" />
          <h1 className="font-bold text-one text-2xl text-center">Trello</h1>
        </div>
      </Slider>
    </div>
  );
};

export default InfiniteCarousel;
