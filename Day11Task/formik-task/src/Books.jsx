import React, { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [formValues, setFormValues] = useState({
    title: '',
    author: '',
    isbn: '',
    publicationDate: '',
  });

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
    resetForm();
  };

  const editBook = (book) => {
    const updatedBooks = books.map((b) =>
      b.id === book.id ? { ...book } : b
    );
    setBooks(updatedBooks);
    setEditingBook(null);
    resetForm();
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const resetForm = () => {
    setFormValues({
      title: '',
      author: '',
      isbn: '',
      publicationDate: '',
    });
  };

  const initialValues = editingBook || formValues;

  return (
    <div>
      <BookForm initialValues={initialValues} onSubmit={editingBook ? editBook : addBook} />
      <BookList books={books} onDelete={deleteBook} />
    </div>
  );
};

export default Books;
