import React from 'react';
import './App.css';
import HomePage from "./components/HomePage";
import GuidrImg from './imgs/Guidr Logo.svg'

// import Login from './components/Login'

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
      {/* <Login /> */}
      <HomePage />
    </div>
  );
}

export default App;
