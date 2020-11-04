import React from "react";
import Route from "react-router/lib/Route";
import Home from "./components/home";
import Scrabble from "./components/scrabble";
import IndexRoute from "react-router/lib/IndexRoute";

export const makeRoutes = (store = {}) => {
  // const { dispatch, getState, injectReducer } = store;



  // const Home = getBundle("home")();
  // const Scrabble = getBundle("scrabble")();


  // preload chunks on subsequent pages
  setChunks(bundleLoaders);

  return (
    <Route path="/" component={App}>
      <IndexRoute bundle="home" getComponent={Home}/>
      <Route bundle="scrabble" path="/scrabble" getComponent={Scrabble} />
    </Route>
  )
}