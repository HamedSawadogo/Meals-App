import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Books from "./pages/Books";
import { useDispatch } from "react-redux";
import { addBook, setBooks } from "./features/books.slice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const booksData = window.localStorage.getItem("books");
    dispatch(addBook(booksData ? JSON.parse(booksData) : []));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
