import { createSlice } from "@reduxjs/toolkit";

export const BooksReducer = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(payload);
    },
    deleteBook: (state, { payload }) => {
      state.books = state.books.filter((book) => book.id != payload);
    },
    updateBook: (state, { payload }) => {
      state.books.map((book) => {
        if (book.id === payload) {
          return {
            ...state,
            books: payload,
          };
        } else {
          return state;
        }
      });
    },
  },
});

export default BooksReducer.reducer;
export const { addBook, deleteBook, updateBook } = BooksReducer.actions;
