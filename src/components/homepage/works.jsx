import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work or Experince"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./gtu.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Gujarat Power Engineering and Research Institue</div>
							
							<div className="work-subtitle">
								Lecturer and Software supporter
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./atQor.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">atQor(formally bitscpae)</div>
							<div className="work-subtitle">
							Associate Software Engineer
							</div>
							<div className="work-duration">FEB 2023 - FEB 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
