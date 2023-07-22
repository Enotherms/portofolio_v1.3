import React from "react"

const Skill = () => {
	return (
		<div id="Skill" className="text-white grid place-content-center min-h-screen">
			<div className="font-inter text-center z-10 p-10">
				<h1 className="text-3xl md:text-4xl pb-3">SKILLS</h1>
				<p className="text-xl md:text-2xl text-[#C0C0C0] pb-3">
					Programming languages and frameworks that I have experience with:
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center align-center my-[30px]">
					<div className="card rounded-md shadow-lg bg-[#1e2124] p-4 scale-90 hover:scale-105 ease-in-out duration-500">
						<img
							className="w-[150px] md:w-[150px] mx-auto"
							src={process.env.PUBLIC_URL + "/img/logo/javascript.png"}
							alt="javascript Icon"
						/>
					</div>
					<div className="card rounded-md shadow-lg bg-[#1e2124] p-4 scale-90 hover:scale-105 ease-in-out duration-500">
						<img
							className="w-[150px] md:w-[150px] mx-auto"
							src={process.env.PUBLIC_URL + "/img/logo/php.png"}
							alt="php Icon"
						/>
					</div>
					<div className="card rounded-md shadow-lg bg-[#1e2124] p-4 scale-90 hover:scale-105 ease-in-out duration-500">
						<img
							className="w-[150px] md:w-[150px] mx-auto"
							src={process.env.PUBLIC_URL + "/img/logo/java.png"}
							alt="java Icon"
						/>
					</div>
					<div className="card rounded-md shadow-lg bg-[#1e2124] p-4 scale-90 hover:scale-105 ease-in-out duration-500">
						<img
							className="w-[150px] md:w-[150px] mx-auto"
							src={process.env.PUBLIC_URL + "/img/logo/react.png"}
							alt="react Icon"
						/>
					</div>
					<div className="card rounded-md shadow-lg bg-[#1e2124] p-4 scale-90 hover:scale-105 ease-in-out duration-500">
						<img
							className="w-[150px] md:w-[150px] mx-auto"
							src={process.env.PUBLIC_URL + "/img/logo/bootstrap.png"}
							alt="bootstrap Icon"
						/>
					</div>
					<div className="card rounded-md shadow-lg bg-[#1e2124] p-4 scale-90 hover:scale-105 ease-in-out duration-500">
						<img
							className="w-[150px] md:w-[150px] mx-auto"
							src={process.env.PUBLIC_URL + "/img/logo/tailwindcss.png"}
							alt="tailwindcss Icon"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skill
