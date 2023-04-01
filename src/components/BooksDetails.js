import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBook } from "../features/books.slice";

const BooksDetails = ({ book }) => {
  const [isShowed, setShowed] = useState(false);
  const dispatch = useDispatch();

  function updateLocalStorage(booksData) {
    window.localStorage.books.push(JSON.stringify(booksData));
  }
  const handleAdd = () => {
    const newBook = {
      id: new Date().getTime(),
      book: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
    };
    dispatch(addBook(newBook));
    updateLocalStorage(newBook);
  };

  return (
    <div className="container" key={book.volumeInfo.title}>
      <div
        class="alert alert-primary"
        role="alert"
        onClick={() => setShowed(!isShowed)}
      >
        {isShowed ? (
          <div className="container">
            <h5>{book.volumeInfo.title}</h5>
            {book.volumeInfo.imageLinks.smallThumbnail != undefined && (
              <img
                src={book.volumeInfo.imageLinks.smallThumbnail ?? ""}
                alt=""
              />
            )}
            <h4>Auteur (s)</h4>
            {book.volumeInfo.authors.map((ath) => (
              <strong>{ath}</strong>
            ))}

            <ul style={{ display: "flex" }}>
              <Link
                to={book.previewLink}
                target="_blank"
                style={{ color: "orangered" }}
              >
                en savoir plus
              </Link>
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => handleAdd()}
              >
                Ajouter aux livres
              </button>
            </ul>
            <p></p>
          </div>
        ) : (
          book.volumeInfo.title
        )}
      </div>
    </div>
  );
};

export default BooksDetails;
