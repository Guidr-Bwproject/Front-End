
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom'


const Registration = ({ history, errors, touched, values, status }) => {
  
  const [user, setUser] = useState([])
  useEffect(() => {
    if (status) {
      setUser(user => status) // ({...user, status})
    }
  }, [status])

  return (
    <div className="loginPage">
      <h1 className='loginTitle'>Register</h1>
      <Form>
        <Field 
          className="input"
          type="text"
          name="username"
          placeholder="Username"

        />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}

        <Field
            className="input"
            type="email"
            name="email"
            placeholder="Email Address"

            />
            {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
            )}

        <Field 
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          
        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

<Field 
          className="input"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          
        />
        {touched.confirmPassword && errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <button className='loginButton'>Register</button>
        <p className="accountText">Already have an account?{'Log in'}
          <Link to='/login' className="accountLink">
            Log in
          </Link>
        </p>
      </Form>
    </div>
  )
}

const FormikRegister = withFormik({
  mapPropsToValues({ username, password, email }) {
    return {
      username: username || '',
      password: password || '',
      email: email || ''
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required!'),
    password: Yup.string().required('Password is required!'),
    email: Yup.string().required('Email is required')
  }),

  handleSubmit(values, {props, setStatus}) {
    axios 
      .post('https://guidr-app.herokuapp.com/api/auth/register', values)  // ENTER REGISTRATION ENDPOINT
      .then(res => {
        console.log('register', res.data)
        setStatus(res.data)
      })
      .catch(err => console.log(err.response))
      props.history.push('/profile')
  }
})(Registration)

export default FormikRegister;
