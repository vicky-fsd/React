import React from 'react';
import { useFormik } from 'formik';
import './App.css';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
      publishdate:'',
    },
   
  });

  return (
    <div className='form'>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Book Title</label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder='Enter the Book Title'
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <label htmlFor="author">Author Name</label>
        <input
          id="author"
          name="author"
          type="text"
          placeholder='Enter Author Name'
          onChange={formik.handleChange}
          value={formik.values.author}
        />
        <label htmlFor="isbn">ISBN</label>
        <input
          id="isbn"
          name="isbn"
          type="text"
          placeholder='Enter ISBN'
          onChange={formik.handleChange}
          value={formik.values.isbn}
        />
        <label htmlFor="publishdate">Published Date</label>
        <input
          id="publishdate"
          name="publishdate"
          type="date"
          placeholder='Enter ISBN'
          onChange={formik.handleChange}
          value={formik.values.publishdate}
        />
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;
