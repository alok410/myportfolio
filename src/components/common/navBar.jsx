import React from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<header className="nav-container">
			<nav className="navbar">
				<div className="nav-background">
					<ul className="nav-list">
						<li className={active === "home" ? "nav-item active" : "nav-item"}>
							<Link to="/" aria-current={active === "home" ? "page" : undefined}>Home</Link>
						</li>
						<li className={active === "about" ? "nav-item active" : "nav-item"}>
							<Link to="/about" aria-current={active === "about" ? "page" : undefined}>About</Link>
						</li>
						<li className={active === "projects" ? "nav-item active" : "nav-item"}>
							<Link to="/projects" aria-current={active === "projects" ? "page" : undefined}>Projects</Link>
						</li>
						{/* <li className={active === "articles" ? "nav-item active" : "nav-item"}>
							<Link to="/articles" aria-current={active === "articles" ? "page" : undefined}>Articles</Link>
						</li> */}
						<li className={active === "contact" ? "nav-item active" : "nav-item"}>
							<Link to="/contact" aria-current={active === "contact" ? "page" : undefined}>Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
