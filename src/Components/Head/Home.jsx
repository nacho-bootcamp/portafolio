import React from "react";
import logo from "../../assets/img/logotipo1.png";

function Home() {
  return (
    <header className="flex w-full items-center p-1 h-[10vh]">
      <div className="w-1/6 ">
        <img className="w-24 h-24" src={logo} alt="logotipo" />
      </div>
      <nav className="w-2/3 flex items-center justify-center gap-12 text-base ">
        <a href="" className="text-one font-sans">
          Inicio
        </a>
        <a href="" className="text-one">
          Habilidades
        </a>
        <a href="" className="text-one">
          Apps
        </a>
        <a href="" className="text-one">
          Contacto
        </a>
      </nav>
      <div className="flex justify-">
        <ul className="flex item-center gap-5">
          <li>GitHub</li>
          <li>Gmail</li>
          <li>Linkedin</li>
        </ul>
      </div>
    </header>
  );
}

export default Home;
