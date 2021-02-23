import React, { Component } from "react";
import Wrapper from "./components/wrapper/wrapper.js"
import Jumbotron from "./components/jumbotron/jumbotron.js";
import Card from "./components/card/card.js";

import shoes from "./shoes.json";



function shuffle() {
    for (let i = shoes.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shoes[i], shoes[j]] = [shoes[j], shoes[i]];
    }
}


class App extends Component {
    state = {
        shoes,
        score: 0,
        highscore: 0,
        clickedCard: []
    };

    clicked = (id) => {
        let clickedCard = this.clickedCard.state;

        if (clickedCard.indexOf(id) === -1) {
            clickedCard.push(id);
            this.increaseScore();

            this.newShuffle();

        } else if (this.state.score === 14) {
            this.setState({
                score: 0,
                clickedCard: []
            });
        } else {
            this.setState({
                score: 0,
                clickedCard: []
            });
        };
    }


    increaseScore = () => {
        this.setState({ score: this.state.score + 1 })
    }

    newShuffle = () => {
        this.setState({ shoes: shuffle(shoes) })
    }

    render() {
        return (
            <div>

                <Jumbotron />
                <Wrapper>
                    {this.state.shoes.map(shoe => (
                        <Card
                            clicked={this.clicked}
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