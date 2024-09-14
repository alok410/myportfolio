import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

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
							
						Here are some things I’ve created in my effort to make a mark on the world
						</div>

						<div className="subtitle projects-subtitle">
						I've had the opportunity to work on a diverse array of projects over the years, and I'm truly proud of the progress I've made. Many of these projects are open-source, so you're welcome to dive into the code, explore, and contribute. If you have any suggestions for improvements or enhancements, I'd love to hear them. I believe that collaboration is a powerful way to both learn and advance, and I'm always eager to embrace new ideas and feedback
						</div>
					<div><hr style={{marginTop:"30px"}} /></div>
						<div className="projects-list">
							<AllProjects />
							<div style={{float:"right"}}>
								#Created By Alok Patel
								</div>
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
