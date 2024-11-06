import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import figma from "../../assets/img/figma.png";
import spring from "../../assets/img/spring.png"
import spoon from "../../assets/img/spoon.png"
import docker from "../../assets/img/docker.png"
import odoo from "../../assets/img/odoo.png"
import java from "../../assets/img/java.png"
import python from "../../assets/img/python.png"
import aws from "../../assets/img/aws.png"
import oracle from "../../assets/img/oracle.jpg"


import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill, RiHtml5Fill } from "react-icons/ri";
import {
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoRedux,
  BiLogoTypescript,
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
          <div className="flex justify-center items-center">
            <img src={java} alt="Java" className="w-32 h-32" />
          </div>
          <h1 className="font-bold text-one text-2xl  mt-6 text-center ">
            Java
          </h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img src={python} alt="Python" className="w-32 h-32" />
          </div>
          <h1 className="font-bold text-one text-2xl mt-6 text-center ">
            Python
          </h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <RiJavascriptFill className="w-32 h-32 rounded-2xl  text-[#F7DF1E]" />
          </div>
          <h1 className="font-bold text-one text-2xl  mt-6 text-center">
            Javascript
          </h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <BiLogoTypescript className="w-32 h-32  text-[#3178C6]" />
          </div>
          <h1 className="font-bold text-one text-2xl mt-6 text-center">
            Typescript
          </h1>
        </div>
        <div className="text-[#E14E1D]">
          <div className="flex justify-center items-center">
            <RiHtml5Fill className="w-32 h-32" />
          </div>
          <h1 className="font-bold text-one text-2xl mt-6 text-center">HTML</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <BiLogoCss3 className="w-32 h-32 mb-4 text-[#3178C6]" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center ">CSS</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <BiLogoBootstrap className="w-32 h-32 rounded-lg mb-4 text-[#9013FE]" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center">Bootstrap</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <BiLogoTailwindCss className="w-36 h-36 text-[#38BDF8]" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center">Tailwind</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <BiLogoReact className="w-32 h-32  text-[#00D8FF]" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center">React</h1>
        </div>
        <div >
          <div className="flex justify-center items-center">
            <SiExpress className="w-32 h-32 text-black" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center">Express</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img src={spring} alt="Spring" className="w-28 h-28  mb-5" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center">Spring</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img src={spoon} alt="spoon" className=" h-32" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center">ETLs</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img src={odoo} alt="odoo" className="w-48  h-16  mt-6" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center mt-14">Odoo</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img src={docker} alt="docker" className=" h-32 mb-4" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center flex justify-center items-center">Docker</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <BiLogoMongodb className="w-36 h-36 text-[#01EC64]" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center">MongoDB</h1>
        </div>

        <div>
          <div className="flex justify-center items-center">
            <BiLogoPostgresql className="w-36 h-36 text-[#336791]" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center">
            PostgresSQL
          </h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img src={oracle} alt="oracle" className="w-36 h-36 text-[#336791]" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center">
            Oracle DB
          </h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img src={aws} alt="AWS" className="w-48 h-[153px]" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center">AWS</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <img src={figma} alt="figma" className="w-28 h-28 mb-10 flex justify-center items-center" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center">Figma</h1>
        </div>
        <div >
          <div className="flex justify-center items-center">
            <FaGitAlt className="w-36 h-36 mb-4 text-[#F34F29] " />
          </div>
          <h1 className="font-bold text-one text-2xl text-center">Git</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <BiLogoRedux className="w-36 h-36  text-[#764ABC] mb-4" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center">Redux</h1>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <BiLogoTrello className="w-32 h-32  bg-white mb-7 text-[#3178C6]" />
          </div>
          <h1 className="font-bold text-one text-2xl text-center">Trello</h1>
        </div>
      </Slider>
    </div>
  );
};

export default InfiniteCarousel;
