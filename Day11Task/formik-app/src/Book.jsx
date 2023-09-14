import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const BookForm = () => {
  const [books, setBooks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const initialValues = {
    title: "",
    author: "",
    isbn: "",
    publicationDate: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    if (editingIndex !== null) {
      // If editingIndex is not null, update the existing book
      const updatedBooks = [...books];
      updatedBooks[editingIndex] = values;
      setBooks(updatedBooks);
      setEditingIndex(null); // Clear editing mode
    } else {
      // If editingIndex is null, add a new book
      setBooks([...books, values]);
    }
    resetForm(); // Reset the form after submission
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    // Set the form values to the book being edited
    initialValues.title = books[index].title;
    initialValues.author = books[index].author;
    initialValues.isbn = books[index].isbn;
    initialValues.publicationDate = books[index].publicationDate;
  };

  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1>Book List</h1>
      <div className="book-form">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <label htmlFor="title">Title</label>
            <Field name="title" />
            <label htmlFor="author">Author</label>
            <Field name="author" />
            <label htmlFor="isbn">ISBN</label>
            <Field name="isbn" />
            <label htmlFor="publicationDate">Publication Date</label>
            <Field name="publicationDate" type="date" />
            <button type="submit">{editingIndex !== null ? "Update" : "Add"}</button>
          </Form>
        </Formik>
      </div>
      <div className="book-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Publication Date</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.publicationDate}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookForm;
