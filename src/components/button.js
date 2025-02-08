import React from "react";
import "./button.css";

export default function Button({ text, color, link, text_color = "black" }) {
    return (
        <div className="button">
            <a href={link} style={{ backgroundColor: color, color: text_color }} className="button">
                {text}
            </a>
        </div>
    );
}
