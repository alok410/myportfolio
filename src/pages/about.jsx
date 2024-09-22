import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						
						<div className="about-main">
							<div className="  -right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
								<div style={{marginTop:"50px"}}>
									<h2>Expertise - Which makes world innovative:</h2>
									<div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
  <img
    style={{
      height: "80px",
      width: "80px",
      margin: "30px 60px 0 0",
      borderRadius: "50%", // Round shape
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // 3D shading effect
      transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition for hover animation
      cursor: "pointer", // Pointer cursor on hover
    }}
    src="../html.png"
    alt="HTML"
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.5)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    }}
  />
  <img
    style={{
      height: "80px",
      width: "80px",
      margin: "30px 60px 0 0",
      borderRadius: "50%",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s, box-shadow 0.3s",
		 
    }}
    src="../CSS.png"
    alt="CSS"
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.5)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    }}
  />
  <img
    style={{
      height: "80px",
      width: "80px",
      margin: "30px 60px 0 0",
      borderRadius: "50%",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s, box-shadow 0.3s",
		 
    }}
    src="../JavaScript.png"
    alt="JavaScript"
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.5)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    }}
  />
  <img
    style={{
      height: "80px",
      width: "80px",
      margin: "30px 60px 0 0",
      borderRadius: "50%",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s, box-shadow 0.3s",
		 
    }}
    src="../react.png"
    alt="React"
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.5)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    }}
  />
  <img
    style={{
      height: "80px",
      width: "80px",
      margin: "30px 60px 0 0",
      borderRadius: "50%",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s, box-shadow 0.3s",
		 
    }}
    src="../expressJS.png"
    alt="ExpressJS"
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.5)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    }}
  />
  <img
    style={{
      height: "80px",
      width: "80px",
      margin: "30px 60px 0 0",
      borderRadius: "50%",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s, box-shadow 0.3s",
		 
    }}
    src="../MongoDB.png"
    alt="MongoDB"
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.5)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    }}
  />
  <img
    style={{
      height: "80px",
      width: "80px",
      margin: "30px 60px 0 0",
      borderRadius: "50%",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s, box-shadow 0.3s",
		 
    }}
    src="../sql.png"
    alt="SQL"
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.5)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    }}
  />
</div>

								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
