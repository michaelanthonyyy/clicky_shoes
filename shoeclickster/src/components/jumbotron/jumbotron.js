import React from "react";
import "./jumbotron.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <h3 className="gameScore">Score: {props.score}</h3>
            <br />
            <br />
            <h1 className="title">Clicky Game!</h1>
            <h2 className="description">Click on an image to earn points, but don't click on any picture more than once!</h2>
        </div>
    );
}


export default Jumbotron;