import React, { Component } from 'react';
import './App.css';
import Total from './Total';
import Section from './Section';

class App extends Component {
  state = {
    total: 0,
    color: '#000000',
    moves: 0
  };

  componentDidUpdate() {
    if(this.state.total === 0 && this.state.moves > 0) {
      alert('You win!!!');
    }
    if(this.state.moves > 6) {
      alert('You lose!!!');
    }
  }

  convertToDollars = cash => {
    return `$${(cash / 100).toFixed(2)}`;
  }

  checkForColor(total)  {
    if(total > 0) {
      return '#00ff00';
    }
    else if (total < 0) {
      return '#ff0000';
    }
    else return '#000000'
  }

  handleClick = amount => {
    const newColor = this.checkForColor(this.state.total + amount);
    this.setState({
      total: this.state.total + amount,
      color: newColor,
      moves: this.state.moves + 1
    });
  }

  render() {
    const candyOptions = [
      { src:"nerds.jpg", onClick: this.handleClick, amount:-12 },
      { src:"reesesPBC.jpg", onClick:this.handleClick, amount:-29 },
      { src:"twix.jpg", onClick:this.handleClick, amount:-18 },
      { src:"tootsieRoll.jpg", onClick:this.handleClick, amount:-2 }
    ];

    const moneyOptions = [
      { src:"quarter.jpg", onClick:this.handleClick, padding:0, amount:25},
      { src:"dime.jpg", onClick:this.handleClick, padding:50, amount:10},
      { src:"nickel.png", onClick:this.handleClick, padding:20, amount:5},
    ]

    return (
      <div className="App">
        <h1>The Price Is State!</h1>

        <Total total={this.convertToDollars(this.state.total)} color={this.state.color} />

        <p>The game is simple; buy candy and pay for it.</p>
        <p>But you can only click each piece of candy once, and you can only use each coin once! Can you do it?</p>
        
        <Section title="Candy To Buy" options={candyOptions} />

        <Section title="Money To Spend" options={moneyOptions} />
      </div>
    );
  }
}

export default App;
