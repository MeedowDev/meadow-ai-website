import React from "react";
import "./button.css";

export default function Button({ text, color, link }) {
	return (
		<div className="button">
			<a href={link} style={{ backgroundColor: color }} className="button">
				{text}
			</a>
		</div>
	);
}
