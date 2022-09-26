import React from "react";
import "./App.css";
import Die from "./components/Die";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    const arrayDice = [];
    for (let i = 0; i < 10; i++) {
      arrayDice.push({
        id: i,
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      });
    }
    return arrayDice;
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((item) => ({
        ...item,
        isHeld: item.id === id ? !item.isHeld : item.isHeld,
      }))
    );
  }

  function rollDice() {
    allEqual("value") && allEqual("isHeld")
      ? setDice(allNewDice())
      : setDice((prevDice) =>
          prevDice.map((item) => ({
            ...item,
            value: !item.isHeld ? Math.ceil(Math.random() * 6) : item.value,
          }))
        );
  }

  function allEqual(keys) {
    const vals = dice.map((item) => item[keys]);
    return vals.every((item) => item === vals[0]);
  }

  const setOfDice = dice.map((item) => (
    <Die
      key={item.id}
      id={item.id}
      value={item.value}
      isHeld={item.isHeld}
      hold={hold}
    />
  ));

  return (
    <main>
      {allEqual("value") && allEqual("isHeld") && <Confetti />}
      <h1>Tenzies</h1>
      <h4>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </h4>
      <div className="dice-container">{setOfDice}</div>
      <button className="roll-dice" onClick={rollDice}>
        {allEqual("value") && allEqual("isHeld") ? "Reset" : "Roll"}
      </button>
    </main>
  );
}

export default App;
