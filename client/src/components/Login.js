import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
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
    <div className="form-container">
      <h1>Login</h1>
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
          type="password"
          name="password"
          placeholder="Password"
          
        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <button>Login</button>
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