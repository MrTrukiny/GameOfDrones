import {
  CREATE_PLAYER,
  SAVE_SCORE,
  RESET_PLAYERS
} from "../actions/actionTypes";

const initialState = {
  players: {
    D: { score: 0 },
    P1: { score: 0 },
    P2: { score: 0 }
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_PLAYER:
      return {
        ...state,
        players: {
          ...state.players,
          [action.payload.identifier]: {
            ...initialState.players[action.payload.identifier],
            ...action.payload.player
          }
        }
      };
    case SAVE_SCORE:
      return {
        ...state,
        players: {
          ...state.players,
          [action.payload]: {
            ...state.players[action.payload],
            score: state.players[action.payload].score
              ? state.players[action.payload].score + 1
              : 1
          }
        }
      };
    case RESET_PLAYERS:
      return {
        ...state,
        players: initialState.players,
        playing: false
      };
    default:
      return state;
  }
}
