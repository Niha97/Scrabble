import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import "../styles/all.styl";

export const App = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="main">{props.children}</div>
      <Footer />
    </div>
  );
};

export default App;
