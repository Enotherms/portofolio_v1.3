import Home from "./pages/Home"
import About from "./pages/aboutMe"
import ParticlesBackground from "./components/ParticlesBackground"
import Skill from "./pages/Skill"
import { useEffect } from "react"

function App() {
	useEffect(() => {
		if ("scrollRestoration" in window.history) {
			window.history.scrollRestoration = "manual"
		}
	}, [])
	return (
		<div className="bg-[#282b30]">
			<ParticlesBackground />
			<Home />
			<About />
			<Skill />
		</div>
	)
}

export default App
