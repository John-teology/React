import React from "react";
import Navbar from "./components/Navbar";
import Pgrid from "./components/Pgrid";
import Card from "./components/Card";
import Joke from "./components/Joke";

const dog = [
  {
    id: 1,
    text: "testing 0",
    img:"mark.png",
    name: "Jad",
  },
  {
    id: 2,
    text: "testing 1",
    name: "Malou",
  },
  {
    id: 3,
    text: "testing 2",
    name: "Ricalyn",
  },
  {
    id: 4,
    text: "testing 2",
    name: "Ricalyn",
  },
  {
    id: 5,
    text: "testing 2",
    name: "Ricalyn",
  },
  {
    id: 6,
    text: "testing 2",
    name: "Ricalyn",
  },
];

const cardElements = dog.map((item) => {
  return <Card key={item.id} {...item} />;
});

function App() {
  return (
    <div>
      <Navbar />
      <Pgrid />
      <div className="app-flex">
        {cardElements}
      </div>
      <Joke punchline={1} />
      <Joke setup="joke 1" punchline="hahah" />
      <Joke setup="joke aga" punchline="hehe" />
      <Joke setup="joke aga" punchline="hehe" />
      <Joke setup="joke aga" punchline="hehe" />
    </div>
    // {dog.map(a => <h1>a</h1>)}
  );
}

export default App;
