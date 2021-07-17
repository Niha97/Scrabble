import { combineReducers } from "redux";
import home from "./home/home";

export default (asyncReducers) =>
  combineReducers(
    {
      home,
      ...asyncReducers
    }
  );
