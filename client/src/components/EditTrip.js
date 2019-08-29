// *** IMPORTS *** //

import React, { useState, useEffect, useContext } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Link } from 'react-router-dom'
import { TripContext } from '../contexts/TripContext'
import { TripsContext } from '../contexts/TripsContext';

// *** Edit TRIP FORM *** //


const TripForm = ({ props, errors, touched, values, status }) => { //{trips} gets passed into from the profile where there is state that makes the axios request
    const {trip, setTrip} = useContext(TripContext)
    const {trips, setTrips} = useContext(TripsContext)
    const saveEdit = (event) => {
      event.preventDefault()
      axiosWithAuth()
          .put(`https://guidr-app.herokuapp.com/api/trips/${trip.id}`, trip)
          .then(res => {
            console.log(res)
            // setTrips(res.data);
            // resetForm();
            // setSubmitting();
            // props.history.push('/profiletest')
          })
          .catch(err => console.log(err.response));
      }
    

    const handleChanges = event => {
      event.persist();
      event.preventDefault();
      setTrip({
        ...trip,
        [event.target.name]: event.target.value
      })
    }
    useEffect(() => {
        if (status) {
          setTrip(trip => status);
        }
      }, [status]);

    return (
        <div className="editTrip">
            <h1>Edit This Trip</h1>
            <Form className="addTrip" onSubmit={saveEdit}>
                <Field 
                  type="text" 
                  name="title" 
                  placeholder="Enter Title of Trip"
                  value={trip.title}
                  onChange={(e) => handleChanges(e)}
                />
                {touched.title && errors.title && (
                    <p classname="error">{errors.title}</p>
                )}

                <Field 
                  type="text" 
                  name="description" 
                  placeholder="Enter Short Description of Trip"
                  value={trip.description}
                  onChange={handleChanges}
                />
                {touched.description && errors.description && (
                    <p classname="error">{errors.description}</p>
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
                    <p classname="error">{errors.date}</p>
                )}

                <Field 
                  type="text" 
                  name="duration" 
                  placeholder="How long is the trip?"
                  value={trip.duration}
                  onChange={handleChanges}
                />
                {touched.duration && errors.duration && (
                    <p classname="error">{errors.duration}</p>
                )}

                <Field 
                  type="text" 
                  name="location" 
                  placeholder="Trip Location"
                  value={trip.location}
                  onChange={handleChanges}
                />
                {touched.location && errors.location && (
                    <p classname="error">{errors.location}</p>
                )}

                <Field 
                  type="text" 
                  name="image" 
                  placeholder="Image URL"
                  value={trip.image}
                  onChange={handleChanges}
                />
                {touched.image && errors.image && (
                    <p classname="error">{errors.image}</p>
                )}

                <button className="submitButton" type="button">Save</button>
                <Link className="submitButton" to='/profile'>Cancel</Link>
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
          // user_id: user_id || ''
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
//   }),

  // handleSubmit(values, { props, setStatus, resetForm, setSubmitting }) {
  //   // const newValues = {...values, user_id: 1}
  //   axiosWithAuth()
  //     .put(`https://guidr-app.herokuapp.com/api/trips/${tripToEdit.id}`, tripToEdit)
  //     .then(res => {
  //       console.log(res)
  //       setStatus(res.data);
  //       resetForm();
  //       setSubmitting();
  //       props.history.push('/profile')
  //     })
  //     .catch(err => console.log(err.response));
  // }



})(TripForm);

export default FormikTripForm;



