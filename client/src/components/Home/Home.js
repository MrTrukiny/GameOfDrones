import React from "react";
import { Link } from "react-router-dom";

import player from "../../assets/images/king.png";
import title from "../../assets/images/title.png";
import Rock from "../GameElements/Rock/Rock";
import Paper from "../GameElements/Paper/Paper";
import Scissors from "../GameElements/Scissors/Scissors";
import PlayButton from "../GameElements/PlayButton/PlayButton";

import classes from "./Home.module.css";

const Home = props => (
  <main className={classes.Home}>
    <div className={classes.container}>
      <img src={player} alt="Player" />
      <img src={title} alt="Title" />
    </div>
    <div className={classes.GameElements}>
      <Rock />
      <Paper />
      <Scissors />
    </div>
    <div className={classes.Link}>
      <Link to="/game">
        <PlayButton />
      </Link>
    </div>
  </main>
);

export default Home;
