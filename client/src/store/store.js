import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axiosMiddleware from "./middleware/axios-middleware";
import rootReducer from "./reducer";

export default (initialState = {}) => {
  const middleware = [thunk, axiosMiddleware];
  let composeEnhancers = compose;
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  return store;
};
