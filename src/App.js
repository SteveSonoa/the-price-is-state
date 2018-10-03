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

  clickQuarter = () => {
    const newColor = this.checkForColor(this.state.total + 25);
    this.setState({
      total: this.state.total + 25,
      color: newColor,
      moves: this.state.moves + 1
    });
  }

  clickDime = () => {
    const newColor = this.checkForColor(this.state.total + 10);
    this.setState({
      total: this.state.total + 10,
      color: newColor,
      moves: this.state.moves + 1
    });
  }

  clickNickel = () => {
    const newColor = this.checkForColor(this.state.total + 5);
    this.setState({
      total: this.state.total + 5,
      color: newColor,
      moves: this.state.moves + 1
    });
  }

  clickNerds = () => {
    const newColor = this.checkForColor(this.state.total - 12);
    this.setState({
      total: this.state.total - 12,
      color: newColor,
      moves: this.state.moves + 1
    });
  }

  clickTwix = () => {
    const newColor = this.checkForColor(this.state.total - 18);
    this.setState({
      total: this.state.total - 18,
      color: newColor,
      moves: this.state.moves + 1
    });
  }

  clickReeses = () => {
    const newColor = this.checkForColor(this.state.total - 29);
    this.setState({
      total: this.state.total - 29,
      color: newColor,
      moves: this.state.moves + 1
    });
  }

  clickTootsie = () => {
    const newColor = this.checkForColor(this.state.total - 2);
    this.setState({
      total: this.state.total - 2,
      color: newColor,
      moves: this.state.moves + 1
    });
  }

  render() {
    const candyOptions = [
      { src:"nerds.jpg", onClick: this.clickNerds, amount:-12 },
      { src:"reesesPBC.jpg", onClick:this.clickReeses, amount:-29 },
      { src:"twix.jpg", onClick:this.clickTwix, amount:-18 },
      { src:"tootsieRoll.jpg", onClick:this.clickTootsie, amount:-2 }
    ];

    const moneyOptions = [
      { src:"quarter.jpg", onClick:this.clickQuarter, padding:0, amount:25},
      { src:"dime.jpg", onClick:this.clickDime, padding:50, amount:10},
      { src:"nickel.png", onClick:this.clickNickel, padding:20, amount:5},
    ]

    return (
      <div className="App">
        <h1>The Price Is State!</h1>

        <Total total={this.convertToDollars(this.state.total)} color={this.state.color} />
        
        <Section title="Candy To Buy" options={candyOptions} />

        <Section title="Money To Spend" options={moneyOptions} />
      </div>
    );
  }
}

export default App;
