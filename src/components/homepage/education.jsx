import React from "react";
import { faBriefcase, faSchool } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Education = ({education}) => {
	return (
		<div className="works">
			<Card
				icon={faSchool}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./suwon.png"
								alt="suwon"
								className="work-image"
							/>
							<div className="work-title">Suwon University</div>
							<div className="work-subtitle">
								Information Media
							</div>
							<div className="work-duration">2012-2017</div>
						</div>
						<div className="work">
							<img
								src="./ucn.png"
								alt="ucn"
								className="work-image"
							/>
							<div className="work-title">University College of Northern Denmark</div>
							<div className="work-subtitle">
                                Computer Science, Multimedia Design.
							</div>
							<div className="work-duration">2014-2015</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Education;
