import React from "react";
import img from "../images/react.png";

var Header = () => {
  return (
      <header className="nav">
        <div className="nav-logo">
          <img src={img} alt="logo" />
          <h2>ReactFacts</h2>
        </div>
        <h5>React Course Project-1</h5 >
      </header>
  );
};

export default Header;
