import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Book from "../components/Book";
import { useSelector } from "react-redux";

const Home = () => {
  const booksList = useSelector((state) => state.books);
  console.log(booksList);

  return (
    <>
      <h3>Books App</h3>
      <p>ajouter des livres a la liste de livres</p>
      <div>
        <Form />
        {booksList && booksList.length > 0 ? (
          booksList?.map((book) => <Book book={book} key={book.id} />)
        ) : (
          <p>la liste des livre est vide</p>
        )}
      </div>
    </>
  );
};
export default Home;
