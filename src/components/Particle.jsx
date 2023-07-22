import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

function Particle() {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine)
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine)
		//await loadSlim(engine);
	}, [])

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container)
	}, [])

	return (
		<div className="z-0">
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					name: "Hollow Knight",
					interactivity: {
						events: {
							onHover: {
								enable: true,
								mode: "bubble",
							},
						},
						modes: {
							bubble: {
								distance: 40,
								duration: 2,
								opacity: 8,
								size: 6,
							},
                            connect: {
                                distance: 80,
                                links: {
                                    opacity: 0.5,
                                },
                                radius: 60,
                            },
							repulse: {
								distance: 200,
								duration: 1,
							},
						},
					},
					particles: {
						color: {
							value: "#7289DA",
						},
						links: {
							blink: false,
							color: "#7289DA",
							consent: false,
							distance: 50,
							enable: true,
							opacity: 1,
							width: 1,
						},
						move: {
							enable: true,
							outModes: "bounce",
							speed: 0.5,
						},
						number: {
							density: {
								enable: false,
							},
							limit: 400,
							value: 300,
						},
						opacity: {
							animation: {
								enable: true,
								speed: 2,
								sync: false,
							},
							value: {
								min: 0.05,
								max: 0.5,
							},
						},
						shape: {
							type: "circle",
						},
						size: {
							value: 2,
						},
					},
					polygon: {
						draw: {
							enable: true,
							lineColor: "rgba(255,255,255,0.2)",
							lineWidth: 0.5,
						},
						enable: true,
						move: {
							radius: 10,
						},
						inline: {
							arrangement: "equidistant",
						},
						scale: 2,
						type: "inline",
						url: "https://particles.js.org/images/hollowknight.svg",
					},
					retina_detect: true,
				}}
			/>
		</div>
	)
}

export default Particle
