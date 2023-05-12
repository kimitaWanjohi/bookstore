import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBooks, postBook, deleteBook } from "../../api";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const res = await getBooks();
  return res.data;
});

export const addBook = createAsyncThunk("books/postBook", async (book) => {
  await postBook(book);
});

export const delBook = createAsyncThunk("books/deleteBook", async (id) => {
  await deleteBook(id);
});

const initialState = {
  books: [],
  loading: "idle",
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const keys = Object.keys(action.payload);
        keys.forEach((id) => {
          state.books.push({ id, ...action.payload[id][0] });
        });
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push({
          id: action.meta.arg.item_id,
          ...action.meta.arg,
        });
      })
      .addCase(delBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.meta.arg);
      });
  },
});

export default booksSlice.reducer;
