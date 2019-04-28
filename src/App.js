import React, { Component } from "react";
import GameCard from "./components/GameCard";
import heroes from "./heroes.json";

class App extends Component {
  state = {
	score: 0,
    heroes
  };

  shuffleCards = () => {
	let heroes = this.state.heroes;
    let i = heroes.length,
      ii = 0,
      temp;
    while (i--) {
      ii = Math.floor(Math.random() * (i + 1));
      temp = heroes[i];
      heroes[i] = heroes[ii];
      heroes[ii] = temp;
    }
	this.setState({heroes});
  }
  
  clickCard = (id) => {	
	let score = this.state.score;
	let heroes = this.state.heroes;
	for (let i=0;i<heroes.length;i++) {
		if (heroes[i].id === id) {
			if (heroes[i].clicked) {
				for (let h=0;h<heroes.length;h++) {
					heroes[h].clicked = false;
				}
				score = 0;
				alert("You lose!");
			} else {
				heroes[i].clicked = true;
				score++;
				if (score===heroes.length) {
					for (let h=0;h<heroes.length;h++) {
						heroes[h].clicked = false;
					}
					score = 0;
					alert("You win!");
				}
			}
		}
	}	  
	this.setState({score, heroes});
	this.shuffleCards();	  
  };


  render() {
    return (
		<div id="gamebox">
			<p>Score: {this.state.score}</p>
			<div className="wrapper">
			{this.state.heroes.map(hero => (
			  <GameCard
				clickCard={this.clickCard}
				id={hero.id}
				key={hero.id}
				name={hero.name}
				image={hero.image}
				powers={hero.powers}
			  />
			))}
			</div>
		</div>
    );
  }
}

export default App;
