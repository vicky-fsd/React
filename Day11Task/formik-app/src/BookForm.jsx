import React from 'react';
import { useFormik } from 'formik';

const BookForm = ({ onSubmit, initialValues }) => {
  const formik = useFormik({
    initialValues: initialValues || { title: '', author: '', isbn: '', publicationDate: '' },
    onSubmit: values => {
      onSubmit(values);
      formik.resetForm();
    },
    // Add validation here using Formik's validationSchema
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
      </div>
      {/* Add similar fields for author, ISBN, and publication date */}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default BookForm;
