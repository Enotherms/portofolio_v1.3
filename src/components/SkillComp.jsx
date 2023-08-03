import React from "react";

const SkillComp = ({ path }) => {
    return (
        <div className="card rounded-md shadow-lg bg-[#1e2124] p-4 scale-90 hover:scale-105 ease-in-out duration-500">
						<img
							className="w-[150px] md:w-[150px] mx-auto"
							src={process.env.PUBLIC_URL + path}
							alt="javascript Icon"
						/>
					</div>
    );
};

export default SkillComp;
