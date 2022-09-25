import React from "react";
import Navbar from "./components/Navbar";
import Pgrid from "./components/Pgrid";
import Card from "./components/Card";
import Joke from "./components/Joke";

const dog = [
  {
    id: 1,
    text: "testing 0",
    img: "mark.png",
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
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    c_password: "",
    is_newsLetter: false,
  });

  function getChange(event) {
    const {name, value, type, checked} = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitForm(event) {
    event.preventDefault();
    console.log(formData)
    formData.password === formData.c_password
      ? console.log("Successfully Sign up")
      : console.log("Password not match!");
    formData.is_newsLetter && console.log("Thank you");
  }

  return (
    <div>
      <Navbar />
      <Pgrid />
      <div className="app-flex">{cardElements}</div>
      <Joke punchline={1} />
      <Joke setup="joke 1" punchline="hahah" />
      <Joke setup="joke aga" punchline="hehe" />
      <Joke setup="joke aga" punchline="hehe" />
      <Joke setup="joke aga" punchline="hehe" />
      <br />
      <br />
      <br />
      <h1>Login form</h1>
      <form onSubmit={submitForm}>
        <input
          name="username"
          placeholder="Username"
          type="text"
          onChange={getChange}
          value={formData.username}
        />
        <input
          name="password"
          type="password"
          onChange={getChange}
          value={formData.password}
        />
        <input
          name="c_password"
          type="password"
          onChange={getChange}
          value={formData.c_password}
        />
        <input
          name="is_newsLetter"
          type="checkbox"
          onChange={getChange}
          checked={formData.is_newsLetter}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
