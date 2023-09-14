import React from 'react';

const BookList = ({ books, onDelete }) => {
  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <div>
              <strong>{book.title}</strong> by {book.author}
            </div>
            <button onClick={() => onDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
