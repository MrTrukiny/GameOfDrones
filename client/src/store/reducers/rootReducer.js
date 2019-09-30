import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import errorReducer from "./errorReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
  player: playerReducer,
  error: errorReducer,
  gameStatus: gameReducer
});
