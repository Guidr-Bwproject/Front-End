// *** IMPORTS *** //

import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom'


// *** ADD TRIP FORM *** //

const TripForm = ({ errors, touched, values, status }) => {

    const [trip, setTrip] = useState({
      user_id: 7,
      title: '',
      professional: false,
      duration: '',
      date: '',
      location: '',
      image: ''
    });
    console.log(trip)

    const handleChanges = event => {
      event.persist();
      event.preventDefault();
      setTrip({
        ...trip,
        [event.target.name]: event.target.value
      })
    }

    const submitForm = (event) => {
      // event.preventDefault()
      // const newValues = {...values}
      axiosWithAuth()
        .post('https://guidr-app.herokuapp.com/api/trips', trip)
        .then(res => {
          console.log('HEEEEEEEEEEERRRRRREEE', res)
          // setStatus(res.data);
          // resetForm();
          // setSubmitting();
          // props.history.push('/profile2')
        })
        .catch(err => console.log(err.response));
    }

    useEffect(() => {
        if (status) {
          setTrip(trip => status);
        }
      }, [status]);

    return (
        <div className="profileForm">
            <h1>Log a Trip!</h1>
            <Form className="addTrip" onSubmit={submitForm}>
                <Field 
                  type="text" 
                  name="title" 
                  placeholder="Enter Title of Trip"
                  value={trip.title}
                  onChange={handleChanges}
                />
                {touched.title && errors.title && (
                    <p className="error">{errors.title}</p>
                )}

                <Field 
                  type="text" 
                  name="description" 
                  placeholder="Enter Short Description of Trip"
                  value={trip.description}
                  onChange={handleChanges}
                />
                {touched.description && errors.description && (
                    <p className="error">{errors.description}</p>
                )}

                {/* TOGGLE PROFESSIONAL */}

                <Field 
                  type="text" 
                  name="date" 
                  placeholder="What date does the trip start?"
                  value={trip.date}
                  onChange={handleChanges}
                />
                  
                {touched.date && errors.date && (
                    <p className="error">{errors.date}</p>
                )}

                <Field 
                  type="text" 
                  name="duration" 
                  placeholder="How long is the trip?"
                  value={trip.duration}
                  onChange={handleChanges}
                />
                {touched.duration && errors.duration && (
                    <p className="error">{errors.duration}</p>
                )}

                <Field 
                  type="text" 
                  name="location" 
                  placeholder="Trip Location"
                  value={trip.location}
                  onChange={handleChanges}
                />
                {touched.location && errors.location && (
                    <p className="error">{errors.location}</p>
                )}

                <Field 
                  type="text" 
                  name="image" 
                  placeholder="Image URL"
                  value={trip.image}
                  onChange={handleChanges}
                />
                {touched.image && errors.image && (
                    <p className="error">{errors.image}</p>
                )}

                <Link className="submitButton" to="/profile" onClick={(event) => {
                  submitForm()
                }}>Submit!</Link>
                <Link className="submitButton" to="/profile">Cancel</Link>
            </Form>
        </div>
    )
}

// *** FORMIK - PROFILE FROM *** //

const FormikTripForm = withFormik({
    mapPropsToValues({ title, description, professional, duration, date, location, image, user_id }) {
        return {
          title: title || '',
          description: description || '',
          professional: professional || false,
          duration: duration || '',
          date: date || '',
          location: location || '',
          image: image || '',
          user_id: user_id || 7
        };
      },

// *** YUP STUFF *** //

// validationSchema: Yup.object().shape({
//     title: Yup.string().required('Please enter trip title'),
//     description: Yup.string().required('Please enter trip description'),
//     duration: Yup.string().required('Please enter trip duration'),
//     date: Yup.string().required('Please enter date start'),
//     location: Yup.string().required('Please enter trip location'),
//     image: Yup.string().required('Please enter trip image URL'),
//     username: Yup.string().required('Please enter username'),
//   }),
  
  // handleSubmit(values, { setStatus, resetForm, setSubmitting }) {
  //   const newValues = {...values, user_id: 7}
  //   axiosWithAuth()
  //     .post('https://guidr-app.herokuapp.com/api/trips', newValues)
  //     .then(res => {
  //       console.log('HEEEEEEEEEEERRRRRREEE', res)
  //       setStatus(res.data);
  //       resetForm();
  //       setSubmitting();
  //       // props.history.push('/profile2')
  //     })
  //     .catch(err => console.log(err.response));
  // }



})(TripForm);

export default FormikTripForm;



