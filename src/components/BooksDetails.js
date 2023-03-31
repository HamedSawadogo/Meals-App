import React, { useState } from "react";

const BooksDetails = ({ book }) => {
  const [isShowed, setShowed] = useState(false);

  return (
    <div className="container">
      <div
        class="alert alert-primary"
        role="alert"
        onClick={() => setShowed(!isShowed)}
      >
        {isShowed ? (
          <div className="container">
            <h5>{book.volumeInfo.title}</h5>
            <a href={book.selfLink} target="_blank">
              en savoir plus
            </a>
            <button type="button" class="btn btn-secondary">
              Ajouter aux livres
            </button>
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
