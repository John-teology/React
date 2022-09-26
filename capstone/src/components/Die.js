import React from "react";

export default function Die(props) {
  return (
    <div
      className="die-box"
      onClick={() => props.hold(props.id)}
      style={{backgroundColor : props.isHeld ? '#59E391' : 'white'}}
    >
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
