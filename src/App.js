import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { userInfo } from "os";

class App extends Component {
  state = {
    counter: null,
    RandomNumber: Math.floor(Math.random() * 10 + 1)
  };

  UserNumber = user => {
    this.setState({ counter: +user.target.value });
  };

  // correctNumber = () => {
  //if (this.state.counter === this.state.RandomNumber) {
  //} else {
  //alert("Try Agin");
  //}
  //};

  render() {
    let message = "";

    if (this.state.counter) {
      if (this.state.counter > this.state.RandomNumber) {
        message = "To High Try Lower";
      } else if (this.state.counter < this.state.RandomNumber) {
        message = "To Low Try Higher";
      } else {
        message = "Will Done, You Guessed Right";
      }
    }

    return (
      <header className="App-header">
        <h1>Number Guessing Game</h1>
        <h2>Guess a Number Between 1 - 10 </h2>

        <div class="content guess-controls row">
          <input
            onChange={this.UserNumber}
            type="number"
            id="guess"
            class="form-control input-lg col-xs-12"
            placeholder="Your best guess"
          />
        </div>

        <div>{message}</div>
      </header>
    );
  }
}

export default App;
