import React from 'react';
import './App.css';

import Login from './components/Login'
import FormikRegister from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Login />
      <FormikRegister />
    </div>
  );
}

export default App;
