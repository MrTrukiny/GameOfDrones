import React, { Component } from "react";
import { connect } from "react-redux";
import { setWinner, changeRound } from "../../../store/actions/gameActions";
import { saveScore } from "../../../store/actions/playerActions";
import Aux from "../../../hoc/Aux";
import Rock from "../../../components/GameElements/Rock/Rock";
import Paper from "../../../components/GameElements/Paper/Paper";
import Scissors from "../../../components/GameElements/Scissors/Scissors";

const results = [["D", "P2", "P1"], ["P1", "D", "P2"], ["P2", "P1", "D"]];

export class MoveSelector extends Component {
  state = {
    whoMoves: 1,
    player1Move: 0,
    player2Move: 0
  };

  roundWinner = e => {
    const player2Move = e.target.id;
    const { player1Move } = this.state;
    const winner = results[Number(player1Move)][Number(player2Move)];
    this.props.saveScore(winner);
    if (this.props.player.players[winner].score === 2) {
      this.props.setWinner(this.props.player.players[winner]);
    }
  };

  playerMoveHandler = e => {
    const playerMove = e.target.id;
    if (this.state.whoMoves === 1) {
      this.setState(prevState => ({
        player1Move: playerMove,
        whoMoves: prevState.whoMoves + 1
      }));
    } else {
      this.setState({
        player2Move: playerMove,
        whoMoves: 1
      });
      this.props.changeRound();
      this.roundWinner(e);
    }
  };

  render() {
    const togglePlayer = this.state.whoMoves;
    const { players } = this.props.player;
    return (
      <Aux>
        <div>
          {togglePlayer === 1 ? (
            <h1>{players.P1.name}</h1>
          ) : (
            <h1>{players.P2.name}</h1>
          )}
          <h3>¡Selecciona tu Jugada!</h3>
        </div>
        <Rock clicked={this.playerMoveHandler} id={0} prueba={"rock"} />
        <Paper clicked={this.playerMoveHandler} id={1} />
        <Scissors clicked={this.playerMoveHandler} id={2} />
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  roundWinner: state.roundWinner,
  player: state.player
});

export default connect(
  mapStateToProps,
  { saveScore, setWinner, changeRound }
)(MoveSelector);
