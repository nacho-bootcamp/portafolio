import React from "react";
import logo from "../../assets/img/logotipo1.png";

function Home() {
  return (
    <header className="flex w-full items-center p-4">
      <div className="w-1/6">
        <img className="w-110 h-120" src={logo} alt="logotipo" />
      </div>
      <nav className="flex-1 flex items-center justify-center gap-10">
        <a href="" className="text-one">
          Inico
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
      <ul className="flex item-center gap-4 p-4 bg-green-600 ">
        <li>GitHub</li>
        <li>Gmail</li>
        <li>Linkedin</li>
      </ul>
    </header>
  );
}

export default Home;
