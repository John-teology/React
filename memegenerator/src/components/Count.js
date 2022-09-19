import React from "react";



export default function Count(props) {

    var col = props.on ? 'green' : 'transparent'
    return (
      <div
        onClick={props.func}
        className="box"
        key={props.id}
        style={{backgroundColor: col}}
      ></div>
    );
}