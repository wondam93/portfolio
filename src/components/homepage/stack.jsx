import React from "react";
import "./styles/stack.css";

const Stack = (props) => {
	const { title, description,maturity } = props;

	return (

			<div className="homepage-stack">
				<div className="homepage-stack-content">
					<div className="homepage-stack-date">
					 {maturity}
					</div>
					<div className="homepage-stack-title">{title}</div>
					<div className="homepage-stack-description">
						{description}
					</div>
				</div>
			</div>

	);
};

export default Stack;
