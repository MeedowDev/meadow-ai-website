// Landing.js
import React from "react";
import "./landing.css";
import Button from "./button";
import tractorImage from "../public/hero.png"; 
import mushroomsImage from "../public/meadow-logo-variant-01.png"; 
import beetImage from "../public/meadow-logo-variant-01.png"; 
import fertilizerImage from "../public/meadow-logo-variant-01.png"; 

const Landing = () => {
	return (
		<section className="landing">
			<div className="landing-hero">
				<img className="hero-image" src={tractorImage} alt="tractor" />
				<div className="hero-text">
					<h1>Revolutinizing Small Holder Agriculture</h1>
					<p>Transforming the future of farming</p>
					<Button text="Get Started" color="White" link=""></Button>
				</div>
			</div>
		</section>
	);
};

export default Landing;
