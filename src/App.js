import React, { Component } from 'react';
import logo from './logo.svg';
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

  checkForColor = total => {
    if(total > 0) {
      return '#00ff00';
    }
    else if (total < 0) {
      return '#ff0000';
    }
    else return '#000000'
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
      { src:"nerds.jpg", onClick:this.clickNerds },
      { src:"reesesPBC.jpg", onClick:this.clickReeses },
      { src:"twix.jpg", onClick:this.clickTwix },
      { src:"tootsieRoll.jpg", onClick:this.clickTootsie }
    ];

    const moneyOptions = [
      { src:"quarter.jpg", onClick:this.clickQuarter},
      { src:"dime.jpg", onClick:this.clickDime},
      { src:"nickel.png", onClick:this.clickNickel},
    ]

    return (
      <div className="App">
        <h1>The Price Is State!</h1>

        <Total total={this.state.total} color={this.state.color} />
        
        <Section title="Candy To Buy" options={candyOptions} />

        <Section title="Money To Spend" options={moneyOptions} />
      </div>
    );
  }
}

export default App;
