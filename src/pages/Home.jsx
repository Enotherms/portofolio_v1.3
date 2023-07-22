import React from "react"
import Contact from "../components/Contact"
import Typed from "react-typed"

const Home = () => {
	return (
		<div id="home" className="text-white grid place-content-center min-h-screen">
			<div className="font-inter z-10 text-center">
				<h1 className="text-3xl md:text-4xl">
					<Typed strings={["ABIYYU DHIYAUL HAQ"]} startDelay={1100} typeSpeed={75} />
				</h1>
				<p className="text-xl md:text-2xl py-3">
					Find out more about me and feel free to connect with me here:
				</p>
				<Contact />
			</div>
		</div>
	)
}

export default Home
