import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function AddBook({ onAddBook }) {
  const baseURL = "http://localhost:4000/books";

  // Use useFormik to manage form state
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
      publicationdate: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      author: Yup.string().required('Author is required'),
      isbn: Yup.string().required('ISBN is required'),
      publicationdate: Yup.string().required('Publication Date is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      
      axios.post(baseURL, values)
        .then((response) => {
          resetForm();
          onAddBook(response.data);
           
        })
        .catch((error) => {
          console.error("Error adding book:", error);
        });
    },
  });

  return (
    <div>
      <h2>Add Book</h2>
      <form className='add' onSubmit={formik.handleSubmit}>
       
        <div>
          <label>Title : </label>
          <input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error">{formik.errors.title}</div>
          ) : null}
        </div>
        <div>
          <label>Author : </label>
          <input
            type="text"
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
          />
          {formik.touched.author && formik.errors.author ? (
            <div className="error">{formik.errors.author}</div>
          ) : null}
        </div>
        <div>
          <label>ISBN : </label>
          <input
            type="text"
            name="isbn"
            value={formik.values.isbn}
            onChange={formik.handleChange}
          />
          {formik.touched.isbn && formik.errors.isbn ? (
            <div className="error">{formik.errors.isbn}</div>
          ) : null}
        </div>
        <div>
          <label>Publication Date : </label>
          <input
            type="date"
            name="publicationdate"
            value={formik.values.publicationdate}
            onChange={formik.handleChange}
          />
          {formik.touched.publicationdate && formik.errors.publicationdate ? (
            <div className="error">{formik.errors.publicationdate}</div>
          ) : null}
        </div>
        <button type='submit' className='btn btn-primary'>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddBook;
