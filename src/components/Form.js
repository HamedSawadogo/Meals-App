import React, { useState } from "react";

const Form = ({ books, setBooks }) => {
  function updateLocalStorage(booksData) {
    window.localStorage.books = JSON.stringify(booksData);
  }
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.length < 2 || book.length < 3) {
      setError("veillez enter un nom de livre ou auteur valide!");
      return;
    }
    const bookAded = {
      id: new Date().getTime(),
      author,
      book,
    };
    setBooks([...books, bookAded]);
    updateLocalStorage([...books, bookAded]);
    setBook("");
    setAuthor("");
    setError("");
    e.target.reset();
  };

  return (
    <div className="container" onSubmit={(e) => handleSubmit(e)}>
      <form>
        {error && (
          <div class="alert alert-danger m-1" role="alert">
            {error}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Author</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter le nom de l'auteur"
            autoComplete="off"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Nom du Livre</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => setBook(e.target.value)}
          />
        </div>
        <div className="form-check"></div>
        <button type="submit" className="btn btn-primary">
          enregistrer
        </button>
      </form>
    </div>
  );
};

export default Form;
