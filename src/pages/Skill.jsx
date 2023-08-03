import React from "react"
import SkillComp from "../components/SkillComp"

const Skill = () => {
	return (
		<div id="Skill" className="text-white grid place-content-center min-h-screen">
			<div className="font-inter text-center z-10 p-10">
				<h1 className="text-3xl md:text-4xl pb-3">SKILLS</h1>
				<p className="text-xl md:text-2xl text-[#C0C0C0] pb-3">
					Programming languages and frameworks that I have experience with:
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center align-center my-[30px]">
					<SkillComp path={"/img/logo/javascript.png"}/>
					<SkillComp path={"/img/logo/php.png"}/>
					<SkillComp path={"/img/logo/java.png"}/>
					<SkillComp path={"/img/logo/react.png"}/>
					<SkillComp path={"/img/logo/bootstrap.png"}/>
					<SkillComp path={"/img/logo/tailwindcss.png"}/>
				</div>
			</div>
		</div>
	)
}

export default Skill
