// Landing.js
import React from "react";
import "./landing.css";
import Button from "./button";
import tractorImage from "../assets/hero.png"; 
import image01 from "../assets/img-01.png";
import image02 from "../assets/img-02.png";

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
				<div className="information-card">
					<div className="content-wrapper">
						<div className="image-container">
							<img src={image02} alt="Farmer with oranges" />
						</div>
						<div className="text-container">
							<div className="small-image">
								<img src={image01} alt="Gardening" />
							</div>
							<h2>
								Introducing <span className="highlight-green">Data Driven</span> agriculture.
							</h2>
							<p>
								Greetings from Dosner Organic Farms. We distribute only organic herbs and produce directly to
								consumers.
							</p>
							<ul className="features-list">
								<li>✔️ Gourmet Mushrooms</li>
								<li>✔️ Natural Healthy Products</li>
								<li>✔️ Lavender Farming</li>
								<li>✔️ Best Quality Standards</li>
								<li>✔️ Fertilizer Distribution</li>
								<li>✔️ Organic Fertilizer</li>
							</ul>
							<Button text="Know More" color="#5B8C51" link="" text_color="white"></Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;
