import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import { connect } from "react-redux";
import GameStarter from "./GameStarter/GameStarter";
import MoveSelector from "./MoveSelector/MoveSelector";
import GameScore from "../../components/GameElements/GameScore/GameScore";
import GameResult from "./GameResult/GameResult";

import classes from "./Game.module.css";

class Game extends Component {
  render() {
    const { playing, winner, round } = this.props.gameStatus;
    const {
      P1: { score: p1Score, name: p1Name },
      P2: { score: p2Score, name: p2Name }
    } = this.props.player.players;

    return (
      <Aux>
        {!playing && <GameStarter />}
        <div className={classes.Game}>
          <div className={classes.moveSelector}>
            {playing && !winner.name && <MoveSelector />}
          </div>
          {p1Name && p2Name && (
            <GameScore
              p1Name={p1Name}
              p1Score={p1Score}
              p2Name={p2Name}
              p2Score={p2Score}
              round={round}
            />
          )}
          {winner.name && <GameResult winner={winner} />}
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => ({
  gameStatus: state.gameStatus,
  player: state.player
});

export default connect(mapStateToProps)(Game);
