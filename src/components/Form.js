import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/books.slice";

const Form = () => {
  // state
  const dispatch = useDispatch();
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  //action
  function updateLocalStorage(booksData) {
    window.localStorage.books.push(JSON.stringify(booksData));
  }
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
    dispatch(addBook(bookAded));
    updateLocalStorage(bookAded);
    setBook("");
    setAuthor("");
    setError("");
    e.target.reset();
  };

  //render
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
