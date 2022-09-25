import React from "react";
import Count from "../components/Count";

export default function Meme() {
  const [getmeme, setGetMeme] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((dat) => setGetMeme(dat.data.memes));
  }, []);

  // React.useEffect(async () => {
  //   const res = await fetch("https://api.imgflip.com/get_memes");
  //   const dat = await res.json();
  //   setGetMeme(dat.data.memes);
  // }, []);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "x",
  });

  function generateMeme() {
    var randomNum = Math.floor(Math.random() * getmeme.length + 1) + 1;
    var data = getmeme[randomNum].url;
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
    comments: "",
    isfriendly: false,
    employment: "",
    favColor: "",
  });

  const [text, setText] = React.useState({
    topText: "",
    buttomText: "",
  });

  function changeName(event) {
    const { name, value, type, checked } = event.target;
    setName((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function changeText(e) {
    setText((prevText) => ({
      ...prevText,
      [e.target.name]: e.target.value,
    }));
  }

  function submitData(event) {
    event.preventDefault();
    console.log(formName);
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Top text"
          onChange={changeText}
          name="topText"
          value={text.topText}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Buttom text"
          onChange={changeText}
          name="buttomText"
          value={text.buttomText}
        />

        {/* remember that text area is now self closing in react no type
        just name and value is important  <textarea /> */}
        <button className="form-button" onClick={generateMeme}>
          Get a new meme Image
        </button>
        <div className="container">
          <h3 className="top-left">{text.topText}</h3>
          <h3 className="bottom-left">{text.buttomText}</h3>
          <img src={meme.randomImg} className="meme--img" alt="meme" />
        </div>
      </div>

      {/* exercise */}

      <h3>Box will go here</h3>
      {squareElements}
      <h1>exercise about forms in react</h1>
      <form onSubmit={submitData}>
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
        <br />
        <label htmlFor="favColor">What is your fav color?</label>
        <br />
        <select
          id="favColor"
          value={formName.favColor}
          name="favColor"
          onChange={changeName}
        >
          <option value="">--Choose--</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
        </select>

        <button>Submit</button>
      </form>
      <h1>{formName.isfriendly}</h1>
    </main>
  );
}
