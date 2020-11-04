import React from "react";

export const App = (props) => (
  <div className="main">
    <div className="header">HI</div>
    {props.children}
    <div className="header">Bye</div>
  </div>
);

export default App;
