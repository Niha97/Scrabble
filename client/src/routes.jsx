import React from "react";
import { Switch, Route } from "react-router";
import App from "./components/app";
import Home from "./components/home/home";
import Blog from "./components/blog/blog";
import Scrabble from "./components/projects/scrabble/scrabble";

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route  path="/scrabble" component={Scrabble} />
        <Route  path="/blog" component={Blog} />
      </Switch>
    </App>
  )
}

export default Routes;
