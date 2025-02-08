// Landing.js
import React from "react";
import "./landing.css";
import Button from "./button";
import tractorImage from "../assets/hero.png"; 

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

                {/* Data driven agriculture */}
			</div>
            <div className="landing-information">
                <div className="landing-pre">
                    <div className="contribute-to-project"></div>
                    <div className="down"></div>
                    <div className="data-driven-agriculture"></div>
                </div>
                <div className="information-card"></div>
            </div>
		</section>
	);
};

export default Landing;
