import React from 'react';
import './App.css';
import HomePage from "./components/HomePage";
import GuidrImg from './imgs/Guidr Logo.svg'

import Login from './components/Login'
import FormikProfileForm from './components/Profile'
import FormikRegister from './components/RegistrationForm';
import TripDetails from './components/TripDetails';

import { Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className='navBar'>
        
        <div className='logo'>
         <img src={GuidrImg} alt="man climbing snowy mountain" width='100' height='100' />
        </div>
        
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
       
      </div>
   
      <Route exact path='/' component={HomePage} />
      <Route exact path='/profile' component={FormikProfileForm} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={FormikRegister} />
      <Route path='/trips/:id' render={(props) => <TripDetails {...props} />} />


    </div>
  );
}

export default App;
