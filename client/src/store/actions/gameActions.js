import {
  START_GAME,
  SET_WINNER,
  RESTART_GAME,
  CHANGE_ROUND
} from "./actionTypes";

export const startGame = () => {
  return {
    type: START_GAME
  };
};

export const changeRound = () => {
  return {
    type: CHANGE_ROUND
  };
};

export const setWinner = winner => {
  return {
    type: SET_WINNER,
    payload: winner
  };
};

export const restartGame = () => {
  return {
    type: RESTART_GAME
  };
};
