import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./pion.png"
								alt="pion corp"
								className="work-image"
							/>
							<div className="work-title">Pion Corp</div>
							<div className="work-subtitle">
								Full Stack Developer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>
						<div className="work">
							<img
								src="./surmmerce.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Summerce Platform</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">2020 - 2022</div>
						</div>
						<div className="work">
							<img
								src="./golfio.png"
								alt="golfio"
								className="work-image"
							/>
							<div className="work-title">Golfio Inc</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">2015 - 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
