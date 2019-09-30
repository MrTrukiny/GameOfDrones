import React from "react";
import classes from "./GameScore.module.css";

const GameScore = props => {
  return (
    <div className={classes.scoreboardContainer}>
      <div className={classes.scoreboard}>
        <div className={[classes.scoreElement, classes.playerScore].join(" ")}>
          <div className={classes.playerName}>{props.p1Name}</div>
          <div className={classes.score}>{props.p1Score}</div>
        </div>
        <div className={[classes.scoreElement, classes.roundInfo].join(" ")}>
          <div className={classes.roundInfo}>Round</div>
          <div className={classes.score}>{props.round}</div>
        </div>
        <div className={[classes.scoreElement, classes.playerScore].join(" ")}>
          <div className={classes.playerName}>{props.p2Name}</div>
          <div className={classes.score}>{props.p2Score}</div>
        </div>
      </div>
    </div>
  );
};

export default GameScore;
