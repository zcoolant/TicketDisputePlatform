import { FETCH_CASES, FETCH_CASE } from '../actions/index';

const INITIAL_STATE = { all: [], case: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_CASE:
      return { ...state, case: action.payload.data };
    case FETCH_CASES:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
