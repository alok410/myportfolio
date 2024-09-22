import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);
	const [loading, setLoading] = useState(true);
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
		setLoading(false);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}

			if (scroll > 300) {
				setShowScrollTop(true);
			} else {
				setShowScrollTop(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 9999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const splitTitleIntoWords = (title) => {
		return title.split(' ').map((word, index) => (
			<span key={index} className="title-word">
				{word.split('').map((letter, letterIndex) => (
					<span
						key={letterIndex}
						className="title-letter"
						style={{ animationDelay: `${(index * 0.5) + (letterIndex * 0.1)}s` }}
					>
						{letter}
					</span>
				))}
				{index < title.split(' ').length - 1 && <span>&nbsp;</span>}
			</span>
		));
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			{loading ? (
				<div className="loading-spinner">
					<div className="spinner"></div>
				</div>
			) : (
				<div className="page-content">
					<NavBar active="home" />
					<div className="content-wrapper">
						<div className="homepage-logo-container">
							<div style={logoStyle}>
								<Logo width={logoSize} link={false} />
							</div>
						</div>

						<div className="homepage-container">
							<div className="homepage-first-area">
								<div className="homepage-first-area-left-side">
									<div className="homepage-title">
										{splitTitleIntoWords(INFO.homepage.title)}
									</div>

									<div className="subtitle homepage-subtitle">
										{INFO.homepage.description}
									</div>
								</div>

								<div className="homepage-first-area-right-side">
									<div className="homepage-image-container">
										<div className="homepage-image-wrapper">
											<img
												src="homepage.jpg"
												alt="Homepage description"
												className="homepage-image"
												loading="lazy"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="homepage-after-title">
								<div className="homepage-works">
									<Works />
								</div>
							</div>
							<div className="homepage-socials" aria-label="Social Media Links">
								<a
									href={INFO.socials.twitter}
									target="_blank"
									rel="noreferrer"
									aria-label="Twitter"
								>
									<FontAwesomeIcon
										icon={faTwitter}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.github}
									target="_blank"
									rel="noreferrer"
									aria-label="GitHub"
								>
									<FontAwesomeIcon
										icon={faGithub}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.stackoverflow}
									target="_blank"
									rel="noreferrer"
									aria-label="Stack Overflow"
								>
									<FontAwesomeIcon
										icon={faStackOverflow}
										className="homepage-social-icon"
									/>
								</a>
								<a
									href={INFO.socials.instagram}
									target="_blank"
									rel="noreferrer"
									aria-label="Instagram"
								>
									<FontAwesomeIcon
										icon={faInstagram}
										className="homepage-social-icon"
									/>
								</a>
							</div>

							{/* New Download Resume Button */}
							<div className="download-resume-button btnstyle">
								<a
									href="https://drive.google.com/file/d/1UrwMG3jzoliMXSXsD8tzNdQj7OxAxUH4/view?usp=sharing"
									download="Resume.pdf"
									className="btn btn-outline-primary"
								>
									Download Resume
								</a>
							</div>
						</div>
					</div>

					<div className="page-footer">
						<Footer/>
					</div>
					{showScrollTop && (
						<button
							className="scroll-to-top"
							onClick={scrollToTop}
							aria-label="Scroll to Top"
						>
							<FontAwesomeIcon icon={faMailBulk} />
						</button>
					)}
				</div>
			)}
		</React.Fragment>
	);
};

Homepage.propTypes = {
	splitTitleIntoWords: PropTypes.func.isRequired,
};

export default Homepage;
