import * as types from "./home.actions.types";

export const initialState = {
  title: "Niharika Gandhari"
};

/* eslint-disable complexity */
export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HOME_REQUEST:
      return {
        ...state,
      };
    case types.GET_HOME_FAILURE:
      return {
        ...state,
        errorMsg: action.errorMsg,
      };
    case types.GET_HOME_SUCCESS:
      return {
        ...state,
        title: action.response.title,
      };
    default:
      return state;
  }
};
/* eslint-enable complexity */
