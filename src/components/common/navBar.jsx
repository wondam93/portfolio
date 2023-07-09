import React from "react";
import { Link } from "react-router-dom";
import {  useContext } from 'react';
import "./styles/navBar.css";
import { UserContext } from "../../App";

const NavBar = (props) => {
	const { active } = props;
	const { lang, setLang } = useContext(UserContext);
	const handleToggle = () => {
		setLang(!lang)
	}
	const style = {
		on: {
			color: "black",
			border: "1px solid rgb(226, 226, 226)",
			borderRadius: "10px",
		},
		off: {
			color: "black",
			border: "1px solid rgb(226, 226, 226)",
			borderRadius: "10px",
		}
	  };
	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">Articles</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
							<li>
								<button onClick={handleToggle} style={lang ? style.on : style.off}>{lang ? 'Ko' : 'En'}</button>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
