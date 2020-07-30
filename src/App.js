import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Profile from './Profile'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
     
        <Home/>
        <Profile text="hello bhai props calling from text in profile tag in App.js"/>
      </header> */}

      {
    React.createElement(
        'h1',
        {className:"one"},
        'heLOO AzharBhaijan'
    )
}

    </div>
  );
}

export default App;
