import React, {useEffect, useState} from 'react';
import './App.css';
import HomePage from "./components/HomePage";
import GuidrImg from './imgs/Guidr Logo.svg'
import axios from 'axios'

import FormikLogin from './components/Login'
import FormikTripForm from './components/TripForm'
import FormikRegister from './components/RegistrationForm';
import TripDetails from './components/TripDetails';
import Profile2 from './components/Profile2';

import { TripsContext } from './contexts/TripsContext'
import { TripContext } from './contexts/TripContext'

import { Route, Link } from 'react-router-dom'
import ProfileTest from './components/ProfileTest';


function App() {

  const [trips, setTrips] = useState([])
  const [trip, setTrip] = useState({})
  console.log('trip', trip)

  useEffect(() =>{
    axios
    .get('https://guidr-app.herokuapp.com/api/trips')
    .then(response =>{
      setTrips(response.data)
      console.log('Trips Data Response', response.data);
    })
    .catch(error =>{
      console.log(error);
    });
},[]);

  return (
    <div className="App">
      <div className='navBar'>
        
        <div className='logo'>
         <img src={GuidrImg} alt="man climbing snowy mountain" width='100' height='100' />
        </div>
        
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Add Trip</Link>
          <Link to='/profile2'>Your Profile</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
       
      </div>
   
      <Route exact path='/' component={HomePage} />
      <Route exact path='/profile2' component={Profile2} />
      <Route exact path='/addtrip' component={FormikTripForm} />
      <Route exact path='/login' component={FormikLogin} />
      <Route exact path='/signup' component={FormikRegister} />
      
      <TripsContext.Provider value={{ trips, setTrips }}>
      <TripContext.Provider value={{ trip, setTrip }}>
        <Route exact path='/profiletest' component={ProfileTest} />
        </TripContext.Provider>
      </TripsContext.Provider>
      <Route path='/trips/:id' render={(props) => <TripDetails {...props} />} />
      <Route exact path='/profile2' component={Profile2} />

    </div>
  );
}

export default App;
