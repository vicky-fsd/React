import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function AddAuthor({ onAddAuthor }) {
  const baseURL = "http://localhost:4000/author";

  // Use useFormik to manage form state
  const formik = useFormik({
    initialValues: {
      dob: '',
      name: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      dob: Yup.string().required('Date of Birth is required'),
      description: Yup.string().required('Description is required'),
      
    }),
    onSubmit: (values, { resetForm }) => {
      
      axios.post(baseURL, values)
        .then((response) => {
          resetForm();
          onAuthor(response.data);
           
        })
        .catch((error) => {
          console.error("Error adding Author:", error);
        });
    },
  });

  return (
    <div>
      <h2>Add Author Details</h2>
      <form className='add' onSubmit={formik.handleSubmit}>
       
        <div>
          <label>Author's Name : </label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label>Date of Birth : </label>
          <input
            type="date"
            name="dob"
            value={formik.values.dob}
            onChange={formik.handleChange}
          />
          {formik.touched.dob && formik.errors.dob ? (
            <div className="error">{formik.errors.dob}</div>
          ) : null}
        </div>
        <div>
          <label>Description : </label>
          <input
            type="text"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>
       
        <button type='submit' className='btn btn-primary'>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddAuthor;
