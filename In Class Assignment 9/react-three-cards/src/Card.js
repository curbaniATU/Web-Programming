import React from "react";
import "./Card.css";

function Card({title, content, color, buttonColor}){
    return (
        <div className="card" style={{backgroundColor: color}}>
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={() => alert(title)} style={{backgroundColor: buttonColor}}>Click Me!</button>
        </div>
    )
}

export default Card;