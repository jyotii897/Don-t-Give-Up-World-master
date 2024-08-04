import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button.js'
import Card from './card.js';
import LikeDislike from './likeDislike.js';
import Chatbot from './chatbot.js';
import Login from './login.js';
import Dashboard from './dashboard.js';

function App() {
    const [Userlogin, setUserlogin] = useState(false)

    function onLoginClick() {
      setUserlogin(true)
    }

  return (
    <div>
     {Userlogin && <Dashboard></Dashboard>} 
      {!Userlogin && <Login onLogin={onLoginClick}></Login>}
    </div>
   
  );
}

export default App;
