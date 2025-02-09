// Landing.js
import React from "react";
import "./landing.css";
import Button from "./button";
import Infobox from "./infobox";
import tractorImage from "../assets/Picture3.jpg"; 
import image01 from "../assets/img-01.png";
import image02 from "../assets/img-02.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Landing = () => {
	function navigateTo(location) {
		window.location.href = `${location}`;
	}
	return (
		<section className="landing">
			<div className="landing-hero">
				<img className="hero-image" src={tractorImage} alt="tractor" />
				<div className="hero-text">
					<Infobox info="AI in Agriculture" background_color="white" />
					<h1>Revolutinizing Small Holder Agriculture</h1>
					<p>Transforming the future of farming</p>
					<Button text="Get Started" color="White" link="" />
				</div>
			</div>
			<div className="landing-information">
				<div className="landing-pre">
					<div className="contributors">
						<p>Join us to build this today</p>
						<AvatarGroup max={4} className="small-avatar-group">
							<Avatar alt="Remy Sharp" src={image01} className="small-avatar" />
							<Avatar alt="Travis Howard" src={image01} className="small-avatar" />
							<Avatar alt="Cindy Baker" src={image01} className="small-avatar" />
							<Avatar alt="Agnes Walker" src={image01} className="small-avatar" />
							<Avatar alt="Trevor Henderson" src={image01} className="small-avatar" />
						</AvatarGroup>
						<p>
							<a href="https://github.com/meedowdev">Visit our GitHub</a>
						</p>
					</div>
					<div>
						<div className="down" onClick={() => navigateTo("#info-card")}>
							<ArrowDownwardIcon />
						</div>
					</div>
					<div className="data-driven-agriculture"></div>
				</div>
				<div className="information-card" id="info-card">
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
								Using machine learning for data-driven crop cultivation allows farmers to optimize their yield by analyzing various factors such as soil quality, weather patterns, and crop health. This technology helps in making informed decisions, reducing waste, and increasing productivity.
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
