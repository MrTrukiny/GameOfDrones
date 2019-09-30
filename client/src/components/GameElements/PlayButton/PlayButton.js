import React from "react";

import playButton from "../../../assets/images/play_button.png";

import classes from "./PlayButton.module.css";

const PlayButton = () => (
  <img className={classes.PlayButton} src={playButton} alt="Play" />
);

export default PlayButton;
