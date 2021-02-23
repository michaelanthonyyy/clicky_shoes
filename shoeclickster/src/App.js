import React, { Component } from "react";
import Navbar from "./components/navbar/navbar.js";
import Jumbotron from "./components/jumbotron/jumbotron.js";
import Card from "./components/card/card.js";
import shoes from "./shoes.json";
import { render } from "react-dom";

class App extends Component {
    state = {
        score: 0,
    }

    render() {
        return (
            <div>
            <Navbar />
            
            </div>
        )
    }
};
export default App;