import AboutMe from "./Components/AboutMe/AboutMe";
import Formulario from "./Components/Formulario/Formulario";
import Habilidades from "./Components/Habilidades/Habilidades";
import Home from "./Components/Head/Home";
import Hero from "./Components/Hero/Hero";
import Aplicaciones from "./Components/MisAplicaciones/Aplicaciones";

function App() {
  return (
    <div className="w-[658px] sm:w-full">
      <Home />
      <Hero />
      <AboutMe />
      <Habilidades />
      <Aplicaciones />
      <Formulario />
    </div>
  );
}

export default App;
