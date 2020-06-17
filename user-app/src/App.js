import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './Components/UserForm.js'
import axios from 'axios';



const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}



const initialUsers = []
const initialDisabled = true

export default function App() {

  const [ users, setUsers ] = useState()
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('http://localhost:4000/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(err => {
        debugger
      })
  }

  const postNewUser = newUser => {
    axios.get('http://localhost:4000/users', newUser)
      .then(res => {
        setUsers([...users, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const onInputChange = evt => {
    const { name, value } = evt.target

  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target

    setFormValues
  }


  return (


    <div className="App">
        <UserForm />
    </div>
  );
}

