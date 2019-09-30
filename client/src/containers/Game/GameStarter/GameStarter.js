import React, { Component } from "react";

import { connect } from "react-redux";
import { createPlayers } from "../../../store/actions/playerActions";
import { startGame } from "../../../store/actions/gameActions";

import classes from "./GameStarter.module.css"

class GameStarter extends Component {
  state = {
    player1: "",
    player2: "",
  };

  inputNameChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();

    // Create both Players in DB and set them to state
    const newPlayers = {
      player1: {
        identifier: 'P1',
        name: this.state.player1
      },
      player2: {
        identifier: 'P2',
        name: this.state.player2
      }
    }
    // Atempt to register
    this.props.createPlayers(newPlayers);

    // Start Game
    this.props.startGame();
  };

  render() {
    return (
      <div className={classes.GameStarter}>
        <h1>¡Bienvenidos a Game of Drones!</h1>
        <h2>Ingresen los nombres de sus Casas</h2>
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            name="player1"
            id="player1"
            placeholder="Jugador 1"
            onChange={this.inputNameChangeHandler}
          /><br/>
          <input
            type="text"
            name="player2"
            id="player2"
            placeholder="Jugador 2"
            onChange={this.inputNameChangeHandler}
          /><br/>
            <button>¡Iniciar!</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players
});

export default connect(
  mapStateToProps,
  { createPlayers, startGame }
)(GameStarter);
