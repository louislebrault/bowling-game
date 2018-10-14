import React, { Component } from 'react';
import './App.scss';
import ScoreBoard from './Views/ScoreBoard'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rolls: []
    }
  }

  roll(pins) {
    this.setState((state) => ({
      rolls: [...this.state.rolls, pins]
    }))
  }

  randomRoll() {
    return this.roll(Math.floor(Math.random() * 10))
  }

  score(rolls) {
    return 0;
  }
  
  render() {
    return (
      <div className="App">
        <ScoreBoard rolls={this.state.rolls}></ScoreBoard>
        <button onClick={this.randomRoll.bind(this)}>Lancer une boule</button>
      </div>
    );
  }
}

export default App;
