import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'  

import MainContent from './components/MainContent'
import Header from "./components/Header";


var Page = () => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};


ReactDOM.render(<Page />, document.querySelector("#root"));
