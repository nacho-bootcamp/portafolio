import React from "react";
import javascript from "../../assets/img/js.png";
import javaIcon from "../../assets/img/javaIcon.png";
import bootstrap from "../../assets/img/bootstrap.png";
import html from "../../assets/img/html-5.png";
import css from "../../assets/img/css.png";
import express from "../../assets/img/express.png";
import react from "../../assets/img/reactIcono.png";
import figma from "../../assets/img/figma.png";
import git from "../../assets/img/git.png";
import trello from "../../assets/img/trello.png";
import {
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoRedux,
} from "react-icons/bi";

const Habilidades = () => {
  return (
    <div
      id="Habilidades"
      className=" bg-gray-200 p-8 flex flex-col items-center justify-center gap-8"
    >
      <h1 className="text-center font-semibold text-5xl text-one">
        Habilidades <span className="text-two">Tecnicas</span>
      </h1>
      <h2 className="text-one font-bold text-3xl">Programación</h2>
      <div className="inline-flex justify-center flex-wrap gap-y-10 gap-x-32 ">
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img src={javaIcon} alt="java" className="w-44 h-44" />
          <h1 className="font-bold text-one text-2xl">Java</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img src={javascript} alt="js" className="w-40 h-40 rounded-3xl" />
          <h1 className="font-bold text-one text-2xl ">Javascript</h1>
        </div>
      </div>
      <h2 className="text-one font-bold text-3xl">Diseño Web</h2>
      <div className="inline-flex justify-center flex-wrap gap-x-32 gap-y-10 ">
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img src={html} alt="html" className="w-40 h-40 rounded-lg" />
          <h1 className="font-bold text-one text-2xl">HTML</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img src={css} alt="css" className="w-40 h-40 rounded-lg" />
          <h1 className="font-bold text-one text-2xl">CSS</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img
            src={bootstrap}
            alt="bootstrap"
            className="w-40 h-40 rounded-lg"
          />
          <h1 className="font-bold text-one text-2xl">Bootstrap</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5 ">
          <BiLogoTailwindCss className="w-40 h-40 text-[#38BDF8]" />
          <h1 className="font-bold text-one text-2xl">Tailwind</h1>
        </div>
      </div>
      <h2 className="text-one font-bold text-3xl">Frameworks</h2>
      <div className="inline-flex justify-center flex-wrap  gap-x-32 gap-y-10">
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img src={express} alt="express" className="w-40 h-40 rounded-lg" />
          <h1 className="font-bold text-one text-2xl">Express</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img src={react} alt="react" className="w-40 h-40 rounded-lg" />
          <h1 className="font-bold text-one text-2xl">React</h1>
        </div>
      </div>
      <h2 className="text-one font-bold text-3xl">Base de Datos</h2>
      <div className="inline-flex justify-center flex-wrap gap-x-32 gap-y-10 ">
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <BiLogoMongodb className="w-40 h-40 rounded-lg text-[#01EC64]" />
          <h1 className="font-bold text-one text-2xl">MongoDB</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <BiLogoPostgresql className="w-40 h-40 rounded-lg text-[#336791]" />
          <h1 className="font-bold text-one text-2xl">PostgresSQL</h1>
        </div>
      </div>
      <h2 className="text-one font-bold text-3xl">Diseño Grafico</h2>
      <div className="inline-flex justify-center flex-wrap gap-x-32 gap-y-10">
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img src={figma} alt="figma" className="w-32 h-32 rounded-lg" />
          <h1 className="font-bold text-one text-2xl">Figma</h1>
        </div>
      </div>
      <h2 className="text-one font-bold text-3xl">Herramientas</h2>
      <div className="inline-flex justify-center flex-wrap gap-x-32 gap-y-10 ">
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <img src={git} alt="figma" className="w-40 h-40 rounded-lg" />
          <h1 className="font-bold text-one text-2xl">Git</h1>
        </div>
        <div className=" flex flex-col items-center justify-center gap-y-5">
          <BiLogoRedux className="w-40 h-40 rounded-lg text-[#764ABC]" />
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
      </div>
    </div>
  );
};

export default Habilidades;
