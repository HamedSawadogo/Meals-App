import React, { useState } from "react";
import { Link } from "react-router-dom";

const BooksDetails = ({ book }) => {
  const [isShowed, setShowed] = useState(false);
  // const image = /;

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

            <ul style={{ display: "flex" }}>
              <Link
                to={book.previewLink}
                target="_blank"
                style={{ color: "orangered" }}
              >
                en savoir plus
              </Link>
              <button type="button" class="btn btn-secondary">
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
