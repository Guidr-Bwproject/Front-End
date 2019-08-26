// *** IMPORTS *** //

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

// *** PROFILE FORM *** //

const ProfileForm = ({ errors, touched, values, status }) => {
    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
        if (status) {
          setUsers([...users, status]);
        }
      }, [status]);

    return (
        <div className="ProfileForm">
            <h1>Your Profile!</h1>
            <Form>
                <Field type="text" name="title" placeholder="Enter Title of Trip"/>
                {touched.username && errors.username && (
                    <p classname="error">{errors.username}</p>
                )}

                <Field type="text" name="tagline" placeholder="Enter Short Description of Trip"/>
                {touched.email && errors.email && (
                    <p classname="error">{errors.email}</p>
                )}
                <Field type="age" name="age" placeholder="Enter Your Age"/>
                {touched.password && errors.password && (
                    <p classname="error">{errors.password}</p>
                )}
                <Field type="time" name="time" placeholder="Enter How Long You Have Been A Guide"/>
                {touched.password && errors.password && (
                    <p classname="error">{errors.password}</p>
                )}

                <button type="submit">Submit!</button>
            </Form>

        <div className="profile-container">
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
        </div>
        </div>
    )
}

// *** FORMIK - PROFILE FROM *** //

const FormikProfileForm = withFormik({
    mapPropsToValues({ username, title, tagline, age, timeAsGuide }) {
        return {
            username: username || '',
            title: title || '',
            tagline: tagline || '',
            age: age || '',
            timeAsGuide: timeAsGuide || ''
        };
      },

// *** YUP STUFF *** //

validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter username'),
    title: Yup.string().required('Please enter email'),
    tagline: Yup.string().required('Please enter password'),
    age: Yup.integer().required('Please accept Terms of Service'),
    timeAsGuide: Yup.string().required('Please enter password'),
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post('', values) // ADD BACKEND TIE-IN WHEN AVAILABLE
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }



})(ProfileForm);

export default FormikProfileForm;



