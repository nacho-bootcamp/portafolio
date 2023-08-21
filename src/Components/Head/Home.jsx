import React, { useState } from "react";

import { RiMenuAddFill, RiCloseFill } from "react-icons/ri";
import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";
import gmail from "../../assets/img/gmail.png";

function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex w-full items-center justify-between xl:justify-start py-3 px-28  h-[10vh]  bg-gradient-to-r from-orange-100 to-blue-200  border-r-8 border-t-4 border-l-8 border-white rounded-t-[50px]  ">
      <div className="xl:w-1/6 font-bold text-2xl ">
        <h2>
          Ignacio<span className="text-orange-500">Dev</span>
        </h2>
      </div>
      <nav
        className={`fixed w-[80%] md:w-[40%] xl:w-full h-full  ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-12 text-base transition-all duration-500 z-50 `}
      >
        <a
          href="#Inicio"
          className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-gray-400 font-medium hover:bg-orange-500 hover:text-white px-4 py-1 rounded-[20px]"
        >
          Inicio
        </a>
        <a
          href="#Habilidades"
          className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  text-gray-400 font-medium hover:bg-orange-500 hover:text-white px-4 py-1 rounded-[20px]"
        >
          Habilidades
        </a>
        <a
          href="#Aplicaciones"
          className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  text-gray-400 font-medium hover:bg-orange-500 hover:text-white  px-4 py-1 rounded-[20px]"
        >
          Apps
        </a>
        <a
          href="#Contacto"
          className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none  text-gray-400 font-medium hover:bg-orange-500 hover:text-white px-4 py-1 rounded-[20px]"
        >
          Contacto
        </a>
      </nav>
      <div className=" hidden z-50 xl:flex gap-x-5 pr-4 w-[150px]">
        <a
          href="https://www.linkedin.com/in/ignacio-leonel-cardozo-b34307244/"
          className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
          <img src={linkedin} alt="" />
        </a>
        <a
          href="mailto:ignaciocardozoxd12@gmail.com"
          className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
          <img src={gmail} alt="" />
        </a>
        <a
          href="https://github.com/nacho-bootcamp"
          className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
          <img src={github} alt="" />
        </a>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-2xl p-2 xl:hidden z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMenuAddFill />}
      </button>
    </header>
  );
}

export default Home;
