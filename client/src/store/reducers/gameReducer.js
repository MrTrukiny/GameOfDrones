import {
  START_GAME,
  SET_WINNER,
  RESTART_GAME,
  CHANGE_ROUND
} from "../actions/actionTypes";

const initialState = {
  playing: false,
  round: 1,
  winner: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        playing: true
      };
    case CHANGE_ROUND:
      return {
        ...state,
        round: state.round + 1
      };
    case SET_WINNER:
      return {
        ...state,
        winner: action.payload
      };
    case RESTART_GAME:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
}
