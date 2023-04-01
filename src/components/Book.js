import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../features/books.slice";

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteBook(book.id));
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
