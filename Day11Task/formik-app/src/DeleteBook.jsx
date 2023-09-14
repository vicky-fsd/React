import React from 'react';
import axios from 'axios';

function DeleteBook({ book, onDeleteBook }) {
  const handleDelete = () => {
    // Make an API call to delete the book using axios.delete()
    axios.delete(`http://localhost:4000/books/${book.id}`).then(() => {
      onDeleteBook(book.id); // Notify the parent component about the deleted book
    });
  };

  return (
    <div>
      <h2>Delete Book</h2>
      <p>Are you sure you want to delete "{book.title}"?</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default DeleteBook;
