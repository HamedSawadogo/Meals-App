import { configureStore } from "@reduxjs/toolkit";
import BooksReducers from "../features/books.slice";
export default configureStore({
  reducer: BooksReducers,
});
