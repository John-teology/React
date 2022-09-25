import "./App.css";
import React from "react";
import Callback from "./components/Callback";

function App() {
  const [color,setColor] = React.useState("")

  function getColor(col){
    setColor(col)

  }
  return (
    <div>
      <center>
        <div className="box" style={{ background: `${color}` }}></div>
        <h1>Callback</h1>
        <Callback colorSetter = {getColor} />
      </center>
    </div>
  );
}

export default App;
