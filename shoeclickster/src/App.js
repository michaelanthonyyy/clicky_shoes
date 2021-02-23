import React, { Component } from "react";
import Wrapper from "./components/wrapper/wrapper.js"
import Navbar from "./components/navbar/navbar.js";
import Jumbotron from "./components/jumbotron/jumbotron.js";
import Card from "./components/card/card.js";
import shoes from "./shoes.json";

class App extends Component {
    state = {
        shoes,
        score: 0,
    }

    render() {
        return (
            <div>
                {/* navbar */}
            <Jumbotron />
            <Wrapper>
            {this.state.shoes.map(shoe => (
                <Card
                id={shoe.id}
                name={shoe.name}
                image={shoe.image}
                />
            ))}

            </Wrapper>
            </div>
        )
    }
};
export default App;