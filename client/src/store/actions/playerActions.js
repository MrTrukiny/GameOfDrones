import axios from "axios";
import { CREATE_PLAYER, SAVE_SCORE, RESET_PLAYERS } from "./actionTypes";

export const createPlayers = players => dispatch => {
  Object.keys(players).map(player => {
    return axios
      .post("http://localhost:5000/api/players", { name: players[player].name })
      .then(res => {
        const { _id: id } = res.data;
        const { identifier, name } = players[player];
        dispatch({
          type: CREATE_PLAYER,
          payload: { identifier, player: { id, name } }
        });
      })
      .catch(err => console.log(err));
  });
};

export const saveScore = winner => {
  return {
    type: SAVE_SCORE,
    payload: winner
  };
};

export const resetPlayers = () => {
  return {
    type: RESET_PLAYERS
  };
};
