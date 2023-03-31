import React, { useState } from "react";
import Form from "../components/Form";
import Book from "../components/Book";

const Home = () => {
  const booksData = window.localStorage.getItem("books");
  const [books, setBooks] = useState(booksData ? JSON.parse(booksData) : []);

  return (
    <>
      <h3>Books App</h3>
      <p>ajouter des livres a la liste de livres</p>
      <div>
        <Form books={books} setBooks={setBooks} />
        {books.length > 0 ? (
          books?.map((book) => (
            <Book books={books} setBooks={setBooks} book={book} key={book.id} />
          ))
        ) : (
          <p>la liste des livre est vide</p>
        )}
      </div>
    </>
  );
};
export default Home;
