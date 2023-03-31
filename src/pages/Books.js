import axios from "axios";
import React, { useEffect, useState } from "react";
import BooksDetails from "../components/BooksDetails";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { addBook } from "../features/books.slice";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState("hamed");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  console.log(books);
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
      .then((res) => {
        dispatch(addBook(res.data.items));
        setBooks(res.data.items);
        setLoading(false);
      });
  }, [book]);
  return (
    <div>
      <h3>Books App</h3>
      <p>rechercher un livre dans notre collection de livre</p>
      <input
        style={{ width: 300, margin: "10px auto" }}
        type="text"
        className="form-control"
        value={book}
        id=""
        placeholder="rechercher un livre"
        onChange={(e) => setBook(e.target.value)}
      />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        books.map((book) => <BooksDetails book={book} />)
      )}
    </div>
  );
};

export default Books;
