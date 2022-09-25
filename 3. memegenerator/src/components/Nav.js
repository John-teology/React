import React from "react";

export default function Nav() {
  var mouse = () =>{
    alert('moser')
  }

  return (
    <header className="header">
      <h4 onMouseOver={mouse}>Meme Generator</h4>
      <p className="title">React Course project-3</p>
    </header>
  );
}
