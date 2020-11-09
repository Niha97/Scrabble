import React from "react";
import Header from  "./header/header";
import Footer from  "./footer/footer";
// import { Switch, Route } from "react-router";
// import Home from "./home/home";
// import Blog from "./blog/blog";
// import Scrabble from "./projects/scrabble/scrabble";
import "../styles/all.css";
// import { makeRoutes } from "../routes";

export const App = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  )
};

export default App;
