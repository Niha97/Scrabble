import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import OutsideClick from "./outsideclick";

export const Flyout = ({label, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (ev) => {
    ev.stopPropagation();
    setIsOpen(false);
  }

  const open = () => {
    setIsOpen(true);
  }

  return (
    <div className="flyout"  onClick={open}>
      <span className={"label"}>
        {label}
      </span>
      {isOpen ? <FaChevronUp className="icon"/>:<FaChevronDown className="icon"/> }
      {isOpen && <OutsideClick onClick={handleClick} className="flyout-modal">
        <div className="flyout-list">
          {children}
        </div>
      </OutsideClick>}
    </div>
  );
};

export default Flyout;
