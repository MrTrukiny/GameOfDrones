import React from "react";
import rock from "../../../assets/images/rock.png";

import classes from "./Rock.module.css";

const Rock = props => (
  <img
    className={classes.Rock}
    src={rock}
    alt="Rock"
    onClick={props.clicked}
    id={props.id}
  />
);

export default Rock;
