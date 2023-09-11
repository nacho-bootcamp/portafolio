import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import javascript from "../../assets/img/js.png";
import javaIcon from "../../assets/img/javaIcon.png";
import typescript from "../../assets/img/typescript.png";
import bootstrap from "../../assets/img/bootstrap.png";
import html from "../../assets/img/html-5.png";
import css from "../../assets/img/css.png";
import express from "../../assets/img/express.png";
import react from "../../assets/img/reactIcono.png";
import figma from "../../assets/img/figma.png";
import git from "../../assets/img/git.png";
import trello from "../../assets/img/trello.png";
import { SiNestjs } from "react-icons/si";
import {
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoRedux,
  BiLogoAngular,
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
    <div className="w-3/4 mx-auto my-20 pl-5 ">
      <h1 className="text-center text-5xl mb-14 font-bold">Mis Tecnologias</h1>
      <Slider {...settings} className="custom-carousel">
        <div>
          <img src={typescript} alt="Typescript" className="w-32 h-32" />
          <h1 className="font-bold text-one text-2xl">Typescript</h1>
        </div>
        <div>
          <img src={javaIcon} alt="java" className="w-36 h-36" />
          <h1 className="font-bold text-one text-2xl ">Java</h1>
        </div>
        <div>
          <img src={javascript} alt="js" className="w-36 h-36 rounded-3xl" />
          <h1 className="font-bold text-one text-2xl ">Javascript</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img src={html} alt="html" className="w-36 h-36 rounded-lg" />
          <h1 className="font-bold text-one text-2xl">HTML</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img src={css} alt="css" className="w-36 h-36 rounded-lg" />
          <h1 className="font-bold text-one text-2xl">CSS</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img
            src={bootstrap}
            alt="bootstrap"
            className="w-36 h-36 rounded-lg"
          />
          <h1 className="font-bold text-one text-2xl">Bootstrap</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5 ">
          <BiLogoTailwindCss className="w-36 h-36 text-[#38BDF8]" />
          <h1 className="font-bold text-one text-2xl">Tailwind</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img src={express} alt="express" className="w-36 h-36  rounded-lg" />
          <h1 className="font-bold text-one text-2xl">Express</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img src={react} alt="react" className="w-36 h-36  rounded-lg" />
          <h1 className="font-bold text-one text-2xl">React</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <BiLogoAngular className="w-36 h-36  rounded-lg text-[#E0234E]" />
          <h1 className="font-bold text-one text-2xl">Angular</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <SiNestjs className="w-36 h-36  rounded-lg text-[#E0234E]" />
          <h1 className="font-bold text-one text-2xl">NestJS</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <BiLogoMongodb className="w-36 h-36  rounded-lg text-[#01EC64]" />
          <h1 className="font-bold text-one text-2xl">MongoDB</h1>
        </div>

        <div className=" flex flex-col items-center justify-center gap-y-5">
          <BiLogoPostgresql className="w-36 h-36  rounded-lg text-[#336791]" />
          <h1 className="font-bold text-one text-2xl">PostgresSQL</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img src={figma} alt="figma" className="w-32 h-32 rounded-lg" />
          <h1 className="font-bold text-one text-2xl">Figma</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img src={git} alt="figma" className="w-36 h-36  rounded-lg" />
          <h1 className="font-bold text-one text-2xl">Git</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <BiLogoRedux className="w-36 h-36  rounded-lg text-[#764ABC]" />
          <h1 className="font-bold text-one text-2xl">Redux</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img
            src={trello}
            alt="figma"
            className="w-40 h-40 rounded-lg bg-white"
          />
          <h1 className="font-bold text-one text-2xl">Trello</h1>
        </div>
      </Slider>
    </div>
  );
};

export default InfiniteCarousel;
