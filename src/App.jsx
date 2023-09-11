import AboutMe from "./Components/AboutMe/AboutMe";
import Formulario from "./Components/Formulario/Formulario";

import Home from "./Components/Head/Home";
import Hero from "./Components/Hero/Hero";
import Aplicaciones from "./Components/MisAplicaciones/Aplicaciones";
import Carusel from "./Components/Carusel/Carusel";

function App() {
  return (
    <div className="w-[658px] sm:w-full">
      <Home />
      <Hero />
      <AboutMe />
      <Aplicaciones />
      <Carusel />
      <Formulario />
    </div>
  );
}

export default App;
