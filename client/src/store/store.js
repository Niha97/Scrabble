import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axiosMiddleware from "./middleware/axios-middleware";
import createReducer from "./reducer";

export default (initialState = {}) => {
  const middleware = [thunk, axiosMiddleware];
  let composeEnhancers = compose;
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  store.asyncReducers = {}

  store.injectReducer = async (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  }

  return store;
};
