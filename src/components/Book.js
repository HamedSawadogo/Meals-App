import React from "react";

const Book = ({ book, books, setBooks }) => {
  function updateLocalStorage(books) {
    window.localStorage.setItem("books", JSON.stringify(books));
  }
  const handleDelete = () => {
    const newBooks = books.filter((_book) => _book.id !== book.id);
    setBooks(newBooks);
    updateLocalStorage(newBooks);
  };
  return (
    <div className="livres">
      <p>
        <strong>Author: </strong>
        {book.author}
      </p>
      <p>
        <strong>Livre: </strong>
        {book.book}
      </p>
      <button
        onClick={() => handleDelete()}
        type="button"
        class="btn btn-danger"
      >
        X
      </button>
    </div>
  );
};

export default Book;
