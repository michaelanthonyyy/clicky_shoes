import React from "react";
import "./card.css";

function Card(props) {
    return (
        <div className="card click-item" onClick={() => props.selectCard(props.id)}>
            <img className="shoeCard" src={props.image} />
        </div>
    )
}


export default Card;