import React from 'react';
import './App.css';
import GuidrImg from './imgs/Guidr Logo.svg'

import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <div className='navBar'>
        
        <div className='logo'>
         <img src={GuidrImg} width='100' height='100' />
        </div>
        
        <div className='links'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Login</a>
          <a href='#'>Sign Up</a>
        </div>
       
      </div>
      <Login />
    </div>
  );
}

export default App;
