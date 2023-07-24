import React, { useState } from "react";
import logo from "../../assets/img/logotipo1.png";
import { RiMenuAddFill, RiCloseFill } from "react-icons/ri";
import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";
import gmail from "../../assets/img/gmail.png";
function Home() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex w-full items-center justify-between xl:justify-start p-4 h-[10vh] z-50">
      <div className="xl:w-1/6 ">
        <img className="w-20 h-20 p-1" src={logo} alt="logotipo" />
      </div>
      <nav
        className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-12 text-base transition-all duration-500 z-50 `}
      >
        <a
          href=""
          className="text-one font-black hover:bg-tree px-4 py-1 rounded-[20px]"
        >
          Inicio
        </a>
        <a
          href=""
          className="text-one font-black text-base  hover:bg-tree px-4 py-1 rounded-[20px]"
        >
          Habilidades
        </a>
        <a
          href="Aplicaciones"
          className="text-one font-black text-base  hover:bg-tree px-4 py-1 rounded-[20px]"
        >
          Apps
        </a>
        <a
          href=""
          className="text-one font-black text-base  hover:bg-tree px-4 py-1 rounded-[20px]"
        >
          Contacto
        </a>
      </nav>
      <div className=" hidden z-50 xl:flex gap-x-5 pr-4 w-[150px]">
        <a href="Linkedin">
          <img src={linkedin} alt="" />
        </a>
        <a href="Gmail">
          <img src={gmail} alt="" />
        </a>
        <a href="Github">
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
