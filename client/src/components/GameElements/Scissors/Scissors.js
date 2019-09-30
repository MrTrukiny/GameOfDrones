import React from "react";
import scissors from "../../../assets/images/scissors.png";

import classes from "./Scissors.module.css";

const Scissors = props => (
  <img
    className={classes.Scissors}
    src={scissors}
    alt="Scissors"
    onClick={props.clicked}
    id={props.id}
  />
);

export default Scissors;
