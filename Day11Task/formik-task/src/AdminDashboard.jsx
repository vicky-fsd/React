import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

// Mock data for initial state
const initialBooks = [
  { id: 1, title: 'Book 1', author: 'Author 1', isbn: '1234567890', publicationDate: '2022-01-01' },
  { id: 2, title: 'Book 2', author: 'Author 2', isbn: '0987654321', publicationDate: '2021-05-15' },
];

const initialAuthors = [
  { id: 1, name: 'Author 1', birthDate: '1980-01-15', biography: 'Author 1 bio...' },
  { id: 2, name: 'Author 2', birthDate: '1990-03-20', biography: 'Author 2 bio...' },
];

const AdminDashboard = () => {
  const [books, setBooks] = useState(initialBooks);
  const [authors, setAuthors] = useState(initialAuthors);

  const [editingBookId, setEditingBookId] = useState(null);
  const [editingAuthorId, setEditingAuthorId] = useState(null);

  // Book form submission handler
  const handleBookSubmit = (values, { resetForm }) => {
    if (editingBookId !== null) {
      // Update existing book
      const updatedBooks = books.map(book =>
        book.id === editingBookId ? { ...book, ...values } : book
      );
      setBooks(updatedBooks);
      setEditingBookId(null);
    } else {
      // Generate a unique ID for the new book
      const newBookId = Math.max(...books.map(book => book.id), 0) + 1;
      const newBook = { id: newBookId, ...values };
      setBooks([...books, newBook]);
    }
    resetForm();
  };

  // Author form submission handler
  const handleAuthorSubmit = (values, { resetForm }) => {
    if (editingAuthorId !== null) {
      // Update existing author
      const updatedAuthors = authors.map(author =>
        author.id === editingAuthorId ? { ...author, ...values } : author
      );
      setAuthors(updatedAuthors);
      setEditingAuthorId(null);
    } else {
      // Generate a unique ID for the new author
      const newAuthorId = Math.max(...authors.map(author => author.id), 0) + 1;
      const newAuthor = { id: newAuthorId, ...values };
      setAuthors([...authors, newAuthor]);
    }
    resetForm();
  };

  // Edit book handler
  const handleEditBook = (id) => {
    setEditingBookId(id);
  };

  // Cancel edit book handler
  const handleCancelEditBook = () => {
    setEditingBookId(null);
  };

  // Edit author handler
  const handleEditAuthor = (id) => {
    setEditingAuthorId(id);
  };

  // Cancel edit author handler
  const handleCancelEditAuthor = () => {
    setEditingAuthorId(null);
  };

  return (
    <div>
      <h1>Library Management System</h1>

      {/* Book Form */}
      <h2>{editingBookId !== null ? 'Edit Book' : 'Add Book'}</h2>
      <Formik
        initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }}
        enableReinitialize
        validate={(values) => {
          const errors = {};
          // Add your book form validation logic here using Yup or custom logic
          return errors;
        }}
        onSubmit={handleBookSubmit}
      >
        {({ values }) => (
          <Form>
            <div>
              <label>Title:</label>
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="div" />
            </div>
            {/* Repeat similar fields for author, isbn, and publicationDate */}
            <div>
              {editingBookId !== null ? (
                <button type="button" onClick={handleCancelEditBook}>Cancel</button>
              ) : null}
              <button type="submit">{editingBookId !== null ? 'Update Book' : 'Add Book'}</button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Display Books */}
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} (
            <button onClick={() => handleEditBook(book.id)}>Edit</button> |{' '}
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>)
          </li>
        ))}
      </ul>

      {/* Author Form */}
      {/* Similar to the book form, but for authors */}
      
      {/* Display Authors */}
      {/* Similar to the book list, but for authors */}
    </div>
  );
};

export default AdminDashboard;
