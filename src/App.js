import Home from "./pages/Home";
import About from "./pages/aboutMe";
import Particle from "./components/Particle";
import Skill from "./pages/Skill";


function App() {
  
  return (
    <div className="bg-[#282b30]">
      <Particle />
      <Home />
      <About />
      <Skill />
    </div>
  );
}

export default App;
