import React from "react";
import memesData from "../memeGenerator";
import Count from "../components/Count";

export default function Meme() {
  var randomNum =
    Math.floor(Math.random() * memesData.data.memes.length + 1) + 1;
  var data = memesData.data.memes[randomNum].url;

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: data,
  });

  function generateMeme() {
    var randomNum =
      Math.floor(Math.random() * memesData.data.memes.length + 1) + 1;
    var data = memesData.data.memes[randomNum].url;
    setMeme((prevItem) => ({
      ...prevItem,
      randomImg: data,
    }));
  }

  // for the count
  const [box, setBoxes] = React.useState([
    {
      id: 1,
      on: true,
    },
    {
      id: 2,
      on: false,
    },
    {
      id: 3,
      on: false,
    },
    {
      id: 4,
      on: true,
    },
    {
      id: 5,
      on: true,
    },
    {
      id: 6,
      on: false,
    },
  ]);

  function toggle(id) {
    setBoxes((prevBox) => {
      return prevBox.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      });
    });
  }

  const squareElements = box.map((item) => (
    <Count key={item.id} on={item.on} func={() => toggle(item.id)} />
  ));

  const [formName, setName] = React.useState({
    firstName: "",
    lastName: "",
    comments: "",
    isfriendly: false,
    employment: "",
  });

  console.log(formName);
  function changeName(event) {
    const { name, value, type, checked } = event.target;
    setName((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Top text"
          onChange={changeName}
          name="firstName"
          value={formName.firstName}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Buttom text"
          onChange={changeName}
          name="lastName"
          value={formName.lastName}
        />

        {/* remember that text area is now self closing in react no type
        just name and value is important  <textarea /> */}
        <button className="form-button" onClick={generateMeme}>
          Get a new meme Image
        </button>
        <img src={meme.randomImg} className="meme--img" alt="meme" />
      </div>

      {/* exercise */}

      <h3>Box will go here</h3>
      {squareElements}
      <h1>exercise about forms in react</h1>
      <form>
        <textarea
          onChange={changeName}
          name="comments"
          value={formName.comments}
        />
        <br />
        <br />
        <input
          type="checkbox"
          id="isFriendly"
          name="isfriendly"
          checked={formName.isfriendly}
          onChange={changeName}
        />
        <label htmlFor="isFriendly"> are you gago?</label>
        <fieldset>
          <legend>Currenet employment status</legend>

          <input
            type="radio"
            id="unemployed"
            name="employment"
            onChange={changeName}
            value="unemployed"
          />
          <label htmlFor="unemployed">Unemployed</label>

          <input
            type="radio"
            id="part-time"
            name="employment"
            onChange={changeName}
            value="part-time"
          />
          <label htmlFor="part-time">Part-time</label>

          <input
            type="radio"
            id="Student"
            name="employment"
            onChange={changeName}
            value="Student"
          />
          <label htmlFor="Student">Student</label>
        </fieldset>
      </form>
      <h1>{formName.isfriendly}</h1>
    </main>
  );
}
