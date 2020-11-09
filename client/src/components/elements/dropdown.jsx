import React from "react";


export const Dropdown = ({label, list}) => (
  <div className="dropdown">
    {label}
    <div className="footer">Hi you are in footer</div>
  </div>
);

export default Dropdown;
