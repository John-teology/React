import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var Page = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Page />, document.querySelector("#root"));
