import React from 'react';
import './App.css';
import GuidrImg from './imgs/Guidr Logo.svg'

import Login from './components/Login'
import Profile from './components/Profile'
// import Register from './components/Registration'

import { Route } from 'react-router-dom'

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

      {/* <Route path='/' exact component={Home} /> */}
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/login' component={Login} />
      {/* <Route path='/signup' exact component={Registration} /> */}

    </div>
  );
}

export default App;
