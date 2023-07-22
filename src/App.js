import Home from "./pages/Home";
import About from "./pages/aboutMe";
import ParticlesBackground from "./components/ParticlesBackground";
import Skill from "./pages/Skill";


function App() {
  
  return (
    <div className="bg-[#282b30]">
      <ParticlesBackground />
      <Home />
      <About />
      <Skill />
    </div>
  );
}

export default App;
