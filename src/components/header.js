import './header.css';
import Button from './button';

export default function Header() {
    return (
		<div className="header">
			<div className="header-blocks">
				<ul className="header-menu">
					<li>Home</li>
					<li>About</li>
					<li>Services</li>
					<li>Contact</li>
				</ul>
			</div>
			<div className="header-blocks">
				{/* <img className="logo" src={require("../assets/meadow-logo-variant-01.png")} alt="logo" /> */}

				<p className="logo-name">Meadow AI</p>
			</div>
			<div className="header-blocks contact-us">
				<div>
					<img className="telephone-icon" src={require("../assets/telephone.png")} alt="phone" />
				</div>
				<div className="contact-info">
					<li>Call us now</li>
					<li>(+254)7** ******</li>
				</div>
				<Button text="Get In Touch" color="#EDDD5E" link="https://github.com/VictorCodebase" />
				{/* <button className="header-cta">Get In Touch</button> */}
			</div>
		</div>
    );
}