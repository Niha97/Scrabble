import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router";
import App from "./components/app";

const Home  = lazy(() => import('./components/home/home'));
const Blog  = lazy(() => import('./components/blog/blog'));
const Scrabble  = lazy(() => import('./components/projects/scrabble/scrabble'));


const Routes = () => {
  return (
    <App>
      <Suspense fallback={<div>Page is Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route  path="/scrabble" component={Scrabble} />
          <Route  path="/blog" component={Blog} />
        </Switch>
      </Suspense>
    </App>
  )
}

export default Routes;
