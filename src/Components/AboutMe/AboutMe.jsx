import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import WhatsAppButton from "../whatsapp";
import AboutMy from "../../assets/img/aboutmy.jpeg";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8   py-24  ">
      <div className=" md:col-span-4">
        <div className="flex gap-2 items-center pl-[180px]">
          <h3 className="text-indigo-500 font-medium text-base">About Me</h3>
          <BsFillPersonFill className="text-indigo-500 " />
        </div>
        <div className="pl-[180px]">
          <h2 className="font-bold text-4xl pb-8">
            ¿Por que deberias
            <span className="text-orange-400"> contratarme </span> <br />
            para tu<span className="text-indigo-500"> empresa?</span>
          </h2>

          <p className="text-gray-400 font-black ">
            Soy una persona muy compremetida con lo que hace  <br />
            auto didacta siempre poniendo el 100% para poder mejorar cada dia
            y para entregar los tickets, <br />
            tambien soy amistoso y compañero dispuesto ayudar a mis colegas<br />
            en cualquier duda que tengan.
          </p>

          <WhatsAppButton />
        </div>
      </div>
      <div className=" md:col-span-4 flex justify-center items-center">
        <img
          className="h-[430px] w-[500px] rounded-lg shadow-2xl shadow-orange-500/50"
          src={AboutMy}
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutMe;
