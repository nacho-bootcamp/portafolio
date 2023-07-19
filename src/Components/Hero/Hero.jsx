import React from "react";

function Hero() {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* foto */}
      <div className="bg-red-300 md:col-span-3">
        <h1>titulo</h1>
      </div>
      {/* info */}
      <div className=" md:col-span-5 flex items-center justify-center">
        <div>
          <h1 className="font-black text-4xl text-one">HOLA MI NOMBRE ES </h1>
          <h2 className="text-6xl text-two font-black">IGNACIO CARDOZO</h2>
          <h3 className="text-2xl text-one font-black">FullStack Developer</h3>
          <p className="text-lg py-28 text-one font-black">
            Soy un desarrollador FullStack apasionado con la programacion y
            tengo 2 años de experiencia en este increible mundo .
          </p>
          <div>
            <button className="bg-two text-white py-2 px-8 rounded-xl tetx-xl font-black">
              contactarme
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
