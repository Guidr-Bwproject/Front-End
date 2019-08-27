import React, { useState, useEffect } from 'react';
import * as Yup from 'yup'
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';

const Login = ({ history, errors, touched, values, status }) => {
  
  const [user, setUser] = useState({
        username: '',
        password: ''
    })

  useEffect(() => {
    if (status) {
      setUser(user => status)
    }
  }, [status])

  return (
    <div className="loginPage">
      <span className="loginTitle">Adventure Awaits</span>
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
        <br></br>

        <Field 
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          
        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <br></br>

        <button type="submit" className='loginButton'>Login</button>
        <p className="accountText">Don't have an account?{' '}
          <span className="accountLink">
             Sign Up
          </span>
        </p>
      </Form>
    </div>
  )
}

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
        username: username || '',
        password: password || ''
    }
  },

  validationSchema: Yup.object().shape({
      username: Yup.string().required('Username is required!'),
      password: Yup.string().required('Password is required!')
  }),

  handleSubmit(user, {props, setStatus}) {
    axios 
      .post('https://guidr-app.herokuapp.com/api/auth/login', user) // ENTER LOGIN ENDPOINT
      .then(res => {
        setStatus(res.data)
        localStorage.setItem('token', res.data.token)
        props.history.push('/profile')
      })
      .catch(err => console.log(err.response))
  }
})(Login)

export default FormikLogin;