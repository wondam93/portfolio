import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {  useContext } from 'react';
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import { UserContext } from "../App";
import AllProjects from "../components/projects/allProjects";
import SEO from "../data/seo";
import INFO from "../data/user";
import EnINFO from "../data/enUser"
import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");
	const { lang, setLang } = useContext(UserContext);
	const [text, setText] = useState(INFO);
	useEffect(() => {
		if(!lang){
			setText(EnINFO)
		} else {
			setText(INFO)
		}
		setLang(lang)
	}, [lang]);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
						{text.project.title}
						</div>
						<div className="subtitle projects-subtitle">
						{text.project.description}
						</div>

						<div className="projects-list">
							<AllProjects projects={text.projects}/>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
