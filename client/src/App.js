import React from 'react';
import './App.css';

import Login from './components/Login'
import CreateUser from './components/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Login />
      <CreateUser />
    </div>
  );
}

export default App;
