import React, { Component } from "react";
import Wrapper from "./components/wrapper/wrapper.js"
import Jumbotron from "./components/jumbotron/jumbotron.js";
import Card from "./components/card/card.js";
import shoes from "./shoes.json";



function shuffle(shoes) {

    for (let i = shoes.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = shoes[i];
        shoes[i] = shoes[j];
        shoes[j] = temp;
    }
    return shoes;
}


class App extends Component {
    state = {
        shoes,
        score: 0,
        clickedCard: [],
        alert: "Click on an image to earn points, but don't click on any picture more than once!"
    };

    clicked = id => {

        let clickedCard = this.state.clickedCard;
        let score = this.state.score;

        if (clickedCard.indexOf(id) === -1) {
          clickedCard.push(id);
          console.log(clickedCard);
          this.increaseScore();
          this.newShuffle();
          this.setState({
            alert:"Click on an image to earn points, but don't click on any picture more than once!"
          })
        } else if (score === 15) {
          this.setState({
            score: 0,
            alert: "You Win!"
          });
          
        } else {
          this.setState({
            score: 0,
            clickedCard: [],
            alert: "You lose. Click on a shoe to try again"
          });
        }

      };


    increaseScore = () => {
        this.setState({ score: this.state.score + 1 })
    }

    newShuffle = () => {
        this.setState({ shoes: shuffle(this.state.shoes) })
    }

    render() {
        return (
            <div>
                <Jumbotron
                  alert={this.state.alert}
                  score={this.state.score}
                />
                <Wrapper>
                    {this.state.shoes.map(shoe => (
                        <Card
                            key={shoe.id}
                            id={shoe.id}
                            name={shoe.name}
                            image={shoe.image}
                            clicked={this.clicked}
                        />
                    ))}

                </Wrapper>
            </div>
        )
    }
};
export default App;