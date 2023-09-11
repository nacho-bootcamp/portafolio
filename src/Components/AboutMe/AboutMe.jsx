import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import WhatsAppButton from "../whatsapp";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 pt-24 ">
      <div className=" md:col-span-4 ">
        <div className="flex gap-2 items-center pl-[180px]">
          <h3 className="text-indigo-500 font-medium text-lg">About Me</h3>
          <BsFillPersonFill className="text-indigo-500 " />
        </div>
        <div className="pl-[180px]">
          <h2 className="font-bold text-3xl pb-8">
            ¿Por que deberias
            <span className="text-orange-400"> contratarme </span> <br />
            para tu<span className="text-indigo-500"> empresa?</span>
          </h2>

          <p className="text-gray-400 font-black ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Similique obcaecati perspiciatis assumenda hic molestiae quisquam
            excepturi, <br />
            odio doloremque consequatur, incidunt, voluptatem earum veritatis
            repellat <br />
            dicta vel non eius iusto! Aliquam.
          </p>

          <WhatsAppButton />
        </div>
      </div>
      <div className=" md:col-span-4 flex items-center justify-center"></div>
    </div>
  );
};

export default AboutMe;
