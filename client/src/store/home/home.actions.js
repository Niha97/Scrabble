import * as types from "./scrabble.actions.types";

export const getTitle = (input) => (dispatch) => {
  return dispatch({
    types: [
      types.GET_HOME_REQUEST,
      types.GET_HOME_SUCCESS,
      types.GET_HOME_FAILURE,
    ],
    request: (axios) => axios.get(`/words/${input}`),
  });
};
