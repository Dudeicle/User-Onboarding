import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './Components/Form.js'

function App() {

  const initialFormValues = {
    name: '',
    email: '',
    password: ''
  }

  



  return (
    <div className="App">
        <UserForm />
    </div>
  );
}

export default App;
