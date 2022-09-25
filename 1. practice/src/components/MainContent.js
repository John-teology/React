import React from "react";

var MainContent = (props) => {
document.body.style.backgroundColor = props.darkMode ? "white" : "#282D35"; 
  return (
    <nav className={props.darkMode ? "main-conb" : "main-con"}>
      <h1>Fun Fucks About React</h1>
      <ul className="main-list">
        <h1>{props.darkMode}</h1>

        <li>Was release in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars Github</li>
        <li>is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </nav>
  );
};

export default MainContent
