// *** IMPORTS *** //

import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth'

// *** PROFILE FORM *** //

const ProfileForm = ({ errors, touched, values, status }) => {
    const [users, setUsers] = useState({
      title: '',
      tagline: '',
      age: '',
      timeAsGuide: ''
    });
    console.log('users', users);

    useEffect(() => {
        if (status) {
          setUsers({...users, status});
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

                <Field type="text" name="tagline" placeholder="Enter Short Description of Trip"/>
                {touched.tagline && errors.tagline && (
                    <p classname="error">{errors.tagline}</p>
                )}
                <Field type="age" name="age" placeholder="Enter Your Age"/>
                {touched.age && errors.age && (
                    <p classname="error">{errors.age}</p>
                )}
                <Field type="number" name="timeAsGuide" placeholder="Enter How Long You Have Been A Guide"/>
                {touched.timeAsGuide && errors.timeAsGuide && (
                    <p classname="error">{errors.timeAsGuide}</p>
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
    mapPropsToValues({ title, tagline, age, timeAsGuide }) {
        return {
            title: title || '',
            tagline: tagline || '',
            age: age || '',
            timeAsGuide: timeAsGuide || ''
        };
      },

// *** YUP STUFF *** //

validationSchema: Yup.object().shape({
    // username: Yup.string().required('Please enter username'),
    title: Yup.string().required('Please enter email'),
    tagline: Yup.string().required('Please enter password'),
    age: Yup.number().integer().required('Please accept Terms of Service'),
    timeAsGuide: Yup.string().required('Please enter time'),
  }),

  handleSubmit(values, { setStatus }) {
    axiosWithAuth()
      .post('https://guidr-app.herokuapp.com/api/trips', values) // ADD BACKEND TIE-IN WHEN AVAILABLE
      .then(res => {
        console.log(res.data)
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }



})(ProfileForm);

export default FormikProfileForm;



