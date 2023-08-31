import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AllBooks() {
  const baseURL = 'http://localhost:4000/books';

  const [allBooks, setAllBooks] = useState([]);
  const [editBook, setEditBook] = useState(null); // Track the book being edited

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationdate: Yup.string().required('Publication Date is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
      publicationdate: '',
    },
    validationSchema,
    onSubmit: (values) => {
      if (editBook) {
        // Handle update logic here
        axios
          .put(`${baseURL}/${editBook.id}`, values)
          .then(() => {
            // Update the book list
            const updatedBooks = allBooks.map((book) =>
              book.id === editBook.id ? { ...book, ...values } : book
            );
            setAllBooks(updatedBooks);
            console.log(updatedBooks);

            // Clear the edit mode
            setEditBook(null);
            formik.resetForm();
          })
          .catch((error) => {
            console.error('Error updating book:', error);
          });
      } else {
        // Handle create logic here
        axios
          .post(baseURL, values)
          .then((response) => {
            // Add the newly created book to the list
            setAllBooks([...allBooks, response.data]);

            // Clear the form
            formik.resetForm();
          })
          .catch((error) => {
            console.error('Error creating book:', error);
          });
      }
    },
  });

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setAllBooks(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${baseURL}/${id}`).then(() => {
      const updatedBooks = allBooks.filter((item) => item.id !== id);
      setAllBooks(updatedBooks);
    });
  };

  const handleEdit = (book) => {
    setEditBook(book);
    formik.setValues({
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      publicationdate: book.publicationdate,
    });
  };


  return (
    <>
      <div>
        <h2>Book List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Title</th>
              <th scope="col">Author</th>
              <th scope="col">ISBN</th>
              <th scope="col">Publication Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allBooks.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.isbn}</td>
                <td>{item.publicationdate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary ml-2"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       {/* Edit Form */}
       {editBook && (
        <div>
          <h2>Edit Book</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="error">{formik.errors.title}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label>Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                value={formik.values.author}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.author && formik.errors.author ? (
                <div className="error">{formik.errors.author}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label>ISBN</label>
              <input
                type="text"
                className="form-control"
                name="isbn"
                value={formik.values.isbn}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.isbn && formik.errors.isbn ? (
                <div className="error">{formik.errors.isbn}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label>Publication Date</label>
              <input
                type="date"
                className="form-control"
                name="publicationdate"
                value={formik.values.publicationdate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.publicationdate && formik.errors.publicationdate ? (
                <div className="error">{formik.errors.publicationdate}</div>
              ) : null}
            </div>
            
            <button type="submit" className="btn btn-primary">
              {editBook ? 'Update' : 'Create'}
            </button>
          </form>
        </div>
      )}
    </>

  );
}

export default AllBooks;
