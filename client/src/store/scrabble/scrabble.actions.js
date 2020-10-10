import * as types from "./scrabble.actions.types";

export const getWords = (input) => dispatch => {
  return dispatch({
    types: [
      types.GET_SCRABBLE_WORDS_REQUEST,
      types.GET_SCRABBLE_WORDS_SUCCESS,
      types.GET_SCRABBLE_WORDS_FAILURE,
    ],
    request: (axios) => axios.get(`/words/${input}`)
  });
};
