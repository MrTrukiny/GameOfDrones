import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./GameResult.module.css";
import PlayButton from "../../../components/GameElements/PlayButton/PlayButton";
import { resetPlayers } from "../../../store/actions/playerActions";
import { restartGame } from "../../../store/actions/gameActions";

class GameResult extends Component {
  handleClick = () => {
    this.props.resetPlayers();
    this.props.restartGame();
  };
  render() {
    const { name: winnerName } = this.props.winner;
    return (
      <div className={classes.gameResult}>
        <div>Felicidades</div>
        <div>{winnerName}</div>
        <div>¡Has ganado!</div>
        <hr></hr>
        <div className={classes.playButton} onClick={this.handleClick}>
          <PlayButton />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  winner: state.gameStatus.winner
});

export default connect(
  mapStateToProps,
  { resetPlayers, restartGame }
)(GameResult);
