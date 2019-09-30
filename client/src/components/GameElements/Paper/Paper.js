import React from "react";
import paper from "../../../assets/images/paper.png";

import classes from "./Paper.module.css";

const Paper = props => (
  <img
    className={classes.Paper}
    src={paper}
    alt="Paper"
    onClick={props.clicked}
    id={props.id}
  />
);

export default Paper;
