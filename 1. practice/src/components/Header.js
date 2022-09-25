import React from "react";
import img from "../images/react.png";

var Header = (props) => {
  return (
    <header className={props.darkMode ? "nav" : "navb"}>
      <div className="nav-logo">
        <img src={img} alt="logo" />
        <h1>{props.darkMode}</h1>
        <h2>ReactFacts</h2>
      </div>

      <label class="switch">
        <input type="checkbox" checked={props.darkMode} onChange ={props.toggleFunction} />
        <span class="slider round"></span>
      </label>

      <h5 className={props.darkMode ? "navh5b" : "navh5"}>React Course Project-1</h5>
    </header>
  );
};

export default Header;
