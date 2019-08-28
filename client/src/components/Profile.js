// *** IMPORTS *** //

import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth'

// *** PROFILE FORM *** //

const ProfileForm = ({ errors, touched, values, status }) => {
    const [trip, setTrip] = useState({
      user_id: 1,
      title: '',
      description: '',
      professional: false,
      duration: '',
      date: '',
      location: '',
      image: ''
    });
    console.log('trip', trip);

    useEffect(() => {
        if (status) {
          setTrip(trip => status);
        }
      }, [status]);

    return (
        <div className="profileForm">
            <h1>Your Profile!</h1>
            <Form className="addTrip">
                <Field type="text" name="title" placeholder="Enter Title of Trip"/>
                {touched.title && errors.title && (
                    <p classname="error">{errors.title}</p>
                )}

                <Field type="text" name="description" placeholder="Enter Short Description of Trip"/>
                {touched.description && errors.description && (
                    <p classname="error">{errors.description}</p>
                )}

                {/* TOGGLE PROFESSIONAL */}

                <Field type="text" name="date" placeholder="What date does the trip start?"/>
                {touched.date && errors.date && (
                    <p classname="error">{errors.date}</p>
                )}
                <Field type="text" name="duration" placeholder="How long is the trip?"/>
                {touched.duration && errors.duration && (
                    <p classname="error">{errors.duration}</p>
                )}
                <Field type="text" name="location" placeholder="Trip Location"/>
                {touched.location && errors.location && (
                    <p classname="error">{errors.location}</p>
                )}
                <Field type="text" name="image" placeholder="Image URL"/>
                {touched.image && errors.image && (
                    <p classname="error">{errors.image}</p>
                )}

                <button className="submitButton" type="submit">Submit!</button>
            </Form>

        {/* <div className="profile-container">
            {users.map(user => {
                return (
                    <ul key={user.id} className="user-card">
                        <li>{user.title}</li>
                        <li>{user.tagline}</li>
                        <li>{user.age}</li>
                        <li>{user.timeAsGuide}</li>
                    </ul>
                )
            })}
        </div> */}
        </div>
    )
}

// *** FORMIK - PROFILE FROM *** //

const FormikProfileForm = withFormik({
    mapPropsToValues({ title, description, professional, duration, date, location, image }) {
        return {
          title: title || '',
          description: description || '',
          professional: professional || false,
          duration: duration || '',
          date: date || '',
          location: location || '',
          image: image || ''
        };
      },

// *** YUP STUFF *** //

validationSchema: Yup.object().shape({
    title: Yup.string().required('Please enter email'),
    description: Yup.string().required('Please enter trip description'),
    duration: Yup.string().required('Please enter trip duration'),
    date: Yup.string().required('Please enter date start'),
    location: Yup.string().required('Please enter trip location'),
    image: Yup.string().required('Please enter trip image'),
  }),

  handleSubmit(values, { setStatus, resetForm, setSubmitting }) {
    const newValues = {...values, user_id: 1}
    axiosWithAuth()
      .post('https://guidr-app.herokuapp.com/api/trips', newValues) // ADD BACKEND TIE-IN WHEN AVAILABLE
      .then(res => {
        console.log(res)
        setStatus(res.data);
        resetForm();
        setSubmitting();
      })
      .catch(err => console.log(err.response));
  }



})(ProfileForm);

export default FormikProfileForm;



