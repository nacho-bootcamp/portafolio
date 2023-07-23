import Habilidades from "./Components/Habilidades/Habilidades";
import Home from "./Components/Head/Home";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div className="w-[658px] sm:w-full">
      <Home />
      <Hero />
      <Habilidades />
    </div>
  );
}

export default App;
