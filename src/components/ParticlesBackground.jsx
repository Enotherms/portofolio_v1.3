import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
	const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<div className="z-0">
			<Particles
				params={particlesConfig}
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
			/>
		</div>
	);
}

export default ParticlesBackground;
