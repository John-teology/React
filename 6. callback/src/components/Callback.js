import React from "react";

export default function Callback(props) {
  const [holder, setHolder] = React.useState("");

  function ColorInput(event) {
    setHolder(event.target.value);
    props.colorSetter(event.target.value);
  }

  return <input name="backgroundColor" onChange={ColorInput} value={holder} />;
}
