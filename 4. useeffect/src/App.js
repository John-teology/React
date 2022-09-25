import "./App.css";
import React from "react";
import WindowTracker from "./components/Window";

function App() {
  const [data, setData] = React.useState([]);
  const [num, setNum] = React.useState(1);

  React.useEffect(() => {
    console.log("run");
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((dat) => setData(dat));
  }, []); // any value to number or string basta check niya lang if same pa rin ba yung value niya sa una

  const [show, setShow] = React.useState(true);

  function changeShow() {
    setShow((prev) => !prev);
  }

  return (
    <div>
      <h5>{num}</h5>
      <button onClick={() => setNum((prev) => prev + 1)}>
        Click for next character
      </button>
      <br />
      <br />
      <button onClick={changeShow}>Toggle Window</button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
