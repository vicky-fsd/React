import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication Date is required'),
  });

  return (
    <div>
      <h2>Add/Edit Book</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </div>

          <div>
            <label htmlFor="author">Author</label>
            <Field type="text" name="author" />
            <ErrorMessage name="author" component="div" />
          </div>

          <div>
            <label htmlFor="isbn">ISBN</label>
            <Field type="text" name="isbn" />
            <ErrorMessage name="isbn" component="div" />
          </div>

          <div>
            <label htmlFor="publicationDate">Publication Date</label>
            <Field type="date" name="publicationDate" />
            <ErrorMessage name="publicationDate" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
