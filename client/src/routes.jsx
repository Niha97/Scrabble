import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router";
import App from "./components/app";

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./components/home/home"));
const Blog = lazy(() => import(/* webpackChunkName: "blog" */ "./components/blog/blog"));

const Scrabble = lazy(() => import(/* webpackChunkName: "scrabble" */ "./components/projects/scrabble/scrabble"));
const Login = lazy(() =>  import(/* webpackChunkName: "login" */ "./components/login/login"));

const Routes = () => {
  return (
    <App>
      <Suspense fallback={<div>Page is Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/scrabble" component={Scrabble} />
          <Route path="/blog" component={Blog} />
          <Route path="/login" component={Login} />
        </Switch>
      </Suspense>
    </App>
  );
};

export default Routes;
