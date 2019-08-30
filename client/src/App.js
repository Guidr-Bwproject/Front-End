import React, {useEffect, useState} from 'react';
import './App.css';
import HomePage from "./components/HomePage";
import GuidrImg from './imgs/Guidr Logo.svg'
import axios from 'axios'

import FormikLogin from './components/Login'
import FormikTripForm from './components/TripForm'
import FormikEditTripForm from './components/EditTrip'
import FormikRegister from './components/RegistrationForm';
import TripDetails from './components/TripDetails';
import Profile2 from './components/Profile2';
import { TripsContext } from './contexts/TripsContext'
import { TripContext } from './contexts/TripContext'
import { UserContext } from './contexts/UserContext'

import { Route, Link } from 'react-router-dom'
import ProfileTest from './components/ProfileTest';
import Footer from './components/Footer'


function App() {

  const [trips, setTrips] = useState([])
  const [trip, setTrip] = useState({})
  const [user, setUser] = useState({})
  // console.log('trip', trip)

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
},[trips]);

  return (
    <div className="App">
      <div className='navBar'>
        
        <div className='logo'>
         <img src={GuidrImg} alt="man climbing snowy mountain" width='100' height='100' />
        </div>
        
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/addtrip'>Add Trip</Link>
          <Link to='/profile'>Your Profile</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
       
      </div>
   
      <TripsContext.Provider value={{ trips, setTrips }}>
      <TripContext.Provider value={{ trip, setTrip }}>
        <Route exact path='/' render={(props) => <HomePage {...props} />} />
      </TripContext.Provider>
      </TripsContext.Provider>
      {/* <Route exact path='/profile2' component={Profile2} /> */}
      
      <TripsContext.Provider value={{ trips, setTrips }}>
      <TripContext.Provider value={{ trip, setTrip }}>
        <Route exact path='/edittrip' render={(props) => <FormikEditTripForm {...props} /> } />
      </TripContext.Provider>
      </TripsContext.Provider>

      <Route exact path='/addtrip' component={FormikTripForm} />

      <UserContext.Provider value={{ user, setUser }} >
        <Route exact path='/login' component={FormikLogin} />
      </UserContext.Provider>

      <Route exact path='/signup' component={FormikRegister} />
      
      <TripsContext.Provider value={{ trips, setTrips }}>
      <TripContext.Provider value={{ trip, setTrip }}>
        <Route path='/profile' render={(props) => <Profile2 {...props} />} />
        </TripContext.Provider>
      </TripsContext.Provider>
      <Route path='/trips/:id' render={(props) => <TripDetails {...props} />} />

      <Footer />
    </div>
  );
}

export default App;
