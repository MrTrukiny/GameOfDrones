import reducer from './gameReducer';
import * as actionTypes from '../actions/actionTypes';

describe('game reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      playing: false,
      round: 1,
      winner: {}
    });
  });
  it("should change playing and round when users play", () => {
    expect(reducer({
      playing: false,
      round: 1,
      winner: {}
    }, {
      type: actionTypes.START_GAME,
      playing: true
    })).toEqual({
      playing: true,
      round: 1,
      winner: {}
    })
  })
});

