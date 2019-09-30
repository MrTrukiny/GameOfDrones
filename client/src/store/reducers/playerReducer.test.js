import reducer from "./playerReducer";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      players: {
        D: { score: 0 },
        P1: { score: 0 },
        P2: { score: 0 }
      }
    });
  });
});
