import * as types from "./scrabble.actions.types";

export const initialState = {
  words: [],
};

/* eslint-disable complexity */
export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SCRABBLE_WORDS_REQUEST:
      return {
        ...state,
      };
    case types.GET_SCRABBLE_WORDS_FAILURE:
      return {
        ...state,
        errorMsg: action.errorMsg,
      };
    case types.GET_SCRABBLE_WORDS_SUCCESS:
      return {
        ...state,
        words: action.response.data,
      };
    default:
      return state;
  }
};
/* eslint-enable complexity */
