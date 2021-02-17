import React, { useEffect, useRef } from "react";


export const OutsideClick = ({children, onClick, className}) => {
  const containerRef = useRef(null);

  const handleClick = (ev) => {
    if( containerRef.current && !containerRef.current.contains(ev.target) ) {
      onClick(ev);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default OutsideClick;
