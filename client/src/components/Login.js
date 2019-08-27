import React, { useState, useEffect } from 'react';
import * as Yup from 'yup'
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';

const Login = ({ errors, touched, values, status }) => {
  
  const [user, setUser] = useState([])
  useEffect(() => {
    if (status) {
      setUser(user => status) // ({...user, status})
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

        <button className='loginButton'>Login</button>
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
      password: password || '',
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required!'),
    password: Yup.string().required('Password is required!')
  }),

  handleSubmit(values, {setStatus}) {
    axios 
      .post('', values) // ENTER LOGIN ENDPOINT
      .then(res => {
        setStatus(res.data)
      })
      .catch(err => console.log(err.response))
  }
})(Login)

export default FormikLogin;