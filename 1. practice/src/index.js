import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'  

import MainContent from './components/MainContent'
import Header from "./components/Header";


var Page = () => {

  const [darkmode,setDarkMode] = React.useState(false)

  function changeColorMode (){
    setDarkMode(prev => !prev)
  } 

  return (
    <div>
      <Header darkMode={darkmode} toggleFunction={changeColorMode} />
      <MainContent darkMode={darkmode}   />
    </div>
  );
};


ReactDOM.render(<Page />, document.querySelector("#root"));
