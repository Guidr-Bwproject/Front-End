
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom'


const Registration = ({ history, errors, touched, values, status }) => {
  
  const [user, setUser] = useState([])
  useEffect(() => {
    if (status) {
      setUser(user => status) 
    }
  }, [status])

  return (
    <div className="loginPage">
      <h1 className='loginTitle'>Register</h1>
     <div class="contain">
      <Form>
      <div className="1">
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
       </div>
       <div className="2">     
        <Field 
        type="text" 
        name="title" 
        placeholder="Enter Title of Trip"

        />
        {touched.title && errors.title && (
            <p classname="error">{errors.title}</p>
        )}

        <Field 
        type="text" 
        name="tagline" 
        placeholder="Enter Short Description of Trip"

        />
        {touched.tagline && errors.tagline && (
            <p classname="error">{errors.tagline}</p>
         )}
                
        <Field 
        type="number" 
        name="age" 
        placeholder="Enter Your Age"

        />
        {touched.age && errors.age && (
            <p classname="error">{errors.age}</p>
        )}
                
        <Field 
        type="text" 
        name="time" 
        placeholder="Enter How Long You Have Been A Guide"

        />
        {touched.time && errors.time && (
             <p classname="error">{errors.time}</p>
        )}
       </div> 

        <button type="submit" className='loginButton'>Register</button>
        <p className="accountText">Already have an account?{'Log in'}
          <Link to='/login' className="accountLink">
            Log in
          </Link>
        </p>
      </Form>
     </div> 
    </div>
  )
}

const FormikRegister = withFormik({
  mapPropsToValues({ username, password, email, title, tagline, age, timeAsGuide}) {
    return {
      username: username || '',
      password: password || '',
      email: email || '',
      title: title || '',
      tagline: tagline || '',
      age: age || '',
      timeAsGuide: timeAsGuide || ''
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required!'),
    password: Yup.string().required('Password is required!'),
    email: Yup.string().required('Email is required'),
    title: Yup.string().required('Enter trip type here'),
    tagline: Yup.string().required('Trip description needed'),
    age: Yup.number().integer().required('Age needed'),
    timeAsGuide: Yup.string().required('How long a guide'),
  }),

  handleSubmit(values, {props, setStatus}) {
    axios 
      .post('https://guidr-app.herokuapp.com/api/auth/register', values)  // ENTER REGISTRATION ENDPOINT
      .then(res => {
        console.log('register', res.data)
        setStatus(res.data)
        // localStorage.setItem(res.data.token)
        props.history.push('/profile')
      })
      .catch(err => console.log(err.response))
  }
})(Registration)

export default FormikRegister;
