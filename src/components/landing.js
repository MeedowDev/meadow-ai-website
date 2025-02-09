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
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Landing = () => {
	function navigateTo(location) {
		window.location.href = `${location}`;
	}
	const handleClick = () => {
		console.info("You clicked the Chip.");
	};
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
					<div className="install-app">
						<p>Install Meadow AI (alpha v***)</p>
						<Stack direction="row" spacing={1}>
							<Chip label="Android" onClick={handleClick} style={{ backgroundColor: '#333', color: 'white' }} />
							<Chip label="IOS" onClick={handleClick} style={{ backgroundColor: '#333', color: 'white' }} />
							<Chip label="Web" onClick={handleClick} style={{ backgroundColor: '#333', color: 'white' }} />
						</Stack>
					</div>
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
								Using machine learning for data-driven crop cultivation allows farmers to optimize their yield
								by analyzing various factors such as soil quality, weather patterns, and crop health. This
								technology helps in making informed decisions, reducing waste, and increasing productivity.
							</p>
							<ul className="features-list">
								<li>✔️ Increased crop yield</li>
								<li>✔️ Efficient resource utilization</li>
								<li>✔️ Improved crop quality</li>
								<li>✔️ Reduced environmental impact</li>
								<li>✔️ Enhanced decision making</li>
								<li>✔️ Cost savings</li>
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
