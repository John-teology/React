import React from "react";
// import img from "../images/mark.png";
export default function Card(props) {
  return (
    <div className="card">
      {props.img && <img src={require(`../images/${props.img}`)} className="card-image" alt="as" />}
      <div className="card-stat">
        <span>star</span>
        <span className="gray">5.0</span>
        <span className="gray">(6) .</span>
        <span className="gray">{props.text}</span>
      </div>
      <p>Life lessons from {props.name}</p>
      <p>From $69/Person</p>
    </div>
  );
}
