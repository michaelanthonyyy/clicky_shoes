import React from "react";
import "./navbar.css";

function Navbar(props) {
    <div className = "navbar">
        <h2 className = "title">Clicky Game</h2>
        <h2 className = "instruct">Click an image to begin</h2>
        <h2 className = "gameScore">Score: {props.total}</h2>
    </div>
}


export default Navbar;