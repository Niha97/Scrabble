import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router/lib/Router";
import browserHistory from "react-router/lib/browserHistory";
// import match from "react-router/lib/match";
import { Provider } from "react-redux";

import { makeRoutes } from "./routes";
import store from "./store/store";
import * as serviceWorker from "./serviceWorker";

const routes = makeRoutes();

ReactDOM.render(
  <Provider store={store()}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
