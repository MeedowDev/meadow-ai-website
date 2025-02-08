import "./infobox.css";

export default function Infobox({ info, background_color="white" }) {
    const text = info.toUpperCase();
    const color = background_color === "white" ? "black" : "white";
	return (
		<div className="info-box" style={{backgroundColor: background_color}}>
			<p style={{color: color}}>{text}</p>
		</div>
	);
}
