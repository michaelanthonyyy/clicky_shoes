import React from "react";
import "./card.css";

function Card(props) {
    return (
        <div className='card click-item' onClick={() => props.clicked(props.id)}>
                                       
        
            <img src={props.image} alt={props.name}  />
        </div>
    )
}


export default Card;