import React from "react"

const aboutMe = () => {
	return (
		<div id="about" className="text-[#FFFFFF] grid place-content-center min-h-screen">
			<div className="z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
				<div className="mb-6 lg:mb-0">
					<img
						src={process.env.PUBLIC_URL + "/img/foto/Abiyyu.png"}
						alt=""
						className="mx-10 w-40 lg:w-[350px] rounded-full shadow-black"
					/>
				</div>
				<div className="text-center lg:text-left">
					<h1 className="text-2xl lg:text-3xl font-medium pb-3">
						Hello, I'm Abiyyu Dhiyaul Haq
					</h1>
					<div className="text-lg lg:text-xl text-[#C0C0C0] shadow-black">
						<p>
							I work as a Network Supervisor at Budi Luhur University ICT
							Laboratory.
						</p>
						<p>Expertise in network administration and web development.</p>
						<p>
							Committed to seeking opportunities to continuously learn and
							enhance skills.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default aboutMe
